/*
var texto = ("Olá mundo!");
alert(texto);
*/

redimensionarConteudo();
tamanhoIframe();
$( window ).resize(redimensionarConteudo);
$( window ).resize(tamanhoIframe);

function redimensionarConteudo(){
var widthMenu = $('#menu').width();
var widthTitulo = $('h1').width();
var larguraConteudoMenu = $('#menu').width() + 22;
var larguraConteudoH1 = $('h1').width() + 22;

var estilo1 = "calc(100% - " + larguraConteudoMenu + "px)";
var estilo2 = "calc(100% - " + larguraConteudoH1 + "px)";

	if(widthMenu > widthTitulo)
		$('#container-conteudo').width(estilo1);
	else
		$('#container-conteudo').width(estilo2);
}

function tamanhoIframe(){
	var alturaConteudo = $('.conteudo').height();
	var alturaIframe = alturaConteudo - 70;
	$('.iframeSC').height(alturaIframe);
}

      