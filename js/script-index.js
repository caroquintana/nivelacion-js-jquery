$(document).ready( function(){
	//5.llamando a la funcion
	renderActivities(activitiesArray);
	//1.ocultar la flecha
	$( "a.nav-item.js-back" ).hide();
	//2.añadiendo texto
	function printNews(){
		$('.printNews').append("NUEVAS RECETAS");
	}
	printNews();

	

	function renderHighlightedRecipes(recipesArray) {
		//console.log('Recipes: ', recipesArray);
		var rec = recipesArray.forEach(function(el){
			// console.log(el.highlighted);
			if(el.highlighted === true){
				//	return(renderRecipe(recipe))
				renderRecipe(el);
			};
		});
	}
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipe);
	//añadiendo los elementos a la clase list-recipe haciendo referencia a su padre cada vez. Luego invoco al atributo del arreglo para que se muestre.
	$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>" + recipe.title + "</span><span class='metadata-recipe'><span class='author-recipe'>" + recipe.source.name + "</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src='img/recipes/320x350/" + recipe.name + ".jpg'/></a>");
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	//console.log('Activities: ', activitiesArray);
	if(activitiesArray.length>0){
		$(".wrapper-message").hide();
	}
};

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
//6.intentando mostrar estos elementos.
function printListActivities(activitiesArray){
	$(".list-activities").append("<a href='#' class='item-activity'><span class='attribution'><span class='avatar'><img src='img/acitivity/" + activitiesArray.userAvatar + "class='image-avatar'></span><span class='meta'><span class='author'>" + acitivitiesArray.userName + "</span> made <span class='recipe'>" + acitivitiesArray.recipeName + "</span>:" + activitiesArray.text + "<span class='location'>&mdash;" + activitiesArray.place + "</span></span></span><div class='bg-image' style='background-image: url(" + activitiesArray.image + ");'></div></a>");
}


function renderActivity(recipe) {

};






