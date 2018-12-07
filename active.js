/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-06 20:42:45
 * @version $Id$
 */
window.onload = function(){
    //顶部输入框的js-中国站前面的搜索框的js行为，为了实现鼠标聚焦的时候有个增长的效果
    //获得该标签的利用querySelector（）的方法
    var a12=document.querySelector('.style-ab');
    //事件的形成
    a12.onfocus=function(){
        this.setAttribute('class','style-ab style-ab-a')
    }
    a12.onblur=function(){
        this.setAttribute('class','style-ab');
    }
   // 顶部的js结束
    //第三个块元素中的js
    //获得第三个块元素中的父元素
    var ca3 = document.querySelector('.style-c');
    //获得第三个块元素中的ul标签和li标签
    var caThree = document.querySelector('.style-ca');
    var caUl =document.querySelector('.style-caa');
    var caLi = caUl.children;
    //定义一个数组来存储需要变换的图片
    var shuZu = ['url(imgs/1.jpg)','url(imgs/2.jpg)','url(imgs/3.jpg)','url(imgs/4.jpg)','url(imgs/5.jpg)'];
    var caLen = shuZu.length;
    var caStr ='';
    var num=0;
    var timer=null;
    for(var i=0;i<caLen;i++){
        caStr+='<li></li>';
    }
    caUl.innerHTML=caStr;
    caLi[0].className='left-ca';
    for(var i=0;i<caLen;i++){
        caLi[i].index=i;
        caLi[i].onmouseover=function(){
            for(var j=0;j<caLen;j++){
                caLi[j].className='';
            }
            caLi[this.index].className='left-ca';
            ca3.style.backgroundImage=shuZu[this.index];
        }
    }
    //自动切换图片的事件
    var nu=0;
    ca3.onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            // clearInterval(timer);
            nu+=1;
            if(nu>4){
                nu=0;
            }
            for(var j=0;j<caLen;j++){
                caLi[j].className='';
            }
            caLi[nu].className='left-ca';
            ca3.style.backgroundImage=shuZu[nu];
        },2500);
    }

    //鼠标移动到图片的事件
    ca3.onmouseover=function(){
        clearInterval(timer);
    }
    timer=setInterval(function(){
        // clearInterval(timer);
        nu+=1;
        nu%=5;
        for(var j=0;j<caLen;j++){
            caLi[j].className='';
        }
        caLi[nu].className='left-ca';
        ca3.style.backgroundImage=shuZu[nu];
    },2500);





    //最下面的js
    //获取到一直显示的块元素
    var m1 = document.querySelector('.style-m');
    // 获取到悬停时候显示的块元素
    var m2 = document.querySelector('.style-mb');
    //获取到悬停时显示的块元素中的右上角的关闭按钮
    var m3 = document.querySelector('.style-X');
    //定义一个时间循环要用的变量
     var c1 = null;
    // 一直显示的块元素的js行为
    m1.onmouseover = function(){
        clearTimeout(c1);
        m2.style.display='block';
    }
    //为了达到鼠标离开后不会瞬间消失的效果
    m1.onmouseout = function(){
        c1 = setTimeout(function(){
            m2.style.display='none';
        },1000)
    //悬停显示的js行为
    }
    m2.onmouseover = function(){
        clearTimeout(c1);
        m2.style.display='block';

    }
    m2.onmouseout = function(){
        c1 = setTimeout(function(){
            m2.style.display='none';
        },1000)

    }
    //悬停的块元素上的关闭按钮的时间
    m3.onclick=function(){
        m2.style.display='none';
    }
    // 常用函数的应用
   function getStyle(obj,attr){
     obj.currentStyle?obj.currentStyle[attr]:window.getComputedStyle(obj,null)[attr]
   } 
}
