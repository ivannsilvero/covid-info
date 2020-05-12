const h1 = document.getElementById("mc");
let acc = document.getElementsByClassName("accordion");
let i;

if (h1.style.display == "none") {
    h1.style.display = "block";
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
// ____________________ ALTERNATIVA ______________________
// const boton1 = document.getElementById("boton1");
// const boton2 = document.getElementById("boton2");
// const boton3 = document.getElementById("boton3");
// const boton4 = document.getElementById("boton4");
// const boton5 = document.getElementById("boton5");
// const boton6 = document.getElementById("boton6");

// const covid_19 = document.getElementById("covid_19");
// const contagio = document.getElementById("contagio");
// const prevencion = document.getElementById("prevencion");
// const sintomas = document.getElementById("sintomas");
// const diagnostico = document.getElementById("diagnostico");
// const tratamiento = document.getElementById("tratamiento");

// boton1.addEventListener('click', () => {
//     contagio.style.display = "none";
//     prevencion.style.display = "none";
//     sintomas.style.display = "none";
//     diagnostico.style.display = "none";
//     tratamiento.style.display = "none";

//     if (covid_19.style.display == "none") {
//         covid_19.style.display = "block";
//     }
// });

// boton2.addEventListener('click', () => {
//     covid_19.style.display = "none";
//     prevencion.style.display = "none";
//     sintomas.style.display = "none";
//     diagnostico.style.display = "none";
//     tratamiento.style.display = "none";

//     if (contagio.style.display == "none") {
//         contagio.style.display = "block";
//     }
// });

// boton3.addEventListener('click', () => {
//     covid_19.style.display = "none";
//     contagio.style.display = "none";
//     sintomas.style.display = "none";
//     diagnostico.style.display = "none";
//     tratamiento.style.display = "none";

//     if (prevencion.style.display == "none") {
//         prevencion.style.display = "block";
//     }
// });

// boton4.addEventListener('click', () => {
//     covid_19.style.display = "none";
//     contagio.style.display = "none";
//     prevencion.style.display = "none";
//     diagnostico.style.display = "none";
//     tratamiento.style.display = "none";

//     if (sintomas.style.display == "none") {
//         sintomas.style.display = "block";
//     }
// });

// boton5.addEventListener('click', () => {
//     covid_19.style.display = "none";
//     contagio.style.display = "none";
//     prevencion.style.display = "none";
//     sintomas.style.display = "none";
//     tratamiento.style.display = "none";

//     if (diagnostico.style.display == "none") {
//         diagnostico.style.display = "block";
//     }
// });

// boton6.addEventListener('click', () => {
//     covid_19.style.display = "none";
//     contagio.style.display = "none";
//     prevencion.style.display = "none";
//     sintomas.style.display = "none";
//     diagnostico.style.display = "none";

//     if (tratamiento.style.display == "none") {
//         tratamiento.style.display = "block";
//     }
// });