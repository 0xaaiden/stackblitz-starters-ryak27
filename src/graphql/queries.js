import { gql } from '@apollo/client';

export const GET_RECIPE_STEPS = gql`
  query GetRecipeSteps {
    allRecipeSteps {
      id
      step
      isCompleted
    }
  }
`;

export const CREATE_RECIPE_STEP = gql`
  mutation CreateRecipeStep($step: String!) {
    createRecipeStep(step: $step) {
      recipeStep {
        id
        step
        isCompleted
      }
    }
  }
`;

const UPDATE_RECIPE_STEP = gql`
  mutation UpdateRecipeStep($id: ID!, $step: String!, $isCompleted: Boolean!) {
    updateRecipeStep(id: $id, step: $step, isCompleted: $isCompleted) {
      recipeStep {
        id
        step
        isCompleted
      }
    }
  }
`;

const DELETE_RECIPE_STEP = gql`
  mutation DeleteRecipeStep($id: ID!) {
    deleteRecipeStep(id: $id) {
      recipeStep {
        id
      }
    }
  }
`;
