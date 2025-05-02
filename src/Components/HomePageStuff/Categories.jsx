import React, { useRef, useEffect, useState } from "react";
import { categories } from "../../assets/assets";
import "./Categories.css";


const Categories = ({ category, setCategory }) => {
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Handle scroll visibility based on scroll position
  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  // Setup scroll event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      // Check initial state
      handleScroll();
      
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  /**
   * Scrolls the category slider by the specified offset
   * @param {number} offset - The horizontal scroll offset (positive or negative)
   */
  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ 
        left: offset, 
        behavior: "smooth" 
      });
    }
  };

  /**
   * Toggles category selection state
   * @param {string} selectedCategory - The category being selected
   */
  const handleCategorySelect = (selectedCategory) => {
    setCategory((prev) => prev === selectedCategory ? "All" : selectedCategory);
  };

  return (
    <div className="categories-container container my-5 position-relative" aria-label="Food categories">
      {/* Left Navigation Arrow */}
      {showLeftArrow && (
        <button
          className="categories-nav-button btn position-absolute top-50 start-0 translate-middle-y z-1"
          aria-label="Scroll categories left"
          onClick={() => scroll(-300)}
          type="button"
        >
          <span aria-hidden="true" className="categories-nav-icon">‹</span>
        </button>
      )}

      {/* Category Slider */}
      <div
        ref={sliderRef}
        className="categories-slider d-flex overflow-auto pb-3 px-5 gap-4 hide-scrollbar"
        role="listbox"
        aria-orientation="horizontal"
      >
        {categories.map((item, index) => {
          const isSelected = item.category === category;
          return (
            <div
              key={index}
              className="category-item text-center flex-shrink-0"
              style={{ width: "140px" }}
            >
              <div
                className={`category-icon-container bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 mt-2 shadow-sm text-center ${
                  isSelected ? "category-active" : ""
                }`}
                onClick={() => handleCategorySelect(item.category)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCategorySelect(item.category);
                  }
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={0}
                aria-label={`Category: ${item.category}`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="category-icon rounded-circle"
                  aria-hidden="true"
                />
              </div>
              <h6 className="category-title text-capitalize">{item.category}</h6>
            </div>
          );
        })}
      </div>

      {/* Right Navigation Arrow */}
      {showRightArrow && (
        <button
          className="categories-nav-button btn position-absolute top-50 end-0 translate-middle-y z-1"
          aria-label="Scroll categories right"
          onClick={() => scroll(300)}
          type="button"
        >
          <span aria-hidden="true" className="categories-nav-icon">›</span>
        </button>
      )}
    </div>
  );
};



export default Categories;