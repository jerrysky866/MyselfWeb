$(function(){

	var t=1;
	var intervalID = setInterval(changePic, 4000);

	function changePic(){
		t=t+1;
		if(t==6){			
			t=1;
		};

		var text1= "#aboutPicLight"+t;
		if(t==1){
			var text2= "#aboutPicLight5";
		}
		else{
			var a=t-1;
			var text2= "#aboutPicLight"+a;
		}
		$(text2).css("background-color","#ffffff");
		$(text1).css("background-color","#444444");
		$(".aboutPic").fadeOut(1000,function(){$(".aboutPic").css("background-image","url(./images/test" + t +".png");});
		$(".aboutPic").fadeIn(1000);

	}

	$(".AboutPicLight").on("click",function(){
		var text= "#aboutPicLight"+t;
		$(text).css("background-color","#ffffff");
		u = $(this).attr('id');

		switch(u){
			case "a1":t=1;break;
			case "a2":t=2;break;
			case "a3":t=3;break;
			case "a4":t=4;break;
			case "a5":t=5;break;
		}
		text="#aboutPicLight"+t;
		$(text).css("background-color","#444444");
		$(".aboutPic").css("background-image","url(./images/test" + t +".png");
		if(t<=2){
			a=2;
		}
		else if(t==3)
		{
			a=4;
		}
		else{
			a=3;
		}
		text="#aboutP"+a;
		$(text).css("color","#00ebf4");
		clearInterval(intervalID);
		intervalID = setInterval(changePic, 4000);
		setTimeout(function(){$(text).css("color","#fff");},4000);
	});

	function myload(){
		$("#allLoad").fadeOut(3000);
	}
	window.onload=myload;
	


})