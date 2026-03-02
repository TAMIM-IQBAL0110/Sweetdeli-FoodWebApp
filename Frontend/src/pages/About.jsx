import React, { useState, useEffect, useCallback } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomerReview from "../card/CustomerReview";

const reviews = [
  { name: "Cha Ji-Hun", description: "Amet pharetra interdum.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor." },
  { name: "Kim Soo-Ah", description: "Sed do eiusmod tempor.", text: "Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi. Vivamus egestas porttitor interdum." },
  { name: "Lee Min-Ho", description: "Consectetur adipiscing.", text: "Sapien est felis sagittis viverra nulla mattis scelerisque. Eget cras integer aliquam posuere vivamus." },
  { name: "Park Ji-Yeon", description: "Aliquam scelerisque.", text: "Lorem Vivamus egestas porttitor hendrerit vitae at nulla varius. Proin ipsum purus augue in morbi sed." },
  { name: "Yoon Se-Ri", description: "Viverra nulla mattis.", text: "Eget cras integer lorem ipsum dolor sit amet. Consectetur adipiscing elit aliquam scelerisque posuere." },
  // { name: "Jung Hae-In", description: "Egestas porttitor.", text: "Lorem Mattis scelerisque sapien est felis sagittis viverra. Nulla varius proin ipsum purus augue in morbi." },
];

// Returns number of cards based on screen width: 3 (laptop), 2 (tablet), 1 (mobile)
const getCardsPerPage = () => {
  const width = window.innerWidth;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const About = () => {
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = getCardsPerPage();
      setCardsPerPage(newCardsPerPage);
      setCurrentPage((prev) => {
        const newTotalPages = Math.ceil(reviews.length / newCardsPerPage);
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

  const visibleReviews = reviews.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage,
  );

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-white">

      {/* Why Choose Us Section */}
      <div className="py-24 bg-white w-full">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Section Header */}
          <div
            className="flex flex-col items-center justify-center text-center mb-16 gap-3"
            style={{ padding: "50px 50px" }}
          >
            <p className="text-sm text-gray-800 tracking-wide uppercase mb-3">
              The reasons
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1D37]">
              Why Choose Us?
            </h2>
          </div>

          {/* Video Placeholder */}
          <div
            className="w-[80%] aspect-video md:aspect-[28/9] flex items-center justify-center relative shadow-sm rounded-xl"
            style={{ backgroundColor: "#E8EBEF",padding:"20px 20px" }}
          >
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 group">
              <FaPlay className="text-gray-800 w-6 h-6 ml-1 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="py-20 px-6 md:px-20 relative bg-white"
        style={{ padding: "40px 40px" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12" style={{padding:"30px 30px"}}>
            <p className="text-md text-gray-900 tracking-wide mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What's our customer says?
            </h2>
          </div>

          {/* Cards & Navigation */}
          <div className="relative flex items-center" style = {{padding:"20px 20px"}}>
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 md:-left-10 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FaChevronLeft className="text-gray-400 w-3 h-3" />
            </button>

            {/* Review Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8 transition-all duration-500 ease-in-out">
              {visibleReviews.map((review, index) => (
                <div
                  key={currentPage * cardsPerPage + index}
                  className="animate-fadeSlideIn"
                >
                  <CustomerReview
                    name={review.name}
                    description={review.description}
                    text={review.text}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute -right-4 md:-right-10 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FaChevronRight className="text-gray-400 w-3 h-3" />
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-2 mt-10" style={{padding:"20px 20px"}}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
                  i === currentPage ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
