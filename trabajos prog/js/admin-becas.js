let idEditar;
const tituloForm = document.getElementById("form-title");
const btn = document.querySelector('button.btn[type="submit"]');
const tableBodyHTML = document.getElementById("table-becas-admin");
const modalBeca = document.getElementById("infoBeca");

let becas = JSON.parse(localStorage.getItem("becas"));

pintarbecas(becas);

const inputFiltrarHTML = document.getElementById("filtrar");

const formularioBecasHTML = document.getElementById("formularioBeca");

const btnTable = document.getElementById("admin-add-beca");

btnTable.addEventListener("click", () => {
	formularioBecasHTML.reset();
	tituloForm.innerText = "Cargar nueva Beca";
	btn.innerText = "Agregar";
	btn.classList.remove("btn-success");
});

formularioBecasHTML.addEventListener("submit", (evt) => {
	evt.preventDefault();

	const el = formularioBecasHTML.elements;

	let id;

	if (idEditar) {
		id = idEditar;
	} else {
		id = crypto.randomUUID();
	}

	let nuevaBeca = {
		id: id,
		nombre: el.nombre.value,
		monto: el.monto.valueAsNumber,
		tipo: el.tipo.value,
		descripcion: el.descripcion.value,
		requisito: el.requisito.value,
		imagen: el.imagen.value,
		link: el.link.value,
		fechaDeCreacion: obtenerFecha(),
	};

	if (idEditar) {
		const index = becas.findIndex((beca) => {
			return beca.id === idEditar;
		});

		becas[index] = nuevaBeca;

		idEditar = undefined;
	} else {
		becas.push(nuevaBeca);
	}

	Swal.fire({
		icon: "success",
		title: "Beca agregada/modificada correctamente",
		text: "La Beca se actualizo o modifico correctamente!",
	});

	pintarbecas(becas);

	localStorage.setItem("becas", JSON.stringify(becas));

	formularioBecasHTML.reset();
	el.nombre.focus();
});

function pintarbecas(arrayAPintar) {
	tableBodyHTML.innerHTML = "";

	arrayAPintar.forEach(function (beca, index) {
		tableBodyHTML.innerHTML += `
		<td class="table-image">
                <img src="${beca.imagen}" alt="${beca.nombre}">
        </td>
        <td class="table-nombre">${beca.nombre}</td>
        <td class="table-tipo">${beca.tipo}</td>
        <td class="table-monto">${beca.monto}</td>
        <td class="table-date">${beca.fechaDeCreacion}</td>
        <td >
            <div class="d-flex gap-2 justify-content-center">
                <button class="btn btn-info btn-sm" 
                <button class="btn-delete btn btn-danger btn-sm" onclick="infoBeca('${beca.id}')" type="button" data-bs-toggle="modal" data-bs-target="#modal"><i class="fa-solid fa-eye"></i></button>
				<button class="btn btn-success btn-sm" onclick="editarBeca('${beca.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                <button class="btn-delete btn btn-danger btn-sm" onclick="borrarBeca('${beca.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                
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
	pintarbecas(resultado);
});

const borrarBeca = (idABuscar) => {
	Swal.fire({
		title: "Desea borrar la beca",
		icon: "error",
		text: "Realmente desea elminar la beca?",
		showCloseButton: true,
		showCancelButton: true,
		cancelButtonText: "Cancelar",
		confirmButtonText: "Borrar",
	}).then((result) => {
		if (result.isConfirmed) {
			const indiceEncontrado = becas.findIndex((becaFindIndex) => {
				if (becaFindIndex.id === idABuscar) {
					return true;
				}
				return false;
			});
			becas.splice(indiceEncontrado, 1);

			pintarbecas(becas);

			localStorage.setItem("becas", JSON.stringify(becas));

			Swal.fire("Borrado!", "beca borrada correctamente", "success");
		}
	});
};

const editarBeca = function (idRecibido) {
	const becaEditar = becas.find((prod) => {
		if (prod.id === idRecibido) {
			return true;
		}
	});

	if (!becaEditar) return;

	idEditar = becaEditar.id;

	const elements = formularioBecasHTML.elements;

	elements.nombre.value = becaEditar.nombre;
	elements.monto.value = becaEditar.monto;
	elements.tipo.value = becaEditar.tipo;
	elements.imagen.value = becaEditar.imagen;
	elements.link.value = becaEditar.link;
	elements.descripcion.value = becaEditar.descripcion;
	elements.requisito.value = becaEditar.requisito;

	tituloForm.innerText = "Editar beca";
	btn.innerText = "Editar";
	btn.classList.add("btn-success");
};

function obtenerFecha() {
	const fecha = new Date();
	let mes = fecha.getMonth() + 1;
	if (mes < 10) {
		mes = "0" + mes;
	}
	let dia = fecha.getDate();
	if (dia < 10) {
		dia = "0" + dia;
	}
	const year = fecha.getFullYear();

	const fechaFormateada = `${year}-${mes}-${dia}`;
	return fechaFormateada;
}
