const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <div class="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
    </div>
    <div class="barra-lateral">
        <div class="nombre-pagina-container">
            <div class="nombre-pagina">
                <ion-icon id="cloud" name="grid-outline"></ion-icon>
                <span>BHIVE</span>
            </div>
        </div>

        <nav class="navegacion d-flex justify-content-start">
            <ul>
                <li>
                    <a href="/index.html">
                        <ion-icon name="star-outline"></ion-icon>
                        <span>START</span>
                    </a>
                </li>
                <div id="becas"></div>
                <li>
                    <a href="/pages/contacto.html">
                        <ion-icon name="call-outline"></ion-icon>
                        <span>Contact</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/nosotros.html">
                        <ion-icon name="color-filter-outline"></ion-icon>
                        <span>Us</span>
                    </a>
                </li>

                <div class="linea"></div>
                <li class="mt-2">
                    <a class="dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <ion-icon name="person-outline"></ion-icon>
                        <span id="nombre-user">Usuario</span>
                    </a>
                    <ul id="opcion-user" class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item text-white" href="/pages/login.html">Login</a></li>
                        <li><a class="dropdown-item text-white" href="/pages/register.html">Register</a>
                        </li>
                    </ul>
                </li>

            </ul>
        </nav>
    <div class="redes-container">
        <div class="linea"></div>
        <ul class="">
            <li>
                <a href="https://api.whatsapp.com/message/CEUBLUKC6PECK1?autoload=1&app_absent=0">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <span>Whatsapp</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <span>Facebook</span>
                </a>
            </li>


            <li>
                <a href="https://instagram.com/curriculum.plus?igshid=cmV3OGwyc2t0aWMz">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <span>Instagram</span>
                </a>
            </li>
        </ul>
    </div>
</div>`;
