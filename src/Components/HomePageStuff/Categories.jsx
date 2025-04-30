import React, { useRef } from "react";
import { categories } from "../../assets/assets";
import "./Categories.css";

const Categories = ({ category, setCategory }) => {
  const sliderRef = useRef();

  const scroll = (offset) => {
    sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="container my-5 position-relative">
      <h2 className="text-center mb-4 fw-bold">Explore Categories</h2>

      {/* Left Arrow */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-1"
        style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
        onClick={() => scroll(-200)}
      >
        ‹
      </button>

      {/* Category Slider */}
      <div
        ref={sliderRef}
        className="d-flex overflow-auto pb-3 px-5 gap-4 hide-scrollbar"
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="text-center flex-shrink-0"
            style={{ width: "140px", cursor: "pointer" }}
          >
            <div
              className={`bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 mt-2 shadow-sm text-center ${
                item.category === category ? "active" : ""
              }`}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category ? "All" : item.category
                )
              }
              style={{
                width: "120px",
                height: "120px",
                transition: "transform 0.08s ease-in-out, border 0.08s ease-in-out",

              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.icon}
                alt={item.category}
                className="rounded-circle"
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h6 className="text-capitalize">{item.category}</h6>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-1"
        style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
        onClick={() => scroll(200)}
      >
        ›
      </button>
    </div>
  );
};

export default Categories;
