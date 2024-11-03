# Hello World Example

This project follows the basic Open AI docs to create a hello world using n AI. See https://platform.openai.com/docs/quickstart.

## Requirements

1. API key must be stored as an environment variable:
```
export OPENAI_API_KEY="your_api_key_here"
```

2. You must pay for API use, as it is no longer free through Open AI.

3. Local Environment must be running NodeJS / NPM. 

## Running the Application

For the time being, as there is no UI / bot to interact with, you must run the application manually from the terminal and all output will come from the console.log.

```
node app.js
```

Warning: each execution of the application will consume Open AI tokens.

TLDR running the application will cost you money (just not very much in its current incarnation). The hello world example costs roughly $.01 per run.