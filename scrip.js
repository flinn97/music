document.getElementById("submits").addEventListener("click", function(event) {
	event.preventDefault();
	const value = document.getElementById("email").value;
	const username = document.getElementById("fname").value;
	if (value === "")
		return;
	if (username === "")
		return;
	const url = "http://apilayer.net/api/check?access_key=e2e346dbd0c4e5dfb5e8d2fea4725877&email="+ value +"&smtp=1&format=1";
	fetch(url)
	.then(function(response) {
		return response.json();
	}).then(function(json) {

		console.log(json);
		if (json.smtp_check === false){
			let message = "Please enter a valid email address "
			message +="did you mean: "
			message += json.did_you_mean
				alert(message);
				return;
		}
		
		else
		{
			let message1 = "Welcome ";
			message1 += username;
			alert(message1);
			document.getElementById("welcome").innerHTML = "<h1>You have been added to FlinnApps Music!";
			document.getElementById("forms").innerHTML = "";
			document.getElementById("welcome").style.height = "400px";
		}
		/*
		else {
			<script>
		const fs = require('fs');    
		let data = "Learning how to write in a file.";
		fs.writeFile('username.txt', data, (err) => {  
	                  if (err) throw err; 
	                  }) 
		</script>
		}
		*/
		});
});
