import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1 className="text-center garis">Latest Product</h1>
      <div>
        <div className="text-center garis">
          <Button variant="outline-success">All</Button>
          <Button variant="outline-success">Men's Clothing</Button>
          <Button variant="outline-success">Women Clothing</Button>
          <Button variant="outline-success">Jewelry</Button>
          <Button variant="outline-success">Electronic</Button>
        </div>
        <div className="row">
          {loading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            data.map(function (datas) {
              return (
                <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={datas.id}>
                    <img
                      src={datas.image}
                      className="card-img-top"
                      alt={datas.title}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {datas.title.substring(0, 12)}
                      </h5>
                      <p className="card-text">${datas.price}</p>
                      <a href="#" className="btn btn-primary">
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
