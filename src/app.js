/////////////
// D A T A //
/////////////

let index = 0;
let titles = [];

const baseUrl = "https://www.reddit.com/";
const subreddit = "r/todayilearned/new.json?limit=";
const limit = 20;

const containerWrapper = document.querySelector("#container-wrapper");
const spinnerWrapper = document.querySelector("#spinner-wrapper");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

/////////////
// H E L P //
/////////////

const insertHtml = (elem, text) => {
	elem.innerHTML = `<div class="h-full flex flex-col justify-center items-start px-2 md:px-4"><header class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-2 md:pb-4">r/todayilearned</header><p id="text-wrapper" class="text-sm sm:text-base md:text-lg pt-2 md:pt-4">${text}</p></div>`;
};

const toggleArrows = i => {
	if (i == 0) {
		leftArrow.innerHTML = "";
		rightArrow.innerHTML = "&rsaquo;";
	} else if (i == titles.length - 1) {
		leftArrow.innerHTML = "&lsaquo;";
		rightArrow.innerHTML = "";
	} else {
		leftArrow.innerHTML = "&lsaquo;";
		rightArrow.innerHTML = "&rsaquo;";
	}
};

const titleUp = () => {
	index++;
	changeContent(index);
	toggleArrows(index);
};

const titleDown = () => {
	index--;
	changeContent(index);
	toggleArrows(index);
};

/////////////
// M A I N //
/////////////

const displayContent = i => {
	fetch(baseUrl + subreddit + limit)
		.then(response => response.json())
		.then(json => {
			for (let i = 0; i < limit; i++) {
				titles.push(json.data.children[i].data.title);
			}
			const title = titles[i];
			spinnerWrapper.remove();
			insertHtml(containerWrapper, title);
			toggleArrows(i);
		})
		.catch(err => {
			console.error(err);
		});
};

const changeContent = i => {
	document.querySelector("#text-wrapper").innerHTML = titles[i];
};

/////////////
// H E A R //
/////////////

window.addEventListener("load", () => {
	displayContent(index);
});

rightArrow.addEventListener("click", e => {
	if (e.target.id === "right-arrow") {
		titleUp();
	}
});

leftArrow.addEventListener("click", e => {
	if (e.target.id === "left-arrow") {
		titleDown();
	}
});

document.addEventListener("keydown", e => {
	if (e.key == "ArrowLeft" && index > 0) {
		titleDown();
	} else if (e.key == "ArrowRight" && index < titles.length - 1) {
		titleUp();
	}
});
