/**
 * Created by chand on 4/5/2017.
 */

$(".slider")

    .slider({
        min: 1960,
        max: 2016,
        step: 1,
        slide: function( event, ui ) {
            $( "#year_selected" ).val( ui.value);
            //$(ui.value).appendTo("#year_selected");
            // $(".a, .b, .c, .d").width(ui.value + "%");
        }
    })

    .slider("pips", {
        rest: "label",
        step: 4
    })

    .slider("float");
