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
		$(".aboutPic").fadeOut(1000,function(){$(".aboutPic").attr("src","./images/about" + t +".png");});
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
		$(".aboutPic").attr("src","./images/about" + t +".png");
		clearInterval(intervalID);
		intervalID = setInterval(changePic, 4000);
	});


	



})