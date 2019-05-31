/*
endpoints:
POST - https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/create
GET - https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/{letterId}
DELETE - https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/delete
PUT - https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/update
*/

const axios = require('axios');

export async function getLtr(letterId) {
  try {
    const response = await axios.get(
      `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/${letterId}`
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export async function postLtr(body) {
  try {
    const response = await axios.post(
      'https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/create',
      body
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
