
function displaySales(sales)
{
	for (var i=0; i<store.sales.length; i++)
		{
			var product = store.sales[i];
			
		}
}



function createStoreAsJSON()
{
	return {
			"store" 		: "Giant Eagle",
			"storeNumber" 	: "4207",
			"location" 		: "Cleveland, OH",
			"products": [
			
			{
				"brand"	:	"Land O'Lakes",
				"size"	:	"13oz",
				"price"	:	3.50
			},
			
			{
				"brand"	:	"Yoplait",
				"size"	:	"4oz",
				"price"	:	0.50
			},
		
			{
				"brand"	:	"Daisy",
				"size"	:	"14oz",
				"price"	:	1.89
			}
		]
	};
}
		
{
	store.sales = new Array(butter, yogurt, sourCream);
	
}
		
//calling all functions on page loading

<body onLoad = "pageLoad()">
function pageLoad()
{
	var store = createStoreAsJSON();
	return store;
}
</body>


$(document).ready(function()
		{
		var store = createStoreAsJSON();
		displayAllSales(price);
		displayGreatSaleAlert(price);
		}
		
		//function to show all sales on screen
		function displayAllSales()
		{
			for i = 0 to sales.length
				{
					document.getElementByID("onLoad").innerHTML = store[i];
					document.getElementByID("PageLoad").innerHTML = brand[i];
					document.getElementByID("sales").innerHTML = size[i];
					document.getElementByID("product").innerHTML = price[i];
					next[i];
					
					//I tried onLoad, PageLoad, every other variable above to try to get 
					//something to display but it would not.
				}
		
		//function to show alert to show the best sales
		function displayGreatSaleAlert(price)
			{
				if product.price > 0.99
				{
					alert "Notice this great sale!";					
				}
		
