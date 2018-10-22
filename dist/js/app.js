var mapThemeSilver = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];

/*function initMap() {
    var coords = {lat: 50.596174, lng: 36.583376};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: coords,
        styles: mapThemeSilver,
    });

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: 'Rosses Land',
        icon: 'i/bitmapped/logo-small.png',
    });
};*/

//Source: http://idangero.us
$(function() {
    var mainSlider = new Swiper('.js-slider-main', {
        loop: true,
        navigation: {
            nextEl: '.slider_theme_main .slider__button_next',
            prevEl: '.slider_theme_main .slider__button_prev',
            disabledClass: 'slider__button_disabled'
        },
        pagination: {
            el: '.slider_theme_main .slider__pagination',
            type: 'fraction',
            modifierClass: 'slider__pagination_'
        },
    });
});

$(function() {
    $('.js-slider-more').on('click', function () {
        $('html, body')
            .animate({
                scrollTop: $(window).height()// - $('.js-header').outerHeight()
            }, 600);
    });
});

$(function() {
    $('.js-nav-toggle').on('click', function () {
        if ($(this).hasClass('nav-toggle_active')) {
            $(this).removeClass('nav-toggle_active');
            $('.js-main-nav').removeClass('main-nav_show');
        }else {
            $(this).addClass('nav-toggle_active');
            $('.js-main-nav').addClass('main-nav_show');
        }
    });
});

$(function() {
    $('.js-collapse-content-button').on('click', function () {
        if ($(this).parents('.collapse-content').hasClass('collapse-content_active')) {
            $(this).parents('.collapse-content').removeClass('collapse-content_active');
            $(this).next('.collapse-content__body').slideUp();
        }else {
            $(this).parents('.collapse-content').addClass('collapse-content_active');
            $(this).next('.collapse-content__body').slideDown();
        }
    });
});
