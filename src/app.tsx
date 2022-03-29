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

export function App() {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize();
  }, []);

  return (
    <main class="slides">
      <section id="Slide1">
        <img src={FVote} alt="" />
        <div>
          <h3>Promotion de l'égalité H-F</h3>
          <p>
            <small>
              Par <a href="#">Dian</a>, <a href="#">Clotilde</a> et
              <a href="#"> Arthur</a>
            </small>
          </p>
        </div>
      </section>
      <section id="Slide2">
        <h2 class="underline title">Des inégalités:</h2>
        <ol>
          <li class="fragment">
            <a href="#/Slide3" className="bold no-link-style">
              Dans les Études
            </a>
          </li>
          <li class="fragment">
            <a href="#/Slide4" className="bold no-link-style">
              En politique
            </a>
          </li>
          <li class="fragment">
            <a href="#/Slide5" className="bold no-link-style">
              Dans le social
            </a>
          </li>
        </ol>
      </section>
      <section id="Slide3">
        <h2 class="underline title">Dans les Études</h2>
        <ol>
          <li>
            <span className="bold">Stéréotype à l'école</span>, partié dans les
            études scientifique/littéraire.
          </li>
          <li>
            <span className="bold">Dans le domaine professionenel</span>:
            salaire, responsabilité, parité dans les professions.
          </li>
        </ol>
        <img src={EcoleEgalite} alt="" width={450} />
      </section>
      <section id="Slide4">
        <section id="Slide4-1">
          <h2 class="underline title">En Politique</h2>
          <ol>
            <li>
              Partité Parties Politque, Assemblée National, Journée
              International...
            </li>
            <li>
              <span className="bold">Dans le domaine professionenel</span>:
              salaire, responsabilité, parité dans les professions.
            </li>
          </ol>
        </section>
        <section id="Slide4-2">
          <img src={P2Frise} alt="" width={800} />
        </section>
        <section id="Slide4-3">
          <img src={P2Olympe} alt="" />
          <img src={P2Cresson} alt="" />
          <img src={P2Segolene} alt="" />
        </section>
        <section id="Slide4-4">
          <img src={P2Ref1} alt="" width={450} />
        </section>
        <section id="Slide4-5">
          <img src={P2Ref2} alt="" width={500} />
        </section>
      </section>
      <section id="Slide5">
        <h2 class="underline title">Part 3:</h2>
      </section>
    </main>
  );
}
