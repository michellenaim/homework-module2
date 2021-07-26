$(document).ready(function() {
    $('td:not(:first-child').hover(function () {
        $(this).css('cursor', 'pointer')
      })

        $('td:not(.title)').click(function() {
            var content = $(this).text();
            if (content != "Not Available") {
              $(this).toggleClass('green')

              if ($(this).hasClass("green")) {
                $('#displaySelected').css('visibility', 'visible');
                $('#displaySelected').css('margin-top', '2em');
                $('#result').append("<p>" + content + "</p>");
              } else {
                $('#result p:contains('+content+')').remove();

                if ($('#result').has('p').length == false) {
                  $('#displaySelected').css('visibility', 'hidden');
                  $('#displaySelected').css('margin-top', '0');
                }
              }
            }
        })




    
})      