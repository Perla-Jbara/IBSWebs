document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            console.log("Clicked on:", this.getAttribute("href")); // Debug
            console.log("Target ID:", targetId); // Debug
            console.log("Target Section:", targetSection); // Debug

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for navbar height
                    behavior: "smooth"
                });
            } else {
                console.error("Section not found:", targetId);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    /*setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 3000);*/

    let founders = [
        { name: "Perla Jbara", img: "images/founder1.jpg", desc: "Tech leader with vast experience..." },
        { name: "Daniel Antonie", img: "images/founder2.jpg", desc: "Innovator in the field of AI..." }
    ];
    
    let index = 0;
    function updateFounder() {
        document.getElementById("founder-name").textContent = founders[index].name;
        document.getElementById("founder-img").src = founders[index].img;
        document.getElementById("founder-desc").textContent = founders[index].desc;
    }

    window.prevFounder = function () {
        index = (index === 0) ? founders.length - 1 : index - 1;
        updateFounder();
    };

    window.nextFounder = function () {
        index = (index === founders.length - 1) ? 0 : index + 1;
        updateFounder();
    };
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
                item.style.left = "0";
            } else {
                item.classList.remove("active");
                item.style.left = "100%"; // Hide non-active items
            }
        });
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Initialize the first item
    updateCarousel();
});
