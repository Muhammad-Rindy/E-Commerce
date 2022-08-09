import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { resetFilter, setFilter } from "../Redux/action";
import { Link } from "react-router-dom";

export default function Product() {
  const products = useSelector((state) => state.product.display);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

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

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => dispatch(resetFilter())}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => dispatch(setFilter("men's clothing"))}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => dispatch(setFilter("women's clothing"))}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => dispatch(setFilter("jewelery"))}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => dispatch(setFilter("electronics"))}
          >
            Electronic
          </button>
        </div>

        {products.length > 0 &&
          products.map((product, index) => {
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
                    <Link to={`/detail/${index}`} className="btn btn-primary">
                      Buy
                    </Link>
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
      <div className="container my-5 py-0">
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
