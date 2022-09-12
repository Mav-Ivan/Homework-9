
// task 1 

// $("a[href^='https://']").attr('target', '_blank')

// task 2 

// $('h2.head').attr("class","greenStyle").children('.inner').attr("class", "textSize")

//  task 3


// $('h3 + div').each( function() {
//     let $elem = $(this)
//     $elem.prev().before($elem)
// })

//  task 4 

let $checkboxes = $('input:checkbox')
$checkboxes.click( function() {
    if($('input:checkbox:checked').length == 3){
        $checkboxes.attr('disabled', 'true')
    }
})

