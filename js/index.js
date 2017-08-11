$(function(){
	
            $("#login").click(function(){
                //alert("dededede");
                isRemember=$(".isRemember").val();		//alert(isRemember);
                Student=$(".Student").val();			//alert(Student);
                UserName=$(".UserName").val();			//lert(UserName);
                Password=$(".Password").val();			//lert(Password);
                ValidateCode=$(".ValidateCode").val();	//alert(ValidateCode);
                
    			$.ajax({
   					type: "POST",
   					url: "********************",//登陆接口
   					data: {isRemember:isRemember,Role:Student,UserName:UserName,Password:Password,ValidateCode:ValidateCode}, //第一种方式传参
   					success: function(data){
   						//var str=<title>(<div[^>]*>.*?</div>|.)*?</title> ;
   						//var arr = data.match(str);
     					//alert( arr );
     					//alert( "Data Saved: " + data );
     					var text = data;   
            			var regex2 = /<title[^>/]*>(.*?)<\/title>/i;   
            			var groups = regex2.exec(text);   
            			if(groups){   
            				var result=groups[1];
                			//alert(result); 
                			
                			var login="登陆页面";
                			//alert(login.length);
                			if(4==result.length){
     							alert("用户名或密码错误"); 
     						}
                			
                			var success="湖北工业大学教学管理系统";
                			
     						if(12==result.length){
     							alert("登陆成功"); 
  							
     							window.location.href="course.html";
     							//window.location.href="http://run.hbut.edu.cn/StuGrade/Index"; 
     						}
            			} 
   					}
				})
            })
		$("#reset").click(function(){
                //alert("dededede");
                
                $(".UserName").val("");			//lert(UserName);
                $(".Password").val("");			//lert(Password);
                $(".ValidateCode").val("");	//alert(ValidateCode);
                
    			
           })
		
})
