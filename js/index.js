var weather;
var city;
// 请求太原天气情况
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		// console.log(weather);
	}
})
// 获取城市天气情况
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		city=obj.data;
	    // console.log(obj.data);	
	}
})
	// 渲染数据
function updata(){
	var cityName=document.getElementsByClassName("header")[0];
	cityName.innerHTML=weather.city_name;
	var current_temperature=document.getElementsByClassName("title")[0];
	current_temperature.innerHTML=weather.current_temperature+"°";
	var current_condition=document.getElementsByClassName("qing")[0];
	current_condition.innerHTML=weather.current_condition;

// 今天最高温,最低温
	var dat_high_temperature=document.getElementById("dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;
	var dat_low_temperature=document.getElementById("dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature;
// 获取当天天气情况
	var day_condition=document.getElementById("day_condition");
	day_condition.innerHTML=weather.day_condition;
//今天天气的图片
	var dat_weather_icon_id=document.getElementById("dat_weather_icon_id");
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png);`;
//明天的最高温最低温
	var tomorrow_high_temperature=document.getElementById("tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
	var tomorrow_low_temperature=document.getElementById("tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature;
// 明天的天气情况
	var tomorrow_condition=document.getElementById("tomorrow_condition");
	tomorrow_condition.innerHTML=weather.tomorrow_condition;
//明天天气的图片
	var tomorrow_weather_icon_id=document.getElementById("tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${tomorrow_weather_icon_id}.png);`;

// 获取实时天气
for(var i in weather.hourly_forecast){
	// 创建父元素div
	var now=document.createElement("div");
	// 给父元素div添加样式
	now.className="now";
	// 获取now的父元素
	var nowp=document.getElementById("now");
	// 将now插入到父元素中
	nowp.appendChild(now);

	var now_time=document.createElement("h2");
	now_time.className="now_time";
	now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
	now.appendChild(now_time);

	

	var now_icon=document.createElement("div")
	now_icon.className="now_icon";
	now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png);`;
	now.appendChild(now_icon);

	var temperature=document.createElement("h3");
	temperature.className="temperature";
	temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
	now.appendChild(temperature);
}

// 获取第四部分
for(var j in weather.forecast_list){
	// 创建父元素div
	var recent=document.createElement("div");
	// 给父元素div添加样式
	recent.className="recent";
	// 获取now的父元素
	var recentp=document.getElementById("recent");
	// 将now插入到父元素中
	recentp.appendChild(recent);

	

	var recent_time=document.createElement("div");
	recent_time.className="recent_time";
	recent_time.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/"+weather.forecast_list[j].date.substring(8);
	recent.appendChild(recent_time);
	// var month=document.createElement("span");
	// month.className="month";
	// month.innerHTML=weather.forecast_list[j].date.substring(5,7);
	// recent_time.appendChild(month);

	var wea=document.createElement("h2");
	wea.className="wea";
	wea.innerHTML=weather.forecast_list[j].condition;
	recent.appendChild(wea);

	var recent_pic=document.createElement("div");
	recent_pic.className="recent_pic";
	recent_pic.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png);`;
	recent.appendChild(recent_pic);

	var recent_high=document.createElement("h3");
	recent_high.className="recent_high";
	recent_high.innerHTML=weather.forecast_list[j].high_temperature;
	recent.appendChild(recent_high);

	var recent_low=document.createElement("h4");
	recent_low.className="recent_low";
	recent_low.innerHTML=weather.forecast_list[j].low_temperature;
	recent.appendChild(recent_low);

	var recent_wind=document.createElement("h5");
	recent_wind.className="recent_wind";
	recent_wind.innerHTML=weather.forecast_list[j].wind_direction;
	recent.appendChild(recent_wind);

	var level=document.createElement("h6");
	level.className="level";
	level.innerHTML=weather.forecast_list[j].wind_level;
	recent.appendChild(level);
}


var header=document.getElementsByClassName("header")[0];
var city_box=document.getElementsByClassName("city_box")[0];
header.onclick=function(){
	$(".text").val("");
	$(".button").html("取消");
	city_box.style="display:block";
}

	//渲染城市
	for(var k in city){
		// console.log(k);

		var cityp=document.getElementById("city");
		var title=document.createElement("h1");
		title.className="title";
		title.innerHTML=k;
		cityp.appendChild(title);

		var con=document.createElement("div");
		con.className="con";
		for(var y in city[k]){
			// console.log(y);
			var erji=document.createElement("div");
			erji.className="son";
			erji.innerHTML=y;
			con.appendChild(erji);
		}
		cityp.appendChild(con)
	} 
 }
 // 查找各城市天气信息
 function AJAX(str){
 	$.ajax({
		url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
		dataType:"jsonp",
		type:"get",
		success:function(obj){
			weather=obj.data.weather;
			updata();
			$(".city_box").css({"display":"none"});
			
	        }
		})
}

// 当页面加载完成执行的代码
window.onload=function(){
   updata();
   $(".son").on("click",function(){
  var cityh=this.innerHTML;
  AJAX(cityh);
   })
   // 当input获取焦点，button变确认
   // focus 获取焦点
   // html 设置或改变元素的内容
   $(".text").on("focus",function(){
   	$(".button").html("确认");
   })
   var button=document.getElementsByClassName("button")[0];
   console.log(button);
   button.onclick=function(){
   	// console.log(1);
   	// 获取button中的内容
   	  var btn=this.innerHTML;
   	  // console.log(btn);
   	  if(btn=="取消"){
   	
   	  	// console.log(1);
   	    var city_box=document.getElementsByClassName("city_box")[0];
   	    city_box.style="display:none";
   	  }
   	  else{
   	  	var str=document.getElementsByClassName("text")[0].value;
   	  	// console.log(str);
   	  	for(var i in city){
   	  		if(i==str){
   	  			AJAX(str);
   	  			return ;
   	  		}
   	  		else{
   	  			for(var j in city[i]){
   	  				if(j==str){
   	  					AJAX(str);
   	  					return;
   	  				}
   	  			}
   	  		}
   	  	}
   	  	alert("没有该城市的气象信息");

   	  }
   }
}