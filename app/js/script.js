/**
 *  yandex map 
 */

 ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.92705356993882,30.33793990608203],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш прекрасный офис',
            balloonContent: 'Ждём Вас в любое время...'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.png',
            iconImageSize: [38, 38],
        });

    myMap.geoObjects.add(myPlacemark);
});