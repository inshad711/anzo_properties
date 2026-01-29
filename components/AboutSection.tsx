"use client";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Subtitle / Small Heading */}
        <h3 className="text-xl md:text-2xl font-medium tracking-tight">
          Discover the Anzo Experience
        </h3>

        {/* Main Description */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed ">
            {" "}
            At
            <span className="font-medium text-white uppercase tracking-wider">
              {" "}
              Anzo Properties
            </span>
            , our story began as investors in Dubai’s thriving real estate
            market a journey built on capital growth, high-end returns, trust,
            and lasting relationships. Today, that same investor insight drives
            everything we do, helping clients expand their portfolios with
            precision and confidence.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed ">
            Our firsthand experience as buyers gives us an intimate
            understanding of what investors truly seek value, transparency, and
            opportunity. We don’t just connect clients with properties; we guide
            them toward the city’s most rewarding investments in an
            ever-evolving skyline of innovation and promise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
