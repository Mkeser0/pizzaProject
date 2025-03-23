import { useHistory } from "react-router-dom";
export default function HomePage() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/siparis-formu");
  };
  return (
    <>
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
    </>
  );
}
