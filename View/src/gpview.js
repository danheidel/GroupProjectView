$(function(){

				// Run the range slider
				$('#rslider').noUiSlider({
					 range: [10,40]
					,start: [20,30]
					,serialization:{
						to: [$('#rupper'),$('#rlower')]
						
					}
				});
			//Run the milage slider
			$('#mslider').noUiSlider({
					 range: [10,40]
					,start: [20,30]
					,handles:1
					,serialization:{
						to: [$('#milesfromHwy')]
						
					}
				});


//Initialize range slider with values from brange and erange
//This will be change to use the values returned from the server as
//a result of the request for places along the way
			
$('#rgbtn').click(function(){
	$(rslider).val([$('#brange').val(),$('#erange').val()]);
});



			});