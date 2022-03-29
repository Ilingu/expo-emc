import { useEffect } from "preact/hooks";
import Reveal from "reveal.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

export function App() {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Zoom],
    });
    deck.initialize();
  }, []);

  return (
    <main class="slides">
      {/* Intro */}
      <section id="Slide1">
        <img src="/IMG/Global/f-vote.jpeg" alt="" />
        <div>
          <h3>Promotion de l'égalité H-F</h3>
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
        <h2 class="underline title">Des inégalités:</h2>
        <ol>
          <li class="fragment fade-up">
            <a href="#/Slide3" className="bold no-link-style">
              Dans les Études, stéréotypes, parité dans les études...
            </a>
          </li>
          <li class="fragment fade-up">
            <a href="#/Slide4" className="bold no-link-style">
              En politique, parité dans les partie politique...
            </a>
          </li>
          <li class="fragment fade-up">
            <a href="#/Slide5" className="bold no-link-style">
              Dans le social, les Progrès et les problèmes...
            </a>
          </li>
        </ol>
      </section>
      <section id="Slide3">
        <section id="Slide3-1">
          <h2 class="underline title r-fit-text">Dans les Études</h2>
          <img src="/IMG/Part1/écoleégalité.jpeg" alt="" width={450} />
        </section>
        <section id="Slide3-2"></section>
      </section>
      <section id="Slide4">
        <section id="Slide4-1">
          <h2 class="underline title r-fit-text">
            Parité Homme-Femme en politique
          </h2>
          <div>
            <div>
              <img src="/IMG/Part2/AN-Before.jpeg" alt="" />
              <p>Assamble National Avant</p>
            </div>
            <div>
              <img src="/IMG/Part2/AN-After.jpeg" alt="" />
              <p>Assamble National Aujourd'hui</p>
            </div>
          </div>
        </section>
        <section id="Slide4-2">
          <img src="/IMG/Part2/frise.jpeg" alt="" width={800} />
        </section>
        <section id="Slide4-3">
          <div>
            <img src="/IMG/Part2/Olympe.png" alt="" />
            <p>Marie Gouges</p>
          </div>
          <div>
            <img src="/IMG/Part2/cresson.jpeg" alt="" />
            <p>Édith Cresson</p>
          </div>
          <div>
            <img src="/IMG/Part2/Segolene.jpeg" alt="" />
            <p>Ségolène Royal</p>
          </div>
          <div>
            <img src="/IMG/Part2/simone.jpeg" alt="" />
            <p>Simone Veil</p>
          </div>
        </section>
        <section id="Slide4-4">
          <img src="/IMG/Part2/ref1.jpeg" alt="" width={450} />
        </section>
        <section id="Slide4-5">
          <img src="/IMG/Part2/ref2.jpeg" alt="" width={500} />
        </section>
        <section id="Slide4-6">
          <div>
            <img src="/IMG/Part2/florenceparly.jpeg" alt="" />
            <p>Florence Parly (Ministre Défence)</p>
          </div>
          <div>
            <img src="/IMG/Part2/nicolebelloubet.jpeg" alt="" />
            <p>Nicole Belloubet</p>
          </div>
        </section>
      </section>
      <section id="Slide5">
        <section id="Slide5-1">
          <h2 class="underline title r-fit-text">Inégalités Sociales</h2>
        </section>
        <section id="Slide5-2"></section>
      </section>
    </main>
  );
}
