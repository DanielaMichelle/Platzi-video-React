import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo"></input>
        <input className="input" type="password" placeholder="Contraseña"></input>
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"></input>Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div><img src={googleIcon}></img> Inicia sesión con Google</div>
        <div><img src={twitterIcon}></img> Inicia sesión con Twitter</div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta
         <Link to="/register">
           Regístrate
         </Link>
      </p>
    </section>
  </section>
)


export default Login