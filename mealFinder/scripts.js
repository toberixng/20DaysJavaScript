const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');


// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // clear single meal
  single_mealEl.innerHTML = '';

  // Get the search term
  const term = search.value;
  if(term.trim()){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => console.log(data))

    resultHeading.innerHTML = `<h2>Search result for '${term}'</h2>`
  }
}

   //Even Listeners
   submit.addEventListener('submit', searchMeal)