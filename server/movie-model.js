/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
/* this will save the movies data insteand of a array[] to a object{},
 and imdbID as a key so that in server.js, the movie can be easily to find
 
 */
const movies = {
  tt0084787: {
    imdbID: "tt0084787", // its important that this ID is also inside the object itself
    Title: "The Thing",
    Released: "1982-06-25",
    Runtime: 109,
    Genres: ["Horror", "Mystery", "Sci-Fi"],
    Directors: ["John Carpenter"],
    Writers: ["Bill Lancaster", "John W. Campbell Jr."],
    Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
    Plot: "A research team in Antarctica is hunted by a shape-shifting alien...",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Metascore: 57,
    imdbRating: 8.2,
  },
  tt12045190: {
    imdbID: "tt12045190",
    Title: "Project Hail Mary",
    Released: "2026-03-20",
    Runtime: 145,
    Genres: ["Sci-Fi", "Adventure", "Drama"],
    Directors: ["Christopher Miller", "Phil Lord"],
    Writers: ["Drew Goddard", "Andy Weir"],
    Actors: ["Ryan Gosling", "Sandra Hüller", "Milana Vayntrub"],
    Plot: "An astronaut wakes up on a spaceship with no memory of who he is or how he got there. He must use science to save humanity.",
    Poster:
      "https://image.tmdb.org/t/p/w600_and_h900_face/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
    Metascore: 85,
    imdbRating: 8.9,
  },
  tt0119698: {
    imdbID: "tt0119698",
    Title: "Princess Mononoke",
    Released: "1997-07-12",
    Runtime: 133,
    Genres: ["Animation", "Action", "Adventure", "Fantasy"],
    Directors: ["Hayao Miyazaki"],
    Writers: ["Hayao Miyazaki"],
    Actors: ["Yôji Matsuda", "Yuriko Ishida", "Yûko Tanaka"],
    Plot: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    Poster:
      "https://image.tmdb.org/t/p/w600_and_h900_face/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    Metascore: 76,
    imdbRating: 8.4,
  },
};
//export so that can be used inside of server.js
module.exports = movies;
