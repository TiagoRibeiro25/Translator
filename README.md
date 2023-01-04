# Text Translator

## About

This is a simple text translator that uses the DeepL API to translate text.
This web application was created using React for the frontend and Node.js (Express) for the backend. There's no need for a database since there's no information that needs to be stored.

This was my first React project and I'm still learning Web Frameworks overall. I'm also still learning Node.js and Express, so I'm sure there are better ways to do things. I'm open to suggestions and feedback. I'm also open to pull requests.

## Getting Started

### Prerequisites

If you want to run this locally, you'll need to install Node.js and npm. You can find the latest version of Node.js [here](https://nodejs.org/en/).
You also need to create a DeepL API key. You can find more information about that [here](https://www.deepl.com/docs-api/accessing-the-api/).
An IDE is also recommended, but not required.

### Setup

#### Clone the repository

```bash
git clone <TODO>
```

#### Install dependencies

```bash
cd Client
npm install
```

```bash
cd Server
npm install
```

#### Create a .env file

In the Server folder, create a .env file and add your DeepL API key to it.
(Use the .env.example file as a template)

#### Run the application

To run the application, go to the Server folder and run the following command to start the server.

```bash
npm start
```

I added nodemon to the project, so the server will automatically restart when you make changes to the code. To use nodemon, run the following command instead.

```bash
npm run dev
```

### Build for production

To build the application for production, go to the Client folder and run the following command.

```bash
npm run build
```

This will create a build folder in the Client folder. You can then copy the build folder to the "Server/public" folder of the project and run the server. The application will then be available at <http://localhost:3000> by default.

## Live Demo

You can find a live demo of the application [here](TODO).

## Made with

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## Made by

- [Tiago Ribeiro](<https://github.com/TiagoRibeiro25>)
