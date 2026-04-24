import { useEffect } from "react";
import "./Chronicles.css";
import { chroniclesImage } from '../utils/imageMap.js';
import fallBackImg from "../assets/fallback.png";

const chronicles = [
  {
    id: 1,
    title: "Assassinos",
    key: "assassino",
    text: 'O mundo para um Assassino não é feito de pessoas, mas de vulnerabilidades. Eles habitam o espaço entre as batidas do coração, movendo-se onde a luz não alcança e onde o olhar não pousa. Sua arte não reside na luta, mas na sua ausência; quando um Assassino atua, não há duelo, apenas a conclusão inevitável. Eles são os sussurros nas sombras das tavernas e a lâmina fria que encerra linhagens reais no silêncio de um quarto trancado.',
    quote : '“O verdadeiro mestre da morte não deixa uma poça de sangue, mas um rastro de perguntas sem resposta.”'
  },
  {
    id: 2,
    title: "Espadachin",
    key: "espadachin",
    text: 'Para o Espadachim, o combate é uma ciência exata disfarçada de arte. Enquanto outros confiam na fúria, eles confiam na postura, no equilíbrio e no tempo. Cada movimento é calculado para ser o mais eficiente possível, transformando o aço em um pincel que desenha trajetórias letais no ar. A elegância é sua maior defesa, e a precisão sua arma mais devastadora, fazendo com que um embate mortal pareça uma dança onde o adversário sempre erra o passo.',
    quote : '“A força bruta é um desperdício de movimento. No duelo perfeito, a vitória não vem de quem golpeia mais forte, mas de quem entende que o aço é apenas uma extensão do pensamento.”'
  },
  {
    id: 3,
    title: "Guerreiros",
    key: "guerreiro",
    text: 'O Guerreiro é a âncora de qualquer exército e o bastião de qualquer cidade. Eles são definidos pela resiliência e pela comunhão com o ferro de suas armaduras. Onde outros recuam diante do terror, o Guerreiro finca os pés na lama e se torna uma montanha inabalável. Sua história é escrita em cicatrizes e no som ensurdecedor do metal colidindo contra o metal. Eles não lutam por glória efêmera, mas pela integridade da linha de frente que juraram proteger.',
    quote : '“As lendas falam de heróis que nunca sangram, mas a guerra só conhece os que não caem. Minha armadura está amassada e meu corpo cansado, mas enquanto meus pés tocarem o chão, este lugar pertence a mim.”'
  },
  {
    id: 4,
    title: "Magos",
    key: "mago",
    text: 'Ser um Mago é compreender que a realidade é um tecido frágil que pode ser desfeito e reescrito. Enquanto os mortais se preocupam com o que é físico, o Mago estuda as correntes arcanas que fluem sob a superfície da existência. Com uma palavra entoada na frequência correta ou um gesto que distorce o éter, eles podem invocar o fogo das estrelas ou dobrar o tempo. O conhecimento é seu poder, e a vontade é o catalisador que transforma teoria em cataclismo.',
    quote : '“O tolo vê o fogo e teme a queimadura; o sábio olha para as chamas e enxerga a geometria do cosmos. Eu não conjuro feitiços, eu apenas lembro ao mundo que as leis da natureza servem à minha vontade.”'
  },
  {
    id: 5,
    title: "Sacerdotisa",
    key: "sacerdotisa",
    text: 'A Sacerdotisa atua como a ponte entre o divino e o profano. Sua presença no campo de batalha é um farol de esperança que desafia a escuridão e a dor. Ela não empunha o poder para destruir, mas para restaurar e purificar, trazendo o calor da luz sagrada para curar feridas que a medicina comum jamais fecharia. No entanto, sua misericórdia tem limites: contra o mal absoluto, ela se torna o canal da fúria celestial, banindo as trevas com uma radiância inabalável.',
    quote : '“A luz não brilha para ser vista, mas para que os outros possam enxergar o caminho de volta para casa.”'
  }
];

function Chronicles() {
    useEffect(() => {
        document.title = "Vault of Heroes | Crônicas";
    }, []);
    return (
        <>
            <h1 className="glow-title">📖 Crônicas</h1>

            <div className="chronicles-container">
                <div className="book">
                    {chronicles.map(c => (
                        <div key={c.id} className="page" >
                            <div className="page-image">
                                <img src={chroniclesImage[c.key] || fallBackImg} alt={c.title} />
                            </div>

                            <div className="page-content">
                                <h2>{c.title}</h2>
                                <p>{c.text}</p>
                                <blockquote className="chronicle-quote">
                                    {c.quote}
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Chronicles;