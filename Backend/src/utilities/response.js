const response = (body, statusCode = 200) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

const ok = body => response(body);
const error = body => response(body, 400);
const notAuthorized = () => response({ error: 'not authorized' }, 403);

export default { ok, error, notAuthorized };
