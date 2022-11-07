// Page de code de tout le chatbot, accessible une fois l'utilisateur loggé.
import './ChatbotFull.css';
import { RiLogoutCircleLine, RiInformationLine, RiInformationFill} from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import { Fragment, useState } from 'react';

//IMPORT CHATBOT
import Chatbot from "react-chatbot-kit";
import ActionProvider from '../../ActionProvider';
import MessageParser from '../../MessageParser';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../../components/bot-avatar/BotAvatar";
import UserAvatar from "../../components/user-avatar/UserAvatar";
import BotImage from '../../components/bot-image/BotImage';
import BotVideo from '../../components/bot-video/BotVideo';
import Buttons from '../../components/widgets/buttons/Buttons';
import Informations from '../../components/informations/Informations';

export default function ChatbotFull() {
    const history = useHistory();
    const name = localStorage.getItem("NAME");

    const [isOpen, setOpen] = useState(false);

    //CONFIG CHATBOT
    const config = {
        initialMessages: [
          createChatBotMessage("Bonjour et bienvenue sur le module Alerte !"),
          createChatBotMessage(
            `Alors ${name ? name : null}... pourquoi fais-tu appel à moi ?`,
            {
              // withAvatar: true,
              delay: 2000,
              widget: "crise"
            }
          )
        ],
      
        botName: "OBot'",
      // customisation des avatars du bot et de l'utilisateur (voir composants)
        customComponents: {
          botAvatar: (props) => <BotAvatar {...props} />,
          userAvatar: (props) => <UserAvatar {...props} />
        },
      // customisation de certains styles des boutons et du fond des bulles de chat
        customStyles: {
          botMessageBox: {
            backgroundColor: "#4CADCD"
          },
          chatButton: {
            backgroundColor: "#808080"
          }
        },

        widgets: [

          //BUTTONS CHOICES
          {
            widgetName: "crise",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je fais une crise ! ⚠️", handler : () => {props.actionProvider.criseNow()}},
                    {text : "J'ai fait une crise...", handler : () => {props.actionProvider.crisePast()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "exerciceChoice",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "La respiration.", handler : () => {props.actionProvider.respiration()}},
                    {text : "L'ancrage.", handler : () => {props.actionProvider.ancrage()}}
                  ]
                }
                {...props}
              />
          },

          //RESPIRATION
          {
            widgetName: "startRespiration",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Allons-y !", handler : () => {props.actionProvider.startRespirationVideo()}},
                    {text : "Retour", handler : () => {props.actionProvider.retourExercices("Je veux revenir aux exercices", 1500)}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "afterRespiration",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Oui, je ne suis plus en crise !", handler : () => {props.actionProvider.noCriseRespiration()}},
                    {text : "Je me sens mieux mais je reste fragile...", handler : () => {props.actionProvider.fragileRespiration()}},
                    {text : "Je ne vais pas mieux, je suis toujours en crise !", handler : () => {props.actionProvider.criseRespiration()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "feelingResp",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je suis serein(e) !", handler : () => {props.actionProvider.serainResp()}},
                    {text : "Je suis fier(ère) !", handler : () => {props.actionProvider.fierResp()}},
                    {text : "Je me suis surpassé(e) !", handler : () => {props.actionProvider.surpResp()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceNewActivity",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je veux refaire une activité du module Alerte.", handler : () => {props.actionProvider.retourExercices("Je veux revenir aux exercices", 1500)}},
                    {text : "Je vais faire une activité de mon côté.", handler : () => {props.actionProvider.activityUser()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceActivity",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Ecrire 🖊️", handler : () => {props.actionProvider.writing()}},
                    {text : "Faire du ménage 🧹", handler : () => {props.actionProvider.cleaning()}},
                    {text : "Faire de l'activité physique 🏀", handler : () => {props.actionProvider.sport()}},
                    {text : "Aller me promener 🌳", handler : () => {props.actionProvider.walking()}},
                    {text : "Me faire un thé, une infusion ou un café ☕", handler : () => {props.actionProvider.drink()}},
                    {text : "Jardiner 🌷", handler : () => {props.actionProvider.gardening()}},
                    {text : "Méditer 🧘", handler : () => {props.actionProvider.meditation()}},
                    {text : "Appeler/Voir quelqu'un 📱", handler : () => {props.actionProvider.calling()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceWriting",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je suis le/la seul(e) capitaine à bord.", handler : () => {props.actionProvider.captain()}},
                    {text : "Je prends enfin soin de moi, ce serait bête de céder.", handler : () => {props.actionProvider.mySelf()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceSport",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je vais faire de la boxe !", handler : () => {props.actionProvider.boxe()}},
                    {text : "Je vais faire du Yoga !", handler : () => {props.actionProvider.yoga()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceWalk",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "A la campagne ! 🌾", handler : () => {props.actionProvider.campagne()}},
                    {text : "En ville ! 🌇", handler : () => {props.actionProvider.ville()}},
                    {text : "En forêt ! 🌲", handler : () => {props.actionProvider.forest()}},
                    {text : "Au bord de la mer ! 🌊", handler : () => {props.actionProvider.ocean()}},
                    {text : "A la montagne ! ⛰️", handler : () => {props.actionProvider.montagne()}},
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceDrink",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "De l'eau, tout simplement ! 🧊", handler : () => {props.actionProvider.water()}},
                    {text : "Du café, c'est tonifiant ! ☕️", handler : () => {props.actionProvider.coffee()}},
                    {text : "Un thé, so british ! 🍵", handler : () => {props.actionProvider.tea()}},
                    {text : "Une infusion, pour m'apaiser ! 🍃", handler : () => {props.actionProvider.infusion()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceMeditation",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Oui, je le savais.", handler : () => {props.actionProvider.knowMeditation()}},
                    {text : "Non, je ne le savais pas.", handler : () => {props.actionProvider.dontKnowMeditation()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceCalling",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Un membre de ma famille !", handler : () => {props.actionProvider.family()}},
                    {text : "Un(e) ami(e) !", handler : () => {props.actionProvider.friend()}},
                    {text : "Un(e) collègue !", handler : () => {props.actionProvider.collegue()}}
                  ]
                }
                {...props}
              />
          },

          //ANCRAGE
          {
            widgetName: "startAncrage",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Allons-y !", handler : () => {props.actionProvider.startAncrageVideo()}},
                    {text : "Retour", handler : () => {props.actionProvider.retourExercices("Je veux revenir aux exercices", 1500)}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "feelingAncrage",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je vais mieux, je ne suis plus en crise !", handler : () => {props.actionProvider.noCriseAncrage()}},
                    {text : "Je vais mieux mais je me sens encore un peu fragile...", handler : () => {props.actionProvider.betterAncrage()}},
                    {text : "A l'aide, je suis toujours en crise !", handler : () => {props.actionProvider.criseAncrage()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceFeelingAncrage",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Reboosté(e) !", handler : () => {props.actionProvider.nextFeelingAncrage("Reboosté(e) !")}},
                    {text : "Réconforté(e) !", handler : () => {props.actionProvider.nextFeelingAncrage("Réconforté(e) !")}},
                    {text : "Serein(e) !", handler : () => {props.actionProvider.nextFeelingAncrage("Serein(e) !")}},
                    {text : "Fier(ère) !", handler : () => {props.actionProvider.nextFeelingAncrage("Fier(ère) !")}},
                    {text : "Un peu de tout ça !", handler : () => {props.actionProvider.nextFeelingAncrage("Un peu de tout ça !")}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "choiceNewActivityAncrage",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je recommence l'activité sur l'ancrage de soi !", handler : () => {props.actionProvider.restartVideoAncrage2()}},
                    {text : "Je réalise une autre activité présente sur le module Alerte !", handler : () => {props.actionProvider.retourExercices("Je veux faire une autre activité du module Alerte", 1500)}},
                    {text : "Je fais une activité de mon côté.", handler : () => {props.actionProvider.activityUserAncrage2()}}
                  ]
                }
                {...props}
              />
          },

          {
            widgetName: "activityAncrage",
            widgetFunc: (props) => 
              <Buttons
                buttons = {
                  [
                    {text : "Je veux refaire l'activité !", handler : () => {props.actionProvider.restartVideoAncrage()}},
                    {text : "Je veux faire une autre activité du module Alerte !", handler : () => {props.actionProvider.retourExercices("Je veux faire une autre activité du module Alerte.", 1500)}},
                    {text : "Je vais pratiquer une activité de mon côté.", handler : () => {props.actionProvider.activityUserAncrage()}}
                  ]
                }
                {...props}
              />
          },

          //GIFS
          {
            widgetName: "gifSerein",
            widgetFunc: (props) => <BotImage {...props} name="serein" link="https://media.giphy.com/media/KzPyP3UrDTXxNZ6SiR/giphy.gif" />
          },

          {
            widgetName: "gifFier",
            widgetFunc: (props) => <BotImage {...props} name="fier" link="https://media.giphy.com/media/YWW7VnJuHoCemgL2cx/giphy.gif" />
          },

          {
            widgetName: "gifSurpasse",
            widgetFunc: (props) => <BotImage {...props} name="surpasse" link="https://media.giphy.com/media/1BFEEIo4h1BuTH8eqP/giphy.gif" />
          },

          {
            widgetName: "gifChef",
            widgetFunc: (props) => <BotImage {...props} name="chef" link="https://media.giphy.com/media/qadvd1vBaZBBu/giphy.gif" />
          },

          {
            widgetName: "gifCleaning",
            widgetFunc: (props) => <BotImage {...props} name="cleaning" link="https://media.giphy.com/media/l2JhL1AzTxORUTDlC/giphy.gif" />
          },

          {
            widgetName: "gifYoga",
            widgetFunc: (props) => <BotImage {...props} name="yoga" link="https://media.giphy.com/media/ZD38mmOi73Vx2pH4lU/giphy.gif" />
          },

          {
            widgetName: "gifYoga2",
            widgetFunc: (props) => <BotImage {...props} name="yoga" link="https://media.giphy.com/media/MZW5o8f5RaH0Q/giphy.gif" />
          },

          {
            widgetName: "gifBoxe",
            widgetFunc: (props) => <BotImage {...props} name="boxe" link="https://media.giphy.com/media/1iTHPSWUwhzOCtA4/giphy.gif" />
          },

          {
            widgetName: "gifCampagne",
            widgetFunc: (props) => <BotImage {...props} name="campagne" link="https://media.giphy.com/media/ubktuhEHhnb5C/giphy.gif" />
          },

          {
            widgetName: "gifVille",
            widgetFunc: (props) => <BotImage {...props} name="city" link="https://media.giphy.com/media/l0HlGs7u3G9dkQ8DK/giphy.gif" />
          },

          {
            widgetName: "gifVitrine",
            widgetFunc: (props) => <BotImage {...props} name="shopping" link="https://media.giphy.com/media/VTXzh4qtahZS/giphy.gif" />
          },

          {
            widgetName: "gifForest",
            widgetFunc: (props) => <BotImage {...props} name="forest" link="https://media.giphy.com/media/UxTZDNv0Zej4s/giphy.gif" />
          },

          {
            widgetName: "gifOcean",
            widgetFunc: (props) => <BotImage {...props} name="ocean" link="https://media.giphy.com/media/VdfFE6Wpw93fW/giphy.gif" />
          },

          {
            widgetName: "gifOcean2",
            widgetFunc: (props) => <BotImage {...props} name="ocean" link="https://media.giphy.com/media/NNoiOYArMdd6w/giphy.gif" />
          },

          {
            widgetName: "gifMontagne",
            widgetFunc: (props) => <BotImage {...props} name="mountain" link="https://media.giphy.com/media/Z98zIhtiePuIo/giphy.gif" />
          },

          {
            widgetName: "gifMontagne2",
            widgetFunc: (props) => <BotImage {...props} name="mountain" link="https://media.giphy.com/media/2csuIJj6TmuKA/giphy.gif" />
          },

          {
            widgetName: "gifJCVD",
            widgetFunc: (props) => <BotImage {...props} name="water" link="https://media.giphy.com/media/WR8XvgP6EoJBB0H41h/giphy.gif" />
          },

          {
            widgetName: "gifCoffee",
            widgetFunc: (props) => <BotImage {...props} name="coffee" link="https://media.giphy.com/media/LG1ZZP1Go0D8j7YsWy/giphy.gif" />
          },

          {
            widgetName: "gifTea",
            widgetFunc: (props) => <BotImage {...props} name="tea" link="https://media.giphy.com/media/SvFO7wRUFKtAoNB8aL/giphy.gif" />
          },

          {
            widgetName: "gifInfusion",
            widgetFunc: (props) => <BotImage {...props} name="infusion" link="https://media.giphy.com/media/wZnKWhlvXil2M/giphy.gif" />
          },

          {
            widgetName: "gifGardening",
            widgetFunc: (props) => <BotImage {...props} name="garden" link="https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif" />
          },

          {
            widgetName: "gifMeditation",
            widgetFunc: (props) => <BotImage {...props} name="mediation" link="https://media.giphy.com/media/zhRA0okWxTGiu78uSk/giphy.gif" />
          },

          {
            widgetName: "gifCalling",
            widgetFunc: (props) => <BotImage {...props} name="calling" link="https://media.giphy.com/media/JzsG0EmHY9eKc/giphy.gif" />
          },

          {
            widgetName: "gifFamily",
            widgetFunc: (props) => <BotImage {...props} name="family" link="https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif" />
          },

          {
            widgetName: "gifFriend",
            widgetFunc: (props) => <BotImage {...props} name="friend" link="https://media.giphy.com/media/VduFvPwm3gfGO8duNN/giphy.gif" />
          },

          {
            widgetName: "gifCollegue",
            widgetFunc: (props) => <BotImage {...props} name="collegue" link="https://media.giphy.com/media/3yCpZMrRxMuQdWOLSA/giphy.gif" />
          },

          {
            widgetName: "gifEndCollab",
            widgetFunc: (props) => <BotImage {...props} name="end collaboration" link="https://media.giphy.com/media/LpQrsRA3zOuJNk7KYt/giphy.gif" />
          },

          {
            widgetName: "gifGoodNews",
            widgetFunc: (props) => <BotImage {...props} name="good news" link="https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif" />
          },

          {
            widgetName: "gifTakeControl",
            widgetFunc: (props) => <BotImage {...props} name="take control" link="https://media.giphy.com/media/P07JtCEMQF9N6/giphy.gif" />
          },

          //VIDEOS
          {
            widgetName: "videoRespiration",
            widgetFunc: (props) => <BotVideo {...props} link="https://youtu.be/XAS3tqWUO9E" />
          },

          {
            widgetName: "videoAncrage",
            widgetFunc: (props) => <BotVideo {...props} link="https://youtu.be/IYzJWenV3jo" />
          }
        ]
      }

    return(
        <Fragment>
            {name ?
                <section className="chatbot-container">
                    <header className="chatbot-header">
                      <div className="chatbot-header-left">
                        <Link to="/">
                            <RiLogoutCircleLine className="logout-icon" onClick={() => {localStorage.clear("NAME")}}/>
                        </Link>
                        <h1>Module Alerte</h1>
                      </div>
                      <div className="chatbot-header-right">
                        {isOpen ?
                            <Fragment>
                              <RiInformationLine className="info-icon-close" onClick={() => {setOpen(!isOpen)}} />
                              <Informations />
                            </Fragment>
                          :
                          <RiInformationFill className="info-icon" onClick={() => {setOpen(!isOpen)}} />
                        }
                      </div>
                    </header>
                    <div className="chatbot-content">
                        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
                    </div>
                </section>
                :
                history.push("/")
            }
        </Fragment>
    );
}