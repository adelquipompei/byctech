$(document).ready(function(){

		
		var menos = $('.menos');
		var mas = $('.mas');

		$('.vermas').hide();
		$('.menos').hide();

		function efecto(){
			$('.vermas').slideDown(380,function(){
				$('.mas').hide();
				$('.menos').show();

			} );
		}

		function efectom(){
			$('.vermas').slideUp(380,function(){
				$('.menos').hide();
				$('.mas').show();

			} );
		}



		mas.click(efecto);
		menos.click(efectom);

})

	




