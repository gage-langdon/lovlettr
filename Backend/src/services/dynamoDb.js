import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-west-2' });

export default new AWS.DynamoDB.DocumentClient();
