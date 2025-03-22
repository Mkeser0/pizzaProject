import { Label, FormGroup, Input, Col } from "reactstrap";
import { Button, ButtonGroup } from "react-bootstrap";
import Counter from "./Counter";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function OrderForm() {
  const [isValid, setIsValid] = useState(false);
  const [err, setErr] = useState("");

  const history = useHistory();

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div>
        <header className="header-card">
          <h2 className="head">Teknolojik Yemekler</h2>
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
                  <Input id="buyuk" name="radio1" type="radio" />{" "}
                  <Label htmlFor="buyuk" check>
                    Büyük
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="orta" name="radio1" type="radio" />{" "}
                  <Label htmlFor="orta" check>
                    Orta
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="kucuk" name="radio1" type="radio" />{" "}
                  <Label htmlFor="kucuk" check>
                    Küçük
                  </Label>
                </FormGroup>
              </div>
              <div>
                <h6>Hamur Seç</h6>
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>
                    Select
                  </Label>
                  <Col sm={10}>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Hamur Kalınlığı</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                </FormGroup>
              </div>
            </div>
            <h6>Ek Malzemeler</h6>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="options">
              <div className="first-col">
                <FormGroup check>
                  <Input id="pepp" type="checkbox" />
                  <Label htmlFor="pepp" check>
                    Peppperoni
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="ızg" type="checkbox" />
                  <Label htmlFor="ızg" check>
                    Tavuk Izgara
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="misir" type="checkbox" />
                  <Label htmlFor="misir" check>
                    Mısır
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="sarim" type="checkbox" />
                  <Label htmlFor="sarim" check>
                    Sarımsak
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="ananas" type="checkbox" />
                  <Label htmlFor="ananas" check>
                    Ananas
                  </Label>
                </FormGroup>
              </div>
              <div className="second-col">
                <FormGroup check>
                  <Input id="sosis" type="checkbox" />
                  <Label htmlFor="sosis" check>
                    Sosis
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="sogan" type="checkbox" />
                  <Label htmlFor="sogan" check>
                    Soğan
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="sucuk" type="checkbox" />
                  <Label htmlFor="sucuk" check>
                    Sucuk
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="biber" type="checkbox" />
                  <Label htmlFor="biber" check>
                    Biber
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="kabak" type="checkbox" />
                  <Label htmlFor="kabak" check>
                    Kabak
                  </Label>
                </FormGroup>
              </div>
              <div className="third-col">
                <FormGroup check>
                  <Input id="jambon" type="checkbox" />
                  <Label htmlFor="jambon" check>
                    Kanada Jambonu
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="dom" type="checkbox" />
                  <Label htmlFor="dom" check>
                    Domates
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="jal" type="checkbox" />
                  <Label htmlFor="jal" check>
                    Jalepeno
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="suc" type="checkbox" />
                  <Label htmlFor="suc" check>
                    Sucuk
                  </Label>
                </FormGroup>
              </div>
            </div>
            <h6>Sipariş Notu</h6>
            <textarea placeholder="Siparişinize eklemek istediğiniz bir not var mı?"></textarea>
            <hr></hr>
            <div className="order">
              <Counter />
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
                    <Button variant="warning">SİPARİŞ VER</Button>
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
