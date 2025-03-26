export default function OrderConfirmation() {
  return (
    <>
      <div className="confirmation-page">
        <div className="confirmation-page-content">
          <img src="../images/iteration-1-images/logo.svg" />
          <div className="baslik">
            <p>Lezzetin Yolda!</p>
            <h1>SİPARİŞ ALINDI!</h1>
            <hr />
            <div
              className="siparis-detayi"
              style={{
                fontSize: ".5rem",
                marginTop: "4rem",
                width: "50%",
                marginLeft: "6rem",
              }}
            >
              <h6>Position Absolute Acı Pizza</h6>
              <p style={{ marginTop: "3rem" }}>
                <b>Boyut:</b> M
              </p>
              <p>
                <b>Hamur:</b> Süper İnce
              </p>
              <p>
                <b>Ek Malzeme:</b> Sucuk, Jambon, Sarımsak
              </p>
              <div
                style={{
                  border: "1px solid white",
                  borderRadius: "5px",
                  marginTop: "3rem",
                }}
              >
                <h6 style={{ fontSize: ".8rem", marginTop: ".5rem" }}>
                  Sipariş Toplamı
                </h6>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
