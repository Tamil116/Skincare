import React, { useState } from "react";
import product1 from "./assets/product1.png";
import model1 from "./assets/model1.png";
import cream1 from "./assets/cream.png";
import pro1 from "./assets/pro1.png";
import pro2 from "./assets/pro2.png";
import pro3 from "./assets/pro3.png";
import crom from "./assets/crom.png";
import { Button } from "./Components/Button.jsx";

const SkincarePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-ivory text-gray-900 font-sans max-w-7xl mx-auto px-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center py-6 border-b gap-4">
        <h1 className="font-bold text-xl">SKINCARE</h1>
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-center">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Service</a>
          <a href="#" className="hover:underline">Guide</a>
        </nav>
        <div className="flex items-center space-x-4 text-sm">
          <Button>Cart (0)</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-12">
        <p className="text-sm uppercase tracking-wide">Transform your skincare routine</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">GLOW NATURALLY</h2>
          <img src={cream1} alt="Featured product" className="w-20 md:ml-6" />
        </div>
        <div className="mt-8">
          <img src={product1} alt="Model with product" className="mx-auto w-72 rounded-md" />
          <p className="mt-2 italic">With a glow that’s pure & powerful.</p>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 py-12">
        <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-center">
          Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow.
        </p>
      </section>

      {/* Benefits */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16 items-center max-w-6xl mx-auto bg-ivory text-gray-800">
        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-semibold leading-snug text-center lg:text-left">YOUR SKIN DESERVES <br /> THE BEST CARE.</h3>
          <p className="text-gray-600 text-center lg:text-left">
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love, backed by science, and inspired by nature.
          </p>

          {["Bio Ingredients", "Everything Natural", "All Handmade"].map((title, idx) => (
            <div className="flex items-start gap-4" key={idx}>
              <span className="text-3xl font-semibold text-gray-300 drop-shadow-md">0{idx + 1}</span>
              <div>
                <h4 className="text-xl font-medium mb-1">{title}</h4>
                <p className="text-gray-600 text-sm">
                  {title === "Bio Ingredients"
                    ? "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."
                    : title === "Everything Natural"
                    ? "Pure ingredients for pure skin. The perfect solution for your skincare needs."
                    : "Made with love and care. Just for you. Give your skin the tender loving care it deserves."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img src={model1} alt="Model with cream" className="rounded-md w-full shadow-md" />
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-6">
        <h3 className="text-2xl font-semibold text-center mb-10">
          Skincare That Brings Out Your Natural Radiance
        </h3>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <Button className="text-sm px-6 py-2 border rounded">Best Selling Products</Button>
          <Button className="text-sm px-6 py-2 border rounded">→</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[pro1, pro2, pro3].map((img, i) => (
            <div key={i} className="bg-white p-6 rounded shadow-md text-center">
              <img src={img} alt={`Product ${i + 1}`} className="w-full rounded h-auto" />
              <p className="mt-4 text-base font-medium">{["ACNE FORMULA", "NATURAL BALANCE", "HYDRATE & NOURISH"][i]}</p>
              <Button className="mt-6 px-6 py-2 bg-black text-white rounded">Shop Now</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Mid Banner */}
      <section className="text-center py-20 px-6 bg-green-50">
        <div
          className="w-full max-w-7xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${crom})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Feel Beautiful Inside and Out<br />with Every Product.
            </h3>
            <Button className="mt-4 px-6 py-2 bg-black text-white rounded text-sm sm:text-base">Shop Now</Button>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24 items-start max-w-6xl mx-auto">
        <div>
          <img src={pro3} alt="Product" className="rounded w-full" />
        </div>
        <div className="mt-8 lg:mt-0">
          <h3 className="text-3xl font-bold mb-6 leading-snug text-center lg:text-left">Answers to Your Skincare Questions, All in One Place.</h3>
          {["Are your products safe for sensitive skin?", "Are your products cruelty-free?", "What’s your return policy?", "Do you offer subscriptions?", "How is this better than my current routine?"].map((q, idx) => (
            <div key={idx} className="mb-4">
              <Button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left font-medium border-b pb-2"
              >
                {q}
              </Button>
              {openIndex === idx && (
                <div className="text-sm text-gray-600 py-2">
                  This is a placeholder answer for "{q}".
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <h4 className="text-xl font-semibold mb-4">Join The Skincare Community Now.</h4>
        <p className="text-sm mb-2">Get in Touch <a href="mailto:contact@skincare.com" className="underline">contact@skincare.com</a></p>
        <div className="mt-4 text-xs space-x-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default SkincarePage;
