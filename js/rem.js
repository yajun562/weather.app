window.onload=function(){
    resize(1080,"x");
}
function resize(originSize,type){
    // originSize = 750;
    // type = x
    type = type || "x";
    if(type=="x"){
        var width = document.documentElement.clientWidth;//设备的宽度
        var scale = width/originSize*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }else if(type=="y"){
        var height = document.documentElement.clientHeight;
        var scale = height/originSize+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
}
resize(1080,"x");

window.onresize = function(){
   resize(1080,"x"); 
}
// 后代选择器
// 伪类选择器：nth-child(n)选中第n个孩子
// 选中奇数个孩子nth-child(2n+1)
//  选中偶数个孩子nth-child(2n)
// ：first-child选中第一个孩子
// :last-child  选中最后一个孩子
// <div>水平居中用margin:0 auto;
// 文字水平居中 
// text-align: center;
// 文本垂直居中 
// line-height: 1.58rem;
// 圆角
// border-radius: .19rem;
//  自定义盒模型 
// box-sizing: border-box;
// 颜色的3种表示方式
// 英文字母，#16进制，rgb
//边框的宽度 border-right: 0.03rem solid #e4e4e4;
//浮动 float：left
// 指定为弹性布局 
// display: flex;
/* 两端对齐 */
// justify-content: space-between;
// 引入图片
// background: url('../img/0.png')no-repeat;
// 图片大小
// background-size:0.48rem 0.48rem; 
// css语法（属性：属性值；）
//  /* 定位中的水平居中 */
//  /* font-family: "微软雅黑";s */
//  定位
//  position: absolute; 
// top: 0;
// left: 0;
