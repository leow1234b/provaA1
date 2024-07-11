import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";

function ListarTarefas() 

{   const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
      carregarTarefas();
    }, []);
  
    function carregarTarefas() {
      //FETCH ou AXIOS
      fetch("http://localhost:5000/tarefas/listar")
        .then((resposta) => resposta.json())
        .then((tarefas: Tarefa[]) => {
          console.table(tarefas);
          setTarefas(tarefas);
        });
    }
    function alterar(arg0: any) {
        throw new Error("Function not implemented.");
    }

    return (
<div>
    <h1> ListarTarefas</h1>
    <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>nomedatarefa</th>
           
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.TarefaId}>
              <td>{tarefa.TarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.titulo}</td>
              <td>
                <button
                  onClick={() => {
                    alterar(tarefa.TarefaId!);
                  }}
                >
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

    );
}

export default ListarTarefas;