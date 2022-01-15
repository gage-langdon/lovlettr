# LETTR
<br>

This REPO contains both the frontend and backend. The frontend is built with React and the backend Serverless with node.js. README in both subprojects contain documentation for their respective portion.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca8fe794-ab20-491b-a440-5c3569d4473b/deploy-status)](https://app.netlify.com/sites/quizzical-kalam-3147a7/deploys)


<br>
<br>
<br>

# Frontend

## Getting Started
```bash
# Navigate into the Frontend folder
$ cd Frontend

# Make sure you have YARN installed (only need to do this the first time you load this project)
$ npm -i g yarn

# Intall packages
$ yarn install

# Start development server
$ yarn start
```

## Running Tests
Test files are located in Frontend/tests<br>
Please keep tests files up-to-date and ensure all tests pass before submitting a PR

```bash
$ yarn test
``` 
<br>

## Deployment
Deployment to production occurs on pushes to master. Development builds are availible in netlify

<br>
<br>
<br>

# Backend

## Getting Started
```bash
# Navigate to the backend folder
$ cd Backend

# Install serverless (only need to do this the first time you load this project)
$ npm install -g serverless

# Install backend node packages
$ npm install

# Start development server
$ npm start
```


<br>
<br>

## API Documentation
URI: `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod`<br>
A great tool to make requests to the API and test endpoints is [Postman](https://www.postman.com/downloads)


## Create Letter
Method: `POST` <br>
Endpoint: `/ltr/create` <br>
Body: `{ "questionInputText": string }` <br>
Example: `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/create`<br>
Response: <br>
 - Success <br>
    Response code: `200` <br>
    Payload: `{ "letterId": string<ID> }` <br>
 - Error<br>
    Response code: `400`
   
<br>


## Get Letter
Method: `GET` <br>
Endpoint: `/ltr/${letterId}` <br>
params: `{ letterId: string<ID> }` <br>
Example: `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod/ltr/12344-24213434-234234-23`<br>
Response: <br>
 - Success <br>
    Response code: `200` <br>
    Payload: 
    ```json
    {
        "createdAt": DATETIME,
        "answers": boolean,
        "questionInputText": string,
        "questionResponse": boolean,
        "letterId": string<ID>
    }
    ```
 - Error<br>
    Response code: `400`
   
