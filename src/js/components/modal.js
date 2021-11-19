const videoBtn = document.querySelector(".intro__btn-video");
const closeBtn = document.querySelector(".intro-modal__close-btn");
const modalOverlay = document.querySelector(".intro-modal__overlay");
const body = document.getElementById("body");
const videoPlayer = document.querySelectorAll('.iframe');



videoBtn.addEventListener("click", (e) => {
	modalOverlay.classList.add("modal-overlay--visible");
	body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", (e) => {
	modalOverlay.classList.remove("modal-overlay--visible");
	body.classList.remove("no-scroll");
});

modalOverlay.addEventListener("click", (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove("modal-overlay--visible");
		body.classList.remove("no-scroll");
	}
});



