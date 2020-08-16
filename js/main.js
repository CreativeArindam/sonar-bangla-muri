window.onload = function () {
  document.getElementById("spanYear").innerHTML = new Date().getFullYear();
};

menuIsOpen = 0;

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (menuIsOpen === 0) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("myP").style.background =
        "rgba(238,238,238,0.97)";
      document.getElementById("myP").style.boxShadow =
        "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)";
      document.getElementById("myP").style.padding = "0.3rem 0.7rem";
    } else {
      document.getElementById("myP").style.background = "rgba(238,238,238,0.6)";
      document.getElementById("myP").style.boxShadow = "none";
      document.getElementById("myP").style.padding = "0.6rem 0.7rem";
    }
  }
}

function toggleFunction() {
  var x = document.getElementById("menu");
  var y = document.getElementById("toggleBar");
  if (x.style.visibility === "visible") {
    menuIsOpen = 0;
    x.style.visibility = "hidden";
    y.innerHTML = "<i class='fa fa-bars'></i>";
    y.style.color = "#000";
    document.getElementById("logo-id").style.transform = "translateX(0)";
    myFunction();
  } else {
    menuIsOpen = 1;
    x.style.visibility = "visible";
    y.innerHTML = "<i class='fa fa-times'></i>";
    y.style.color = "red";
    document.getElementById("myP").style.background = "transparent";
    document.getElementById("myP").style.boxShadow = "none";
    document.getElementById("logo-id").style.transform = "translateX(6rem)";
  }
}
