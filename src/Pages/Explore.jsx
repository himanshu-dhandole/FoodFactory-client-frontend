import React from 'react';
import { categories } from '../assets/assets';

const Explore = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Explore Categories</h2>
      
      <div className="d-flex overflow-auto pb-3">
        {categories.map((item, index) => (
          <div
            key={index}
            className="text-center mx-3 flex-shrink-0"
            style={{ width: '140px', cursor: 'pointer' }}
          >
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 shadow-sm"
              style={{
                width: '120px',
                height: '120px',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={item.icon}
                alt={item.category}
                className="img-fluid p-2"
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
              />
            </div>
            <h6 className="text-capitalize">{item.category}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
