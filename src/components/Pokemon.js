import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";
import { fetchPokemonStatusAction } from "../actions";
import pkmn from "../images/pokeballs/pkmn.png";
import pokeball from "../images/pokeballs/pokeball.png";
import pokeballDefeat from "../images/pokeballs/pokeball_defeat.png";
import pokeballEmpty from "../images/pokeballs/pokeball_null.png";
import badges from "../images/badges";
import trainers from "../images/trainers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const PokeballRow = styled.div`
  img {
    margin-right: 2px;
  }
`;

const TrainerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

const getGym = gym => {
  if (gym === "EliteFourLance") {
    return " - Champion";
  } else if (gym === "EliteFourRed") {
    return "";
  } else if (gym.includes("EliteFour")) {
    return " - Elite Four";
  } else if (gym === "TeamRocket") {
    return "";
  } else {
    return " - " + gym;
  }
};

const PokeballDisplay = ({ total, alive }) => {
  const dead = total - alive;
  const pokeballs = Array(6)
    .fill(1)
    .map((_, ind) => {
      if (ind < dead) {
        return <img src={pokeballDefeat} key={ind} alt="Pokeball" />;
      } else if (ind < total) {
        return <img src={pokeball} key={ind} alt="Defeated Pokeball" />;
      } else {
        return <img src={pokeballEmpty} key={ind} alt="Empty Pokeball" />;
      }
    });

  return (
    <PokeballRow>
      <img src={pkmn} alt="PKMN" />
      {pokeballs}
    </PokeballRow>
  );
};

const Pokemon = ({ pokemon, fetchPokemon }) => {
  useEffect(() => void fetchPokemon(), [fetchPokemon]);

  if (!pokemon.trainer && !pokemon.pokemon) {
    return null;
  }

  return (
    <Container>
      <TrainerName>
        {pokemon.trainer.name}
        {getGym(pokemon.gym)}{" "}
        {badges[pokemon.trainer.name] && (
          <img src={badges[pokemon.trainer.name]} alt="Badge" />
        )}
      </TrainerName>
      <div>
        <img
          src={trainers[pokemon.trainer.name]}
          alt={pokemon.trainer.name}
          height={500}
        />
      </div>
      <PokeballDisplay
        total={pokemon.trainer.totalPokemon}
        alive={pokemon.trainer.pokemonLeft}
      />
      <div>Current Pokemon: {pokemon.pokemon.name}</div>
      <div>
        Current Health: {pokemon.pokemon.currentHealth} /{" "}
        {pokemon.pokemon.startingHealth}
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = {
  fetchPokemon: fetchPokemonStatusAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
