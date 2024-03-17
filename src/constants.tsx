// Here , we can add some sort of pagination using this API by changing parameter page with currentPage and receive different
// movies
export const MOVIES_LIST_URL = 'https://api.themoviedb.org/3/discover/movie?page=1'
//    The API key used here is currently not valid (please refer to the ReadMe). Typically, I do not expose the key, but in
// this instance, it was functioning correctly. However, it is essential to note that the key needs to be updated every
// 60 minutes, and the only way to do so is by accessing my account.
// I had intended to implement authentication to secure this JWT better, but unfortunately, the API being used does
// not support this feature.
export const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTgwNTA4NzI2MDIwYTA3ODdlNjRhYjEzNDFmZGRjZiIsInN1YiI6IjY1ZjBlYWI0MGU0ZmM4MDE4NmNhM2IzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WHmVe_rH15rgUZJP1A_Ih6536sbPI_iXDlEXOi1ZQ-g'
