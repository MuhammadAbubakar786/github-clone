import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <div className="tabBtns d-lg-flex">
          <Link to="#">Developers</Link>
          <Link to="#">Repositories</Link>
          </div>
          <div className="filterOptions d-lg-flex">
          <Link to="#">Spoken Language: Any</Link>
          <Link to="#">Language: Any</Link>
          <Link to="#">Date Range: Today</Link>
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
