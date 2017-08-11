$(function(){
	
	$.ajax({   //在登陆成功的前提下 获取成绩
 		type: "GET",
 		url: "****************",//获取成绩接口
		success: function(data){
 			alert( "Data Saved: " + data );
 			regex1 = /<h2.*?>[\s\S]*?<\/h2>/;
 			mc1 = regex1.exec(data);
 			regex2 = /<table.*?>[\s\S]*?<\/table>/;
            mc2 = regex2.exec(data);
            //alert(mc);
  			$("#main").append(mc1);
  			$("#main").append(mc2);
  			
		}
	})
   $.ajax({   //在登陆成功的前提下 获取课表
 		type: "GET",
 		url: "*********************",//获取课表接口
		success: function(data){
 			alert( "Data Saved: " + data );
 			
 			regex = /<table.*?>[\s\S]*?<\/table>/;
            mc = regex.exec(data);
            //alert(mc);
  			$("#main").append(mc);
  			
		}
	})
})
