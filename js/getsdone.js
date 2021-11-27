/* getsdone.js */

function setMenuActive(name) {

  var home = document.getElementById("home");
  var blog = document.getElementById("blog");
  var about = document.getElementById("about");

  if (name === "blog") {

    home.className = "nav-item";
    blog.className = "nav-item active";
    about.className = "nav-item";

  } else if (name === "about") {

    home.className = "nav-item";
    blog.className = "nav-item";
    about.className = "nav-item active";

  } else if (name === "home") {

    home.className = "nav-item active";
    blog.className = "nav-item";
    about.className = "nav-item";

  } else {

    home.className = "nav-item";
    blog.className = "nav-item";
    about.className = "nav-item";

  }

} // setMenuActive
