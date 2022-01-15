


## API Documentation

URI: `https://rnj9cz9vca.execute-api.us-west-2.amazonaws.com/prod`

<hr>

## Create Letter
Method: `POST` <br>
Endpoint: `/ltr/create` <br>
Body: `{ "questionInputText": string }` <br>
Response: <br>
 - Success <br>
    Response code: `200` <br>
    Payload: `{ "letterId": string<ID> }` <br>
 - Error<br>
    Response code: `400`
   


## Get Letter
Method: `GET` <br>
Endpoint: `/ltr/${letterId}` <br>
params: `{ letterId: string<ID> }` <br>
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
   
