import React from "react";
import banner from "../../assets/2nd-page.png";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto px-4 py-8 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 md gap-4 items-center">
          <div className="relative">
            <picture>
              <img
                src={banner}
                alt="Bags of freshly roasted coffee beans with warm wooden background — Vistafe"
                className="w-auto h-auto rounded-md object-cover "
                loading="lazy"
                width="1200"
                height="800"
              />
            </picture>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-display mb-4">
              Vistafe — Specialty Coffee, roasted with care
            </h1>
            <p className="text-base md:text-lg text-primary2 mb-6">
              Hand-selected beans, artisanal roasting and curated blends. Book a tasting or explore our roasts.
            </p>
            <a href="#/services" className="inline-block rounded-full px-5 py-2 bg-amber-700 text-white font-semibold shadow">
              Explore Our Roasts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}




