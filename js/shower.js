			document.addEventListener("DOMContentLoaded", init, false);

			function init() {
				var con = document.querySelector("#console");

				function log(){
					console.log(...arguments);
					
					var pre = document.createElement("pre");

					for(var arg of arguments) {
						switch( typeof arg )
						{
							case "string":
								pre.append(arg);
								break;
							default:
								pre.append(JSON.stringify(arg, null ,2));
						}

						pre.append(" ");
					}

					con.append(pre);
					
				}


				swapiModule.getResources(function(data) {
					console.log("Result of getResources", data);
				});

				//get all people
				swapiModule.getPeople(function(data) {
					log("Result of getPeople", data);
				});
				// //get all people, page 2
				// swapiModule.getPeople({page: 2}, function(data) {
				// 	log("Result of getPeople (page 2)", data);
				// });

				// //get one person (assumes 1 works)
				// swapiModule.getPerson(1,function(data) {
				// 	log("Result of getPerson/1", data);
				// });

				//get all films
				swapiModule.getFilms(function(data) {
					log("Result of getFilms", data);
				});
				// //get all films, page 1
				// swapiModule.getFilms({page: 1}, function(data) {
				// 	log("Result of getFilms (page 1)", data);
				// });

				// //get one film (assumes 1 works)
				// swapiModule.getFilm(1,function(data) {
				// 	log("Result of getFilm/1", data);
				// });
				
				//get all starships
				swapiModule.getStarships(function(data) {
					log("Result of getStarships", data);
				});
				// //get all starships, page 2
				// swapiModule.getStarships({page: 2}, function(data) {
				// 	log("Result of getStarships (page 2)", data);
				// });

				// //get one starship (assumes 2 works)
				// swapiModule.getStarship(2,function(data) {
				// 	log("Result of getStarship/2", data);
				// });

				//get all vehicles
				swapiModule.getVehicles(function(data) {
					log("Result of getVehicles", data);
				});
				// //get all vehicles, page 2
				// swapiModule.getVehicles({page: 2}, function(data) {
				// 	log("Result of getVehicles (page 2)", data);
				// });

				// //get one vehicle (assumes 4 works)
				// swapiModule.getVehicle(4,function(data) {
				// 	log("Result of getVehicle/4", data);
				// });

				//get all species
				swapiModule.getAllSpecies(function(data) {
					log("Result of getAllSpecies", data);
				});
				// //get all species, page 2
				// swapiModule.getAllSpecies({page: 2}, function(data) {
				// 	log("Result of getAllSpecies (page 2)", data);
				// });
                
				// //get one species (assumes 1 works)
				// swapiModule.getSpecies(1,function(data) {
				// 	log("Result of getSpecies/1", data);
				// });

				//get all planets
				swapiModule.getPlanets(function(data) {
					log("Result of getPlanets", data);
				});
				// //get all planets, page 2
				// swapiModule.getPlanets({page: 2}, function(data) {
				// 	log("Result of getPlanets (page 2)", data);
				// });

				// //get one planet (assumes 1 works)
				// swapiModule.getPlanet(1,function(data) {
				// 	log("Result of getPlanet/1", data);
				// });
			}