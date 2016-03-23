$(document).ready(function() {
    $("#newitem_button").click(function() {
        var newlistitem = $("input").val();
        	$(".listitems ul").append("<li><i class='fa fa-check'></i><i class='fa fa-trash-o'></i>" + newlistitem + "</li>");
    });


    $(".list .fa-check").click(function(){
    	$("").css("text-decoration", "line-through");
    	//When icon is clicked, strike 
    	// the text of the line item 

    });

});