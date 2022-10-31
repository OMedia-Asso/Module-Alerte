/* Liste les actions et chemins des réponses en fonction des clics de l'utilisateur. */
export default class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  //TEMPLATE MESSAGE FOR BOT
  templateBotMessage(text, delay, avatar, widgetName) {
    const botMessage = this.createChatBotMessage(
      text,
      {
        withAvatar: avatar,
        delay: delay,
        widget: widgetName
      }
    )
    this.updateChatbotState(botMessage)
  }

  //TEMPLATE MESSAGE FOR USER
  templateClientMessage(text, widgetName) {
    const clientMessage = this.createClientMessage(text,
      {
        widget: widgetName
      })
    this.updateChatbotState(clientMessage)
  }

  updateChatbotState(message) { 
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }

  //FINAL MESSAGE
  finalMessage(startDelay) {
    this.templateBotMessage("Bon... je crois que notre collaboration s'achève pour aujourd'hui !", startDelay, true, "gifEndCollab")
    this.templateBotMessage("On se recontacte si ça ne va pas, je suis toujours là ! 😉 Bonne continuation à toi ! 👋", startDelay + 2000, false)
  }

  //DISCORD FINAL MESSAGE
  discordMessage(startDelay) {
    this.templateBotMessage(<a href="https://discord.com/channels/999601480065630218/999601481319710807" alt="redirection vers le canal Dicord de FedAlert'" rel="noreferrer" target="_blank"  style={{color:'#562287'}}> 📲 Si tu souhaites en discuter, je te donne rendez-vous sur le canal Discord #FedAlert ! 💬 </a>, startDelay + 3000, false)
  }

  //START
  criseNow() {
    //Client response
    this.templateClientMessage("Je fais une crise !")

    //Bot response
    this.templateBotMessage("Tu dois être dans tous tes états ! 😱", 1500, false)
    this.templateBotMessage("Ne t'inquiète pas... on va gérer ça ensemble comme des chefs ! 😉💪", 3500, false)
    this.exercices(7500, false)
  }

  crisePast() {
    //Client response
    this.templateClientMessage("J'ai fait une crise...")

    //Bot response
    this.templateBotMessage("D'accord... 😢", 1500, true)
    this.templateBotMessage("Bon, pas de panique ! On va gérer cela ensemble ! 😉", 3500, false)
    this.exercices(5500, false)
  }

  exercices(startDelay, avatar) {
    this.templateBotMessage("Voici une liste d'activités qui t'aideront à t'apaiser. Choisis l'exercice qui te plaît le plus :", startDelay, avatar, "exerciceChoice")
  }

  retourExercices(text, startDelay) {
    this.templateClientMessage(text)
    this.exercices(startDelay, true)
  }

  //RESPIRATION
  respiration() {
    //Client response
    this.templateClientMessage("Un exercice de respiration.")

    //Bot response
    this.templateBotMessage("Pour cette activité, tu vas devoir... respirer ! 😄", 1500, true)
    this.templateBotMessage("Ecoute la vidéo ou lis-en les sous-titres pour faire l'exercice et t'apaiser.", 3500, false)
    this.templateBotMessage("On commence ?", 5500, false, "startRespiration")
  }

  startRespirationVideo() {
    //Client response
    this.templateClientMessage("Allons-y !")

    //Bot response
    this.templateBotMessage("Voici la vidéo à suivre : selon l'environnement dans lequel tu te trouves, tu as la possibilité de l'écouter et/ou de lire les sous-titres.", 1500)
    this.templateBotMessage("A la fin de la vidéo, tu auras le choix de la revoir pour refaire l'exercice ou de continuer à discuter avec moi. 😉", 4500, true, "videoRespiration")
    this.templateBotMessage("Si tu as correctement pratiqué l'activité, tu devrais te sentir libéré(e)", 155000, true)
    this.templateBotMessage("Est-ce le cas ?", 156500, false, "afterRespiration")
  }

  noCriseRespiration() {
    this.templateClientMessage("Je ne suis plus en crise !")

    this.templateBotMessage("Félicitations ! 🎉", 1500, true)
    this.templateBotMessage("Tu as su gérer ta crise de T.C.A à merveille !", 3500, false)
    this.templateBotMessage("Quels sont tes ressentis actuellement ?", 5500, false, "feelingResp")
  }

  fragileRespiration() {
    this.templateClientMessage("Je suis encore fragile...")

    this.templateBotMessage("C'est quelque chose qui peut arriver !", 1500, true)
    this.templateBotMessage("Parfois, la crise est tellement forte qu'on ne peut pas s'en débarrasser comme ça 😢", 3500, false)
    this.templateBotMessage("Tu as deux solutions : soit tu refais une activité FedAlert', soit tu trouves une occupation de ton côté !", 5500, false, "choiceNewActivity")
  }

  criseRespiration() {
    this.templateClientMessage("Je suis toujours en crise !")

    this.templateBotMessage("😱", 1500, true)
    this.templateBotMessage("Ce que je te propose, c'est de refaire l'activité...", 3500, false)
    this.templateBotMessage("Ou, enfin, de faire une activité de ton côté !", 5500, false, "choiceNewActivity")
  }

  serainResp() {
    this.templateClientMessage("Je suis serein(e) !")

    this.templateBotMessage("Génial ! ", 1500, true, "gifSerein")
    this.finalMessage(4500)
    this.discordMessage(4600)
  }

  fierResp() {
    this.templateClientMessage("Je suis fier(ère) !")

    this.templateBotMessage("Génial ! ", 1500, true, "gifFier")
    this.finalMessage(4500)
    this.discordMessage(4600)
  }

  surpResp() {
    this.templateClientMessage("Je me suis surpassé(e) !")

    this.templateBotMessage("Génial ! ", 1500, true, "gifSurpasse")
    this.finalMessage(4500)
    this.discordMessage(4600)
  }

  activityUser() {
    this.templateClientMessage("Je vais faire une activité de mon côté.")

    this.templateBotMessage("Tu as tout un tas d'activités qui peuvent t'aider à décompresser !", 1500, true)
    this.templateBotMessage("Que comptes-tu faire ?", 3500, false, "choiceActivity")
  }

  writing() {
    this.templateClientMessage("Je vais écrire.")

    this.templateBotMessage("Ecrire te permet d'exprimer tes émotions.", 1500, true)
    this.templateBotMessage("Je te fais confiance pour ne pas céder à tes pulsions alimentaires...", 3500, false, "choiceWriting")
  }

  captain() {
    this.templateClientMessage("Je suis le/la capitaine.")

    this.templateBotMessage("Oui, chef(fe) !", 1500, true, "gifChef")
    this.finalMessage(4500)
  }

  mySelf() {
    this.templateClientMessage("Je prends enfin soin de moi.")

    this.templateBotMessage("Totalement ! Reste dans cette détermination !", 1500, true)
    this.finalMessage(4500)
  }

  cleaning() {
    this.templateClientMessage("Je vais faire du ménage.")

    this.templateBotMessage("Crée-toi une vraie playlist pour faire le ménage en t'amusant !", 1500, true, "gifCleaning")
    this.templateBotMessage("Faire le ménage t'occupera l'esprit et les mains, c'est top !", 3500, false)
    this.finalMessage(6500)
  }

  sport() {
    this.templateClientMessage("Je vais faire du sport.")

    this.templateBotMessage("Bonne idée ! 👍", 1500, true)
    this.templateBotMessage("N'hésite pas à pratiquer de la boxe pour te défouler !", 3500, false)
    this.templateBotMessage("Ou alors faire du Yoga pour te détendre tant physiquement qu'émotionnellement !", 5500, false, "gifYoga")
    this.templateBotMessage("Que vas-tu faire alors ?", 8500, true, "choiceSport")
  }

  boxe() {
    this.templateClientMessage("De la boxe.")

    this.templateBotMessage("Joue-la comme Rocky Balboa !", 1500, true, "gifBoxe")
    this.finalMessage(4500)
  }

  yoga() {
    this.templateClientMessage("Du Yoga.")

    this.templateBotMessage("Soin de toi, tu dois prendre !", 1500, true, "gifYoga2")
    this.finalMessage(4500)
  }

  walking() {
    this.templateClientMessage("Je vais me balader.")

    this.templateBotMessage("Trouve la beauté dans des paysages que tu côtoies chaque jour.", 1500, true)
    this.templateBotMessage("Dans quel type d'environnement va se dérouler ta balade ?", 3500, false, "choiceWalk")
  }

  campagne() {
    this.templateClientMessage("A la campagne.")

    this.templateBotMessage('Ah la campagne... le calme absolu, les champs, le "cuicui" des oiseaux...', 1500, true, "gifCampagne")
    this.templateBotMessage("Tout cet espace est à toi et t'aidera à te livérer de cette crise !", 3500, false)
    this.templateBotMessage("Je t'invite à savourer cette chance que tu as de pouvoir profiter de grand air quand tu le souhaites !", 5500, false)
    this.finalMessage(8500)
  }

  ville() {
    this.templateClientMessage("En ville.")

    this.templateBotMessage("La vie de citadin et la proximité avec des commerces en tout genre, quelle chance !", 1500, true, "gifVille")
    this.templateBotMessage("Profite-en pour t'acheter un livre, une décoration pour ton intérieur...", 3500, false)
    this.templateBotMessage("Ou tout simplement pour faire du lèche-vitrine !", 5500, false, "gifVitrine")
    this.finalMessage(8500)
  }

  forest() {
    this.templateClientMessage("En forêt.")

    this.templateBotMessage("La forêt et ses paysages qui changent jours après jour... quelle magie !", 1500, true, "gifForest")
    this.templateBotMessage("Peut-être pourrais-tu prendre des photos à chacune de tes balades d'un lieu précis !", 3500, false)
    this.templateBotMessage("Cela te permettra de comparer les changements au fil des saisons 😊", 5500, false)
    this.finalMessage(8500)
  }

  ocean() {
    this.templateClientMessage("Au bord de la mer.")

    this.templateBotMessage("Un très bon endroit pour méditer, lâcher prise, bercé(e) par le bruit des vagues... 🌊", 1500, true, "gifOcean")
    this.templateBotMessage("Beaucoup de personnes rêveraient de pouvoir se balader en bord de mer !", 3500, false)
    this.templateBotMessage("Savoure cette chance, aie de la gratitude pour ce petit bout de paradis qui te tend les bras !", 5500, false, "gifOcean2")
    this.finalMessage(8500)
  }

  montagne() {
    this.templateClientMessage("A la montagne.")

    this.templateBotMessage("Un super spot pour pratiquer la randonnée !", 1500, true, "gifMontagne")
    this.templateBotMessage("L'air vivifiant de la montagne, ses paysages vallonnés, la faune et la flore qui se rencontre...", 3500, false)
    this.templateBotMessage("Profite de cette chance ! Beaucoup n'ont pas la chance de pouvoir admirer de tels paysages !", 5500, false, "gifMontagne2")
    this.finalMessage(8500)
  }

  drink() {
    this.templateClientMessage("Je vais boire quelque chose.")

    this.templateBotMessage("Bonne idée ! 💡", 1500, true)
    this.templateBotMessage("Cela va tromper tes compulsions et en plus, tu vas t'hydrater !", 3500, false)
    this.templateBotMessage("Que vas-tu boire ?", 5500, false, "choiceDrink")
  }

  water() {
    this.templateClientMessage("Simplement de l'eau.")

    this.templateBotMessage("Comme dit un grand philosophe belge...", 1500, true)
    this.templateBotMessage('"J\'adore l\'eau ! Dans 20-30 ans, y en aura plus !"', 3500, false, "gifJCVD")
    this.finalMessage(6500)
  }

  coffee() {
    this.templateClientMessage("Du café, certainement.")

    this.templateBotMessage("Fais juste attention à ne pas trop en boire !", 1500, true, "gifCoffee")
    this.templateBotMessage("Le but est que tu parviennes à dormir cette nuit. 😉", 3500, false)
    this.finalMessage(6500)
  }

  tea() {
    this.templateClientMessage("Un thé réconfortant.")

    this.templateBotMessage("Very good !", 1500, true)
    this.templateBotMessage("Le thé est un excellent détoxifiant !", 3500, false, "gifTea")
    this.finalMessage(6500)
  }

  infusion() {
    this.templateClientMessage("Une infusion pour m'apaiser")

    this.templateBotMessage("Très bon choix !", 1500, true)
    this.templateBotMessage("En plus, il en existe tout un tas : pour le sommeil, la digestion, pour s'énergiser...", 3500, false, "gifInfusion")
    this.finalMessage(6500)
  }

  gardening() {
    this.templateClientMessage("Je vais jardiner un peu.")

    this.templateBotMessage("On dit que le jardinage réduirait le stress !", 1500, true)
    this.templateBotMessage("C'est donc le bon moment pour arroser tes plantes et t'en occuper !", 3500, false, "gifGardening")
    this.finalMessage(6500)
  }

  meditation() {
    this.templateClientMessage("Je vais méditer.")

    this.templateBotMessage("Ah... la méditation... 🧘", 1500, true)
    this.templateBotMessage("Personnellement, j'adore !", 3500, false, "gifMeditation")
    this.templateBotMessage("Tu savais que des études scientifiques montrent que la méditation a de nombreux bienfaits ?", 5500, false, "choiceMeditation")
  }

  knowMeditation() {
    this.templateClientMessage("Je le savais !")

    this.templateBotMessage("Très bien ! 😄", 1500, true)
    this.finalMessage(4500)
  }

  dontKnowMeditation() {
    this.templateClientMessage("Je ne le savais pas.")

    this.templateBotMessage("La méditation réduit le stress, améliore la digestion, permet de travailler son amplitude...", 1500, true)
    this.finalMessage(4500)
  }

  calling() {
    this.templateClientMessage("Je vais parler avec quelqu'un.")

    this.templateBotMessage("Avoir quelqu'un a qui parler, c'est toujours réconfortant !", 1500, true, "gifCalling")
    this.templateBotMessage("Qui vas-tu appeler ?", 3500, false, "choiceCalling")
  }

  family() {
    this.templateClientMessage("Quelqu'un de ma famille.")

    this.templateBotMessage("Ah... la famille...", 1500, true)
    this.templateBotMessage("On ne la choisit pas mais on est bien content(e) de l'avoir parfois !", 3500, false, "gifFamily")
    this.finalMessage(6500)
  }

  friend() {
    this.templateClientMessage("Un(e) ami(e).")

    this.templateBotMessage("Les amis : la famille qu'on choisit !", 1500, true, "gifFriend")
    this.templateBotMessage("Je suis ravie de voir que tu as des personnes sur qui compter !", 3500, false)
    this.finalMessage(6500)
  }

  collegue() {
    this.templateClientMessage("Un(e) collègue.")

    this.templateBotMessage("Parfois, nos collègues deviennent des amis.", 1500, true)
    this.templateBotMessage("Et parfois, des amis deviennent des collègues !", 3500, false)
    this.templateBotMessage("L'amitié transcende tous les domaines de vie !", 5500, false, "gifCollegue")
    this.finalMessage(8500)
  }

  //ANCRAGE
  ancrage() {
    //Client response
    this.templateClientMessage("Un exercice d'ancrage")

    //Bot response
    this.templateBotMessage("Pour cet exercice, tout est question d'enracinement. 🌳", 1500, true)
    this.templateBotMessage("Tu vas être amené(e) à te reconnecter à ton environnement direct...", 3500, false)
    this.templateBotMessage("Et ainsi, garder les pieds sur Terre !", 5500, false)
    this.templateBotMessage("On commence ?", 7500, false, "startAncrage")
  }

  startAncrageVideo() {
    //Client response
    this.templateClientMessage("Allons-y !")

    //Bot response
    this.templateBotMessage("Voici la vidéo à suivre : tu as le choix de l'écouter et/ou de lire les sous-titres selon l'environnement où tu te trouves. ", 1500)
    this.templateBotMessage("A la fin de la vidéo, tu auras le choix de la revoir pour refaire l'exercice ou de continuer à discuter avec moi. 😉", 4500, true, "videoAncrage")
    this.templateBotMessage("Normalement, tu devrais te sentir beaucoup mieux ! 😄", 575000, true)
    this.templateBotMessage("Est-ce le cas ?", 576500, false, "feelingAncrage")
  }

  noCriseAncrage() {
    this.templateClientMessage("Je vais mieux.")

    this.templateBotMessage("Super nouvelle ça !", 1500, true, "gifGoodNews")
    this.templateBotMessage("Tu as su gérer tout ça comme un(e) vrai(e) chef(fe) ! 👍", 3500, false)
    this.templateBotMessage("Comment tu te sens ?", 5500, false, "choiceFeelingAncrage")
  }

  nextFeelingAncrage(text) {
    this.templateClientMessage(text)

    this.templateBotMessage("Super cool ! 💪", 1500, true)
    this.finalMessage(4500)
    this.discordMessage(4600)
  }

  betterAncrage() {
    this.templateClientMessage("Je suis encore un peu fragile...")

    this.templateBotMessage("Ne t'inquiète pas ça arrive !", 1500, true)
    this.templateBotMessage("Parfois, la crise que tu vis est tellement forte que tu ne parviens pas à t'en débarrasser du premier coup ! 😢", 3500, false)
    this.templateBotMessage("Tu as différentes options qui s'offrent à toi maintenant...", 5500, false)
    this.templateBotMessage('1) Soit tu recommences l\'activité "L\'ancrage"...', 7500, false)
    this.templateBotMessage("2) Soit tu réalises une autre activité disponible sur FedAlert'...", 9500, false)
    this.templateBotMessage("3) Soit tu pratiques une activité de ton côté !", 11500, false)
    this.templateBotMessage("Que choisis-tu de faire ? 😊", 14500, true, "choiceNewActivityAncrage")
  }

  criseAncrage() {
    this.templateClientMessage("Je suis toujours en crise !")

    this.templateBotMessage("😱", 1500, true)
    this.templateBotMessage("Tu as le choix : soit tu refais l'activité proposée...", 3500, false)
    this.templateBotMessage("Soit tu en fais une autre disponible sur FedAlert'...", 5500, false)
    this.templateBotMessage("Soit tu pratiques une activité de ton côté !", 7500, false, "activityAncrage")
  }

  restartVideoAncrage() {
    this.templateClientMessage("Je veux refaire l'exercice !")

    this.templateBotMessage("Pas de soucis ! Je rembobine tout et on recommence ! 😉", 1500, true)
    this.templateBotMessage("Terminé !", 4500, true, "videoAncrage")
    this.templateBotMessage("Normalement, tu devrais te sentir beaucoup mieux ! 😄", 14500, true)
    this.templateBotMessage("Est-ce le cas ?", 16000, false, "feelingAncrage")
  }

  restartVideoAncrage2() {
    this.templateClientMessage("Je veux refaire l'exercice !")

    this.templateBotMessage("OK ! C'est reparti pour un tour ! 😉", 1500, true, "videoAncrage")
    this.templateBotMessage("Normalement, tu devrais te sentir beaucoup mieux ! 😄", 11500, true)
    this.templateBotMessage("Est-ce le cas ?", 13500, false, "feelingAncrage")
  }

  activityUserAncrage() {
    this.templateClientMessage("Je vais faire une activité de mon côté")

    this.templateBotMessage("Tu peux faire tout un tas de choses qui te permettront de décompresser !", 1500, true)
    this.templateBotMessage("Le but est de ne pas céder à ta compulsion et ce, coûte que coûte ! 💪", 3500, false)
    this.templateBotMessage("Que comptes-tu faire ?", 5500, false, "choiceActivity")
  }

  activityUserAncrage2() {
    this.templateClientMessage("Je vais faire une activité de mon côté")

    this.templateBotMessage("Tout un tas d'activités peut t'aider à reprendre le contrôle de la situation.", 1500, true, "gifTakeControl")
    this.templateBotMessage("Le but de ces activités est de t'occuper l'esprit et les mains afin de ne pas craquer.", 3500, false)
    this.templateBotMessage("Que comptes-tu faire ?", 5500, false, "choiceActivity")
  }

}
