# Welcome to The Shoppies!

My take on [Shopify's UX & Web Developer Challenge](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#)

The Nominator is a React App that allows users to:
- Search OMDB API for films
- Nominate searched films in the nomination list
- Use local storage to maintain nominated list
- error handling for searching, adding, and removing films

![Screenshot](public/screenshot.png?raw=true)

Built with **React** + **TypeScript**, uses Local Storage to persist the nomination list between refreshes. Deployed with **GitHubPages**.

## Notable Dependencies

- `typescript`
- `react`
- `react-bootstrap`
- `rehooks/local-storage`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
