document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 3000);

    let founders = [
        { name: "John Doe", img: "images/founder1.jpg", desc: "Tech leader with vast experience..." },
        { name: "Jane Smith", img: "images/founder2.jpg", desc: "Innovator in the field of AI..." }
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
