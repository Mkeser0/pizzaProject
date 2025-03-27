import { useHistory } from "react-router-dom";
import Footer from "./footer";
import styled from "styled-components";
import { pizzaCard } from "./data";
import PizzaCard from "./PizzaCard";
import { useState } from "react";

const Slogan = styled.div`
  text-align: center;
  background-color: #faf7f2;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
const OrderButon = styled.button`
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 2rem;
  font-size: 1rem;
  width: 10rem;
  height: 3rem;
  color: red;
  font-family: "Barlow", sans-serif;
`;

const NavButon = styled.button`
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 2rem;
  font-size: 0.7rem;
  width: 10rem;
  height: 3rem;
  color: black;
  font-family: "Barlow", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavButon2 = styled.button`
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 2rem;
  font-size: 0.7rem;
  width: 10rem;
  height: 3rem;
  color: black;
  font-family: "Barlow", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #292929;
    color: #ffffff !important;
  }
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #faf7f2;
  border-radius: 5px;
  overflow: hidden;
  font-family: "Quattrocento", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftColumn = styled.div`
  background-image: url("../images/iteration-2-images/cta/kart-1.png");
  background-size: cover;
  background-position: center;
  width: 50%;
  aspect-ratio: 1 / 1;
  text-align: left;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%; /* Mobilde tam genişlik */
    aspect-ratio: 1 / 1; /* Kare şekli korunur */
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column; /* Stack images vertically */
  width: 50%;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Mobilde tam genişlik */
    height: auto;
  }
`;

const Col21 = styled.div`
  background-image: url("../images/iteration-2-images/cta/kart-2.png");
  background-size: cover;
  background-position: center;
  height: calc(50% - 5px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    height: 200px; /* Mobilde sabit yükseklik */
  }
`;

const Col22 = styled.div`
  background-image: url("../images/iteration-2-images/cta/kart-3.png");
  background-size: cover;
  background-position: center;
  height: calc(50% - 5px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;

  @media (max-width: 768px) {
    height: 200px; /* Mobilde sabit yükseklik */
  }
`;
const PizzaCarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Buttons1Div = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Buttons2Div = styled.div`
  background-color: #faf7f2;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export default function HomePage(props) {
  const { handleFormChange } = props;
  const [pizzaList, setPizzaList] = useState(pizzaCard);
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis-formu");
  };

  return (
    <>
      <div style={{ backgroundColor: "#faf7f2" }}>
        <div className="home-page">
          <div className="home-page-content">
            <img src="../images/iteration-1-images/logo.svg" />
            <div className="baslik">
              <h1>KOD ACIKTIRIR</h1>
              <h1>PİZZA, DOYURUR</h1>
            </div>
            <button onClick={handleClick}> ACIKTIM </button>
          </div>
        </div>
        <Buttons1Div>
          <NavButon style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/1.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            YENİ! Kore
          </NavButon>
          <NavButon style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/2.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Pizza
          </NavButon>
          <NavButon style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/3.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Burger
          </NavButon>
          <NavButon style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/4.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Kızartmalar
          </NavButon>
          <NavButon style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/5.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Fast-Food
          </NavButon>
          <NavButon style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/6.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Gazlı İçecek
          </NavButon>
        </Buttons1Div>
        <Container>
          <LeftColumn>
            <h2 style={{ fontSize: "3rem" }}>Özel</h2>
            <h2 style={{ fontSize: "3rem" }}>Lezzetus</h2>
            <h6 style={{ fontSize: "1rem" }}>Position: Absolute Acı Biber</h6>
            <OrderButon onClick={handleClick}>SİPARİŞ VER</OrderButon>
          </LeftColumn>
          <RightColumn>
            <Col21>
              <h3>Hechathlon</h3>
              <h3>Burger Menü</h3>
              <OrderButon onClick={handleClick}>SİPARİŞ VER</OrderButon>
            </Col21>
            <Col22>
              <h3>
                <b style={{ color: "red" }}>Çooook </b>hızlı
              </h3>
              <h3>npm gibi kurye</h3>
              <OrderButon onClick={handleClick}>SİPARİŞ VER</OrderButon>
            </Col22>
          </RightColumn>
        </Container>
        <Slogan>
          <p style={{ fontFamily: "Satisfy", color: "red" }}>
            en çok paketlenen menüler
          </p>
          <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        </Slogan>
        <Buttons2Div>
          <NavButon2 style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/1.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Ramen
          </NavButon2>
          <NavButon2 style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/2.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Pizza
          </NavButon2>
          <NavButon2 style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/3.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Burger
          </NavButon2>
          <NavButon2 style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/4.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            French Fries
          </NavButon2>
          <NavButon2 style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/5.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Fast-Food
          </NavButon2>
          <NavButon2 style={{ color: "black" }} onClick={handleClick}>
            <img
              src="../images/iteration-2-images/icons/6.svg"
              style={{ width: "20%", marginRight: ".5rem" }}
            />
            Soft Drink
          </NavButon2>
        </Buttons2Div>
        <PizzaCarDiv>
          {pizzaList.map((item, i) => (
            <PizzaCard
              id={i}
              isim={item.isim}
              rating={item.rating}
              price={item.price}
              url={item.url}
              handleFormChange={handleFormChange}
            />
          ))}
        </PizzaCarDiv>
        <Footer />
      </div>
    </>
  );
}
