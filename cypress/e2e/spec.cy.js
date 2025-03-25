


describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-formu"); 
  });

  it("Başlık ve fiyat bilgisi doğru mu?", () => {
    cy.get("h6").should("contain", "Position Absolute Acı Pizza");
    cy.get(".price-rating b").should("contain", "85.50₺");
  });

  it("Ad Soyad girişi hatalı olunca uyarı çıkmalı", () => {
    cy.get("input[name='adSoyad']").type("Al"); 
    cy.get("button[type='submit']").click(); 
    cy.contains("Lütfen isminizi giriniz!").should("be.visible");
  });
});



describe("Pizza Sipariş Formu", () => {
  it("Tüm alanlar doldurulunca siparişin başarıyla verilmesi", () => {
    
    cy.visit("http://localhost:5173/siparis-formu");
    cy.get("input[name='adSoyad']").type("Mustafa Keser");
    cy.get("input[name='size'][value='Büyük']").check();
    cy.get("select[name='dough']").select("İnce Hamur");
    cy.get("input[type='checkbox']").then((checkboxes) => {
      cy.wrap(checkboxes.eq(0)).check(); 
      cy.wrap(checkboxes.eq(1)).check(); 
      cy.wrap(checkboxes.eq(2)).check(); 
    });
    cy.get(".counter-increase").click();
    cy.get(".counter-increase").click();
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/order-confirmation");
    cy.contains("Mustafa Keser").should("exist");
    cy.contains("Büyük").should("exist");
    cy.contains("İnce Hamur").should("exist");
    cy.contains("3 Adet").should("exist");
  });
});
