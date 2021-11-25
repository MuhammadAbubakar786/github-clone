import React from "react";
import { Container } from "react-bootstrap";
import "./Trending.css";

const Trending = () => {
  return (
    <>
      <Container fluid className="trendingBanner px-0 border-bottom">
        <Container>
          <h1>Trending</h1>
          <p>These are the developers building the hot tools today.</p>
        </Container>
      </Container>
      <Container fluid className="trendingResults">
        <Container className="innerContainer px-0">
        <div className="box-header d-lg-flex p-3">
          <div className="tabBtns">
          <h4>Repositories</h4>
          <h4>Developers</h4>
          </div>
          <div className="filterOptions">
          <h4>Repositories</h4>
          <h4>Repositories</h4>
          </div>
        </div>
        <div className="filterResults">

        </div>
        </Container>
      </Container>
    </>
  );
};

export default Trending;
