
import Task from "./components/Task/Task"
import Contador from "./components/Contador/Contador"
import Card from "./components/Card/Card"
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<{ title: string, description: string } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "Título Simulado",
        description: "Esta é uma descrição simulada."
      });
    }, 2000);
  }, []);

  return (
    <>
      <Task />
      <Contador />
      {data ? <Card titulo={data.title} descricao={data.description} /> : <p>Carregando dados...</p>}
    </>
  )
}

export default App
