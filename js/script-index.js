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
//Etapa3.recorriendo el arreglo con forEach donde le digo que recorra recipesArray y si hightighted es true, me invoque renderRecipe
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
	//añadiendo los elementos a la clase list-recipe haciendo referencia a su padre cada vez
	$(".list-recipes").append("<a class='item-recipe' href='#'></a>");
	$(".item-recipe").append("<span class='attribution'</span>");
	$(".attribution").append("<span class='title-recipe'</span>");
	$(".title-recipe").append("<span class='metadata-recipe'</span>");
	$(".metadata-recipe").append("<span class='author-recipe'</span>");
	$(".metadata-recipe").append("<span class='bookmarks-recipe'</span>");
	$(".bookmarks-recipe").append("<span class='icon-bookmark'</span>");
	$(".item-recipe").append("<img src='URL DE LA IMAGEN'/>");
}
renderRecipe(recipe);


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


