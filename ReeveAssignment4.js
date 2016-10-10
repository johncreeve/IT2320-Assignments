var Main = {};

Main.Guitar = function (brand, model, type, listPrice)
{
	this.brand = brand;
	this.model = model;
	this.type = type;
	this.listPrice = listPrice;

	this.GetFullName = function()
	{
	return this.brand + " " + this.model;
	}
	
}

Main.fenderStratocaster = new Main.Guitar("Fender", "American Standard Stratocaster", "solid-body electric", $1,099.99);
Main.gibsonLesPaul = new Main.Guitar("Gibson", "Les Paul Standard", "solid-body electric", $2,799.99);
Main.gretchElectromatic = new Main.Guitar("Gretch", "G5623 Electromatic Signature", "semi-hollow electric", $1,049.99);
Main.epiphoneDot = new Main.Guitar("Epiphone", "Dot", "semi-hollow electric", $419.99)
Main.gibsonFlyingV = new Main.Guitar("Gibson", "Flying V", "solid-body electric", $1,299.00)
Main.bcRichMockingbird = new Main.Guitar("BC Rich", "Mockingbird", "solid-body electric", $639.99)


Main.Guitar.prototype.GetFullName() = function()
{
	return this.brand + " " + this.model;
}

Main.Guitar.prototype.GetPrice() = function()
{
	return this.price;
}

document.body.innerHTML = Main.Guitar.GetFullName();
document.body.innerHTML = Main.Guitar.GetPrice();