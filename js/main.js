$(document).ready(function() {
    $("input:text").focus(function() {
        $(this).select();

    });

$("#newitem_button").on("click", function() {
        var newlistitem = $("input").val();
        $(".listitems ul").append("<li><i class='fa fa-check'></i><i class='fa fa-trash-o'></i><span>" + newlistitem + "</span></li>");
        console.log("hey");



        // $("#textbox").keypress(function(e) {
        // if (e.which == 13) { //Enter key pressed
        // $("#newitem_button").click(); //Trigger search button click event
        // } });

        $(".list .fa-check").on("click", function() {
            $(this).siblings("span").toggleClass("toggle_strike");
            console.log("hey");


        });

        $(".list .fa-trash-o").click(function() {
            $(this).parent().fadeOut("fast", function() {
                $(this).remove();
            })

        });

    });

});

