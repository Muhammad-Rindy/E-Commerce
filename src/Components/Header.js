import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../logo.jpg";

function Header() {
  return (
    <Card className="bg-dark text-white header">
      <Card.Img src={logo} alt="Card image" className="gambar" />
      <Card.ImgOverlay>
        <Card.Title className="text-center">Welcome to my shop</Card.Title>
        <Card.Text className="text-center">
          Our shop provides a wide range of men's and women's clothing and
          accessories.
        </Card.Text>
        <hr />
        <Card.Text className="text-center">Let's go shopping</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Header;
