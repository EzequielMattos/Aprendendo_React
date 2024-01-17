import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  descricao: ''
}

export default function AtividadeForm(props) {

  const [atividade, setAtividade] = useState({atividadeAtual});

  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0)
      setAtividade(props.atividadeSelecionada);
  }, [props.atividadeSelecionada])

    const inputTextHandler = (e) => {
        const {name, value} = e.target;

        setAtividade({...atividade, [name]: value});
    };

    function atividadeAtual(){
      if (props.atividadeSelecionada.id !== 0){
        return props.atividadeSelecionada;
      }
      else{
        return atividadeInicial;
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (props.atividadeSelecionada.id !== 0)
        props.atualizarAtividade(atividade);
      else
        props.addAtividade(atividade);      

      setAtividade(atividadeInicial);
    }

    const handleCancelar = (e) => {
      e.preventDefault();

      props.cancelarAtividade();

      setAtividade(atividadeInicial);
    }
   
  return (
    <>
    <h1>Atividade {atividade.id !== 0 ? atividade.id : ''} </h1>
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input id="titulo" name='titulo' type="text" className="form-control" value={atividade.titulo} onChange={inputTextHandler}></input>
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select id="prioridade" name='prioridade' className="form-select" value={atividade.prioridade} onChange={inputTextHandler}>
          <option defaultValue="0">Selecione</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>     
      <div className="col-md-12">
        <label className="form-label">Descrição</label>
        <textarea id="descricao" name='descricao' type="text" className="form-control" value={atividade.descricao} onChange={inputTextHandler}></textarea>
      <hr />
      </div>
      <div className="col-12 mt-0">
        {
          atividade.id === 0 ? (
          <button className='btn btn-outline-secondary' type='submit'>
            <i className='me-2'>{<FontAwesomeIcon icon={faPlus}/>}</i>Atividade
          </button>
          ) : (
          <>
          <button className='btn btn-outline-success me-2' type="submit">
            <i className='me-2'>{<FontAwesomeIcon icon={faPlus}/>}</i>Salvar
          </button>
          <button className='btn btn-outline-danger' onClick={handleCancelar}>
            <i className='me-2'>{<FontAwesomeIcon icon={faPlus}/>}</i>Cancelar
          </button>
          </>
        )}
      </div>
    </form>
    </>
  );
}
