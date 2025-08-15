document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown-category');

  dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-btn');
      const content = dropdown.querySelector('.dropdown-content');

      button.addEventListener('click', () => {
          content.classList.toggle('show');
      });
  });
});

  

  document.addEventListener("DOMContentLoaded", function () {
    const aside = document.querySelector(".aside-bar");
    const footer = document.querySelector("footer");
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aside.style.position = "absolute"; 
          aside.style.bottom = "0"; 
        } else {
          aside.style.position = "fixed"; 
          aside.style.bottom = "auto";
        }
      },
      { root: null, threshold: 0.1 }
    );
  
    observer.observe(footer);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".nav-bar"); 
    const section = document.querySelector(".section-bar"); 
    
    if (!navbar || !section) {
        console.error("Navbar veya Section bulunamadı!");
        return;
    }

    const navbarHeight = navbar.offsetHeight; 

    window.addEventListener("scroll", function () {
        if (window.scrollY > navbarHeight) {
            section.classList.add("fixed");
        } else {
            section.classList.remove("fixed");
        }
    });
});

let lastScrollTop = 0;
const topBar = document.querySelector(".top-bar");
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        topBar.style.transform = "translateY(-100%)";
    } else {
        
        topBar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});








const searchButton = document.querySelector('.search-icon-button');
const searchMenu = document.querySelector('.search-menu');


searchButton.addEventListener('click', () => {
    searchMenu.classList.toggle('active');  
});




function expandMenu(expand) {
    const menu = document.querySelector(".before-footer-menu");
    if (expand) {
        menu.classList.add("expand");
    } else {
        menu.classList.remove("expand");
    }
}

function expandMenu(expand) {
    const menu = document.querySelector(".before-footer-menu");
    if (expand) {
        menu.classList.add("expand");
    } else {
        menu.classList.remove("expand");
    }
}



const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');


dropdown.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});


dropdownMenu.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});


dropdown.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});


dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});




  
  

  