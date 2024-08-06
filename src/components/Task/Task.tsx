import { useEffect, useState } from 'react';
import './Task.css';

function Task() {
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("Tarefa pendente");

  useEffect(() => {
    setTarefa(finalizada ? "Tarefa Concluída" : "Tarefa pendente");
  }, [finalizada]);

  const toggleTarefa = () => {
    setFinalizada(!finalizada);
  }

  return (
    <div className="container">
      <h1>Tarefa</h1>
      <h3>Status da Tarefa: {tarefa}</h3>
      <button onClick={toggleTarefa}>
        {finalizada ? "Reverter Tarefa" : "Conclua a Tarefa"}
      </button>
    </div>
  )
}

export default Task;
