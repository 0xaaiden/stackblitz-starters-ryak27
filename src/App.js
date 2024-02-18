import React, { useState, useEffect } from 'react';
import RecipeStep from './RecipeStep';
import './style.css';
import { useMutation, useQuery } from '@apollo/client';
import { GET_RECIPE_STEPS, CREATE_RECIPE_STEP } from './graphql/queries';

export default function App() {
  // Add states for tracking input and recipe steps
  const [input, setInput] = useState('');
  const [recipeSteps, setRecipeSteps] = useState({});
  const { data, refetch } = useQuery(GET_RECIPE_STEPS);

  const [createRecipeStep] = useMutation(CREATE_RECIPE_STEP, {
    onCompleted: () => refetch(),
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  // Form submission handler
  const handleAddStep = (e) => {
    e.preventDefault();
    createRecipeStep({ variables: { step: input } });
    setInput('');
  };

  return (
    <div>
      <header>
        <h1>Recipe Step Tracker</h1>
      </header>

      <main>
        <form onSubmit={handleAddStep}>
          <label htmlFor="recipe-step">Add task:</label>
          <textarea
            type="text"
            id="recipe-step"
            name="step"
            rows="3"
            value={input}
            // Add input handler
            onInput={(e) => {
              setInput(e.target.value);
            }}
          ></textarea>
          <button id="add-btn" type="submit">
            Add
          </button>
        </form>

        <ol>
          {data &&
            data.allRecipeSteps.map((step) => (
              <RecipeStep key={step.id} step={step} refetchSteps={refetch} />
            ))}
        </ol>
      </main>
    </div>
  );
}
