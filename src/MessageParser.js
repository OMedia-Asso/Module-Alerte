/* Fonction d'analyse des messages pour les redirigier vers la bonne action. */
export default class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  //RECONNAISSANCE DE MOTS CLES
  parse(message) {
    // const lowerCaseMessage = message.toLowerCase()
    
    // if (lowerCaseMessage.includes("bonjour")) {
    //   this.actionProvider.greet()
    // }

    // if (lowerCaseMessage.includes("crise")) {
    //   this.actionProvider.crise()
    // }

    // if (!message) {
    //   this.actionProvider.empty()
    // }
  }
}