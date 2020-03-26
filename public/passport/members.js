// let Blogs;

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // Gets user e-mail and renders everything in front of @ to the welcome section of the page while rendering email in email section.
  $.get("/api/user_data").then(function(data) {
    var emailString = data.email;
    var emailSplitArry = emailString.split("@");
    $(".member-name").text(emailSplitArry[0]);
    $(".member-email").text(data.email);
    console.log("email string: ", emailString);
  });
  // This GET request retrieves data from api/blogs url param and set userBlogs as object key as blogObject and
  // the data returned is value. That way handlebars can use the object to render data on HTML screen.
  // $.get("/api/blogs").then(function(data) {
  //   Blogs = {
  //     Blogs: data
  //   };
  //   // $(".userBlogsTest").text(JSON.stringify(data));
  //   console.log("get API blogs data : ", Blogs);
  // });

  $(".blogData").on("submit", function(event) {
    event.preventDefault();
    var newBlog = {
      city: $("#city-input")
        .val()
        .trim(),
      establishment: $("#establishment-input")
        .val()
        .trim(),
      itemsOrdered: $("#itemsOrdered-input")
        .val()
        .trim(),
      rating: $("#rating-input")
        .val()
        .trim(),
      story: $("#blog-input")
        .val()
        .trim()
    };

    // send the post request
    $.ajax("/api/blogs/", {
      type: "POST",
      data: newBlog
    }).then(function() {
      console.log("Created new blog");
      location.reload();
    });
  });

  // API Call to get restaurants by city
  var theCity;
  // var cityCount;
  var idCity;

  $("#cityBtn").on("click", function(event) {
    event.preventDefault();
    $("ul").empty();

    theCity = $("#cityInput").val();
    console.log(theCity);

    // cityCount = $("#quantity").val();
    // console.log(cityCount);

    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://developers.zomato.com/api/v2.1/cities?q=" +
        theCity +
        "&count=1",
      method: "GET",
      headers: {
        "user-key": "59304a7ddb4b77672ec1dbd72b36a701",
        Accept: "application/json"
      }
    };

    $.ajax(settings).done(function(response) {
      console.log(response);

      var $newUl = $("<ul>");

      var $newLi = $(
        `<li class="list-unstyled text-primary text-bold text-left h4"><span style="color: black;" class="h4">City:</span> ${response.location_suggestions[0].name}</li>`
      );

      console.log(response.location_suggestions[0].name);
      idCity = response.location_suggestions[0].id;
      console.log(response.location_suggestions[0].id);

      $newLi.appendTo($newUl);
      $newUl.appendTo("#cityList");
    });

    $.ajax({
      url:
        "https://developers.zomato.com/api/v2.1/collections?city_id=" +
        idCity +
        "&count=3",
      method: "GET",
      headers: {
        "user-key": "59304a7ddb4b77672ec1dbd72b36a701",
        Accept: "application/json"
      }
    }).then(function(response) {
      var $newUl = $("<ul>");
      var $newLi = $(
        `<li class="list-unstyled text-dark text-left h5">${response.collections[0].collection.description} 
        <p class="h4"><a href="${response.share_url}">Click for Zomato results!</a></p></li>`
      );
      $newLi.appendTo($newUl);
      $newUl.appendTo("#cityList");

      console.log(response);
      console.log(response.share_url);
      // idCity = response.location_suggestions[0].id;
      // console.log(idCity);
    });
  });
});
