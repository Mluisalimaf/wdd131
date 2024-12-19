
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu); 
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() { 
        this.navLinks.forEach((link, index) => { 
            link.style.animation 
            ? (link.style.animation = "") 
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`); 
        }); 
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();




const request = [ 
    { id: "fc-1888", name: "Order", averagerating: 4.5 }, 
    { id: "fc-2050", name: "Question", averagerating: 4.7 }, 
    { id: "fs-1586", name: "Compliment", averagerating: 5.5 },
    { id: "fs-1987", name: "Complaint", averagerating: 3.5 }, 
]; 

const requestSelect = document.getElementById('request'); 
request.forEach(request => { 
    const option = document.createElement('option'); 
    option.value = request.id; 
    option.textContent = request.name; 
    requestSelect.appendChild(option); 
});

document.getElementById('clickable-container').addEventListener('click', function() { window.location.href = 'https://mluisalimaf.github.io/wdd131/project/products.html' });
