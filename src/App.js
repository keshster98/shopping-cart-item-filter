import React, { useState } from "react";
import "./index.css";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
  // Your code here
  const [buttonText, setButtonText] = useState("Show Sale Items Only");

  return (
    <div className="container pt-5">
      <h2 className="text-align-left">
        <strong>Shopping Cart</strong>
      </h2>
      <button
        className="btn btn-primary my-3"
        id="items-filter-button"
        value={buttonText}
        onClick={(event) => {
          const value =
            buttonText === "Show Sale Items Only"
              ? "Show All Items"
              : "Show Sale Items Only";
          setButtonText(value);
        }}
      >
        {buttonText}
      </button>

      {buttonText === "Show Sale Items Only"
        ? items.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="me-auto">
                  <span className="card-title mb-0">
                    <strong>{item.name}</strong>
                    {item.onSale ? (
                      <span className="badge bg-danger ms-2">On Sale!</span>
                    ) : null}
                  </span>
                </div>
                <div>
                  <h5 className="card-text mb-0">${item.price}</h5>
                </div>
              </div>
            </div>
          ))
        : items
            .filter((item) => item.onSale === true)
            .map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="me-auto">
                    <span className="card-title mb-0">
                      <strong>{item.name}</strong>
                      <span className="badge bg-danger ms-2">On Sale!</span>
                    </span>
                  </div>
                  <div>
                    <h5 className="card-text mb-0">${item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
    </div>
  );
}

export default App;
