 $(document).ready(function(){ $('#tabs div').hide(); $('#tabs div:first').show(); $('#tabs ul li:first').addClass('active'); $('#tabs ul li a').click(function(){ $('#tabs ul li').removeClass('active'); $(this).parent().addClass('active'); var currentTab = $(this).attr('href'); $('#tabs div').hide(); $(currentTab).show(); return false; }); });
  </script> 

<script>
$(document).ready(function(){
    $("#kolchi > div.ltahte > div.downep").click(function(){
        $("#tabs").hide(); $("#down-ep-page").show();
    });
    $("#down-ep-page > div.close-down-page > i").click(function(){
        $("#tabs").show(); $("#down-ep-page").hide();

    });
});
