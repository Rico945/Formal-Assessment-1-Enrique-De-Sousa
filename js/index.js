//when the doc loads
$(document).ready(function(){

    console.log("hello");

    //-----------------------------------------------------------------------------
    //Home

    //when the doc loads, animate hero img up
    $(".hero-image").animate({top: '-=100px'});

    //-----------------------------------------------------------------------------
    //Browse

    //Hide all description text from the plant cards
    $("#description-text").hide();

});

//When a plant card is clicked
$(".card").click(function(){

    //Toggle price and descripton text
    $("#price-text").toggle();
    $("#description-text").toggle();

    //Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

});

//-----------------------------------------------------------------------------
//Wishlist

//When the remove button is clicked
$(".button3").click(function(){

    //Remove the row from the table
    $("td").remove();

});