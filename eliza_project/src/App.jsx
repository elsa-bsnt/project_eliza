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
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={logoBlanc} className="logo_blanc" alt="Logo en noir de Sortie&Culture"/>
        <p className='header_right'>Lancer le Chatbot</p>
      </div>
      <div className="content">
        <div className='filtre'>
          <h1>Découvrez les sorties à <br></br>faire autour de vous.</h1>
          <hr className='barre_home'></hr>
          <p className='courte_description'>Découvrez des sorties culturelles près de vous grâce à notre chatbot ! <br></br>Posez des questions, 
            recevez des réponses rapides et précises, et explorez de nouvelles activités culturelles dans votre 
            région. <br></br>Cliquez sur le bouton ci-dessous pour démarrer la conversation.
          </p>
          <button className='button_home'>Lancer le Chatbot</button>
        </div>
      </div>
      <div className='duo'>
        <div className='gauche'>
          <h2 className='titre'>ㅤㅤLe concept</h2>
          <hr className='barre_desc'></hr>
            <div className='espace'>
              <p className='texte2'>Notre chatbot est là pour vous aider à trouver des idées de sorties qui répondent à vos goûts et préférences. 
                Vous pouvez poser des questions au chatbot, comme "Quelles sont les expositions d'art en cours dans ma ville ?", 
                "Où puis-je trouver des concerts de musique classique ce week-end ?", ou "Y a-t-il des pièces de théâtre pour enfants 
                dans les environs ?" et il vous fournira des réponses rapides et précises. </p>
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
        <button className='button_home2'>Lancer le Chatbot</button>
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
            <div className='grille'>
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
      </div>
      <div className='center'>
        <button className='button_home2'>Lancer le Chatbot</button>
      </div>
      <div className='citation'>
        <div className='filtre2'>
          <div className='guillemets'>"</div>
          <div className='texte4'>La culture n'est pas un luxe, mais une nécessité pour comprendre le monde et pour se comprendre soi-même.</div>
          <div className='auteur'>Edward T. Hall</div>
        </div>
      </div>
      <div className='chatbot'>

      </div>
      <div className='footer'>
      <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
      </div>
    </div>
  );
}

export default App
