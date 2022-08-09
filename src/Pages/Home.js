import React from "react";
import Header from "../Components/Header";
import Layout from "../Layout/Index";
import Print from "../Layout/Print";

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Print />
      </Layout>
    </>
  );
}

export default Home;
