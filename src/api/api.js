const API_DOMAIN = 'http://localhost:3004';

export const getDogs = () => fetch(`${API_DOMAIN}/dogs`)
  .then((response) => {
    return response.json();
  });

export const getClientProjects = () => fetch(`${API_DOMAIN}/clients`)
  .then((response) => {
    return response.json();
  });