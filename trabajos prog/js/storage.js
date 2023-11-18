let consolasPrimerInicio = [
  {
    id: "5f49fab9-3135-4676-a160-5c3fdbb1ae92",
    descripcion:
      "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. ",
    nombre: "Progresar",
    monto: 20000,
    tipo: "Nacional",
    imagen: "https://www.cronista.com/files/image/416/416773/61b8d6da00fac.png",
    requisito: "celular",
    link: "https://becasprogresar.educacion.gob.ar/",
    fechaDeCreacion: "2020-11-12",
  },
  {
    id: "2e897bad-d4e4-413d-a515-ed95df9ad917",
    descripcion:
      "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. ",
    nombre: "Manuel Belgrano",
    monto: 90000,
    tipo: "Nacional",
    imagen:
      "https://fotos.perfil.com/2021/02/22/trim/1280/720/20210222-becas-manuel-belgrano-1130817.jpg",
    requisito: "celular",
    link: "https://www.argentina.gob.ar/educacion/becas/becas-manuel-belgrano",
    fechaDeCreacion: "2020-11-12",
  },
  {
    id: "fc3025ec-f314-4b63-9765-1e8df3ee358a",
    descripcion:
      "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. ",
    nombre: "Beca Santander",
    monto: 60000,
    tipo: "Provincial",
    imagen:
      "https://www.unc.edu.ar/sites/default/files/Becas%20Santanderweb_Mesa%20de%20trabajo%201%20copia.jpg",
    requisito: "celular",
    link: "https://www.becas-santander.com/es/index.html",
    fechaDeCreacion: "2020-11-10",
  },
];

let becas = JSON.parse(localStorage.getItem("becas")) || consolasPrimerInicio;

if (JSON.parse(localStorage.getItem("becas")) === null) {
  localStorage.setItem("becas", JSON.stringify(becas));
}

const userInicio = [
  {
    id: "eadab119-a884-4e9e-a264-d3215c98107d",
    fullname: "aaaa",
    email: "angelsumbay@gmail.com",
    password: "admin",
    role: "ROLE_ADMIN",
  },
  {
    id: "82eeed45-e750-43e0-9d3a-93b4a0118a56",
    fullname: "Samantha Davis",
    email: "samantha.davis@example.com",
    password: "alfabeta",
    role: "ROLE_CLIENT",
  },
  {
    id: "a2d7cd61-e65f-4870-a1d1-dd08766b9767",
    fullname: "James Moore",
    email: "james.moore@example.com",
    password: "alfabeta",
    role: "ROLE_CLIENT",
  },
  {
    id: "98154852-da07-45ee-8ed5-a9966b112b99",
    fullname: "Isabella Taylor",
    email: "isabella.taylor@example.com",
    password: "alfabeta",
    role: "ROLE_CLIENT",
  },
];

if (localStorage.getItem("users") === null) {
  localStorage.setItem("users", JSON.stringify(userInicio));
}
