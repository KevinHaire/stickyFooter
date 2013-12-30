$(window).ready(function(){

	var elementToExpand = "#elementToExpand";

	stickyFooter();

	$(window).resize(function(){
		stickyFooter();
	});

	function stickyFooter(currentContentHeight, contentHeight) {

		var currentContentHeight = $(elementToExpand).innerHeight();
		var bodyHeight = $("body").height();
		var vpHeight = $(window).height();
		var contentHeight = vpHeight - bodyHeight

		$(elementToExpand).css({
	    'min-height' : currentContentHeight + contentHeight       
	  });

	};

;})


