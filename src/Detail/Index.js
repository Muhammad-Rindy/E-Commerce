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
  console.log(product);

  useEffect(() => {
    dispatch(setDetail(params.index));
  }, [data]);

  return (
    <Layout>
      <Container>
        <Card className="w-100">
          <Card.Img variant="top" src={product?.image} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export default Index;
