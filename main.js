async function onLoad() {
	let gacto = await getGacto();
	showGacto(gacto);
}

async function anotherGacto() {
	let gacto = await getGacto();
	showGacto(gacto);
}

async function getGacto() {
	let urlDosGactos = 'https://api.thecatapi.com/v1/images/search';
	let response = await fetch(urlDosGactos);
    let cat = await response.json();

    return cat[0];
}

function showGacto(gacto) {
	let gactoEl = document.querySelector('#gacto');
	gactoEl.src = gacto.url;
}