# Figma

https://www.figma.com/file/ClxD8I48tjfoE2MgxhXbCg/MovieWeb?type=design&node-id=0-1&mode=design&t=VXvhNeLDEzYt2NLl-0

# Project Setting
For this project I have used https://developer.themoviedb.org/v4/docs/getting-started in order to have access to database
with movies. In order to run this project localy will need an API key what cannot be taken by API and need to be taken
from TheMovieDB account page and JWT will be valid for 1 hour

## Features
- Carousel: Implemented a carousel to display the first 5 movie posters, allowing users to scroll between them for easy viewing.
  
- Search: Included a search bar to enhance user experience, enabling users to find desired movies quickly and efficiently.

- Sort: Implemented sort functionality to order the movie list alphabetically, providing users with organized and easy-to-navigate content.

- Movie Card: Added hover effects to movie cards to indicate to users that they are clickable, enhancing interactivity and user engagement.

- ScrollToTop: Implemented a button to facilitate user navigation by allowing them to scroll to the top of the page with ease, enhancing overall user experience.

- Movie Modal: Created a modal to display additional information about a selected movie, such as its description and release date, providing users with comprehensive details about the movie.

- Watch List: Added a star icon to movie cards to enable users to add movies to their watch list. Users can access their watch list by navigating to the burger menu and selecting the Watch List page. They can view their curated list and remove movies by clicking on the bin button.

- Messages: Implemented messages for success and failure notifications, displayed in the bottom right corner of the screen. Messages inform users about actions such as adding or removing a movie from their watch list. In case a user tries to add the same movie twice, a message notifies them that the movie is already in their watch list, preventing duplicate entries.


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

### `npm run test`


