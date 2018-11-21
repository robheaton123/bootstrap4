/* tudo da classe .contar recebe .counterUp(conf adicionais) // Contador da seção Cursos*/
(function($){
 	"use strict";
 	/* Inicializar nosso contador */
 	$('.contar').counterUp({
		time: 1000,
		delay: 10
	});

/*500 tempo /// animacao ao clicar no link do menu principal ira para o id selecionado no proprio site*/
var $doc = $('html,body');
$('.scroll-page').click(function(){
	$doc.animate({					
		scrollTop: $($.attr(this,'href')).offset().top
	},500);
	return false;
});


})(jQuery);
