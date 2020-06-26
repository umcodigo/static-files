// Image full screen
// $('img.kg-image').on('click', function() {
//   $('#overlay')
//     .css({backgroundImage: `url(${this.src})`})
//     .addClass('open')
//     .one('click', function() { $(this).removeClass('open'); });
// });

// Creates Captions from Alt tags
// $(".post-content img").each(function() {
//     if (!$(this).parent().is("figure")) {
//         if ($(this).attr("alt")) {
//             $(this)
//                 .wrap('<figure class="image"></figure>')
//                 .after( '<figcaption>' + $(this).attr("alt") + '</figcaption>');
//         }
//     }
// });

// Send IFTTT notification    
var url = 'https://maker.ifttt.com/trigger/acesso_um_codigo/with/key/bydgPA8SXGxqraluZW3UyS?value1=' + window.location.pathname;
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        console.log(xmlHttp.responseText);
}
xmlHttp.open('GET', url, true); // true for asynchronous 
xmlHttp.send(null);
