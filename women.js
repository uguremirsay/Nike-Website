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


document.addEventListener("DOMContentLoaded", () => {
    // Genel Slider Fonksiyonu
    function setupSlider(containerSelector, btnPrevSelector, btnNextSelector, itemSelector) {
        const sliderWrapper = document.querySelector(containerSelector);
        const prevBtn = document.querySelector(btnPrevSelector);
        const nextBtn = document.querySelector(btnNextSelector);
        const products = document.querySelectorAll(itemSelector);

        if (!sliderWrapper || !prevBtn || !nextBtn || products.length === 0) return;

        let index = 0;
        const visibleProducts = 3; 
        const productWidth = products[0].offsetWidth + 20; 

        const productCount = products.length;

        nextBtn.addEventListener("click", () => {
            if (index < productCount - visibleProducts) {
                index++;
                updateSlider();
            }
        });

        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
            }
        });

        function updateSlider() {
            const offset = index * productWidth;
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
        }
    }

    
    setupSlider('.slider-wrapper', '.prev-btn', '.next-btn', '.product-item');

    
    window.scrollProducts = function (direction) {
        const container = document.getElementById("product-container");
        if (container) {
            container.scrollLeft += direction; 
            console.log("Kaydırma yapıldı: ", direction);
        }
    };
    window.scrollMoreProducts = function (direction) {
        const container = document.getElementById("more-product-container");
        if (container) {
            container.scrollLeft += direction; 
            console.log("Kaydırma yapıldı: ", direction);
        }
    };
    window.scrollMemberProducts = function (direction) {
        const container = document.getElementById("member-product-container");
        if (container) {
            container.scrollLeft += direction; 
            console.log("Kaydırma yapıldı: ", direction);
        }
    };
    window.scrollSportProducts = function (direction) {
        const container = document.getElementById("sport-product-container");
        if (container) {
            container.scrollLeft += direction; 
            console.log("Kaydırma yapıldı: ", direction);
        }
    };





    function setupIconicSlider() {
        const iconicSlider = document.querySelector(".iconic-slider-wrapper");
        const products = document.querySelectorAll(".iconic-product");

        if (!iconicSlider || products.length === 0) return;

        let currentIndex = 0;

        function updateIconicSlider() {
            const productWidth = products[0].offsetWidth + 15;
            iconicSlider.style.transform = `translateX(${-currentIndex * productWidth}px)`;
        }

        window.scrollIconicSlider = function (direction) {
            const totalProducts = products.length;
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = 0; 
            } else if (currentIndex >= totalProducts - 1) {
                currentIndex = totalProducts - 1; 
            }


            updateIconicSlider();
        };
    }

    setupIconicSlider();
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


document.addEventListener("DOMContentLoaded", function () {
    const menCategoryMenu = document.querySelector('.men-category-menu'); 
    const navbar = document.querySelector('.nav-bar'); 

    
    const scrollThreshold = 245; 

    window.addEventListener('scroll', function () {
        if (window.scrollY >= scrollThreshold) {
            menCategoryMenu.classList.add('fixed');
        } else {
            menCategoryMenu.classList.remove('fixed'); 
        }
    });
});