
function estatisticas(){
		/*var statisticas ='';
		$.ajax({
			url: 'https://www.retinavr.co/btcticker/ticker.php',
			dataType: 'JSONP',
			data: {crypto_currency: 'BTC'},
			async: false
		})
		.done(function(statisticas) {
			$('.last').html("PKR"+statisticas['last']);
			$('.high').html("PKR"+statisticas['high']);
			$('.low').html("PKR"+statisticas['low']);
			$('.vol').html(statisticas['vol']);
			$('.preco-btc-b').html(statisticas['buy']);
			$('.preco-btc-s').html(statisticas['sell']);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		*/
	  $.ajax({
		url: "https://www.retinavr.co/btcticker/ticker.php", 
		success: function(result){
        		var returndata = JSON.parse(result);
			$('.last').html("PKR"+returndata['last']);
			$('.high').html("PKR"+returndata['high']);
			$('.low').html("PKR"+returndata['low']);
			$('.vol').html(returndata['vol']);
			$('.preco-btc-b').html(returndata['buy']);
			$('.preco-btc-s').html(returndata['sell']);
    		}
	  });

	}

$(function(){
	// carrega e atualiza estatisticas
	estatisticas();
	setInterval( function(){ estatisticas() }, 4000);	

	// modal do login
	$('.login-btn').click(function() {
		$('.login-form').css('display','table').addClass('animated fadeInUp').removeClass('fadeOutDown');
	});

	$('.login-form .back').click(function(event) {
		$('.login-form').removeClass('fadeInUp').addClass('fadeOutDown');
	});


	//popover
	//$('[data-toggle="popover"]').popover();

	//tooltip
	//$('[data-toggle="tooltip"]').tooltip();

	// remove video
	if ( $(window).width() < 780){
		$('video').remove();
		$('section').css({
			background: 'url(img/bg1.jpg) no-repeat center',
			'background-size': 'cover'
		});;
	}

})

//menu
function showMenu(){
	$('nav.menu a[hide]').show().addClass('animated fadeInDown');
	$(this).addClass('ativo')
}
