# Express TypeScript Zod Starter

This is a minimal Typesafe TypeScript starter template for an Express.js application. It provides a structured setup with TypeScript, Express, Zod, Jest, and Prettier.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

### Clone the repository

### Install the dependencies

    cd express-typescript-starter
    npm install

## Configure the environment variables

    Create a .env file in the root directory.
    Add the necessary environment variables, such as database credentials or any other configuration required by your application.

## Run the application

    npm start

    The server will start on http://localhost:3000.

## Run the application in Docker

    docker build -t express-zod-starter .

    docker run -p 3000:3000 express-zod-starter

## Available Scripts

### In the project directory, you can run the following scripts:

    npm start: Starts the server in production mode.
    npm run dev: Starts the server in development mode with automatic restart on file changes.
    npm test: Runs the test suite using Jest.
    npm run lint: Lints the code using ESLint.
    npm run format: Formats the code using Prettier.

## Contributing

    Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

    This project is licensed under the MIT License. See the LICENSE file for details.
