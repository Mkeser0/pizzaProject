import { Label, FormGroup, Input, FormFeedback } from "reactstrap";
import React from "react";
import Counter from "./Counter";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import EkMalzeme from "./EkMalzeme";
import { ekMalzemeList } from "./data";
import { NavLink } from "react-router-dom";

const initialForm = {
  size: "",
  note: "",
  dough: "",
  adSoyad: "",
};

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

export default function OrderForm() {
  const [selectedMalzeme, setSelectedMalzeme] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [pizzaQuantity, setPizzaQuantity] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [malzeme, setMalzeme] = useState(ekMalzemeList);

  const history = useHistory();

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

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleQuantityChange(quantity) {
    setPizzaQuantity(quantity);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    if (isValid) {
      history.push("/order-confirmation");
    } else {
      console.log("Form is invalid");
    }

    axios.post("https://jsonplaceholder.typicode.com/posts", form).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <>
      <div>
        <header className="header-card">
          <img src="../images/iteration-1-images/logo.svg" />

          <nav className="header">
            <NavLink to="/" exact>
              Anasayfa
            </NavLink>
            <NavLink to="/siparis-formu">Sipariş Oluştur</NavLink>
          </nav>
        </header>
      </div>
      <div className="order-form">
        <div className="siparis-card">
          <div>
            <h6 style={{ fontSize: ".8rem" }}>Position Absolute Acı Pizza</h6>
            <div className="price-rating">
              <b style={{ fontSize: ".8rem" }}>85.50₺</b>
              <div className="rating">
                <p>4.9</p>
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
                    Büyük
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
                    Orta
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    onChange={handleFormChange}
                    id="kucuk"
                    name="size"
                    type="radio"
                    value="kucuk"
                    invalid={!form.size}
                  />
                  <Label htmlFor="kucuk" check>
                    Küçük
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
                    <option value="İnce Hamur">İnce Hamur</option>
                    <option value="Kalın Hamur">Kalın Hamur</option>
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
                <EkMalzeme
                  key={item}
                  items={item}
                  handleChange={handleChange}
                />
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
                        <p>25.00₺</p>
                        <p style={{ color: "red" }}>110.00₺</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form action="" onSubmit={handleSubmit}>
                      <Button type="submit">SİPARİŞ VER</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
