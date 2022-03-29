import { useEffect } from "preact/hooks";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
// Image
import FVote from "./Assets/IMG/Global/f-vote.jpg";
import P2Frise from "./Assets/IMG/Part2/frise.jpg";
import P2Cresson from "./Assets/IMG/Part2/cresson.jpg";
import P2Simone from "./Assets/IMG/Part2/simone.jpg";
import P2Florence from "./Assets/IMG/Part2/florenceparly.jpg";
import P2Olympe from "./Assets/IMG/Part2/Olympe.png";
import P2Nicole from "./Assets/IMG/Part2/nicolebelloubet.jpg";
import P2Segolene from "./Assets/IMG/Part2/Segolene.jpg";
import P2Ref1 from "./Assets/IMG/Part2/ref1.jpg";
import P2Ref2 from "./Assets/IMG/Part2/ref2.jpg";
import EcoleEgalite from "./Assets/IMG/Part1/écoleégalité.jpg";
import ANBefore from "./Assets/IMG/Part2/AN-Before.jpg";
import ANAfter from "./Assets/IMG/Part2/AN-After.jpg";

export function App() {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize();
  }, []);

  return (
    <main class="slides">
      {/* Intro */}
      <section id="Slide1">
        <img src={FVote} alt="" />
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
          <img src={EcoleEgalite} alt="" width={450} />
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
              <img src={ANBefore} alt="" />
              <p>Assamble National Avant</p>
            </div>
            <div>
              <img src={ANAfter} alt="" />
              <p>Assamble National Aujourd'hui</p>
            </div>
          </div>
        </section>
        <section id="Slide4-2">
          <img src={P2Frise} alt="" width={800} />
        </section>
        <section id="Slide4-3">
          <div>
            <img src={P2Olympe} alt="" />
            <p>Marie Gouges</p>
          </div>
          <div>
            <img src={P2Cresson} alt="" />
            <p>Édith Cresson</p>
          </div>
          <div>
            <img src={P2Segolene} alt="" />
            <p>Ségolène Royal</p>
          </div>
          <div>
            <img src={P2Simone} alt="" />
            <p>Simone Veil</p>
          </div>
        </section>
        <section id="Slide4-4">
          <img src={P2Ref1} alt="" width={450} />
        </section>
        <section id="Slide4-5">
          <img src={P2Ref2} alt="" width={500} />
        </section>
        <section id="Slide4-6">
          <div>
            <img src={P2Florence} alt="" />
            <p>Florence Parly (Ministre Défence)</p>
          </div>
          <div>
            <img src={P2Nicole} alt="" />
            <p>Nicole Belloubet</p>
          </div>
        </section>
      </section>
      <section id="Slide5">
        <h2 class="underline title">Part 3:</h2>
      </section>
    </main>
  );
}
