document.addEventListener("DOMContentLoaded", function () {
	// Inicializar la galería de imágenes
	crearGaleria();
});

function crearGaleria() {
	const CANTIDAD_IMAGENES = 16;
	const galeria = document.querySelector(".galeria-imagenes");
	for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
		const imagen = document.createElement("IMG");
		imagen.src = `src/img/gallery/full/${i}.jpg`;
		imagen.alt = `Imagen Galería ${i}`;

		imagen.onclick = function () {
			mostrarImagen(i);
		};
		galeria.appendChild(imagen);
	}
}

function mostrarImagen(i) {
	const imagen = document.createElement("IMG");
	imagen.src = `src/img/gallery/full/${i}.jpg`;
	imagen.alt = `Imagen Galería ${i}`;

	const modal = document.createElement("DIV");
	modal.classList.add("modal");
	modal.onclick = cerrarModal;

	const cerrarModalBtn = document.createElement("BUTTON");
	cerrarModalBtn.textContent = "X Cerrar";
	cerrarModalBtn.classList.add("btn-cerrar");
	cerrarModalBtn.onclick = cerrarModal;

	modal.appendChild(cerrarModalBtn);
	modal.appendChild(imagen);

	const body = document.querySelector("body");
	body.classList.add("overflow-hidden");
	body.appendChild(modal);
}

function cerrarModal() {
	const modal = document.querySelector(".modal");
	modal.classList.add("fade-out");

	setTimeout(() => {
		modal?.remove();

		const body = document.querySelector("body");
		body.classList.remove("overflow-hidden");
	}, 500);
}
