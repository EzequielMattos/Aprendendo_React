import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFaceFrown, faFaceSmile, faFaceMeh } from '@fortawesome/free-regular-svg-icons'

export default function Atividade(props) {

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
    <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge bg-secondary me-1">{props.ativ.id}</span>- {props.ativ.titulo}         
                </h5>
                <h6>
                  Prioridade: 
                  <span className={'ms-1 text-' + prioridadeStyle(props.ativ.prioridade)}>
                    <i className="me-1">{prioridadeStyle(props.ativ.prioridade, true)}</i>{prioridadeLabel(props.ativ.prioridade)}
                  </span>
                </h6>
              </div>             
              <p className="card-text">{props.ativ.descricao}</p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-warning me-2' onClick={() => props.pegarAtividade(props.ativ.id)}>
                  <i className='me-2'><FontAwesomeIcon icon={faPen} /></i>Editar</button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => props.deletarAtividade(props.ativ.id)}>
                  <i className='me-2'><FontAwesomeIcon icon={faTrash} /></i>Excluir</button>
              </div>
            </div>
          </div>
  )
}
