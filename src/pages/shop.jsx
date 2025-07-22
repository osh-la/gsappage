import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/productprovider";
import { useCart } from "../context/cartProvider";
import toast from "react-hot-toast";

export default function ShopPage() {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const { categorySlug } = useParams();

  const categories = ["All", "HOMES", "OFFICES", "LOUNGES", "SPA'S", "EVENTS"];
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (categorySlug) {
      const matched = categories.find(
        (c) => c.toLowerCase() === categorySlug.toLowerCase()
      );
      setFilter(matched || "All");
    }
  }, [categorySlug]);

  const filtered =
    filter === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="px-4 py-12 space-y-8 bg-red-50">
      <h1 className="text-4xl font-bold">All Products</h1>

      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i} className="shadow rounded overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="w-100 h-100 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="font-semibold">{p.name}</h2>
        
              <p className="text-lg font-bold">${p.price}</p>
              <button
                onClick={() => {
                  addToCart(p);
                  toast.success(`${p.name} added to cart`);
                }}
                className="mt-2 bg-stone-800 text-white p-2 rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
