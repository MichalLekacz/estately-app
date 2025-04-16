"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const properties = {
  houses: [
    {
      id: 1,
      title: "Palm Harbor",
      price: "$3,440",
      location: "2699 Green Valley, Highland Lake, FL",
      image: "/house1.png",
      tag: "HOUSE",
    },
    {
      id: 2,
      title: "St. Crystal",
      price: "$6,550",
      location: "210 US Highway, Highland Lake, FL",
      image: "/house2.png",
      tag: "HOUSE",
    },
    {
      id: 3,
      title: "Faulkner Ave",
      price: "$4,950",
      location: "909 Woodland St, Michigan, IN",
      image: "/house3.png",
      tag: "HOUSE",
    },
  ],
  apartments: [
    {
      id: 4,
      title: "Tarpon Bay",
      price: "$2,140",
      location: "103 Lake Shores, Michigan, IN",
      image: "/apt1.png",
      tag: "APARTMENTS",
    },
    {
      id: 5,
      title: "Cove Red",
      price: "$1,450",
      location: "243 Curlew Road, Palm Harbor, TX",
      image: "/apt2.png",
      tag: "APARTMENTS",
    },
    {
      id: 6,
      title: "Beverly Springfield",
      price: "$3,850",
      location: "2821 Lake Sevilla, Palm Harbor, TX",
      image: "/apt3.png",
      tag: "APARTMENTS",
    },
  ],
};

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState<"houses" | "apartments">("houses");
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative z-10 w-full bg-white px-4 md:px-8 lg:px-16 py-16">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-10"
      >
        <div className="flex bg-[#f7f6ff] p-1 rounded-xl gap-1 shadow-sm">
          {["houses", "apartments"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "houses" | "apartments")}
                className={clsx(
                  "px-5 py-2 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40",
                  isActive
                    ? "bg-white text-[var(--color-accent)] shadow ring-1 ring-[var(--color-accent)]"
                    : "text-gray-500 hover:text-[var(--color-accent)] hover:bg-white"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          We make it easy for houses and apartments.
        </h2>
        <p className="text-gray-600 text-sm">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? You’ll save a
          bunch of money and time with our services.
        </p>
      </motion.div>

      {/* Slider on mobile, grid on larger screens */}
      <div className="relative z-10 w-full">
        <div className="overflow-x-auto px-4 sm:px-0 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-max sm:w-auto"
            >
              {properties[activeTab].map((property) => (
                <div
                  key={property.id}
                  className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100 min-w-[300px] sm:min-w-0"
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-48">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover w-full h-full rounded-t-2xl"
                    />
                  </div>

                  {/* BADGE */}
                  <div className="relative -mt-4 px-5 overflow-visible z-10">
                    <div className="absolute -left-3 top-0 inline-flex items-center gap-2 pl-3 pr-3 py-1 bg-[var(--color-accent)] text-white text-xs font-semibold rounded-md shadow-md z-20">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="leading-none">{property.tag}</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xl font-semibold text-[var(--color-accent)] tracking-tight leading-none">
                        {property.price}
                        <span className="text-sm text-gray-500 font-normal">
                          {" "}
                          /month
                        </span>
                      </p>
                      <button
                        onClick={() => toggleLike(property.id)}
                        aria-pressed={likedIds.includes(property.id)}
                        className={clsx(
                          "group size-9 flex items-center justify-center rounded-full border transition-all",
                          likedIds.includes(property.id)
                            ? "bg-[var(--color-accent)] text-white border-transparent"
                            : "border-gray-200 text-[var(--color-accent)] hover:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 active:bg-[var(--color-accent)] active:text-white"
                        )}
                      >
                        <Heart className="size-4 stroke-[2px] transition-all" />
                      </button>
                    </div>
                    <p className="text-base font-semibold text-black">
                      {property.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {property.location}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
