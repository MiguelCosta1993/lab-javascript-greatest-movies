// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
  return array.map(value => value.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  return array.filter(
    element =>
      element.director === 'Steven Spielberg' &&
      element.genre.some(genre => genre === 'Drama')
  ).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (!array.length) {
    return 0;
  } else {
    let average = array
      .filter(array => array.rate >= 0)
      .reduce((acc, value) => {
        return acc + value.rate;
      }, 0);
    return Math.round((average / array.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  if (!arr.length) {
    return 0;
  } else {
    const dramaMovies = arr.filter(arr =>
      arr.genre.some(genre => genre === 'Drama')
    );
    return ratesAverage(dramaMovies);

    /*.reduce((acc, value) => {
        return acc + value.rate;
      }, 0);
    return Math.round((dramaMovies / arr.length) * 100) / 100;
  }*/
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let order = [...array];
  const semiOrder = order.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return semiOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const order = [...array];
  order.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const titlesOfMovies = order.map(value => value.title);
  return titlesOfMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
