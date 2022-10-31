// Page de code du formulaire de loggin de l'utilisateur (accueil) :

import './LoginForm.css';
import { useHistory } from 'react-router-dom';
import AvatarBot from '../../assets/avatar-bot.png';
import { Fragment, useState } from 'react';

export default function LoginForm() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name) {
            localStorage.setItem("NAME", name);
            history.push('/chatbot');
        } else {
            setError("Merci de renseigner votre nom");
        }
    }

    // Va chercher les noms courants utilisés par l'utilisateur (préselection à l'aide du "localstorage") :
    const user = localStorage.getItem("NAME");

    return(
        <Fragment>
            {!user ?
                <section className="login-form">
                    <div className="login-info">
                        <div className="login-info-top">
                            <picture>
                                <img src={AvatarBot} alt="avatar de l'utilisateur O Media" className="login-info-avatar"/>
                            </picture>
                            <h1>Module Alerte</h1>
                            <p>By O Media</p>
                        </div>
                        <div className="login-info-bottom">
                            <p className="login-desc">Le module Alerte, de O Media, est une application permettant de désamorcer les crises du comportement alimentaire.</p>
                            <p className="login-desc">Destiné aux personnes souffrant d'hyperphagie, cet outil facilite la gestion des émotions lors d'une crise alimentaire grâce à des exercices thérapeutiques.</p>
                        </div>
                    </div>

                    <div className="login-form-content">
                        <form className="form" onSubmit={handleSubmit}>
                            <input 
                                type="username" 
                                className="input-username"
                                id="username"
                                name='username'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Votre prénom"
                                required
                                aria-required="true"
                            />
                            {error ? <p className="error-msg">{error}</p> : null}
                            <button type="submit" className="btn-connect">J'ai besoin d'aide</button>
                        </form>
                    </div>
                </section>
                :
                history.push("/chatbot")
            }
        </Fragment>
    );
}