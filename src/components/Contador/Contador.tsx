import { useState } from "react";
import './Contador.css';

function Contador() {
  const [valor, setValor] = useState<number>(0);

  function somarMaisUm() {
    setValor(valor + 1);
  }

  return (
    <div className="container">
      <p>O valor é: {valor}</p>
      <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador;
