import './BotVideo.css';
import ReactPlayer from 'react-player';

/* Code de lancement des vidéos des exercices.*/

export default function BotVideo(props){
    return(
        <section className="bot-video-container">
            <ReactPlayer url={props.link} controls={true} className="bot-video" />
        </section>
    );
}