let becas = JSON.parse(localStorage.getItem("becas"));

const mainBecas = document.getElementById("table-becas");
const inputFiltrarHTML = document.getElementById("filtrar");

const modalBeca = document.getElementById("infoBeca");

mostrarbecas(becas);

function mostrarbecas(array) {
	mainBecas.innerHTML = "";

	array.forEach(function (beca, index) {
		mainBecas.innerHTML += `<tr>
        <td class="table-image">
                <img src="${beca.imagen}" alt="${beca.nombre}">
        </td>
        <td class="table-nombre">${beca.nombre}</td>
        <td class="table-tipo">${beca.tipo}</td>
        <td class="table-monto">${beca.monto}</td>
        <td class="table-date">${beca.fechaDeCreacion}</td>
        <td >
            <div class="d-flex gap-2 justify-content-center">
                <button class="btn btn-info btn-sm" onclick="infoBeca('${beca.id}')" type="button" data-bs-toggle="modal" data-bs-target="#modal-beca"><i class="fa-solid fa-eye"></i></button>
                <a href="${beca.link}" target="_blank" class="btn btn-success btn-sm"><i class="fa-solid fa-link"></i></a>
            </div>
            
        </td>
    </tr>`;
	});
}

function infoBeca(idBeca) {
	const beca = becas.find((beca) => {
		if (beca.id === idBeca) {
			return true;
		}
	});

	modalBeca.innerHTML = "";

	modalBeca.innerHTML = `<div class="modal-content bg-dark text-white">
    <div class="modal-header">
        <h2 class="modal-title text-warning" id="modalLabel">${beca.nombre}</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container-fliud">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6">
                    <figure class="figure">
                        <img src="${beca.imagen}" class="figure-img img-fluid rounded" alt="">
                    </figure>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 class="mb-4 text-secondary">Monto</h2>
                            <h1>$ ${beca.monto}</h1>

                        </div>
                        <div>
                            <h2 class="mb-4 text-secondary">Tipo</h2>
                            <h1>${beca.tipo}</h1>
                        </div>
                    </div>

                    <h2 class="my-2 text-secondary">Descripcion</h2>
                    <p>${beca.descripcion}</p>
                    <div>
                        <a class="btn btn-success w-100" href="${beca.link}"
                            data-bs-dismiss="" target="_blank">Postularse</a>
                    </div>

                </div>
            </div>
            <div class="row mt-2">
                <div class="col-12">
                    <h1 class="mb-4 text-secondary">Requisitos</h1>
                    <p>${beca.requisito}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
</div>`;
}

//Funcion para filtrar becas
inputFiltrarHTML.addEventListener("keyup", (evt) => {
	const busqueda = evt.target.value.toLowerCase();

	const resultado = becas.filter((beca) => {
		const nombre = beca.nombre.toLowerCase();

		if (nombre.includes(busqueda)) {
			return true;
		}
		return false;
	});
	mostrarbecas(resultado);
});
