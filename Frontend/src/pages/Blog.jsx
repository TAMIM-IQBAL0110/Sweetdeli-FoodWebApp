import React, { useRef, useState } from 'react';
import BlogCard from '../card/BlogCard';

const Blog = () => {
  const slides = [1, 2, 3, 4, 5];
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Dragging State
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  // Mouse Drag Logic
  const startDragging = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    // Disable smooth snapping while dragging for better performance
    scrollRef.current.style.scrollSnapType = 'none';
    scrollRef.current.style.cursor = 'grabbing';
  };

  const stopDragging = () => {
    isDragging.current = false;
    scrollRef.current.style.scrollSnapType = 'x mandatory';
    scrollRef.current.style.cursor = 'grab';
  };

  const onDragging = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiply for speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="relative w-full group">
      
      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDragging}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full snap-center pointer-events-none">
            {/* pointer-events-none prevents images/links inside the card from breaking the drag */}
            <div className="pointer-events-auto">
                <BlogCard />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 pointer-events-none">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-black scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;