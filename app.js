/////////////
// D A T A //
/////////////

const containerWrapper = document.querySelector("#container-wrapper");
const spinnerWrapper = document.querySelector("#spinner-wrapper");

/////////////
// H E L P //
/////////////

const insertTilHtml = (elem, til) => {
	elem.innerHTML = `<div class="h-full flex flex-col justify-center items-start px-8 md:px-14"><header class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-2 md:pb-4">r/todayilearned</header><p class="text-sm sm:text-base md:text-lg pt-2 md:pt-4">${til}</p></div>`;
};

/////////////
// M A I N //
/////////////

function displayRedditTil() {
	fetch("https://www.reddit.com/r/todayilearned/new.json")
		.then((response) => response.json())
		.then((data) => {
			const currentTil = data.data.children[0].data.title;
			spinnerWrapper.remove();
			insertTilHtml(containerWrapper, currentTil);
			localStorage.setItem("localTil", currentTil);
		})
		.catch((err) => {
			console.error(err);
		});
}

/////////////
// H E A R //
/////////////

window.addEventListener("load", displayRedditTil);
