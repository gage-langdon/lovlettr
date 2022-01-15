//follows HTML5 RegEx
function validEmail(email) {
  const regex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'g'
  );
  return regex.test(email);
}

export default validEmail;
