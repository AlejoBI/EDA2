import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPokemon,
  incrementCounter,
  decrementCounter,
} from "../../slices/pokemonSlice";
import styles from "./MultipleCustomHooks.module.css";

const MultipleCustomHooks = () => {
  const { data, isLoading, error, counter } = useSelector(
    (state) => state.pokemon
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(counter));
  }, [counter, dispatch]);

  return (
    <div className={styles.container}>
      <h1>Pokémon Information</h1>
      {data && (
        <blockquote className={styles.pokemonInfo}>
          <img src={data.sprites.front_default} alt={data.name} width="180" />
          <div className={styles.pokemonDetails}>
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Height:</strong> {data.height}
            </p>
            <p>
              <strong>Weight:</strong> {data.weight}
            </p>
            <p>
              <strong>Pokemon:</strong> {counter}
            </p>
          </div>
        </blockquote>
      )}
      <div className={styles.buttonContainer}>
        <button onClick={() => dispatch(decrementCounter())}>
          Previous
        </button>
        <button onClick={() => dispatch(incrementCounter())}>
          Next
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MultipleCustomHooks;
