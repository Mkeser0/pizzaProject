import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
export default function Anasayfa() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/siparisformu");
  };
  return (
    <div>
      <h1>Anasayfa</h1>
      <Button onClick={handleClick}>Sipariş ver</Button>
    </div>
  );
}
