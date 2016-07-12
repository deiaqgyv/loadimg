// loadImg  图片预加载
// @param   {Array}     预加载图片的对象数组
// author   huhl
var loadImg = function(pics, callback){
    var index = 0;
    var len = pics.length;
    var img = new Image();
    var flag = false;
    var progress = function(w){
    	// 百分比进度条 基于jQuery动画
    	// .loading-progress 动画lay;  .loading-num b 显示的进度数字
        // $('.loading-progress').animate({width:w}, 100, 'linear', function(){
        //     $(".loading-num b").html(w);
        // });
        console.log(w);
    }
    var load = function(){
        img.src = pics[index];
        img.onload = function() {
            //console.log('第' + index + '个img被预加载', img.src);
            progress(Math.floor(((index + 1) / len) * 100) + "%");   // 计算进度百分比
            index ++ ;
            if (index < len) {
                load();
            }else{
                callback();
            }
        }
        return img;
    }
    if(len > 0){
        load();
    }else{
        progress("100%");
    }
    return {
        pics: pics,
        load: load,
        progress: progress
    };
}


var pics = [
    "http://mat1.gtimg.com/news/2014/guoqing/where/jyindexBg.jpg",
    "http://mat1.gtimg.com/news/2014/guoqing/where/jymap.png",
    "http://mat1.gtimg.com/news/2014/guoqing/where/jyplan.png",
    "http://mat1.gtimg.com/news/2014/guoqing/where/jytclogo.png",
    "http://mat1.gtimg.com/news/2014/guoqing/where/loadPic.png",
    "http://mat1.gtimg.com/news/2014/guoqing/where/jycur.png"
];


// 调用
loadImg(pics, function(){
    setTimeout(function(){
    	// load隐藏
        // $(".loadPage").fadeOut();
    }, 500);
});
