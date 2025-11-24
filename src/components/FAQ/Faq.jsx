import { getFAQ } from "../../lib/BackendContents";

const Faq = async () => {
  const faq = await getFAQ();

  const items = Object.keys(faq).map((key) => faq[key]);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border rounded-xl bg-gray-100 shadow-sm overflow-hidden transition-all"
        >
          <summary className="cursor-pointer px-5 py-4 flex justify-between items-center list-none font-medium text-gray-800">
            {item.question}
            <svg
              className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <div
            className="px-5 pb-4 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out
                         max-h-[0px] group-open:max-h-[500px] opacity-0 group-open:opacity-100"
          >
            <div
              className="text-justify px-2 md:px-0"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </details>
      ))}
    </div>
  );
};

export default Faq;
