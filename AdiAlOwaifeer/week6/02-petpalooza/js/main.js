$(document).ready(function(){

var pets = ["beagle", "bunny", "cat", "iguana", "pony"];
for (var i = 0; i < pets.length; i++) {
    $('#pet-select-list').append('<option value="' + pets[i] + '">' + pets[i] + '</option>');
}

$("#btnSubmit").click(function(event) {
    var petValue = $("#pet-select-list").val();
    event.preventDefault();

    switch(petValue) {
      case "beagle": 
      $("#the-pet-image").attr('src','img/beagle.jpg');
      break;

      case "bunny": 
      $("#the-pet-image").attr("src", 'img/bunny.jpg');
      break;

      case "cat": $("#the-pet-image").attr('src','img/cat.jpg');
      break;

      case "iguana": $("#the-pet-image").attr('src','img/iguana.jpg');
      break;

      case "pony": $("#the-pet-image").attr('src', 'img/pony.jpg');
      break;

      default:

    }
  });
  
});
