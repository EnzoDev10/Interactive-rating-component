const form = document.querySelector("#score-form");
const selection = document.querySelector(".selection");
const ratingCard = document.querySelector(".rating-container");
const gratitudeCard = document.querySelector(".gratitude-container");

form.addEventListener("submit", (e) => {
    ratingCard.style.display = "none";
    gratitudeCard.style.display = "flex";
    
	e.preventDefault();
	const data = new FormData(form);
	for (const [name, value] of data) {
        console.log(`${name} = ${value}`)
		selection.innerHTML = `You selected ${value} out of 5`;
	}
});
