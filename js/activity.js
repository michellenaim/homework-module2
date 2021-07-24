$(document).ready(function() {
    $('td:not(:first-child').hover(function () {
        $(this).css('cursor', 'pointer')
      })

        $('td:not(.title)').click(function() {
            $(this).toggleClass('green')
        })
})      