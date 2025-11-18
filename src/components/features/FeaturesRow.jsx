import React from "react";


const DEFAULT_FEATURES = [
  { title: ["Organic", "Process"], icon: "leaf", description: "Carefully sourced and naturally processed." },
  { title: ["Fresh", "Picking"], icon: "cup", description: "Picked at peak freshness for best flavor." },
  { title: ["Recycle", "Materials"], icon: "recycle", description: "Sustainable packaging and reuse-first approach." },
  { title: ["Composition", "Taste"], icon: "drop", description: "Balanced composition for consistent taste." },
];

function Icon({ name, className = "" }) {
  // Inline SVG icons — simple stroke-based so they inherit text color.
  const baseProps = { viewBox: "0 0 24 24", className: `w-7 h-7 ${className}`, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "leaf":
      return (
        <svg {...baseProps} aria-hidden="true" focusable="false">
          <path d="M21 15c0-6-8-10-10-10" />
          <path d="M3 21c6 0 10-8 10-10" />
          <path d="M7 13c1.8-1.2 3.2-3.6 4-6" />
        </svg>
      );
    case "cup":
      return (
        <svg {...baseProps} aria-hidden="true" focusable="false">
          <path d="M3 7h14v6a6 6 0 01-6 6H9a6 6 0 01-6-6V7z" />
          <path d="M21 9v2a3 3 0 01-3 3" />
        </svg>
      );
    case "recycle":
      return (
        <svg {...baseProps} aria-hidden="true" focusable="false">
          <path d="M21 12v6a1 1 0 01-1 1h-6" />
          <path d="M3 12v-6a1 1 0 011-1h6" />
          <path d="M8 17l3-3-3-3" />
          <path d="M16 7l-3 3 3 3" />
        </svg>
      );
    case "drop":
      return (
        <svg {...baseProps} aria-hidden="true" focusable="false">
          <path d="M12 2s6 6 6 10a6 6 0 11-12 0c0-4 6-10 6-10z" />
          <path d="M12 8v4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FeaturesRow({ features = DEFAULT_FEATURES, className = "" }) {
  return (
    <section
      className={`w-full ${className}`}
      aria-label="Key features"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title for SEO (optional) */}
        <header className="sr-only">
          <h2>Why choose us</h2>
        </header>

        {/* grid: 1 col on xs, 2 on sm, 4 on md */}
        <ul className="grid grid-cols-2  md:grid-cols-4  md:gap-8 py-8" role="list">
          {features.map((f, idx) => (
            <li
              key={idx}
              className="group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              {/* Make each feature card keyboard focusable for screen-reader + keyboard users */}
              <article
                tabIndex="0"
                className="flex items-start gap-2 md:p-1 p-2 rounded-lg    transition-shadow duration-200 ease-out ring-1 ring-transparent "
                aria-labelledby={`feature-${idx}-title`}
              >
                {/* Icon container */}
                <div
                  className="shrink-0 w-14 h-14 rounded-full bg-amber-50/95 ring-1 ring-amber-100 shadow-[0_8px_24px_rgba(16,24,40,0.06)] flex items-center justify-center group-hover:scale-105 transition-transform duration-250"
                  role="img"
                  aria-hidden="false"
                  aria-label={`${Array.isArray(f.title) ? f.title.join(' ') : f.title} icon`}
                >
                  <span className="text-teal-700">
                    <Icon name={f.icon} />
                  </span>
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <h3
                    id={`feature-${idx}-title`}
                    className="text-teal-700 font-semibold text-sm md:text-base tracking-wide leading-tight"
                    itemProp="name"
                  >
                    {/* Two-line title — stack on smaller widths, show inline spacing on larger */}
                    <span className="block">{f.title[0]}</span>
                    <span className="block text-teal-700/90 font-medium">{f.title[1]}</span>
                  </h3>

                  {/* description helps SEO and screen-readers, displayed subtly */}
                  {f.description && (
                    <p className="mt-1  text-xs md:text-sm line-clamp-2" itemProp="description">
                      {f.description}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
