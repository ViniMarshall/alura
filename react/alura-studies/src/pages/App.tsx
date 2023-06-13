import React, { useState } from 'react';
import Formulario from '../components/form';
import Lista from '../components/list';
import style from './App.module.scss';
import Cronometro from '../components/cronometer';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
