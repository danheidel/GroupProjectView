$(function(){

				// Run noUiSlider
				$('#rslider').noUiSlider({
					 range: [10,40]
					,start: [20,30]
					,serialization:{
						to: [$('#rupper'),$('#rlower')]
						
					}
				});
			


$(rslider).val(['10','40']);

			});