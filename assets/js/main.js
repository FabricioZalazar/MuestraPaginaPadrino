/*
    Trinity Constructions - main.js (limpio)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#main-nav'); // Renombrado de #nav

    // Breakpoints (si usás breakpoints.js)
    breakpoints({
        xlarge:  [ '1281px',  '1680px' ],
        large:   [ '981px',   '1280px' ],
        medium:  [ '737px',   '980px'  ],
        small:   [ '361px',   '736px'  ],
        xsmall:  [ null,      '360px'  ]
    });

    // Quitar clase de preload al cargar
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns de navegación
    $('#main-nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        speed: 300,
        alignment: 'center'
    });

    // Scroll suave
    $('.scrolly').scrolly({
        speed: 1000,
        offset: function() { return $nav.height() - 5; }
    });

    // Menú móvil
    $('<div id="titleBar">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '<span class="title">' + $('#logo').html() + '</span>' +
      '</div>')
        .appendTo($body);

    $('<div id="navPanel">' +
        '<nav>' +
            $('#main-nav').navList() +
        '</nav>' +
      '</div>')
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

})(jQuery);
