const API_DOMAIN = 'http://localhost:3004';

export const getDogs = () => fetch(`${API_DOMAIN}/dogs`)
  .then((response) => {
    return response.json();
  });