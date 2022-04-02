import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import Reveal from "reveal.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

const App: FunctionComponent = () => {
  const [IframeError, setIframeError] = useState(false);

  useEffect(() => {
    const deck = new Reveal({
      plugins: [Zoom],
    });
    deck.initialize();

    return deck.destroy;
  }, []);

  return (
    <main className="slides">
      {/* Intro */}
      <section id="Slide1">
        <img data-src="/IMG/Global/f-vote.jpeg" alt="" />
        <div>
          <h3>Promotion de l'égalité Hommes-Femmes</h3>
          <p>
            <small>
              Par <a href="#">Diane</a>, <a href="#">Clotilde</a> et
              <a href="#"> Arthur</a>
            </small>
          </p>
        </div>
      </section>
      {/* Sommaire */}
      <section id="Slide2">
        <img data-src="/IMG/Global/feminisme.jpeg" alt="" />
        <h2 className="underline title">Sommaire:</h2>
        <ol className="justify">
          <li className="fragment fade-up">
            <a href="#/Slide3" className="bold no-link-style">
              Les inégalité entre les hommes et les femmes dans les études et
              dans le monde professionnel
            </a>
          </li>
          <li className="fragment fade-up">
            <a href="#/Slide4" className="bold no-link-style">
              La parité Hommes-Femmes en politique
            </a>
          </li>
          <li className="fragment fade-up">
            <a href="#/Slide5" className="bold no-link-style">
              L'évolution de l'égalité Hommes-Femmes dans le domaine social
            </a>
          </li>
        </ol>
      </section>
      <section id="Slide3">
        <section id="Slide3-intro">
          <h2 className="underline title">
            1. Inégalité dans les études et monde professionel
          </h2>
          <img data-src="/IMG/Part1/écoleégalité.jpeg" alt="" width={450} />
        </section>
        <section id="Slide3-catalogue">
          <div>
            <img data-src="/IMG/Part1/catalogue-fille.png" alt="" />
            <p>Catalogue Fille</p>
          </div>
          <div>
            <img data-src="/IMG/Part1/catalogue-garcon.png" alt="" />
            <p>Catalogue Garçon</p>
          </div>
          <div>
            <img data-src="/IMG/Part1/catalogue-mix.png" alt="" />
            <p>Catalogue Mix</p>
          </div>
        </section>
        <section id="Slide3-graph">
          <img data-src="/IMG/Part1/metier-mixite.png" alt="" />
          <img data-src="/IMG/Part1/f-enseignement-sup.png" alt="" />
        </section>
        <section id="Slide3-oui-non">
          <div className="r-stack">
            <p className="fragment fade-out" data-fragment-index="0">
              Les ingénieur(e)s et les cadres de l'industrie 25% de femmes
            </p>
            <p className="fragment current-visible" data-fragment-index="0">
              La construction et les travaux publics 19% de femmes
            </p>
            <div className="fragment fade-in">
              <p>Dans l'armée, la police, les pompiers 14% de femmes</p>
            </div>
          </div>
        </section>
        <section id="Slide3-finale">
          <img data-src="/IMG/Part1/f-travail-gratuit.png" alt="" width={800} />
        </section>
      </section>
      <section id="Slide4">
        <section id="Slide4-intro">
          <h2 className="underline title">
            2. Parité Hommes-Femmes en politique
          </h2>
        </section>
        <section id="Slide4-personne">
          <div>
            <img data-src="/IMG/Part2/Olympe.png" alt="" />
            <p>Olympe de Gouges (1793)</p>
          </div>
          <div>
            <img data-src="/IMG/Part2/simone.jpeg" alt="" />
            <p>Simone Veil (1975)</p>
          </div>
          <div>
            <img data-src="/IMG/Part2/cresson.jpeg" alt="" />
            <p>Édith Cresson (1991)</p>
          </div>
          <div>
            <img data-src="/IMG/Part2/Segolene.jpeg" alt="" />
            <p>Ségolène Royal (2007)</p>
          </div>
        </section>
        <section id="Slide4-podium-box">
          <div id="podium-third-step" className="pod-child">
            <img data-src="/IMG/Part2/logo-eco-inde.png" alt="" />
            <div className="pod-placeholder">
              Alliance Ecologique Indépendante - <span>55 000 €</span>
            </div>
          </div>
          <div id="podium-second-step" className="pod-child">
            <img data-src="/IMG/Part2/logo-france-insoumise.png" alt="" />
            <div className="pod-placeholder">
              France Insoumise - <span>250 000 €</span>
            </div>
          </div>
          <div id="podium-first-step" className="pod-child">
            <img data-src="/IMG/Part2/logo-republicain.png" alt="" />
            <div className="pod-placeholder">
              Les Républicains - <span>1.78M €</span>
            </div>
          </div>
        </section>
        <section id="Slide4-AN-femme">
          <img data-src="/IMG/Part2/an-femme.jpeg" alt="" width={500} />
        </section>
        <section id="Slide4-miniconclu">
          <div className="r-stack">
            <p className="fragment fade-out" data-fragment-index="0">
              Parité au sens strict: <span className="title bold">NON!</span>
            </p>
            <p className="fragment current-visible" data-fragment-index="0">
              Parité dans les ministères:{" "}
              <span className="title bold">NON!</span>
            </p>
            <div className="fragment fade-in">
              <p>
                Progrès réalisés:{" "}
                <span className="bold" style={{ color: "#6ab04c" }}>
                  OUI!
                </span>
              </p>
              <div id="gouv-mitterand-macron">
                <div>
                  <img data-src="/IMG/Part2/gouv-mitterand.jpeg" alt="" />
                  <p>Gouvernement Mitterand</p>
                </div>
                <div>
                  <img data-src="/IMG/Part2/gouv-macron.jpeg" alt="" />
                  <p>Gouvernement Macron</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Slide4-ministere">
          <img
            data-src="/IMG/Part2/ministere-egalite-h-f.svg"
            alt=""
            width={800}
          />
        </section>
        <section id="Slide4-conclu">
          <div>
            <img data-src="/IMG/Part2/parite-pas-gagne.jpeg" alt="" />
            <img data-src="/IMG/Part2/parite-pas-gagne2.jpeg" alt="" />
          </div>
          <p>La parité Hommes-Femmes est encore loin...</p>
        </section>
      </section>
      <section id="Slide5">
        <section id="Slide5-1">
          <h2 className="underline title">
            3. Évolution égalité Hommes-Femmes dans le social
          </h2>
          <img data-src="/IMG/Part3/manif-feministe.jpg" alt="" width={500} />
        </section>
        <section id="Slide5-metoo">
          <img data-src="/IMG/Part3/wecandoit.jpg" alt="" />
          <img data-src="/IMG/Part3/balancetonporc.jpg" alt="" />
          <blockquote
            style={{ visibility: "hidden" }}
            className="twitter-tweet"
            data-lang="en"
            data-theme="dark"
          >
            <p lang="en" dir="ltr">
              To all the women sharing stories of sexual assault and sexual
              harassment, thank you for your bravery to speak up. You are not
              alone.{" "}
              <a href="https://twitter.com/hashtag/MeToo?src=hash&amp;ref_src=twsrc%5Etfw">
                #MeToo
              </a>
            </p>
            &mdash; Women&#39;s March (@womensmarch){" "}
            <a href="https://twitter.com/womensmarch/status/919705604075216896?ref_src=twsrc%5Etfw">
              October 15, 2017
            </a>
          </blockquote>
          <blockquote
            style={{ visibility: "hidden" }}
            className="twitter-tweet"
            data-lang="en"
            data-theme="dark"
          >
            <p lang="en" dir="ltr">
              Reminder that if a woman didn&#39;t post{" "}
              <a href="https://twitter.com/hashtag/MeToo?src=hash&amp;ref_src=twsrc%5Etfw">
                #MeToo
              </a>
              , it doesn&#39;t mean she wasn&#39;t sexually assaulted or
              harassed. Survivors don&#39;t owe you their story.
            </p>
            &mdash; Alexis Benveniste (@apbenven){" "}
            <a href="https://twitter.com/apbenven/status/919902089110872064?ref_src=twsrc%5Etfw">
              October 16, 2017
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </section>
      </section>
      <section id="Slide6">
        <h2 className="underline title">Conclusion:</h2>
      </section>
      <section id="Slide7">
        <h3 className="underline title" onDblClick={() => setIframeError(true)}>
          Une petite vidéo?
        </h3>

        {IframeError ? (
          <a
            href="https://www.youtube.com/watch?v=eAQAN2assMw&t=648s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Link
          </a>
        ) : (
          <iframe
            width="560"
            height="315"
            data-src="https://www.youtube-nocookie.com/embed/eAQAN2assMw?start=648"
            title="VIDEO: Inégalité des sexes #DATAGUEULE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </section>
      <section id="Slide8">
        <h2 className="underline title">Ouverture:</h2>
      </section>
    </main>
  );
};

export default App;
