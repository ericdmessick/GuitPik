$(document).ready(function(){

addImage();

	function addImage() {
		userImage = localStorage.getItem("rockGod");
		$("#popUpUserImage").attr("src", userImage);

		userGuitar = localStorage.getItem("guitar");
		$("#popUpUserGuitar").attr("style", userGuitar);

  		// var guitarTop = localStorage.getItem("locStorTop");
  		// var guitarLeft = localStorage.getItem("locStorLeft");
  		// var guitarWidth = localStorage.getItem("locStorWidth");
  		// var guitarRotation = localStorage.getItem("locStorRotation");
	};

}); 