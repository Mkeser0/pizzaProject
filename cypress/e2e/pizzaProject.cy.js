describe("OrderForm Testleri", () => {
 
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-formu"); 
  });

  
  it("Zorunlu alanlar boşken form gönderilemez ve hata mesajları gösterilir", () => {
   
    cy.get("button").contains("SİPARİŞ VER").click();

    cy.contains("Lütfen boyut seçiniz.").should("be.visible");
    cy.contains("Lütfen hamur seçiniz.").should("be.visible");
    cy.contains("En az 3 en fazla 10 ek malzeme seçebilirsiniz.").should(
      "be.visible"
    );
    cy.contains("Lütfen isminizi giriniz!").should("be.visible");

  
    cy.url().should("include", "/siparis-formu");
  });

  
  it("Ek malzemeler seçildiğinde toplam fiyat artar", () => {
   
    cy.get(".total-price")
      .find("p")
      .should("have.text", "75₺"); 

   
    cy.get(".options input[type='checkbox']").eq(0).check();
    cy.get(".options input[type='checkbox']").eq(1).check(); 
    cy.get(".options input[type='checkbox']").eq(2).check(); 
    cy.get(".options input[type='checkbox']").eq(3).check(); 

    
    cy.get(".total-price")
      .find("p")
      .contains("Toplam")
      .next()
      .should("have.text", "100₺");
  });

  
  it("Form geçerli şekilde doldurulduğunda sipariş gönderilir", () => {
    
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: { id: "123", message: "Sipariş alındı" },
    }).as("submitOrder");

    
    cy.get("input#buyuk").check(); // Büyük boy
    cy.get("select#dough").select("İnce"); // İnce hamur
    cy.get(".options input[type='checkbox']").eq(0).check(); // 3 malzeme
    cy.get(".options input[type='checkbox']").eq(1).check();
    cy.get(".options input[type='checkbox']").eq(2).check();
    cy.get("input#adSoyad").type("Mustafa Keser"); // Ad soyad
    cy.get("textarea[name='note']").type("Acele olsun"); // Not

   
    cy.get("button").contains("SİPARİŞ VER").click();

   
    cy.wait("@submitOrder").its("response.statusCode").should("eq", 201);

   
    cy.url().should("include", "/order-confirmation");
  });
});