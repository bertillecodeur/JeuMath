var nb1=Math.floor(Math.random() * 10); 
var nb2=Math.floor(Math.random() * 10); 
var nb_question=0;
var bonne_reponse = 0;
var mauvaise_reponse = 0;
var gagnant = 5;
var perdant = 5;
var additionn = false;
var soustractionn = false;
var blocked = false;
var tab = [+,-];

function addition() 
{
	document.getElementById("mathematico").innerHTML = nb1 + "+" + nb2;	
	this.additionn = true;
	document.getElementById("validate").onclick = function() {
		resultat();
	};
}

function verifierSituation(){

		if(bonne_reponse === gagnant)
	{
		document.getElementById("message").innerHTML=("<h1>Tu as " + bonne_reponse + " bonnes réponses, c'est GAGNÉ  !!!!");
		addition();
		this.blocked = true;
	}else if (mauvaise_reponse === perdant )
	{
		document.getElementById("message").innerHTML=("<h1>Tu as " + mauvaise_reponse + " mauvaises réponses, c'est PERDU  !!!!");
		addition();
		this.blocked = true;
	}
if (this.blocked == true) {
	document.write("<h1 style='text-align: center'> Touche F5</h1>")
}
}


function resultat()
{
	var resultat= nb1+nb2;
	var reponse = document.getElementById("resultat").value;
	if (parseInt(reponse) == resultat) 
	{
		document.getElementById("message").innerHTML="BRAVO PETIT GENIE !!!!!!";
		bonne_reponse++;
		this.nb1 = Math.floor(Math.random() * 10);
		this.nb2 = Math.floor(Math.random() * 10); 
		addition();
		document.getElementById('resultat').value = ""
	}
	else
	{
		document.getElementById("message").innerHTML="DOMMAGE!!! <br> perservere tu va réussir";
		mauvaise_reponse++;
		this.nb1 = Math.floor(Math.random() * 10);
		this.nb2 = Math.floor(Math.random() * 10); 
		addition();
		document.getElementById('resultat').value = ""
	}
	verifierSituation();
}

function soustraction() 
{
	document.getElementById("mathematico").innerHTML = nb1 + "-" + nb2;	
	this.soustractionn = true;
	document.getElementById("validate").onclick = function() {
		resultat_sous();
	};
}


function resultat_sous()
{
	var resultat= nb1-nb2;
	var reponse = document.getElementById("resultat").value;
	if (parseInt(reponse) == resultat) 
	{
		document.getElementById("message").innerHTML="BRAVO PETIT GENIE !!!!!!";
		bonne_reponse++;
		this.nb1 = Math.floor(Math.random() * 10);
		this.nb2 = Math.floor(Math.random() * 10); 
		soustraction();
		document.getElementById('resultat').value = ""
	}
	else
	{
		document.getElementById("message").innerHTML="DOMMAGE!!! <br> perservere tu va réussir";
		mauvaise_reponse++;
		this.nb1 = Math.floor(Math.random() * 10);
		this.nb2 = Math.floor(Math.random() * 10); 
		soustraction();
		document.getElementById('resultat').value = ""
	}
	verifierSituation();
}
function aleatoire() 
{
	// body...
}