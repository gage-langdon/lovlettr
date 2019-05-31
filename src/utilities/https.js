import axios from 'axios';

export async function getLtr(letterId) {
  try {
    const response = await axios.get(
      `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/${letterId}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function postLtr(body) {
  try {
    if (body.questionInputText === '') body.questionInputText = undefined;
    const response = await axios.post(
      'https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/create',
      body
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function editLtr(body) {
  try {
    if (body.questionInputText === '') body.questionInputText = undefined;
    const response = await axios.put(
      'https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/update',
      body
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteLtr(letterId) {
  try {
    const response = await axios.delete(
      `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/delete/${letterId}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}
