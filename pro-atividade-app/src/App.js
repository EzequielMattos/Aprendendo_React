import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown, faFaceSmile, faFaceMeh } from '@fortawesome/free-regular-svg-icons'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: "Título",
    descricao: "Primeria Atividade"
  },
  {
    id: 2,
    prioridade: '2',
    titulo: "Título",
    descricao: "Segunda Atividade"
  }
]

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    }
    setAtividades([...atividades, {...atividade}]);
  }

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  function prioridadeLabel(param){
    switch(param){
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definido';
    }
  }

  function prioridadeStyle(param, icon){
    switch(param){
      case '1':
        return icon ? <FontAwesomeIcon icon={faFaceSmile}/> : 'success';
      case '2':
        return icon ? <FontAwesomeIcon icon={faFaceMeh}/> : 'dark';
      case '3':
        return icon ? <FontAwesomeIcon icon={faFaceFrown}/> : 'danger';
      default:
        return icon ? <FontAwesomeIcon icon={faFaceMeh}/> : 'dark';
    }
  }

  return (
    <>
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Id</label>
        <input id="id" type="text" className="form-control" readOnly value={Math.max.apply(Math, atividades.map(item => item.id)) + 1}></input>
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select id="prioridade" className="form-select">
          <option defaultValue="0">Selecione</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input id="titulo" type="text" className="form-control"></input>
      </div>
      <div className="col-md-6">
        <label className="form-label">Descrição</label>
        <input id="descricao" type="text" className="form-control"></input>
      </div>
      <hr />
      <div className="col-12">
        <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
      </div>
    </form>
    <div className="mt-3">
          {atividades.map(ativ => (
            <div key={ativ.id} className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-1">{ativ.id}</span>- {ativ.titulo}         
                </h5>
                <h6>
                  Prioridade: 
                  <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade)}>
                    <i className="me-1">{prioridadeStyle(ativ.prioridade, true)}</i>{prioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>
              </div>             
              <p className="card-text">{ativ.descricao}</p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-warning me-2'>
                  <i className='me-2'><FontAwesomeIcon icon={faPen} /></i>Editar</button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => deletarAtividade(ativ.id)}>
                  <i className='me-2'><FontAwesomeIcon icon={faTrash} /></i>Excluir</button>
              </div>
            </div>
          </div>
          ))}          
    </div>
    </>
  );
}

export default App;
