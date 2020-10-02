# Morse code and array flatten

## Requirements 

- Node 14.10 (You can run `nvm use` if using nvm)

## Setup

- `npm i`
- `npm run build`

## Usage examples

- Command line input: `node ./dist --input HELLO`
- File input: `node ./dist --inputFile=./data/input.txt --outputFile=./data/output.txt`

## Notes

- You can run the linter with `npm run lint`. It is using Airbnb's linting rules that depend on React eslint packages also, that's why they are a dependency
- Morse code conversion is handled properly for texts containing commas or dots (pipe character is used for separating letters only)