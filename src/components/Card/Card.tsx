import './Card.css';

interface CardProps {
  titulo: string;
  descricao: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
    </div>
  )
}

export default Card;
