import './BotAvatar.css';
import RobotAvatar from '../../assets/avatar-bot.png'

/* Composant de l'avatar de Fedmind dans le chat (code différent que l'avatar d'accueil.) */ 

export default function BotAvatar(){
    return(
        <section className="bot-avatar">
            <div>
                <picture>
                    <img src={RobotAvatar} alt="avatar robot Fedmind" />
                </picture>
            </div>
        </section>
    );
}