import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function Product() {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState([]);

  useEffect(function () {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      setAllData(response.data);
      setDisplay(response.data);
      setLoading(false);
    });
  }, []);

  const Loading = () => {
    return (
      <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = allData.filter((data) => data.category === cat);
    setDisplay(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setDisplay(allData)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>

        {display.length > 0 &&
          display.map((product, index) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <div
                  className="card h-100 text-center p-4"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top print"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {" "}
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text">${product.price}</p>
                    <a href="/index" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
