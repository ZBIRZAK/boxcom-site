"use client";

import Link from "next/link";
import { useMemo } from "react";
import { urls } from "../../lib/urls";

function toText(value) {
  return (value || "")
    .toString()
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function getMetricsFromCodeBlocks(html = "") {
  if (!html || !html.includes("wp-block-code")) return [];

  const matches = [
    ...html.matchAll(
      /<pre[^>]*class="[^"]*wp-block-code[^"]*"[^>]*>[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>[\s\S]*?<\/pre>/gi
    ),
  ];

  return matches
    .map((match) => toText(match[1] || ""))
    .filter(Boolean)
    .slice(0, 2)
    .map((text) => {
      const metricMatch = text.match(/^([^\s]+)\s+(.+)$/);
      if (!metricMatch) return { value: text, label: "" };
      return {
        value: metricMatch[1],
        label: metricMatch[2],
      };
    });
}

function getMetrics(post = {}, acf = {}) {
  const codeBlockMetrics = getMetricsFromCodeBlocks(post.content?.rendered || "");
  if (codeBlockMetrics.length > 0) return codeBlockMetrics;

  if (Array.isArray(acf.kpis) && acf.kpis.length > 0) {
    return acf.kpis
      .map((item) => {
        const value = toText(item.value || item.number || item.metric || "");
        const label = toText(item.label || item.title || "");
        return { value, label };
      })
      .filter((item) => item.value)
      .slice(0, 2);
  }

  const fallbackMetrics = [
    {
      value: toText(acf.client || ""),
      label: "Client",
    },
    {
      value: toText(acf.what_we_did || ""),
      label: "Scope",
    },
  ].filter((item) => item.value);

  return fallbackMetrics.slice(0, 2);
}

function pickCardTitle(post, acf = {}) {
  const explicitTitle = toText(
    acf.card_title || acf.project_title || acf.title || ""
  );
  if (explicitTitle) return explicitTitle;

  const wpTitle = toText(post.title?.rendered || "");
  if (!wpTitle) return "Project";

  // Keep a compact card headline when WP title contains long subtitle after ":".
  const shortTitle = wpTitle.split(":")[0].trim();
  return shortTitle || wpTitle;
}

const CaseStudiesCarousel = ({ posts = [], tagNameMap = {} }) => {
  const cards = useMemo(() => {
    return posts.map((post) => {
      const acf = post.acf || {};
      const firstTagId = (post.portfolio_tag || [])[0];
      const firstTagName = toText(tagNameMap[firstTagId] || "");
      return {
        id: post.id,
        slug: post.slug,
        eyebrow: firstTagName || toText(acf.industry || acf.client || "Case Study"),
        title: firstTagName || pickCardTitle(post, acf),
        subtitle: toText(post.title?.rendered || post.excerpt?.rendered || ""),
        metrics: getMetrics(post, acf),
      };
    });
  }, [posts, tagNameMap]);

  if (!cards.length) return null;

  return (
    <section className="w-full !h-auto flex flex-col items-center bg-white py-12 px-4 md:px-8">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.slice(0, 4).map((card) => (
            <article
              key={card.id}
              className="rounded-[28px] bg-[#181818] p-6 text-white text-center flex flex-col items-center"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ff0062]">
                {card.eyebrow}
              </p>

              <h3 className="mt-3 text-4xl font-black uppercase leading-[0.95] md:text-5xl">
                {card.title}
              </h3>

              {card.subtitle ? (
                <p className="mt-3 min-h-[40px] text-xs text-[#d4d4d4]">{card.subtitle}</p>
              ) : (
                <div className="mt-3 min-h-[40px]" />
              )}

              <div className="mt-5 grid grid-cols-2 gap-4">
                {card.metrics.map((metric, index) => (
                  <div key={`${card.id}-${index}`} className="text-center">
                    <p className="text-4xl font-black leading-none text-[#ff0062]">{metric.value}</p>
                    <p className="mt-1 text-[11px] leading-snug text-[#d4d4d4]">{metric.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href={urls.projectPost.replace(":slug", card.slug)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ff0062] px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#ff0062] transition-colors hover:bg-[#ff0062] hover:text-white"
              >
                <span>Read case study</span>
                <span aria-hidden="true" className="text-sm leading-none">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
