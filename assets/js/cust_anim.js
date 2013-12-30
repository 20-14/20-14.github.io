$(document).ready(function() {
	$("#left .content .view-blikvanger .view-content").cycle({ 
	    fx:     'fade', 
	    speed:   100, 
	    timeout: 5000000000000000, 
	    pause:   1,
		pager: '#bliknav',
		height: 230
	});
		$('#block-block-1 p').show();
	$("#block-block-1 .content").cycle({ 
	    fx:     'fade', 
	    speed:   600, 
	    timeout: 10000, 
	    pause:   0,
		 random : 1
	});
	
	$('#block-block-1 .content img').click(function (){
	      document.location.href = '/';
	    }).css('cursor', 'pointer');
	
		$('#menu-3607 a').each(function(){$(this).attr({ target: "_blank" });
	}); 
	
	var adminpagina = $('.page-admin');
		$(".bijlage a").attr('target','_blank');
	//alert(adminpagina.html());
	
	var blikvangers = $("#left .content .view-blikvanger .view-content .views-row").length;
	//alert(blikvangers);
	
	if(blikvangers != "1" && $(".front").length == "1"){
		$(".front .view-blikvanger .view-footer").css("top","0px");
		$(".front #block-multisite-0").css("top","0px");
		$(".front #block-views-agenda_minister-block_1").css("top","0px");
	}
	
	if(adminpagina.html() != null){
		$('#right').hide(100);
	}
	
	$('.page-search #inhoud .primary li:first a').html("Geavanceerd zoeken");
	if($('.page-search #inhoud .primary li:first a').hasClass('active')){
		$('#inhoud h1').html("Geavanceerd zoeken");
	}else if($('.page-search').html() != null){
		//alert($('.page-search').html());
		$('#inhoud h1').html("Zoeken");
		$(".breads").html('<a href="/">Startpagina</a> » Zoeken');
	}
	
	var deinhoud = $('#inhoud');
	var rechts = $('#right');
	
	var inhoudhoogte = deinhoud.height();
	var rechtshoogte = rechts.height();

	var linkshoogte = $('#left').height();
	var middelhoogte = $('#middle').height();
	if(linkshoogte > rechtshoogte){
		$('#right').height(linkshoogte);
	}

	if(middelhoogte > rechtshoogte && middelhoogte > linkshoogte){
		$('#right').height(middelhoogte);
	}else
	if(rechtshoogte < inhoudhoogte){
		$('#right').height(inhoudhoogte);
	}
		
});
function showRss(){
      $('#rssswitch').toggle();
    }

	Drupal.behaviors.nva = function(context) {
	  $('#edit-tid', context).change(function(){
	    $('#views-exposed-form-page-afdelingen-page-1').submit();
	  });
	$('#edit-tid-1', context).change(function(){
	    $('#views-exposed-form-page-afdelingen-page-1').submit();
	  });
	$('#edit-field-afd-provincie-value-many-to-one', context).change(function(){
	    $('#views-exposed-form-page-afdelingen-page-1').submit();
	  });
	
	}
