import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

const PizzaDiv = styled.div`
  background-color: #ffffff;
  margin-top: 1.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const P = styled.p`
  font-size: 0.8rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function PizzaCard({ isim, rating, price, url, handleFormChange }) {
  return (
    <PizzaDiv>
      <NavLink
        id="name"
        name="name"
        value={isim}
        onClick={handleFormChange}
        to={{
          pathname: "/siparis-formu",
          state: { pizzaName: isim },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={url} />
        <h6>{isim}</h6>
        <Div>
          <P>{rating}</P>
          <P>(200)</P>
          <P>
            <b>{price}₺</b>
          </P>
        </Div>
      </NavLink>
    </PizzaDiv>
  );
}

export default PizzaCard;
