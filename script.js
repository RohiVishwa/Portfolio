// ===============================
// MOBILE MENU
// ===============================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


// ===============================
// PROFILE 3D EFFECT
// ===============================

const profile =
    document.querySelector(".profile-card");


window.addEventListener("mousemove", event => {

    if (!profile || window.innerWidth < 950)
        return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 8;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 8;

    profile.style.transform =
        `perspective(1000px)
         rotateY(${x}deg)
         rotateX(${-y}deg)`;

});


if (profile) {

    profile.addEventListener("mouseleave", () => {

        profile.style.transform =
            "perspective(1000px) rotateY(0) rotateX(0)";

    });

}


// ===============================
// ACTIVE NAV ON SCROLL
// ===============================

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll("#nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// IMAGE FALLBACK
// ===============================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.display = "none";

        const parent = img.parentElement;

        if (parent) {
            parent.style.background =
                "linear-gradient(135deg,#17111f,#09070d)";
        }

    });

});