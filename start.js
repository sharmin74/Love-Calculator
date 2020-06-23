document.getElementById("button").addEventListener("click", btn);

function btn() {
	var name1 = document.getElementById("p1").value;
	var name2 = document.getElementById("p2").value;
	const per = Math.floor(Math.random() * (100 - 50) + 50);
	document.getElementById("n1").innerHTML = name1;
	document.getElementById("n2").innerHTML = name2;	
	document.getElementById("percentage").innerHTML = (per + "%");
	return false;
}
