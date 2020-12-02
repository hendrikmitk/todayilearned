/////////////
// D A T A //
/////////////

const containerWrapper = document.querySelector("#container-wrapper");
const spinnerWrapper = document.querySelector("#spinner-wrapper");

/////////////
// M A I N //
/////////////

const insertTilHtml = (elem, til) => {
	elem.innerHTML = `<div class="h-full flex flex-col justify-center items-start px-14"><header class="font-bold text-4xl pb-4">r/todayilearned</header><p class="text-xl pt-4">${til.data.children[0].data.title}</p></div>`;
};

function displayLatestRedditTil() {
	fetch("https://www.reddit.com/r/todayilearned/new.json")
		.then((response) => response.json())
		.then((data) => {
			spinnerWrapper.remove();
			insertTilHtml(containerWrapper, data);
		})
		.catch((err) => {
			console.error(err);
		});
}

/////////////
// H E A R //
/////////////

window.addEventListener("load", displayLatestRedditTil);
