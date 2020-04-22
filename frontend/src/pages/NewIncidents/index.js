import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';

const NewIncident = () => {
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhamente para encontrar um herói para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form>
          <input placeholder="Título do Caso"/>
          <textarea placeholder="Descrição"></textarea>
          <input placeholder="Valor em reais"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;

