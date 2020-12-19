/////////////
// D A T A //
/////////////

let index = 0;
const baseUrl = "https://www.reddit.com/";
const subreddit = "r/todayilearned/new.json";
const containerWrapper = document.querySelector("#container-wrapper");
const spinnerWrapper = document.querySelector("#spinner-wrapper");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

/////////////
// H E L P //
/////////////

const insertHtml = (elem, text) => {
	elem.innerHTML = `<div class="h-full flex flex-col justify-center items-start px-2 md:px-4"><header class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-2 md:pb-4">r/todayilearned</header><p class="text-sm sm:text-base md:text-lg pt-2 md:pt-4">${text}</p></div>`;
};

/////////////
// M A I N //
/////////////

const displayContent = (url, i) => {
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const tilTitle = data.data.children[i].data.title;
			spinnerWrapper.remove();
			leftArrow.innerHTML = "&lsaquo;";
			rightArrow.innerHTML = "&rsaquo;";
			insertHtml(containerWrapper, tilTitle);
		})
		.catch(err => {
			console.error(err);
		});
};

/////////////
// H E A R //
/////////////

window.addEventListener("load", displayContent(baseUrl + subreddit, index));
