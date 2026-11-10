/*==================================
        MENÚ AL HACER SCROLL
===================================*/

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(6,27,58,.98)";
            header.style.boxShadow = "0 8px 24px rgba(0,0,0,.2)";
        } else {
            header.style.background = "rgba(6,27,58,.94)";
            header.style.boxShadow = "0 8px 24px rgba(0,0,0,.12)";
        }
    });
}

/*==================================
      APARICIÓN DE SECCIONES
===================================*/

const secciones = document.querySelectorAll("section");

if (secciones.length && "IntersectionObserver" in window) {
    const aparecer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("mostrar");
            }
        });
    });

    secciones.forEach((sec) => aparecer.observe(sec));
}

/*==================================
     EFECTO SOBRE EL BOTÓN
===================================*/

const boton = document.querySelector(".btn");

if (boton) {
    boton.addEventListener("mouseover", () => {
        boton.style.transform = "scale(1.08)";
    });

    boton.addEventListener("mouseout", () => {
        boton.style.transform = "scale(1)";
    });

    boton.addEventListener("click", () => {
        alert("🎙 Bienvenido a Radio Stereo Tech Supatá.\n\nAquí podrás escuchar la transmisión en vivo.");
    });
}

/*==================================
      PARTÍCULAS FLOTANTES
===================================*/

const fondo = document.getElementById("particles");

if (fondo) {
    for (let i = 0; i < 35; i++) {
        const punto = document.createElement("span");
        punto.style.position = "absolute";
        punto.style.width = Math.random() * 6 + 3 + "px";
        punto.style.height = punto.style.width;
        punto.style.background = "white";
        punto.style.borderRadius = "50%";
        punto.style.left = Math.random() * 100 + "%";
        punto.style.top = Math.random() * 100 + "%";
        punto.style.opacity = Math.random();
        punto.style.animation = `flotar ${Math.random() * 8 + 6}s linear infinite`;
        fondo.appendChild(punto);
    }
}

/*==================================
      ECUALIZADOR
===================================*/

const barras = document.querySelectorAll(".ecualizador span");

if (barras.length) {
    setInterval(() => {
        barras.forEach((barra) => {
            barra.style.height = Math.random() * 70 + 20 + "px";
        });
    }, 250);
}

/*==================================
      EFECTO PARALLAX
===================================*/

window.addEventListener("mousemove", (e) => {
    if (fondo) {
        const x = e.clientX / 40;
        const y = e.clientY / 40;
        fondo.style.transform = `translate(${x}px,${y}px)`;
    }
});

/*==================================
      AÑO AUTOMÁTICO
===================================*/

const año = new Date().getFullYear();
console.log("Radio Stereo Tech Supatá © " + año);

/*==================================
      NAVEGACIÓN ACTIVA
===================================*/

const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(currentPage)) {
        link.classList.add("active");
    }
});