/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.3'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    }]
  
  function turnHoursToMinutes (moviesArray){
     
      return moviesArray.map(elem => {
          let hours =0;
          let minutes= 0;
          if (elem.duration.indexOf('h') !== -1){
              hours = parseInt(elem.duration[0],10)*60;
  
          }
  
          if (elem.duration.indexOf('min')!==-1){
              minutes=parseInt(elem.duration.substring(elem.duration.length-5, elem.duration.length-3));
          }
      return{...elem, duration: hours+minutes};
  }
  )
  }
  
   //let newArray = turnHoursToMinutes(movies);
      //console.log(newArray)
  
  turnHoursToMinutes(movies)
    
// Get the average of all rates with 2 decimals 
  
 
let ratesAverage = function(){
    let avg = movies.reduce(
    (acumulador,elemento,indice,array)=>{
        return acumulador +elemento.rate/array.length},0)
        console.log(avg)
   
   }
   ratesAverage()
   

// Get the average of Drama Movies

//>>>>>filter by movi genre
let dramaMovies = moviesArray.filter(e=>{
    return e.genre.indexOf("Drama")!==-1;
})

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
