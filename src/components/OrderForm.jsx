import { Label, FormGroup, Input } from "reactstrap";
import { Button, ButtonGroup } from "react-bootstrap";
import Counter from "./Counter";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const initialForm = {
  size: "",
  dough: "",
  note: "",
};

export default function OrderForm() {
  const [ekMalzeme, setEkMalzeme] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [pizzaQuantity, setPizzaQuantity] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  function checkIsValid(x, y, z) {
    return (
      x.size && x.dough && y.length >= 3 && y.length <= 10 && z > 0 && z <= 10
    );
  }

  useEffect(() => {
    setIsValid(checkIsValid(form, ekMalzeme, pizzaQuantity));
  }, [form, ekMalzeme, pizzaQuantity]);

  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setEkMalzeme((prev) => [...prev, value]);
    } else {
      setEkMalzeme((prev) => prev.filter((item) => item !== value));
    }
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleQuantityChange(quantity) {
    setPizzaQuantity(quantity);
  }

  function handleClick() {
    if (isValid) {
      history.push("/order-confirmation");
    } else {
      alert("Lütfen tüm alanları doğru şekilde doldurun.");
    }
  }

  return (
    <>
      <div>
        <header className="header-card">
          <img src="../images/iteration-1-images/logo.svg" />
          <p className="header-text">
            Anasayfa<b> Sipariş Oluştur</b>
          </p>
        </header>
      </div>
      <div className="order-form">
        <div className="siparis-card">
          <div>
            <h5>Position Absolute Acı Pizza</h5>
            <div className="price-rating">
              <b>85.50₺</b>
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
                <h6>Boyut Seç</h6>
                <FormGroup check>
                  <Input
                    onChange={handleFormChange}
                    id="buyuk"
                    name="size"
                    type="radio"
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
                  />
                  <Label htmlFor="kucuk" check>
                    Küçük
                  </Label>
                </FormGroup>
              </div>
              <div>
                <h6>Hamur Seç</h6>
                <div>
                  <label htmlFor="dough">Select</label>
                  <select id="dough" onChange={handleFormChange} name="dough">
                    <option>İnce Hamur</option>
                    <option>Kalın Hamur</option>
                  </select>
                </div>
              </div>
            </div>
            <h6>Ek Malzemeler</h6>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="options">
              <div className="first-col">
                <FormGroup check>
                  <Input
                    value="pepp"
                    name="pepp"
                    id="pepp"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="pepp" check>
                    Peppperoni
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="ızg"
                    name="ızg"
                    id="ızg"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="ızg" check>
                    Tavuk Izgara
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="misir"
                    name="misir"
                    id="misir"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="misir" check>
                    Mısır
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="sarim"
                    name="sarim"
                    id="sarim"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="sarim" check>
                    Sarımsak
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="ananas"
                    name="ananas"
                    id="ananas"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="ananas" check>
                    Ananas
                  </Label>
                </FormGroup>
              </div>
              <div className="second-col">
                <FormGroup check>
                  <Input
                    value="sosis"
                    name="sosis"
                    id="sosis"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="sosis" check>
                    Sosis
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="sogan"
                    name="sogan"
                    id="sogan"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="sogan" check>
                    Soğan
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="sucuk"
                    name="sucuk"
                    id="sucuk"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="sucuk" check>
                    Sucuk
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="biber"
                    name="biber"
                    id="biber"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="biber" check>
                    Biber
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="kabak"
                    name="kabak"
                    id="kabak"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="kabak" check>
                    Kabak
                  </Label>
                </FormGroup>
              </div>
              <div className="third-col">
                <FormGroup check>
                  <Input
                    value="jambon"
                    name="jambon"
                    id="jambon"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="jambon" check>
                    Kanada Jambonu
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="dom"
                    name="dom"
                    id="dom"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="dom" check>
                    Domates
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="jal"
                    name="jal"
                    id="jal"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="jal" check>
                    Jalepeno
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    value="suc"
                    name="suc"
                    id="suc"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Label htmlFor="suc" check>
                    Sucuk
                  </Label>
                </FormGroup>
              </div>
            </div>
            <h6>Sipariş Notu</h6>
            <textarea
              name="note"
              onChange={handleFormChange}
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            ></textarea>
            <hr></hr>
            <div className="order">
              <Counter handleQuantityChange={handleQuantityChange} />
              <div className="footer">
                <div>
                  <h6>Sipariş Toplamı</h6>
                  <div className="total">
                    <div>
                      <p>Seçimler</p>
                      <p>Toplam</p>
                    </div>
                    <div>
                      <p>25.00₺</p>
                      <p>110.00₺</p>
                    </div>
                  </div>
                  <ButtonGroup>
                    <Button
                      disabled={!isValid}
                      variant="warning"
                      onClick={handleClick}
                      type="submit"
                    >
                      SİPARİŞ VER
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
