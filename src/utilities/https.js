/*
endpoints:
  POST - https://vph540u747.execute-api.us-east-1.amazonaws.com/dev/ltr/create
  GET - https://vph540u747.execute-api.us-east-1.amazonaws.com/dev/ltr/{id}
*/
const axios = require('axios');

export const get = async id => {
  const response = await axios.get(
    `https://vph540u747.execute-api.us-east-1.amazonaws.com/dev/ltr/${id}`
  );
  return response;
};

export const post = async ({ email, letterHTML }) => {
  const data = {
    body: { letterHTML, email }
  };
  const response = await axios.post(
    'https://vph540u747.execute-api.us-east-1.amazonaws.com/dev/ltr/create',
    data
  );
  return response;
};
