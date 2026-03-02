import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ItemCard from "../card/ItemCard";
import CakeCard from "../card/CakeCard";
import InfoCard from "../card/InfoCard";

const cakes = [
  {
    name: "Neque volutpat morbi.",
    description: "Et blandit non sit ac egestas risus non.",
    price: "$20",
  },
  {
    name: "Neque volutpat morbi.",
    description: "Et blandit non sit ac egestas risus non.",
    price: "$20",
  },
  {
    name: "Neque Haiw klafddaa.",
    description: "Et blandit non sit ac egestas risus non.",
    price: "$20",
  },
  {
    name: "Neque lorem patlaaa.",
    description: "Et blandit non sit ac egestas risus non.",
    price: "$20",
  },
  {
    name: "Neque volutpat morbi.",
    description: "Et blandit non sit ac egestas risus non.",
    price: "$20",
  },
  {
    name: "Neque volutpat morbi.",
    description: "Et blandit non sit ac egestas risus non.",
    price: "$20",
  },
];

const getCardsPerPage = () => {
  const width = window.innerWidth;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const Discover = () => {
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(cakes.length / cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = getCardsPerPage();
      setCardsPerPage(newCardsPerPage);
      setCurrentPage((prev) => {
        const newTotalPages = Math.ceil(cakes.length / newCardsPerPage);
        return prev >= newTotalPages ? newTotalPages - 1 : prev;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleCakes = cakes.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage,
  );

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-white">

      {/* Most Popular Section */}
      <div
        className="py-20 px-6 md:px-20 relative bg-white"
        style={{ padding: "40px 40px" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-4">
            <p
              className="text-gray-500 text-lg mb-2"
              style={{ padding: "10px 10px" }}
            >
              Most Popular
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              style={{ padding: "10px 10px" }}
            >
              Our Exclusive Cakes
            </h2>
          </div>

          {/* Cake Cards and Arrow */}
          <div
            className="relative" style={{ padding: "20px 20px" }}
          >
            {/* Arrow */}
            <div className="flex justify-end gap-3 mb-8 w-full" style={{padding:"10px 10px"}}>
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FaChevronLeft className="text-gray-500 w-3 h-3" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FaChevronRight className="text-gray-500 w-3 h-3" />
              </button>
            </div>

            {/* Card item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full px-8 transition-all duration-500 ease-in-out">
              {visibleCakes.map((cake, index) => (
                <div
                  key={currentPage * cardsPerPage + index}
                  className="animate-fadeSlideIn w-full flex justify-center"
                >
                  <ItemCard
                    name={cake.name}
                    description={cake.description}
                    price={cake.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ padding: "20px 20px" }}
        >
          <h2 className="text-lg font-semibold text-gray-900">Main Services</h2>
          <h1 className="text-2xl font-bold text-gray-900">
            Choose Your Favorite Favor
          </h1>
        </div>
        {/* cake icons will be here */}
        <div className="flex flex-wrap items-center justify-center gap-10" style={{ padding: "60px 60px" }}>
          <CakeCard/>
          <CakeCard/>
          <CakeCard/>
          <CakeCard/>
          <CakeCard/>
          <CakeCard/>
        </div>
      </div>

      <div>
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ padding: "20px 20px" }}
        >
          <h2 className="text-lg font-semibold text-gray-900">Our Feature</h2>
          <h1 className="text-2xl font-bold text-gray-900">Quality is Our First Priority</h1>
        </div>
        {/* dine icons will be here */}
        <div className="flex flex-wrap items-center justify-center gap-10" style={{ padding: "60px 60px" }}>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
      </div>
    </div>
  );
};

export default Discover;
