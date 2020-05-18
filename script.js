// Modelo 1
$(document).ready(function(){	
	let titulo1 = $('.modelo1-titulo'),
	conteudo1	= $('.modelo1-conteudo'),
	icone1		= $('i')

	conteudo1.hide()

	titulo1.click(function(){
		$(this).next().slideToggle()
		$(this).find(icone1).toggleClass('girar')
	});
});

// Modelo 2
$(document).ready(function(){	
	let titulo2 = $('.modelo2-titulo'),
	conteudo2	= $('.modelo2-conteudo'),
	icone2 		= $('i')

	conteudo2.hide()

	titulo2.click(function(){
		$(this).next().slideToggle().siblings('.modelo2-conteudo').slideUp()
		$(icone2).removeClass('girar')		
		$(this).find(icone2).toggleClass('girar')
	});	
});


// Modelo 3
$(document).ready(function(){	
	let titulo3 = $('.modelo3-titulo'),
	conteudo3	= $('.modelo3-conteudo'),
	icone3 		= $('i')

	conteudo3.hide()

	$(conteudo3).first().addClass('ativo').css('display', 'block')
	$(titulo3).find(icone3).first().addClass('girar')

	titulo3.click(function(){
		$(conteudo3).removeClass('ativo')		
		$(this).next().slideToggle().siblings('.modelo3-conteudo').slideUp()
		$(icone3).removeClass('girar')
		$(this).find(icone3).toggleClass('girar')
	});
});