//header fixed scripti
$(window).scroll(function(event){
	if($(document).scrollTop() > 184){
		$(".headerBottom").css({
			position:"fixed",
			top:"0",
			zIndex:"500"
		});
	}else{
		$(".headerBottom").css({
			position:"relative"
		});
	}
})
//search
$(".search").click(function(event){

	// $(".searchMenu").css("display","block")
	if($(".searchMenu").css("display")=="none"){
		$(".search > .fa-search").addClass("fa-times");
		$(".searchMenu").fadeIn();
	}else{
		$(".searchMenu").fadeOut();
		$(".search > .fa-search").removeClass("fa-times");
	}

})
//slider scripti
$(".secondImage").hide();
$(".thirdImage").hide();

$(".dotFirst").click(function(event){
	$(".dotFirst").css("background","#42a4ff");
	$(".secondImage").fadeOut(500);
	$(".thirdImage").fadeOut(500);
	$(".firstImage").fadeIn(500);
})
$(".dotSecond").click(function(event){
	$(".dotSecond").css("background","#42a4ff");
	$(".firstImage").fadeOut(500);
	$(".thirdImage").fadeOut(500);
	$(".secondImage").fadeIn(500);
})
$(".dotThird").click(function(event){
	$(".dotThird").css("background","#42a4ff");
	$(".firstImage").fadeOut(500);
	$(".secondImage").fadeOut(500);
	$(".thirdImage").fadeIn(500);
})
//

//counts scripti

var x=0;
var y=0;
var z=0;
var n=0;
var intervalFirst;
var intervalSecond;
var intervalThird;
var intervalFourth;

	intervalFirst=setInterval(function(){
$(".firstCount").text(
		
			x+=1
		
	)
if(x==100){
	clearInterval(intervalFirst);
}

},10)
	intervalSecond=setInterval(function(){
$(".secondCount").text(
		
			y+=1
		
	)
if(y==10){
	clearInterval(intervalSecond);
}

},10)
	intervalThird=setInterval(function(){
$(".thirdCount").text(
		
			z+=7
		
	)
if(z==2954){
	clearInterval(intervalThird);
}

},10)
	intervalFourth=setInterval(function(){
$(".fourthCount").text(
		
			n+=11
		
	)
if(n==3597){
	clearInterval(intervalFourth);
}

},10)
	//map scripti
	function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

//balaca daire scripti
$(window).scroll(function(event){
	if($(document).scrollTop() > 300){
		$(".circle").css({
			display : "block",
			bottom: "40px"

			
		});
	}else{
		$(".circle").css({
			display: "none"
		
		});

	}
})
$(".circle").click(function(event){
	 console.log($(document).scrollTop())
	var currentPos = $(document).scrollTop();
	setInterval(function(){
		if(currentPos > 0){
			currentPos -= 15;
			$(document).scrollTop(currentPos);
		}
	},1)
	
	
	
})
//service slide script
$(document).ready(function() {
	count=0;
$("#leftbtn").click(function(event){
	if(count > 0){
		$($(".repair")[count-1]).animate({
			marginLeft: "+="+$($(".repair")[0]).css("width")
		})
		count--;
	}
});
$("#rightbtn").click(function(event) {
	if(count < $(".repair").length-4){
		$($(".repair")[count]).animate({
			marginLeft: "-="+$($(".repair")[0]).css("width")
		})
		count++;
	}
	});
});

//manufactures scripti
$(document).ready(function() {
cnt=0
$("#manufactures .dots .dotSecond").click(function(event){
	if(cnt > 0){
		$($(".innerMan")[cnt-1]).animate({
			marginLeft: "+="+39+$($(".innerMan")[0]).css("width")
		})
		cnt--;
	}
})
$("#manufactures .dots .dotThird").click(function(event) {
	if(count < $(".innerMan").length-5){
		$($(".innerMan")[cnt]).animate({
			marginLeft: "-="+39+$($(".innerMan")[0]).css("width")
		})
		cnt++;
	}
	});
})
//testimonial script
$(document).ready(function() {
cntr=0
$("#testimonials .dots .dotSecond").click(function(event){
	if(cntr > 0){
		$($(".test")[cntr-1]).animate({
			marginLeft: "+="+$($(".test")[0]).css("width")
		})
		cntr--;
	}
})
$("#testimonials .dots .dotThird").click(function(event) {
	if(count < $(".test").length-4){
		$($(".test")[cntr]).animate({
			marginLeft: "-="+$($(".test")[0]).css("width")
		})
		cntr++;
	}
	});
})
