// 7. Make an array of objects containing more information about your favorite movies.
// The objects should have at least three properties.

var fav_movies = [
  {title: "The Shawshank Redemption", trailer: "http://goo.gl/RnvIbC", rating: 9.3},
  {title: "Schindler's List", trailer: "http://goo.gl/LCEBCL", rating: 8.9},
  {title: "The Good, the Bad and the Ugly", trailer: "http://goo.gl/wEk7MN", rating: 8.9},
  {title: "Forrest Gump", trailer: "http://goo.gl/UH1CF7", rating: 8.7},
];
console.log(fav_movies)

// 8. Use `for` to loop through the answer from exercise #7 and print only one property from the object.
// i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".
for (i = 0; i < fav_movies.length; i++) {
  console.log(fav_movies[i].title)
}
