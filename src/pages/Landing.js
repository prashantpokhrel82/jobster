import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking </span>App
          </h1>
          <p>
            Forage squid copper mug celiac pop-up, taiyaki vice organic mixtape.
            Venmo locavore ethical, mustache iceland cornhole gochujang you
            probably haven't heard of them beard bicycle rights selfies palo
            santo vaporware. Yuccie fam trust fund dreamcatcher single-origin
            coffee whatever slow-carb tote bag. Gochujang irony salvia franzen
            chicharrones, ramps before they sold out banh mi bodega boys
            messenger bag. Stumptown aesthetic 3 wolf moon fashion axe, raw
            denim readymade vape man braid.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job search" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default landing;
