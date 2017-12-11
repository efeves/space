//planet variables: content help from Eric//
var sun = document.getElementById("zero");
var mercury = document.getElementById("one");
var venus = document.getElementById("two");
var earth = document.getElementById("three");
var mars = document.getElementById("four");
var jupiter = document.getElementById("six");
var saturn = document.getElementById("seven");
var uranus = document.getElementById("eight");
var neptune = document.getElementById("nine");
var pluto = document.getElementById("ten");

//planetary text files seperate files//
var suntext = document.getElementById("suntxt");
var mercurytext = document.getElementById("mercurytxt");
var venustext = document.getElementById("venustxt");
var earthtext = document.getElementById("earthtxt");
var marstext = document.getElementById("marstxt");
var jupitertext = document.getElementById("jupitertxt");
var saturntext = document.getElementById("saturntxt");
var uranustext = document.getElementById("uranustxt");
var neptunetext = document.getElementById("neptunetxt");
var plutotext = document.getElementById("plutotxt");

function expandSun(elem){
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	sun.classList.toggle("infobox");
	suntext.classList.toggle("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");

}

function expandMercury(elem){
	sun.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");	
	mercury.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	mercurytext.classList.toggle("text-hide");
	

}

function expandVenus(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	venus.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	venustext.classList.toggle("text-hide");
}

function expandEarth(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	earth.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	earthtext.classList.toggle("text-hide");
}

function expandMars(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	mars.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	marstext.classList.toggle("text-hide");
}

function expandJupiter(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	jupiter.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	jupitertext.classList.toggle("text-hide");
	
}

function expandSaturn(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	saturn.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	saturntext.classList.toggle("text-hide");
}

function expandUranus(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.remove("infobox");
	uranus.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	uranustext.classList.toggle("text-hide");
}

function expandNeptune(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	pluto.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	pluto.classList.remove("infobox");
	neptune.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	plutotext.classList.add("text-hide");
	neptunetext.classList.toggle("text-hide");
}

function expandPluto(elem){
	sun.classList.toggle("noninfo");
	mercury.classList.toggle("noninfo");
	venus.classList.toggle("noninfo");
	earth.classList.toggle("noninfo");
	mars.classList.toggle("noninfo");
	jupiter.classList.toggle("noninfo");
	saturn.classList.toggle("noninfo");
	uranus.classList.toggle("noninfo");
	neptune.classList.toggle("noninfo");
	sun.classList.remove("infobox");
	mercury.classList.remove("infobox");
	venus.classList.remove("infobox");
	earth.classList.remove("infobox");
	mars.classList.remove("infobox");
	jupiter.classList.remove("infobox");
	saturn.classList.remove("infobox");
	uranus.classList.remove("infobox");
	neptune.classList.remove("infobox");
	pluto.classList.toggle("infobox");
	suntext.classList.add("text-hide");
	mercurytext.classList.add("text-hide");
	venustext.classList.add("text-hide");
	earthtext.classList.add("text-hide");
	marstext.classList.add("text-hide");
	jupitertext.classList.add("text-hide");
	saturntext.classList.add("text-hide");
	uranustext.classList.add("text-hide");
	neptunetext.classList.add("text-hide");
	plutotext.classList.toggle("text-hide");
}

function hover(elem){
	elem.classList.add("hover");
}

function drop(elem){
	elem.classList.remove("hover");
}
