import React, {useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './AuthForm.css'

export default function SignIn() {

  const showModal = useSelector(state => state)

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL"
    })
  }
  return (
    <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
        <div onClick={closeModal} className="overlay"></div>
        <div className="container-modal">
            <form className="form-auth">
                <h2>Connexion</h2>
                <label htmlFor="mail">Votre adresse mail</label>
                <input type="email" htmlFor="mail" required/>

                <label htmlFor="psw">Votre mot de passe</label>
                <input type="password" id="psw" required />

                <button className="btn-sign">Se connecter</button>
            </form>
            <button onClick={closeModal} className="btn-close">X</button>
            <p className="botton-help-txt">Créer un compte ?</p>
        
        </div>
    </div>
  )
}
