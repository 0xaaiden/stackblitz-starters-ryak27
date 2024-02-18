import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_RECIPE_STEP, DELETE_RECIPE_STEP } from './graphql/queries';

export default function RecipeStep({ stepText }) {
  const [updateRecipeStep] = useMutation(UPDATE_RECIPE_STEP);
  const [deleteRecipeStep] = useMutation(DELETE_RECIPE_STEP, {
    onCompleted: () => refetch(),
  });
  const [isCompleted, setCompleted] = useState(false);

  return (
    <li>
      <label style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {stepText}
      </label>
      <input type="checkbox" onClick={() => setCompleted(!isCompleted)} />
    </li>
  );
}
