
    let showNav = document.getElementById("open");
    let hideNav = document.getElementById("close");
    let nav = document.getElementById("nav");

    const toggleMenu = () => {
        nav.classList.toggle("open");
    }

    showNav.addEventListener('click', toggleMenu);
    hideNav.addEventListener('click', toggleMenu);








