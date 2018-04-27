# GIPHY API and AJAX


## This app generates GIPHYs by either clicking on the buttons proivded, or adding some yourself by searching for them using the search bar.

#### The app takes the entered search term topics from a user input box and pushes them into array from which it creates buttons in the HTML. Clicking on a button grabs 10 static, non-animated gif images from the GIPHY API and places them on the page.
- When the user clicks one of the still GIPHY images, the gif should animate. 
- If the user clicks the gif again, it should stop playing.
- With every gif is displayed its rating (PG, G, etc.). 

## Technologies Used
- HTML
- CSS Bootstrap
- JavaScript to make the page dynamic
- jQuery for Dom Manipulation
- AJAX for API GET requests

## Code Explanation
- A form was implemented to take the value from a user input box and add it into the `topics` array.
- CSS Bootstrap was used to arrange the page into columns and display the gifs in a gallery format.
- AJAX Call to Giphy's API was created to access the images by topic entered.
- Event listeners on "click" were used!

-------------

### Function Using AJAX Request to Giphy


```
    function displayGIPHY() {

    var x = $(this).data("search");
    console.log(x);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

    console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    var results = response.data;
    console.log(results);
    for (var i = 0; i < results.length; i++) {

    var showDiv = $("<div class='col-md-4'>");

    var rating = results[i].rating;
    var defaultAnimatedSrc = results[i].images.fixed_height.url;
    var staticSrc = results[i].images.fixed_height_still.url;
    var showImage = $("<img>");
    var p = $("<p>").text("Rating: " + rating);

    showImage.attr("src", staticSrc);
    showImage.addClass("showGiphy");
    showImage.attr("data-state", "still");
        showImage.attr("data-still", staticSrc);
        showImage.attr("data-animate", defaultAnimatedSrc);
        showDiv.append(p);
        showDiv.append(showImage);
$("#gifArea").prepend(showDiv);

      }
    });
}
```
