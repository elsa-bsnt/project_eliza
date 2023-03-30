import { useState } from 'react'
import logoBlanc from './assets/logo_blanc.png'
import museeBerlin from './assets/musee_berlin.jpeg'
import art from './assets/art.jpeg'
import danse from './assets/danse.jpeg'
import musique from './assets/concert.jpeg'
import theatre from './assets/theatre.jpeg'
import expoMonet from './assets/expo_monet.jpg'
import nantes from './assets/voyage_nantes.jpg'
import arles from './assets/arles.jpg'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"
import './App.css'
import { useAttrs } from 'vue'

function App() {

  [count, setCount] = useState(0)

  const lieu = ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Montpellier", "Starsbourg", "Bordeaux", "Lille"]

  const activites = ["Musée", "Exposition", "Danse", "Musique", "Théâtre", "Site historique"]

  const meteo = ["En extérieur", "En intérieur", "Les deux"]

  const temps = ["Le matin", "Le midi", "L'après-midi", "En soirée", "La nuit"]

  const showPropositions = () => {

    if (count === 0){
        return lieu.map((dest)=> <button key={dest} className="m-5" onClick={()=>{
            incrementCount(dest);
            window.scrollTo(0, document.body.scrollHeight);

          }}>{dest}</button>);
        }else if (count === 1){
            return activites.map((dest)=> <button key={dest} className="m-5" onClick={()=>{
                incrementCount(dest);
                window.scrollTo(0, document.body.scrollHeight);
    
            }}>{dest}</button>);
        }else if (count === 2){
            return meteo.map((dest)=> <button key={dest} className="m-5" onClick={()=>{
                incrementCount(dest);
                window.scrollTo(0, document.body.scrollHeight);
    
            }}>{dest}</button>);
        }else if (count === 3){
            return temps.map((dest)=> <button key={dest} className="m-5" onClick={()=>{
                incrementCount(dest);
                window.scrollTo(0, document.body.scrollHeight);

        }}>{dest}</button>);
    }else if (count === 4){
}
  }

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Bonjour, je suis Ophélia ! Posez moi une question concernant les dernières sorties culturelles et je vous répondrait avec joie !",
      sender: "ChatGpt"
    }
  ]) // []

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage]; //all the old message, + the new message

    // update our messages state
    setMessages(newMessages);

    // set a typing indicator (chatgpt is taping)
    setTyping(true);

    // process message to chatGpt (send it over and the response)
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    // chatMessages { sender: "user" or "chatGPT" message: "The message content here"}
    // apiMessages { role: "user" or "assistant", content: "The message content here"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender === "ChatGPT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message}
    });

    //role: "user" -> a message from th user, "assistant" -> a response from chatGPT
    // "system" -> generally one initial message defining HOW we want chatgpt to talk

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like it's about cultural outings in France in French" // Speak  
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages" : [
        systemMessage, 
        ...apiMessages // [message1,message2,message3]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST", 
      headers: {
        "Authorization": "Bearer " + import.meta.env.VITE_APP_API_TOKEN,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setTyping(false);
    })
  }

  return (
    <div className="App">
      <header class="header">
        <a href="" class="logo">
          <img src={logoBlanc} className='logo_blanc' alt="logo Sortie&Culture en blanc"/>
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="#first" className='header_right' class="hover-underline-animation">Le concept</a></li>
          <li><a href="#second" className='header_right' class="hover-underline-animation">L'Art et la Culture</a></li>
          <li><a href="#trois" className='header_right' class="hover-underline-animation">Les dernieres sorties culturelles</a></li>
          <li><a href="#chatbot2" className='header_right' class="hover-underline-animation">Lancer le Chatbot</a></li>
        </ul>
      </header>
      <div className="content">
        <div className='filtre'>
          <h1>Découvrez les sorties à <br></br>faire autour de vous.</h1>
          <hr className='barre_home'></hr>
          <p className='courte_description'>Découvrez des sorties culturelles près de vous grâce à notre chatbot ! <br></br>Posez des questions, 
            recevez des réponses rapides et précises, et explorez de nouvelles activités culturelles dans votre 
            région. <br></br>Cliquez sur le bouton ci-dessous pour démarrer la conversation.
          </p>
          <button className='button_home'>
            <a href="#chatbot2" className='aBis'>Lancer le Chatbot</a>
          </button>
        </div>
      </div>
      <div id='first'></div>
      <div className='duo' >
        <div className='gauche'>
          <h2 className='titre'>ㅤㅤLe concept</h2>
          <hr className='barre_desc'></hr>
            <div className='espace'>
              <p className='texte2'>Ophélia est là pour vous aider à trouver des idées de sorties qui répondent à vos goûts et préférences. 
                Vous pouvez lui poser des questions, comme "Quelles sont les expositions d'art en cours dans ma ville ?", 
                "Où puis-je trouver des concerts de musique classique ce week-end ?", ou "Y a-t-il des pièces de théâtre pour enfants 
                dans les environs ?" et elle vous fournira des réponses rapides et précises. </p>
              <p className='texte2'>Notre base de données est constamment mise 
              à jour pour vous offrir les informations les plus récentes et les plus pertinentes sur les événements culturels de votre 
              région. Nous avons également des recommandations personnalisées pour vous aider à découvrir de nouveaux artistes, musées, 
              théâtres et autres sites culturels.
              </p> 
            </div>
        </div>
        <div className='droite'>
          <img src={museeBerlin} className="musee_berlin" alt="façade d'un musée à Berlin"/>
        </div>
      </div>
      <div className='center'>
        <button className='button_home2' id='second'> 
          <a className='button_white' href="#chatbot2" >Lancer le Chatbot </a>
        </button>
      </div>
      <div className='art_culture'>
        <h2 className='titre_culture'>L'Art et la Culture</h2>
        <div className='quatre'>
          <div className='art'>
            <img src={art} className="art_img" alt="Personne dans un musée regardant une toile"/>
            <h2 className='titre2'>Musées</h2>
            <p className='texte'>Les musées sont des lieux d'apprentissage et de découverte où les visiteurs peuvent explorer 
            des collections d'objets d'intérêt historique, culturel ou scientifique.</p>
          </div>
          <div className='danse'>
            <img src={danse} className="art_img" alt="Femme dansant dans un opéra"/>
            <h2 className='titre2'>Danse</h2>
            <p className='texte'>La danse consiste en une pratique artistique qui requiert l'exécution d'une suite de mouvements 
            corporels synchronisés et rythmiques, habituellement exécutés en accord avec une musique donnée.</p>
          </div>
          <div className='musique'>
            <img src={musique} className="art_img" alt="Concert"/>
            <h2 className='titre2'>Musique</h2>
            <p className='texte'>La musique est une forme d'art qui utilise des sons organisés pour créer une expérience 
            esthétique et émotionnelle pour l'auditeur.</p>
          </div>
          <div className='theatre'>
            <img src={theatre} className="art_img" alt="Pièce de théâtre"/>
            <h2 className='titre2'>Théâtre</h2>
            <p className='texte'>Le théâtre désigne une modalité de représentation artistique au cours de laquelle les acteurs jouent 
            des rôles et racontent des récits en utilisant des dialogues, des gestes, des expressions faciales et des mouvements 
            corporels. </p>
          </div>
        </div>
      </div> 
      <div id='trois'></div>
      <div className='nouveauté'>
        <div className='duo2'>
          <div className='gauche_new'>
            <div className='titre3'>ㅤLes dernieres sorties culturelles</div>
            <hr className='barre_new'></hr>
            <div className='desc_new'>
              Nous sommes heureux de partager avec vous les dernières nouveautés en matière de cinéma, 
              musique, théâtre, expositions et bien plus encore. Restez à jour avec les derniers événements culturels en France en
              consultant régulièrement notre site.
            </div>
          </div>
          <div className='space2'>
            <div className='cercle'></div>
            <div className='cercle2'></div>
            <div className='cercle3'></div>
          </div>
          <div className='droite_new'>
            <div className='sortie1'>
              <img src={expoMonet} className="monet_img" alt="photo d'un peintre"/>
              <div className='blabla'>
                <div className='titre_spectacle'>Monet / Fehr. Un Pont, Un Champ, Un Pays sans fin</div>
                <div className='type'>Exposition</div>
                <div className='quand'>📅 Du 15 novembre 2022 au 25 juin 2023</div>
                <div className='lieu'>📍Musée Marmottan Monet - 2 rue Louis Boilly, Paris</div>
              </div>
            </div>
            <div className='descriptif'>Le musée Marmottan Monet invite l'artiste suisse Marc Antoine Fehr à dialoguer avec ses 
              collections.
            </div>
            <hr className='barre_claire'></hr>
            <div className='sortie1'>
              <img src={nantes} className="monet_img" alt="photo d'un peintre"/>
              <div className='blabla'>
                <div className='titre_spectacle'>Le Voyage à Nantes</div>
                <div className='type'>Manifestation artistique</div>
                <div className='quand'>📅 Du 1 juillet au 3 septembre 2023</div>
                <div className='lieu'>📍Ville de Nantes, Loire-Atlantique</div>
              </div>
            </div>
            <div className='descriptif'>Chaque été depuis 2012, le Voyage à Nantes met en scène la cité des Ducs de Bretagne en multipliant les propositions culturelles, gratuites.
            </div>
            <hr className='barre_claire'></hr>
            <div className='sortie1'>
              <img src={arles} className="monet_img" alt="photo d'un peintre"/>
              <div className='blabla'>
                <div className='titre_spectacle'>Les Rencontres d'Arles</div>
                <div className='type'>Festival de photographie</div>
                <div className='quand'>📅 Du 3 juillet au 24 septembre 2023</div>
                <div className='lieu'>📍Ville d'Arles, Bouches du Rhône</div>
              </div>
            </div>
            <div className='descriptif1'>Chaque été depuis 1970, Arles accueille Les Rencontres de la photographie, un festival de renommée internationale. 
            </div>
          </div>
        </div>
      </div>
      <div className='center'>
        <button className='button_home2'> 
          <a href="#chatbot2" className='button_white'>Lancer le Chatbot </a>
        </button>
      </div>
      <div className='citation'>
        <div className='filtre2'>
          <div className='guillemets'>"</div>
          <div className='texte4'>La culture n'est pas un luxe, mais une nécessité pour comprendre le monde et pour se comprendre soi-même.</div>
          <div className='auteur'>Edward T. Hall</div>
        </div>
      </div>
      <div id='chatbot2'></div>
      <div className='duo3'>
        <div className='gauche5'>
          <div className='titre5'>ㅤParler avec Ophélia</div>
          <hr className='barre_new'></hr>
            <div className='desc_new2'>
            Ophélia est un chatbot conçu pour vous aider à découvrir et à planifier des sorties culturelles dans votre région. 
            Que vous cherchiez des événements culturels à proximité de chez vous ou que vous souhaitiez organiser une sortie 
            culturelle, Ophélia est là pour vous aider. Avec une vaste base de données d'activités culturelles, de musées, de 
            spectacles, de concerts et plus encore, Ophélia peut vous recommander des options adaptées à vos goûts et à vos intérêts. 
            Avec sa convivialité et son efficacité, Ophélia est votre allié pour une expérience culturelle réussie.
            </div>
        </div>
      <div style={{ position: "relative", height: "500px"}} id='chatbot'>
        <MainContainer id='MainContainer'>
          <ChatContainer>
            <MessageList
              scrollBehavior='smooth'
              typingIndicator={typing ? <TypingIndicator content="Ophélia est train d'écrire"/> : null}
            >
              {messages.map((message,i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Tapez votre message ici' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
      </div>
      <div>
            {showPropositions()}
      </div>

      <footer>
        <div className='tableau'>
          <div className='APropos'>
            <div className='titre4'>A propos</div>
            <div className='texte_footer1'>Sortie&Culture est un chatbot pratique et facile d'utilisation qui permet à ses 
            utilisateurs de découvrir les événements culturels se déroulant autour d'eux. Que ce soit des expositions, des concerts, 
            des spectacles de théâtre, ou des projections de films, Sortie&Culture peut fournir des informations détaillées sur ces 
            événements, y compris la date, l'heure et le lieu. En interagissant avec le chatbot, les utilisateurs peuvent préciser 
            leurs préférences culturelles et leur emplacement géographique afin de recevoir des suggestions personnalisées pour leurs
             sorties. Sortie&Culture est donc l'outil idéal pour les passionnés de culture qui souhaitent découvrir les événements 
             les plus intéressants de leur région.</div>
          </div>
          <div className='info'>
            <div className='titre4'>Information</div>
            <div className='texte_footer'>Mentions légales</div>
            <div className='texte_footer'>Confidantialité</div>
            <div className='texte_footer'>Acessibilité</div>
            <div className='texte_footer'>FAQ</div>
          </div>
          <div className='navigation'>
            <div className='titre4'>Nous contacter</div>
            <div className='texte_footer'>sortie&culture@paris.com</div>
            <div className='texte_footer'>+33 01 23 45 67 89</div>
            <div className='texte_footer'>Paris, France</div>
          </div>
        </div>
        <hr className='barre_footer'></hr>
        <div className='copyright'>Copyright © 2023 Sortie&Culture</div>
      </footer>
    </div>
  );
}


export default App
