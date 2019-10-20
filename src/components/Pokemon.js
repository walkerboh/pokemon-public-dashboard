import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemonStatusAction } from "../actions";

const Pokemon = ({ pokemon, fetchPokemon }) => {
  useEffect(() => void fetchPokemon(), [fetchPokemon]);

  if (!pokemon.trainer && !pokemon.pokemon) {
    return null;
  }

  return (
    <div>
      <div>Current Gym: {pokemon.gym}</div>
      <div>Trainer: {pokemon.trainer.name}</div>
      <div>Pokemon Left: {pokemon.trainer.pokemonLeft}</div>
      <div>Current Pokemon: {pokemon.pokemon.name}</div>
      <div>
        Current Health: {pokemon.pokemon.currentHealth} /{" "}
        {pokemon.pokemon.startingHealth}
      </div>
    </div>
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
