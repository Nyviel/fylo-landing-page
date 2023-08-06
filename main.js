const introductionDiv = document.querySelector(".introduction");
const headerDiv = document.querySelector(".primary-header");
const heightToFill =
	window.innerHeight - headerDiv.getBoundingClientRect().height;

introductionDiv.style.height = heightToFill + "px";
