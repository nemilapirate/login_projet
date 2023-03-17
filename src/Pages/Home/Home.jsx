import React from 'react'
import SignIn from '../../Components/AuthForm/SignIn'
import SignUp from '../../Components/AuthForm/SignUp'
import Navbar from '../../Components/Navbar/Navbar'
import "./Home.css"

export default function Home() {
  return (
    <div className="global-container">
        <Navbar />
        <div className="content-container">
            <h1>Bienvenue</h1>
            <p>Vous pouvez vous authentifiez pour accéder aux fonctionnalités</p>
        </div>
        <SignUp />
        <SignIn />
    </div>
  )
}
