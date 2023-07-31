const arrPlants = [
  {
    name: "Ficus Tree",
    price: 320, 
    description: "lorem ipsum",
    image: "Plant 1.png"
  },

  {
    name: "White Sprite Succulent",
    price: 200, 
    description: "lorem ipsum",
    image: "Plant 2.png"
  },

  {
    name: "Snake Plant",
    price: 400, 
    description: "lorem ipsum",
    image: "Plant 3.png"
  },

  {
    name: "Parlor Palm",
    price: 350, 
    description: "lorem ipsum",
    image: "Plant 4.png"
  },
  {
    name: "Parlor Palm",
    price: 350, 
    description: "lorem ipsum",
    image: "Plant 5.png"
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




    

// Load Plants


// -----------------------------------------

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

    
    // -----------------------------------------
    //Load All Plants
    // -----------------------------------------

  

      for (let i = 0; i < arrPlants.length; i++) {
        let plant = arrPlants[i];
        
        console.log(plant);

      }
        //1: Set 
      

     


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
  
})
