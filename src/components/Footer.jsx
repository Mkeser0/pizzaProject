import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: black;
  width: 100%;
  text-align: center;
  padding-top: 3rem;
`;
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  padding: 0 5%;
  max-width: 90%;
  margin: 0 20%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Divv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FooterFirstCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FooterLogo = styled.img`
  max-width: 3rem;
  height: auto;
  margin-bottom: 1rem;
`;
const FooterIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const ConnectDiv = styled.div`
  display: flex;
  gap: 5px;
`;
const P = styled.p`
  font-size: 0.5rem;
  color: white;
`;

const Fimages = styled.img`
  max-width: 5rem;
  margin: 0;
`;
const ImgDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 0;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <MainDiv>
      <WrapperDiv>
        <Divv
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <FooterFirstCol className="footer-first-col">
            <FooterLogo src="../images/iteration-2-images/footer/logo-footer.svg" />
            <ConnectDiv>
              <FooterIcon src="../images/iteration-2-images/footer/icons/icon-1.png" />
              <P>Altıntop mah. 1606.cd no:5</P>
            </ConnectDiv>
            <ConnectDiv>
              <FooterIcon src="../images/iteration-2-images/footer/icons/icon-2.png" />
              <P>mustafakeser0@hotmail.com</P>
            </ConnectDiv>
            <ConnectDiv>
              <FooterIcon src="../images/iteration-2-images/footer/icons/icon-3.png" />
              <P>0542 482 2738</P>
            </ConnectDiv>
          </FooterFirstCol>
          <div className="footer-second-col">
            <h6 style={{ color: "white", fontSize: ".6rem" }}>Hot Menü</h6>
            <P>Terminal Pizza</P>
            <P>5 Kişilik Hechatlon Pizza</P>
          </div>
        </Divv>
        <div className="footer-third-col">
          <h6 style={{ color: "white", fontSize: ".6rem" }}>Instagram</h6>
          <ImgDiv>
            <Fimages src="../images/iteration-2-images/footer/insta/li-0.png" />
            <Fimages src="../images/iteration-2-images/footer/insta/li-1.png" />
            <Fimages src="../images/iteration-2-images/footer/insta/li-2.png" />
            <Fimages src="../images/iteration-2-images/footer/insta/li-3.png" />
            <Fimages src="../images/iteration-2-images/footer/insta/li-4.png" />
            <Fimages src="../images/iteration-2-images/footer/insta/li-5.png" />
          </ImgDiv>
        </div>
      </WrapperDiv>
      <div>q@@@@@@</div>
    </MainDiv>
  );
}

export default Footer;
