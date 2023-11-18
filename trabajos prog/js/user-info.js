const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const navInfo = document.getElementById("opcion-user");

const pestañaBeca = document.getElementById("becas");

const nombreUser = document.getElementById("nombre-user");

const inicioBtn = document.getElementById("inicio-btn");

if (currentUser) {
  if (currentUser.role === "ROLE_ADMIN") {
    navInfo.innerHTML = `<li><a class="dropdown-item text-white" href="/pages/admin-becas.html">Scholarships</a></li>
        <li><a class="dropdown-item text-white" href="/pages/admin-users.html">Users</a></li>
        <li><a class="bg-warning dropdown-item  text-center rounded-2" href="#" onclick="logout()">Logout</a></li>`;
  } else {
    navInfo.innerHTML = `
        <li><a class="bg-warning dropdown-item  text-center rounded-2" href="#" onclick="logout()">Logout</a></li>`;
  }

  nombreUser.innerText = `${currentUser.fullname.split(" ")[0]}`;
  pestañaBeca.innerHTML = `<li><a href="/pages/becas.html">
		<ion-icon name="school-outline"></ion-icon>
		<span>Scholarships</span>
	</a></li>`;
  inicioBtn.innerHTML = ``;
} else {
  inicioBtn.innerHTML = `<a class="btn btn-lg btn-success fw-bfw-semibold" href="/pages/login.html">Mas Informacion aqui !!!</a>`;
}
