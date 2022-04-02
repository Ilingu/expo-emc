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
          <h3>Promotion de l'égalité Homme-Femme</h3>
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
              La parité homme femme en politique
            </a>
          </li>
          <li className="fragment fade-up">
            <a href="#/Slide5" className="bold no-link-style">
              L'évolution de l'égalité homme-femme dans le domaine social
            </a>
          </li>
        </ol>
      </section>
      <section id="Slide3">
        <section id="Slide3-1">
          <h2 className="underline title">
            1. Inégalité dans les études et monde professionel
          </h2>
          <img data-src="/IMG/Part1/écoleégalité.jpeg" alt="" width={450} />
        </section>
        <section id="Slide3-2"></section>
      </section>
      <section id="Slide4">
        <section id="Slide4-intro">
          <h2 className="underline title">
            2. Parité Homme-Femme en politique
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
          <img data-src="/IMG/Part2/ref2.jpeg" alt="" width={500} />
        </section>
        <section id="Slide4-femme-eu">
          <img data-src="/IMG/Part2/ref1.jpeg" alt="" width={450} />
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
                  <img src="/IMG/Part2/gouv-mitterand.jpeg" alt="" />
                  <p>Gouvernement Mitterand</p>
                </div>
                <div>
                  <img src="/IMG/Part2/gouv-macron.jpeg" alt="" />
                  <p>Gouvernement Macron</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Slide4-6">
          <div>
            <img data-src="/IMG/Part2/florenceparly.jpeg" alt="" />
            <p>Florence Parly (Ministre Défence)</p>
          </div>
          <div>
            <img data-src="/IMG/Part2/nicolebelloubet.jpeg" alt="" />
            <p>Nicole Belloubet</p>
          </div>
        </section>
      </section>
      <section id="Slide5">
        <section id="Slide5-1">
          <h2 className="underline title r-fit-text">Inégalités Sociales</h2>
        </section>
        <section id="Slide5-2"></section>
      </section>
      <section id="Slide6">
        <h3 className="underline title" onDblClick={() => setIframeError(true)}>
          Une petite vidéo?
        </h3>
        {IframeError || (
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

        {IframeError && (
          <a
            href="https://www.youtube.com/watch?v=eAQAN2assMw&t=648s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Link
          </a>
        )}
      </section>
      <section id="Slide6">
        <h2 className="underline title">Conclusion:</h2>
      </section>
      <section id="Slide7">
        <h2 className="underline title">Ouverture:</h2>
      </section>
    </main>
  );
};

export default App;
