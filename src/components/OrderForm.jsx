import { Label, FormGroup, Input } from "reactstrap";
import React from "react";
import Counter from "./Counter";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import EkMalzeme from "./EkMalzeme";
import { ekMalzemeList } from "./data";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import { pizzaCard } from "./data";

const errMessage = {
  size: "Lütfen boyut seçiniz.",
  dough: "Lütfen hamur seçiniz.",
  ekMalzeme: "En az 3 en fazla 10 ek malzeme seçebilirsiniz.",
  pizzaQuantity: "Lütfen pizza adedi seçiniz.",
  adSoyad: "Lütfen isminizi giriniz!",
};

const Button = styled.button`
  background-color: #ffc107;
  border: none;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  font-size: 0.5rem;
  width: 100%;
  height: 1.5rem;
`;

export default function OrderForm(props) {
  const {
    selectedMalzeme,
    setSelectedMalzeme,
    form,
    totalPrice,
    setTotalPrice,
    handleFormChange,
  } = props;

  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [malzeme, setMalzeme] = useState(ekMalzemeList);

  const [pizzaList, setPizzaList] = useState(pizzaCard);

  const history = useHistory();
  const location = useLocation();

  const hasEnoughChars = (str) => str.replace(/\s/g, "").length > 3;
  function checkIsValid(x, y, z) {
    return (
      hasEnoughChars(x.adSoyad) &&
      x.size &&
      x.dough &&
      y.length >= 3 &&
      y.length <= 10 &&
      z > 0 &&
      z <= 10
    );
  }

  useEffect(() => {
    setIsValid(checkIsValid(form, selectedMalzeme, pizzaQuantity));
  }, [form, selectedMalzeme, pizzaQuantity]);

  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedMalzeme((prev) => [...prev, value]);
    } else {
      setSelectedMalzeme((prev) => prev.filter((item) => item !== value));
    }
  }

  const pizzaName = location.state?.pizzaName || "Position Absolute Acı Pizza";
  const selectedPizza =
    pizzaList.find((pizza) => pizza.name === pizzaName) || pizzaList[0];
  const basePrice = selectedPizza.price;
  const ratingPizza = selectedPizza.rating;
  const freeMalzeme = 3;
  const extraUcret = 25;

  useEffect(() => {
    const ingredientCount = selectedMalzeme.length;
    let extraCost = 0;

    if (ingredientCount > freeMalzeme) {
      extraCost = (ingredientCount - freeMalzeme) * extraUcret;
    }

    const pizzaCost = basePrice * (pizzaQuantity || 1);
    setTotalPrice(pizzaCost + extraCost);
  }, [selectedMalzeme, pizzaQuantity, basePrice]);

  function handleQuantityChange(quantity) {
    setPizzaQuantity(quantity);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    if (isValid) {
      axios
        .post("https://reqres.in/api/pizza", {
          ...form,
          selectedMalzeme,
          pizzaQuantity,
          totalPrice,
        })
        .then((response) => {
          console.log(response.data);
          history.push("/order-confirmation");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Form is invalid");
    }
  }

  return (
    <>
      <div>
        <header className="header-card">
          <img src="../images/iteration-1-images/logo.svg" />
        </header>
      </div>
      <div className="order-form">
        <div className="back-bej">
          <img
            src="../images/iteration-2-images/pictures/form-banner.png"
            alt=""
          />
          <div className="first-part-main">
            <nav className="header">
              <NavLink to="/" exact>
                Anasayfa
              </NavLink>
              <NavLink to="/siparis-formu">Sipariş Oluştur</NavLink>
            </nav>
            <h6 style={{ fontSize: ".8rem" }}>{pizzaName}</h6>
            <div className="price-rating">
              <b style={{ fontSize: ".8rem" }}>{basePrice}₺</b>
              <div className="rating">
                <p>{ratingPizza}</p>
                <p>(200)</p>
              </div>
            </div>
            <p>
              Fronted Dev olarak hala position kullanıyorsan bu çok acı pizza
              tam sana göre. Pizza, domates, peynir ve genellikle çeliştli diğer
              malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde
              bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
              düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
              lezzetli bir yemektir. Küçük bir pizzaya bazen pizzette denir.
            </p>
          </div>
        </div>
        <div className="second-part-main">
          <div className="size-dough">
            <div>
              <h6 style={{ fontSize: ".8rem" }}>
                Boyut Seç
                <sup style={{ color: "red", fontSize: ".6rem" }}>*</sup>
              </h6>
              <FormGroup check>
                <Input
                  onChange={handleFormChange}
                  id="buyuk"
                  name="size"
                  type="radio"
                  value="Büyük"
                  invalid={!form.size}
                />
                <Label htmlFor="buyuk" check>
                  L
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  onChange={handleFormChange}
                  id="orta"
                  name="size"
                  type="radio"
                  value="Orta"
                  invalid={!form.size}
                />
                <Label htmlFor="orta" check>
                  M
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  onChange={handleFormChange}
                  id="kucuk"
                  name="size"
                  type="radio"
                  value="Küçük"
                  invalid={!form.size}
                />
                <Label htmlFor="kucuk" check>
                  S
                </Label>
                {isSubmitted && !isValid && !form.size && (
                  <div style={{ color: "red", fontSize: ".4rem" }}>
                    {errMessage.size}
                  </div>
                )}
              </FormGroup>
            </div>
            <div>
              <h6 style={{ fontSize: ".8rem" }}>
                Hamur Seç
                <sup style={{ color: "red", fontSize: ".6rem" }}>*</sup>
              </h6>
              <div>
                <label
                  htmlFor="dough"
                  style={{ marginRight: "5px", display: "inline" }}
                >
                  Select
                </label>
                <select
                  id="dough"
                  onChange={handleFormChange}
                  name="dough"
                  value={form.dough}
                  invalid={!form.dough}
                >
                  <option value="" disabled selected>
                    Hamur Kalınlığı
                  </option>
                  <option value="Süper İnce">Süper İnce</option>
                  <option value="İnce">İnce</option>
                  <option value="Kalın">Kalın</option>
                </select>
                {isSubmitted && !isValid && !form.dough && (
                  <div style={{ color: "red", fontSize: ".4rem" }}>
                    {errMessage.dough}
                  </div>
                )}
              </div>
            </div>
          </div>
          <h6 style={{ fontSize: ".8rem" }}>Ek Malzemeler</h6>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="options">
            {malzeme.map((item) => (
              <EkMalzeme key={item} items={item} handleChange={handleChange} />
            ))}
          </div>
          {isSubmitted &&
            !isValid &&
            (selectedMalzeme.length < 3 || selectedMalzeme.length > 10) && (
              <div style={{ color: "red", fontSize: ".4rem" }}>
                {errMessage.ekMalzeme}
              </div>
            )}
          <h6 style={{ fontSize: ".8rem" }}>Ad Soyad</h6>
          <input
            id="adSoyad"
            name="adSoyad"
            className="name"
            type="text"
            placeholder="Lütfen isminizi giriniz!"
            onChange={handleFormChange}
            value={form.adSoyad}
          />
          {isSubmitted && !isValid && !hasEnoughChars(form.adSoyad) && (
            <div style={{ color: "red", fontSize: ".4rem" }}>
              {errMessage.adSoyad}
            </div>
          )}

          <h6 style={{ fontSize: ".8rem" }}>Sipariş Notu</h6>
          <textarea
            name="note"
            onChange={handleFormChange}
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          ></textarea>
          <hr></hr>
          <div className="order">
            <FormGroup>
              <Counter handleQuantityChange={handleQuantityChange} />
              {isSubmitted &&
                !isValid &&
                (pizzaQuantity <= 0 || pizzaQuantity > 10) && (
                  <div style={{ color: "red", fontSize: ".4rem" }}>
                    {errMessage.pizzaQuantity}
                  </div>
                )}
            </FormGroup>
            <div className="footer">
              <div className="total-price">
                <div className="total-price-card">
                  <h6 style={{ fontSize: ".8rem" }}>Sipariş Toplamı</h6>
                  <div className="total">
                    <div>
                      <p>Seçimler</p>
                      <p style={{ color: "red" }}>Toplam</p>
                    </div>
                    <div>
                      <p>
                        {selectedMalzeme.length > freeMalzeme
                          ? (selectedMalzeme.length - freeMalzeme) * extraUcret
                          : 0}
                        ₺
                      </p>
                      <p style={{ color: "red" }}>{totalPrice}₺</p>
                    </div>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <Button type="submit">SİPARİŞ VER</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
