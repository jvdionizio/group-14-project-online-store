// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from '../css/contact-style.module.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import MyMapComponent from '../components/map';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className={(style.container, style.title)}>
          <h1 id="title">Contato</h1>
        </div>
        <div className={(style.container, style.contact_main)}>
          <div className={(style.contact_container, style.geoinfo)}>
            <div className={(style.geoinfo_text, style.address)}>
              <span>
                <img
                  src="/home/dionizio/group-14-project-online-store/online-store/images/Vivid.JS.png"
                  id="marker"
                  alt="maps marker"
                  width="12"
                />
                Av. Trab. São Carlense, 400 Centro, São Carlos SP, 13566-590
              </span>
              <span>
                <img src="./305027.svg" alt="telefone icon" width="12" />
                016 - 33739700
              </span>
            </div>
            <Wrapper apiKey="AIzaSyDyYUFPwQvVXKx49svGkDNncM_HY-QDQuM">
              <MyMapComponent />
            </Wrapper>
          </div>
          <div className={(style.contact_container, style.form_container)}>
            <form>
              <label htmlFor="name">
                Seu Nome:
                <input type="text" name="name" id="name" />
              </label>
              <label htmlFor="email">
                Seu Email:
                <input type="text" name="email" id="email" />
              </label>
              <label htmlFor="subject">
                Assunto:
                <select name="subject" id="subject">
                  <option value="Roupa com defeito">Roupa com defeito</option>
                  <option value="Produto não chegou">Produto não chegou</option>
                  <option value="Não consigo rastrear meu produto">
                    Não consigo rastrear meu produto
                  </option>
                  <option value="Elogio">Elogio</option>
                  <option value="Reclamação">Reclamação</option>
                  <option value="Outro">Outro</option>
                </select>
              </label>
              <label htmlFor="description">
                Descrição:
                <textarea name="description" id="description" rows="6" cols="33"></textarea>
                <p id="counter">500</p>
              </label>
              <button type="submit"> Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {}.isRequired;

export default Contact;
