async function anotherGacto() {
	const gacto = await getGacto();
	showGacto(gacto);
}

async function getGacto() {
	loading(true);

	const urlDosGactos = 'https://api.thecatapi.com/v1/images/search';
	const response = await fetch(urlDosGactos);
    const cat = await response.json();

    return cat[0];
}

function showGacto(gacto) {
	const gactoEl = document.querySelector('#gacto');
	gactoEl.src = gacto.url;
	loading(false);
}

function loading(isLoading) {
	const spinner = document.querySelector('#cover-spin');
	spinner.style.display = isLoading ? 'block' : 'none';
}