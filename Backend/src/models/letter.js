import uuid from 'uuid';
import dynamoDb from '../services/dynamoDb';

const getById = async (letterId) => {
  const params = {
    TableName: 'lovlettr',
    Key: {
      letterId,
    },
  };

  const { Item } = await dynamoDb.get(params).promise();
  return Item;
};

const create = async ({ userEmail, letterHTML }) => {
  const params = {
    TableName: 'lovlettr',
    Item: {
      letterId: uuid.v1(),
      letterHTML,
      userEmail,
      createdAt: new Date().toISOString(),
    },
  };
  await dynamoDb.put(params).promise();
  return params.Item;
};

const deleteById = async (letterId) => {
  const params = {
    TableName: 'lovlettr',
    Key: {
      letterId,
    },
  };
  await dynamoDb.delete(params).promise();
};

const updateById = async (letterId, letterHTML) => {
  const params = {
    TableName: 'lovlettr',
    Key: {
      letterId,
    },
    UpdateExpression: 'set letterHTML = :x',
    ExpressionAttributeValues: {
      ':x': letterHTML,
    },
  };
  await dynamoDb.update(params).promise();
};

export default {
  getById,
  create,
  deleteById,
  updateById,
};
