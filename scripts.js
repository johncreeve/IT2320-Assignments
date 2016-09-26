window.onload = function welcomeNotice() 
	{
		var welcome = "Welcome to my new golf website!"
		alert(welcome);
	}
	
document.getElementById("mainImage").addEventListener("click", pick_click);

//In trying to get this to work, I've tried all of these:

//var x = document.getElementsByName("mainImage");
//x.addEventListener("click", pic_click);

//...also tried this with the above statement
//var x = document.getElementsByClass("mainImage");

//also tried this approach, but none worked:
//document.mainImage onclick = "pick_click()"
//or
//element.mainImage onclick = "pick_click()"
//or
//id.mainImage onclick = "pick_click()"


function pic_click()
	{
		var msg = "Here is a picture of me golfing!";
	    alert(msg);
	}
	 
	 

