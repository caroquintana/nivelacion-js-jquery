$(document).ready( function(){

	//1.ocultar la flecha
	$( "a.nav-item.js-back" ).hide();

	//2.añadiendo texto
	function printNews(){
		$('.printNews').append("NUEVAS RECETAS");
	}
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
//Etapa4.recorriendo el arreglo con forEach donde le digo que recorra recipesArray y si hightighted es true, me invoque renderRecipe
//Resultado se muestra en consola.
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	
	var rec = recipesArray.forEach(function(el){
		// console.log(el.highlighted);
		if(el.highlighted === true){
			//	return(renderRecipe(recipe))
			renderRecipe(el.highlighted);
		}
	});

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


