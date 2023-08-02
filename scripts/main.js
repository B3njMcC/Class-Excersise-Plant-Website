const arrPlants = [
  {
    name: "Ficus Tree",
    price: 320, 
    description: "lorem ipsum",
    image: "plant1.png"
  },

  {
    name: "White Sprite Succulent",
    price: "R" + 200, 
    description: "lorem ipsum",
    image: "plant2.png"
  },

  {
    name: "Snake Plant",
    price: 400, 
    description: "lorem ipsum",
    image: "plant3.png"
  },

  {
    name: "Parlor Palm",
    price: 350, 
    description: "lorem ipsum",
    image: "plant4.png"
  },
  {
    name: "Japanese Maple",
    price: 350, 
    description: "lorem ipsum",
    image: "plant5.png"
  }
]


// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    loadPlants();

    // -----------------------------------------
    // Wishlist Page

    tableAdd();
  })



    

// Load Plants

// -----------------------------------------

    // Hide all description text from the plant cards
    $("#descriptionText").hide();
 
    
    // -----------------------------------------
    //Load All Plants
    // -----------------------------------------

 function loadPlants() {
      for (let i = 0; i < arrPlants.length; i++) {

        let plant = arrPlants[i];
        
        console.log(plant);

        // 1: Select the plants container and add the current array plant to it
        $('#plantsContainer').append($("#plantCardTemplate").html());

        // 2: Create a variable that contains the most recently added card
        
        let currentChild = $('#plantsContainer').children().eq(i + 1);

        // 3: set the content for the current plant card from the array

        $(currentChild).find('#nameText').text(plant.name);
        $(currentChild).find('#priceText').text(plant.price);
        $(currentChild).find('#descriptionText').text(plant.description);
        $(currentChild).find('.card-image-top').attr("src",  "assets/" + plant.image);
        
      }
}
        
      

     


// -----------------------------------------

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

  // -----------------------------------------
  //Wishlist page
  // -----------------------------------------

  
  
  function tableAdd() {

  for (let i = 0; i < arrPlants.length; i++) {



    let plant = arrPlants[i];
    
    $('#tableContainer').append($("#plantRowTemplate").html());

    let currentChild = $('#tableContainer').children().eq([i + 2]);

    $(currentChild).find('#plantName').text(plant.name);
    $(currentChild).find('#plantImage').attr("src", "assets/" + plant.image);

  }



}

//Remove the current row of the MinusButton

$('#tableContainer').on('click', '#minusButton', function() {
  $(this).closest("tr").remove();
});



