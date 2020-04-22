import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';
import api from '../../Services/api';

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whats, setWhats] = useState('');
  const [city, cetCity] = useState('');
  const [uf, setUF] = useState('');


  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name, email, whats, city, uf
    }

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadasto</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a contagem os casos de sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da Ong"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whats}
            onChange={e => setWhats(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => cetCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUF(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
