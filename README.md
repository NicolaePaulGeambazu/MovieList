# Figma

https://www.figma.com/file/ClxD8I48tjfoE2MgxhXbCg/MovieWeb?type=design&node-id=0-1&mode=design&t=VXvhNeLDEzYt2NLl-0

# Project Setting
For this project I have used https://developer.themoviedb.org/v4/docs/getting-started in order to have access to database
with movies. In order to run this project localy will need an API key what cannot be taken by API and need to be taken
from TheMovieDB account page and JWT will be valid for 1 hour

## Features
   -Carousel: In this website I have choosed to create an carousel in order for User to see the first 5 movie posters and
   to be able to scroll between them
   -Search : I have implemented an search bar what will give to the user a better experience in order to find the movie wanted
   -Sort: Sort functionality will order the movie list in order alphabetical.
   -ScrollToTop: Because user have to scroll to bottom in order to see the last movie card, I have implemented an button what will redirect user to top of the page at the convenient time.
   -Movie Modal: When an user looking to see what will be the movie about or when was release, user can easy click on movie card
   and an modal will show up. In this modal user will can see a description and an release of the picked movie.
   -Watch List: If the user decide to add an movie to watch list or just to keep there for feature reference, in top right corner of each card will be a start what will add the movie to an watch list. User can navigate to Watch List by going to burger menu and choose Watch List page, user will be redirected to the wanted page were will can see the list created by him also have the posibility to take off list an movie by clicking on bin button.
   -Messages: For UI/UX purpose I have added an message with Success/Fail message in bottom right corner when user try to add/remove an movie. In case if user try to add same movie twice, an message will tell them that the movie was already added to the watch list and is not needed to add again.

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
