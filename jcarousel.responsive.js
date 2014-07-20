(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

               if (width >= 600) {
                    width = width / 6;
                } else if (width >= 350) {
                    width = width / 2;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=5'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=5'
            });
		
		
       
    });
})(jQuery);
