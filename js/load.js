$(document).ready(function () {

		$(".posts li").hide();	
		var size_li = $(".posts li").length;
		var nrposts = 4;
		$('.posts li:lt('+nrposts+')').show();
		$('#loadMore').click(function () {
			nrposts= (nrposts+1 <= size_li) ? nrposts+1 : size_li;
			$('.posts li:lt('+nrposts+')').show();
			if(nrposts == size_li){
				$('#loadMore').hide();
				$('#showLess').show();
			}
		});
});
