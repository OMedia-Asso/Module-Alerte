import './Buttons.css';
/* Composant de création des boutons de la page de login */

export default function Buttons(props) {
    return(
        <section className="buttons-container">
            {props.buttons.map((button, index) => (
                <button className="option-button" key={index} onClick={button.handler}>
                    {button.text}
                </button>
            ))}
        </section>
    );
}