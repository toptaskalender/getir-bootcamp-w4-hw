# Getir Node.js Bootcamp | Week-4

This repo was created for practicing the forth lecture of Getir Node.js Bootcamp.

## API Endpoints

### Auth

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /sign-up | `POST` | `{ email: "jone@doe.com", password: "pass1234", passwordConfirm: "pass1234", firstName: "Jone", lastName: "Doe" }` |  | Returns authentication bearer token and user data on body |
| /log-in | `POST` | `{ email: "jone@doe.com", password: "pass1234" }` |  | Returns authentication bearer token and user data on body |

### Users

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /users/me | `GET` |  | Authentication: Bearer Token | Returns user data on body |

### Contacts
| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /contacts | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /contacts/:id | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /contacts | `POST` | `{ firstName: "Jone", lastName: "Doe", phoneNumber: 5553332211 }`  | Authentication: Bearer Token | Returns created resource or error message |
| /contacts/:id | `PATCH` | `{ firstName: "Jone", lastName: "Doe", phoneNumber: 5553332211 }` | Authentication: Bearer Token | Returns updated resource or error message |`
| /contacts/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |

#### Notes

- If you perform a `POST` request to `/sign-up`, `/log-in`, or `/contacts` you have to provide the exact same data as shown above on a request body.
- If you perform a `PATCH` request to `/contacts/:id`, you can provide one of the keys that is shown above.

## .env

An .env file should consist of:

    SERVER_PORT
    DB_HOST
    DB_PORT
    DB_NAME

    JWT_SECRET
    JWT_EXPIRES_IN


## Installation

Clone the source code:

    git clone git@github.com:toptaskalender/getir-bootcamp-w4-hw.git

Install dependencies:

    npm install

## Starting the app

Run `npm start` to start the application.