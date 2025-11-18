import React, { memo } from "react";
import ProductData from "./ProductData";

const ProductCard = memo(function ProductCard({ title, description, explore, img }) {
  return (
    <article className="flex flex-col items-center text-center p-4 bg-white rounded-2xl ">
      <img src={img} alt={title} className="rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:shadow-[0_0_30px_rgb(255,255,255)] hover:scale-110 transition-all duration-300  h-38 grow object-contain mb-4" loading="lazy" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="text-nescafe-accent font-medium hover:underline">{explore}</button>
    </article>
  );
});

export default function Product({ products = ProductData }) {
  return (
    <section className="w-full min-h-[60vh] bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-12">What are you looking for today?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  );
}
