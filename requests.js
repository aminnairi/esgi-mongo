/*
 ****************************
 * Collection: Sakila_films *
 ****************************
 */

// Rechercher tous les films avec l’acteur ED CHASE
db.Sakila_films.find({"Actors": {$elemMatch: {"First name": "ED", "Last name": "CHASE"}}});

// Rechercher tous les films dont la description comprend “documentary” et de type “horror”
db.Sakila_films.find({"Description": /documentary/i, "Category": /horror/i});

/*
 **********************************
 * Collection: video_movieDetails *
 **********************************
 */

// Donner le nombre de films en rating “G”
db.video_movieDetails.find({ "rated": "G" }).length();

// Rechercher tous les films de 2013 ou 2012 dont la durée est entre 60 et 150 minutes
// Rechercher tous les films qui ont une image certified sur tomato

/*
 ****************************
 * Collection: Sakila_films *
 ****************************
 */

// Afficher tous les rated (“PG”, “PG-13”, ...) et le nombre de films pour chacun
db.Sakila_films.find({"Rating": "G"}).length();
