/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenamento(str1, str2) {
  firstPart = str1.slice(0, 2);

  secondPart = str2.slice(-3);

  result = firstPart.concat(secondPart);

  result = result.toUpperCase();

  console.log(result);
}

concatenamento("mela", "fragola");
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function generateRandomArray() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    randomArray.push(randomNumber);
  }
  return randomArray;
}

console.log("Numeri random", generateRandomArray());
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function numeriX(array) {
  const numeriPari = array.filter((number) => number % 2 === 0);
  return numeriPari;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPari = numeriX(numbers);
console.log("I NUMERI PARI SONO:", numeriPari);
console.log("contenuto della funzione per ricavare i numeri pari", numeriX);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function calcolaSomma(arrayNumeri) {
  let sommaTotale = 0;

  arrayNumeri.forEach(function (numero) {
    sommaTotale += numero;
  });

  return sommaTotale;
}
const numero = [1, 2, 3, 4, 5, 5];
const somma = calcolaSomma(numero);
console.log("somma dei numeri degli array:", somma);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray(arrayNumeri) {
  const sommaTotale = arrayNumeri.reduce((acc, numero) => acc + numero, 0);

  return sommaTotale;
}

const numeri = [1, 2, 3, 4, 5];
console.log("LA SOMMA E':", sommaArray(numeri)); // Output: 15
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incrementArray(arr, n) {
  return arr.map(function (num) {
    return num + n;
  });
}

const nuMMeri = [1, 2, 3, 4, 5];
const incrementedNumbers = incrementArray(numbers, 10);
console.log("secodo array:", incrementedNumbers);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function stringLengths(arr) {
  return arr.map(function (str) {
    return str.length;
  });
}

const strings = ["amo", "tanto", "i", "gatti"];
const lengths = stringLengths(strings);
console.log(lengths);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function numeriDispari() {
  const dispariArray = [];
  for (let index = 1; index < 99; index += 2) {
    dispariArray.push(index);
  }
  return dispariArray;
}
const dispari = numeriDispari();
console.log("numeri dispari da 1 a 99:", dispari);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */

function findOldestMovie(movies) {
  let oldestMovie = movies[0]; // Assume che il primo film sia il più vecchio

  movies.forEach(function (movie) {
    // Confronta gli anni dei film per trovare il più vecchio
    if (parseInt(movie.Year) < parseInt(oldestMovie.Year)) {
      oldestMovie = movie;
    }
  });

  return oldestMovie;
}

const oldestMovie = findOldestMovie(movies);
console.log(
  "Il film più vecchio è:",
  oldestMovie.Title,
  "del",
  oldestMovie.Year
);

/* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */
function getNumberOfMovies(movies) {
  return movies.length;
}

const numberOfMovies = getNumberOfMovies(movies);
console.log("Il numero di film è:", numberOfMovies);

/* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */
function getMovieTitles(movies) {
  const titles = [];
  movies.forEach((movie) => {
    titles.push(movie.Title);
  });
  return titles;
}

const movieTitles = getMovieTitles(movies);
console.log("Titoli dei film:", movieTitles);

/* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */
function getMoviesThisMillennium(movies) {
  const currentYear = new Date().getFullYear();
  const millenniumMovies = movies.filter((movie) => {
    return parseInt(movie.Year) >= 2000 && parseInt(movie.Year) < currentYear;
  });
  return millenniumMovies;
}

const millenniumMovies = getMoviesThisMillennium(movies);
console.log("Film usciti nel millennio corrente:", millenniumMovies);
/* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */
function sumOfProductionYears(movies) {
  const sum = movies.reduce((total, movie) => {
    return total + parseInt(movie.Year);
  }, 0);
  return sum;
}

const totalYears = sumOfProductionYears(movies);
console.log("Somma degli anni di produzione dei film:", totalYears);
/* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */
function findOldestMovie(movies) {
  // Utilizziamo la funzione `find` sull'array `movies`
  const filmAntico = movies.find((movie) => {
    // Restituiamo true se il film ha l'anno minimo
    return movie.Year === "1963";
  });

  // Restituiamo il film più vecchio trovato
  return filmAntico;
}

// Test della funzione
const filmAntico = findOldestMovie(movies);
console.log("Film più vecchio:", filmAntico);

/* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */
function findFirstMovieIndexByYear(movies, year) {
  const index = movies.findIndex((movie) => {
    return movie.Year === year;
  });

  return index;
}

const year = "2012";
const firstMovieIndex = findFirstMovieIndexByYear(movies, year);
console.log("Indice del primo film uscito nel", year + ":", firstMovieIndex);
