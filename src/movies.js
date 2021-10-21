// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(function(obj){
    return obj.director
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
	let dram = 0;
	movies.filter(function(obj){
		if(obj.director === "Steven Spielberg" && obj.genre.includes("Drama")){
      dram++
		}
	});
	return dram
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  /*
  if(movies.length === 0){
    return 0
  }
  let total = movies.reduce(function(acu, obj) {
    return acu + obj.score
  }, 0);
  let avg = total / movies.length
  return Math.round(avg * 100) / 100;
  */

  if(movies.length === 0){
    return 0
  }
  let total = movies.reduce(function(acu, obj) {
    if(obj["score"] === undefined || obj["score"] === null){
      return obj = acu
    } else {
      return acu + obj.score
    }
  }, 0);
  let avg = total / movies.length
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let totalDrama = movies.reduce(function(acu, obj){
    if(obj.genre.includes("Drama")){
      return acu + obj.score
    } else {
      return 0
    }
  }, 0);
  let avgOfDrama = totalDrama / movies.length
  return Math.round (avgOfDrama * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return movies.sort(function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    } else if ( a.year > b.year ){
      return 1;
    } else if (a.year === b.year){
      if(a.title < b.title){
        return -1;
      } else if(a.title > b.title){
        return 1
      }
    }
    return 0;
});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sorMov = movies.sort(function compare(a, b){
      if (a.title < b.title){
        return -1
      } else if (a.title > b.title){
        return 1
      }
      return 0
  });
  return sorMov
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  //no time
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  // no time
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
