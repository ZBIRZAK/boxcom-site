import { load } from "cheerio";

function toText(value) {
  return (value || "")
    .toString()
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function parseMetricLine(line) {
  const text = toText(line);
  if (!text) return null;

  const match = text.match(/^([+\-]?\d[\d.,]*%?|\d[\d.,]*\+?)\s+(.+)$/);
  if (!match) {
    return { value: text, label: "" };
  }

  return {
    value: match[1],
    label: match[2],
  };
}

function collectSectionText(node, $) {
  const blocks = [];
  let cursor = node.next();

  while (cursor.length) {
    if (/^h[1-6]$/i.test(cursor[0].tagName || "")) break;
    const text = toText(cursor.text());
    if (text) blocks.push(text);
    cursor = cursor.next();
  }

  return blocks;
}

function parseWpColumn(column, $) {
  const firstStrong = toText(column.find("strong").first().text());
  const fullText = toText(column.text());

  if (!fullText) return [];
  if (!firstStrong) return [fullText];

  const body = fullText
    .replace(firstStrong, "")
    .replace(/^[-:\s]+/, "")
    .trim();

  return body ? [firstStrong, body] : [firstStrong];
}

function parseProjectContent(project) {
  const html = project?.content?.rendered || "";
  const $ = load(html);

  const headings = $("h1, h2, h3")
    .map((_, el) => toText($(el).text()))
    .get()
    .filter(Boolean);

  const paragraphs = $("p")
    .map((_, el) => toText($(el).text()))
    .get()
    .filter(Boolean);

  const metricLines = $("pre.wp-block-code code")
    .map((_, el) => toText($(el).text()))
    .get()
    .filter(Boolean);

  const metrics = metricLines
    .map((line) => parseMetricLine(line))
    .filter(Boolean)
    .slice(0, 4);

  const challengeHeading = $("h1, h2, h3").filter((_, el) =>
    /challenge|problem/i.test(toText($(el).text()))
  ).first();

  const solutionHeading = $("h1, h2, h3").filter((_, el) =>
    /what we did|solution|approach|implementation/i.test(toText($(el).text()))
  ).first();

  const firstColumnsBlock = $("div.wp-block-columns").first();
  const wpColumns = firstColumnsBlock.find("div.wp-block-column");
  const hasTwoWpColumns = wpColumns.length >= 2;

  const challengeFromColumns = hasTwoWpColumns
    ? parseWpColumn($(wpColumns[0]), $)
    : [];
  const solutionFromColumns = hasTwoWpColumns
    ? parseWpColumn($(wpColumns[1]), $)
    : [];

  const challengeSection = challengeFromColumns.length
    ? {
        title: "The Challenge",
        lines: challengeFromColumns,
      }
    : challengeHeading.length
    ? {
        title: toText(challengeHeading.text()),
        lines: collectSectionText(challengeHeading, $),
      }
    : {
        title: "The Challenge",
        lines: paragraphs.slice(0, 2),
      };

  const solutionSection = solutionFromColumns.length
    ? {
        title: "What We Did",
        lines: solutionFromColumns,
      }
    : solutionHeading.length
    ? {
        title: toText(solutionHeading.text()),
        lines: collectSectionText(solutionHeading, $),
      }
    : {
        title: "What We Did",
        lines: paragraphs.slice(2, 4),
      };

  const titleText = toText(project?.title?.rendered || "");
  const titleAfterColon = titleText.includes(":")
    ? titleText.split(":").slice(1).join(":").trim()
    : "";

  const heroHeading =
    headings.find((h) => /^how\s/i.test(h) || h.includes("%")) ||
    titleAfterColon ||
    headings[0] ||
    titleText ||
    "Case Study";

  const heroIntro =
    paragraphs.find((p) => p.length > 90) ||
    paragraphs[0] ||
    "";

  const quoteGroup = $("div.wp-block-group").first();
  const groupText = toText(quoteGroup.text());
  const groupParagraphs = quoteGroup
    .find("p")
    .map((_, el) => toText($(el).text()))
    .get()
    .filter(Boolean);

  let quoteText = "";
  let quoteAuthor = "";

  if (groupParagraphs.length >= 2) {
    quoteText = groupParagraphs[0];
    quoteAuthor = groupParagraphs[1];
  } else if (groupParagraphs.length === 1) {
    quoteText = groupParagraphs[0];
  } else if (groupText) {
    quoteText = groupText;
  }

  // Fallback only if author is not provided in a dedicated paragraph.
  if (!quoteAuthor && quoteText.includes(" — ")) {
    const parts = quoteText.split(" — ");
    quoteText = parts.slice(0, -1).join(" — ").trim();
    quoteAuthor = parts[parts.length - 1].trim();
  }

  quoteText = quoteText
    .replace(/^["“”]+/, "")
    .replace(/["“”]+$/, "")
    .trim();

  quoteAuthor = quoteAuthor
    .replace(/^[-—]\s*/, "")
    .trim();

  const cleanedRoot = load(`<div id="project-content-root">${html}</div>`);
  const root = cleanedRoot("#project-content-root");

  root.find("pre.wp-block-code").remove();
  root.find("div.wp-block-columns").first().remove();
  root.find("blockquote").remove();
  if (groupText) {
    root
      .find("div.wp-block-group")
      .filter((_, el) => toText(cleanedRoot(el).text()) === groupText)
      .first()
      .remove();
  }

  root
    .find("h1, h2, h3")
    .filter((_, el) =>
      /executive summary/i.test(toText(cleanedRoot(el).text()))
    )
    .first()
    .remove();

  root
    .find("p")
    .filter((_, el) =>
      /industry:|service type:|key results:/i.test(
        toText(cleanedRoot(el).text())
      )
    )
    .first()
    .remove();

  root
    .find("p")
    .filter((_, el) => toText(cleanedRoot(el).text()) === heroIntro)
    .first()
    .remove();

  const remainingHtml = root.html() || "";

  return {
    heading: heroHeading,
    intro: heroIntro,
    metrics,
    challengeSection,
    solutionSection,
    quoteText,
    quoteAuthor,
    remainingHtml,
  };
}

const Project = ({ project, tagNames = [] }) => {
  const parsed = parseProjectContent(project);
  const mainTitle =
    tagNames[0] || toText(project?.title?.rendered).split(":")[0] || "Project";
  const subtitlePieces = [tagNames[1], toText(project?.acf?.what_we_did)].filter(Boolean);

  return (
    <section className="w-full !h-auto bg-[#ececec] pt-[120px] pb-[90px] px-4 md:px-8">
      <div className="mx-auto w-full max-w-[1160px]">
        <div className="text-center">
          <h1
            className="text-5xl md:text-8xl font-black uppercase text-[#161616] leading-[0.95]"
            style={{ fontFamily: 'Impact, "Anton", sans-serif' }}
          >
            {mainTitle}
          </h1>
          <div className="mx-auto mt-2 w-[190px] md:w-[230px] h-[18px] md:h-[22px] overflow-hidden">
            <img
              src="/images/line.svg"
              alt=""
              aria-hidden="true"
              className="block w-full h-full object-cover object-center opacity-95"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(7464%) hue-rotate(335deg) brightness(114%) contrast(101%)",
              }}
            />
          </div>

          {subtitlePieces.length > 0 && (
            <p className="mt-6 text-sm md:text-base text-[#2f2f2f]">
              {subtitlePieces.join(" - ")}
            </p>
          )}

          <h2 className="mt-6 text-[34px] leading-tight md:text-[52px] md:leading-[1.05] font-extrabold text-[#1b1b1b]">
            {parsed.heading}
          </h2>
          {parsed.intro && (
            <p className="mt-4 mx-auto max-w-[930px] text-base md:text-xl text-[#292929] leading-[1.45]">
              {parsed.intro}
            </p>
          )}
        </div>

        {parsed.metrics.length > 0 && (
          <div
            className="mt-16 mx-auto grid gap-x-6 gap-y-10 justify-center"
            style={{
              gridTemplateColumns: `repeat(${Math.min(
                parsed.metrics.length,
                4
              )}, minmax(160px, 1fr))`,
              width: "fit-content",
            }}
          >
            {parsed.metrics.map((metric, index) => (
              <div key={`${project.id}-metric-${index}`} className="text-center">
                <p className="text-6xl md:text-7xl font-black text-[#ff0062] leading-none">
                  {metric.value}
                </p>
                {metric.label && (
                  <p className="mt-2 text-sm md:text-base text-[#3d3d3d] leading-[1.2]">
                    {metric.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-9">
          <article className="rounded-[30px] bg-[#ff0062] text-white p-8 md:p-10 shadow-[0_10px_22px_rgba(0,0,0,0.08)]">
            <p className="text-sm md:text-base font-semibold opacity-90">{parsed.challengeSection.title}</p>
            {parsed.challengeSection.lines[0] && (
              <h3 className="mt-3 text-2xl md:text-[40px] font-semibold leading-[1.05]">
                {parsed.challengeSection.lines[0]}
              </h3>
            )}
            {parsed.challengeSection.lines.slice(1).map((line, i) => (
              <p key={`challenge-${i}`} className="mt-4 text-base md:text-lg leading-[1.5]">
                {line}
              </p>
            ))}
          </article>

          <article className="rounded-[30px] bg-white text-[#1a1a1a] p-8 md:p-10 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
            <p className="text-sm md:text-base font-semibold text-[#505050]">{parsed.solutionSection.title}</p>
            {parsed.solutionSection.lines[0] && (
              <h3 className="mt-3 text-2xl md:text-[40px] font-semibold leading-[1.05]">
                {parsed.solutionSection.lines[0]}
              </h3>
            )}
            {parsed.solutionSection.lines.slice(1).map((line, i) => (
              <p key={`solution-${i}`} className="mt-4 text-base md:text-lg leading-[1.5] text-[#2f2f2f]">
                {line}
              </p>
            ))}
          </article>
        </div>

        {parsed.quoteText && (
          <blockquote className="mt-12 text-center max-w-[980px] mx-auto">
            <p className="text-2xl md:text-5xl text-[#ff0062] leading-none">“</p>
            <p className="text-lg md:text-2xl italic text-[#222] leading-[1.4] -mt-2">
              {parsed.quoteText}
            </p>
            {parsed.quoteAuthor && (
              <p className="mt-2 text-sm md:text-sm italic text-[#666]">
                — {parsed.quoteAuthor}
              </p>
            )}
            <p className="text-2xl md:text-5xl text-[#ff0062] leading-none mt-1">”</p>
          </blockquote>
        )}

        <div className="mt-16 rounded-[26px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
          <div className="px-6 py-8 md:px-12 md:py-12 text-[#1d1d1d] [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-extrabold [&_h1]:mt-8 [&_h1]:mb-5 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-extrabold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-5 [&_p]:leading-[1.6] [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2">
            <div dangerouslySetInnerHTML={{ __html: parsed.remainingHtml }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
