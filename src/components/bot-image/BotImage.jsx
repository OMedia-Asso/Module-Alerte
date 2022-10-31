import './BotImage.css';
/* Composant de l'avatar de l'utilisateur dans le chat. */ 

export default function BotImage(props){
    return(
        <section>
            <picture>
                <img className="bot-image" src={props.link} alt={props.name} />
            </picture>
        </section>
    );
}