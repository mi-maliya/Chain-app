const userScroll = () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.add("fixed-top");
      
    } else {
      navbar.classList.remove("navbar-sticky");
      navbar.classList.remove("fixed-top");
    }
  });
};

document.addEventListener("DOMContentLoaded", userScroll);
