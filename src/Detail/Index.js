import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../Redux/action";
import Layout from "../Layout/Index";
import { Container } from "react-bootstrap";

function Index() {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => state.product.detail);
  const data = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(setDetail(params.id));
  }, [data]);

  return (
    <Layout>
      <div className="detail">
        <div className="col-md-6">
          <img
            src={product?.image}
            alt={product?.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product?.category}</h4>
          <h1 className="display-5">{product?.title}</h1>
          <p className="lead">
            Rating {product?.rating && product?.rating.rate}
          </p>
          <h3 className="display-6 fw-bold my-4">${product?.price}</h3>
          <p className="lead">{product?.description}</p>
          <button className="btn btn-outline-dark">Add to Cart</button>
          <button className="btn btn-outline">Go to Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
