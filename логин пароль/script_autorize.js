document.querySelector(".enter")addEventlistener("click", myClick);

function myClick() {
	let login = document.querySelector(".login").value;
	let password = document.querySelector("pass_words")

	if (login == "user" && password == "12345") {
		console.log("da")
	}
}