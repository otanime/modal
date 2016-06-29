$(document).ready(function(){
    $("#kolchi > div.ltahte > div.downep").click(function(){
        $("#tabs").hide(); $("#down-ep-page").show();
    });
    $("#down-ep-page > div.close-down-page > i").click(function(){
        $("#tabs").show(); $("#down-ep-page").hide();

    });
});
