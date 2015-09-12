function isScrolledIntoView(elem)
{
//	console.log("\n\n\ncalled function with "+ elem);

    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
 //   console.log ("element's height is "+ $elem.height());
//    console.log("doc top "+ docViewTop + " doc bottom "+ docViewBottom +" element is... "+ elemBottom);
 //   console.log ( ((( elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom))));
    return (( 
    	(( elemTop >= docViewTop) && (elemTop <= docViewBottom)) ||
     	((elemBottom >= docViewTop) && (elemBottom <= docViewBottom))  ||
     	((elemTop < docViewTop && elemBottom > docViewBottom))
     ));
}


$(document).ready(function(){  

	var docHeight = $(window).height();

	var page1AvaiableAt = $("#page1").offset().top;
	var page2AvaiableAt = $("#page2").offset().top;
	var page3AvaiableAt = $("#page3").offset().top;
	var page4AvaiableAt = $("#page4").offset().top;


	var page1AvaiableAtTop = page1AvaiableAt - docHeight;
	var page2AvaiableAtTop = page2AvaiableAt - docHeight;
	var page3AvaiableAtTop = page3AvaiableAt - docHeight;
	var page4AvaiableAtTop = page4AvaiableAt - docHeight;


	console.log(" initially page2 available at "+ page2AvaiableAtTop);
	console.log ("intially body's height height "+ $("body").height());
	

	 console.log($(window).height());

     $("#info").html("alamin");

       var t = 0;
  //     $("#page2").css("margin-top", (-400) +"px");
       console.log ("page1's height "+ $("#page1").height());
       console.log ("page2's height "+ $("#page2").height());

       console.log ("after body's height height "+ $("body").height());
       console.log(" after page2 available at "+ $("#page2").offset().top);








       $(window).scroll(function() {

       	  var pageScrolled = $(window).scrollTop();

       	  if (pageScrolled > page2AvaiableAt) {
       	  	$("#page1").css("margin-top", "0px");
       	  //	$("#page2").css("margin-top", "0px");

       	  } 

       	  if (pageScrolled > page2AvaiableAt && pageScrolled < page3AvaiableAtTop) {
       	  	   $("#page2").css("margin-top", "0px");
       	  }      	  

       	  if (pageScrolled > page3AvaiableAt) {
       	  	$("#page2").css("margin-top", "0px");
       //	  	$("#page3").css("margin-top", "0px");

       	//  	console.log("third loop");

       	  }

       	  if (pageScrolled > page3AvaiableAt && pageScrolled < page4AvaiableAtTop) {
       	  	   $("#page3").css("margin-top", "0px");
       	  } 

       	  if (pageScrolled > page4AvaiableAt) {
       	//  	$("#page3").css("margin-top", "0px");
       //	  	$("#page3").css("margin-top", "0px");

       	//  	console.log("third loop");

       	  }  

       	  // if (pageScrolled > page4AvaiableAt) {
       	  // 	$("#page2").css("margin-top", "0px");
       	  // 	$("#page3").css("margin-top", "0px");

       	  // }




       	  var isPage1ViewAble = isScrolledIntoView("#page1");
       	  var isPage2ViewAble = isScrolledIntoView("#page2");
       	  var isPage3ViewAble = isScrolledIntoView("#page3");
       	  var isPage4ViewAble = isScrolledIntoView("#page4");
       	  


       	  

       	  if (pageScrolled > page2AvaiableAtTop && pageScrolled < page2AvaiableAt) {
       	  //		console.log ("in first slide ");      	
	       		var temp = page2AvaiableAtTop - $(window).scrollTop();   
	       		$("#page2").css("position", "relative");     	  	
	       	  	$("#page2").css("margin-top", (temp) +"px");
	       	  	$("#page1").css("margin-top", (0-temp) +"px");  

	      }
     //    console.log ("page2 initialavail at " + page2AvaiableAt);
       //  console.log ("page2 now available at " + $("#page2").offset().top);
	      if (pageScrolled >= page3AvaiableAtTop && pageScrolled <= page3AvaiableAt) {
	      	    
	       		var temp2 = page3AvaiableAtTop - $(window).scrollTop();   
	       		$("#page3").css("position", "relative");    	  	
	       	  	$("#page3").css("margin-top", (temp2) +"px");
	       	  	$("#page2").css("margin-top", (0-temp2) +"px"); 
	       	 // 	console.log ("temp2 " + temp2); 		

     	
       	}


       	 if (pageScrolled >= page4AvaiableAtTop && pageScrolled <= page4AvaiableAt) {
	      	    
	       		var temp2 = page4AvaiableAtTop - $(window).scrollTop();   
	       		$("#page4").css("position", "relative");    	  	
	       	  	$("#page4").css("margin-top", (temp2) +"px");
	       	  	$("#page3").css("margin-top", (0-temp2) +"px"); 
	       //	  	console.log ("temp2 " + temp2); 		

     	
       	 }

     
	      

       });


	
});


