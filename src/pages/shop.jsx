import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/productprovider";

export default function ShopPage() {
  const { products } = useProducts();
  const { categorySlug } = useParams();

  const categories = ["All", "Tables", "Lamps", "Chairs", "Shelves", "Lighting", "Mirrors", "Lounges"];
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (categorySlug) {
      const matched = categories.find(
        (c) => c.toLowerCase() === categorySlug.toLowerCase()
      );
      setFilter(matched || "All");
    }
  }, [categorySlug]);

  const filtered = filter === "All"
    ? products
    : products.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto space-y-8 bg-red-50">
      <h1 className="text-4xl font-bold">All Products</h1>

      <div className="flex flex-wrap gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              filter === cat ? "bg-stone-800 text-white" : "bg-stone-100"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i} className="bg-white shadow rounded overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="font-semibold">{p.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sizes:</span>
                {["small", "medium", "large"].map(s => (
                  <span key={s} className="px-2 py-1 border rounded text-xs">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-lg font-bold">${p.price}</p>
              <button className="mt-2 w-full bg-stone-800 text-white py-2 rounded">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
