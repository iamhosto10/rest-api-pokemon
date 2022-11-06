// Hooks
import { useEffect, useState } from "react";
// Css
import "./App.css";
// Componentes
import Button from "./Components/Button";
// Styled components
import { Btncontainer, Cardcont } from "./Cover/cover.elements";
//icons
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Cards from "./Components/Cards";

function App() {
  const [numero, setnumero] = useState(1);
  const [evoluciones, setEvoluciones] = useState([]);
  useEffect(() => {
    searchpoke(numero);
  }, [numero]);

  const searchpoke = async (numero) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${numero}`
    );
    const data = await response.json();
    let evolutionchain = [];
    //primer pokemon
    let pokemonev1 = data.chain.species.name;
    let pokemonimgev1 = await searchimage(pokemonev1);

    evolutionchain.push([pokemonev1, pokemonimgev1]);
    if (data.chain.evolves_to.length !== 0) {
      let pokemonev2 = data.chain.evolves_to[0].species.name;
      let pokemonimgev2 = await searchimage(pokemonev2);
      evolutionchain.push([pokemonev2, pokemonimgev2]);
      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonev3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonimgev3 = await searchimage(pokemonev3);
        evolutionchain.push([pokemonev3, pokemonimgev3]);
      }
    }
    console.log(evolutionchain);
    setEvoluciones(evolutionchain);
  };

  const searchimage = async (pokemon) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    return data.sprites.other["official-artwork"].front_default;
  };

  const next = () => {
    setnumero(numero + 1);
  };
  const previous = () => {
    numero === 1 ? setnumero(1) : setnumero(numero - 1);
  };
  return (
    <div className="container">
      <Cardcont length={evoluciones ? evoluciones.length : ""}>
        {evoluciones
          ? evoluciones.map((e) => <Cards key={e[0]} name={e[0]} img={e[1]} />)
          : ""}
      </Cardcont>
      <Btncontainer>
        <Button text={<BiLeftArrowAlt />} handleClick={previous} />
        <Button text={<BiRightArrowAlt />} handleClick={next} />
      </Btncontainer>
    </div>
  );
}

export default App;
