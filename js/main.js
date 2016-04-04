$(document).ready(function() {
    $("input:text").focus(function() {
        $(this).select();

    });
    $("form").submit(function(e) {
        e.preventDefault();
        listitems();


    });

    function listitems() {
        var newlistitem = $("input").val();
        $(".listitems ul").append("<li><i class='fa fa-check'></i><i class='fa fa-trash-o'></i><span>" + newlistitem + "</span></li>");
        console.log("hey");

        $(".list .fa-check:last").on("click", function() {
            $(this).siblings("span").toggleClass("toggle_strike");
            console.log("hey");


        });

        $(".list .fa-trash-o:last").click(function() {
            $(this).parent().fadeOut("fast", function() {
                $(this).remove();
            })

        });

    };
    $("#newitem_button").on("click", function() {
        listitems();

    });

});
