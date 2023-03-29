function hello() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!");
		},1000);
	});
}

hello().then((data) => {
	data=document.getElementById("output").innerHTML;
});