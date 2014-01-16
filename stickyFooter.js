$(window).ready(function(){

	stickyFooter('.elementToExpand');

	$(window).resize(function(){
		stickyFooter('.elementToExpand');
	});

	function stickyFooter(elementToExpand) {

		var currentContentHeight = $(elementToExpand).innerHeight();
		var bodyHeight = $("body").height();
		var vpHeight = $(window).height();
		var contentHeight = vpHeight - bodyHeight

		$(elementToExpand).css({
	    'min-height' : currentContentHeight + contentHeight       
	  });

	};

;})


