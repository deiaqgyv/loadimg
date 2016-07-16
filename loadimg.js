/*
* Jquery 图片的预加载与延时加载
*
* @description loadimg();
* @param   {arr}            存放图片路径的数组或img的jquery对象
* @param   {funLoading}     每一个单独的图片加载完成后执行的操作
* @param   {funOnLoad}      全部图片都加载完成后的操作
* @param   {funOnError}     单个图片加载出错时的操作
*
* BY Huhl
*/
function loadimg(arr,funLoading,funOnLoad,funOnError){
    var numLoaded=0,
    numError=0,
    isObject=Object.prototype.toString.call(arr)==="[object Object]" ? true : false;
    var arr=isObject ? arr.get() : arr;
    for(a in arr){
        var src = isObject ? $(arr[a]).data("src") : arr[a];
        preload(src,arr[a]);
    }
    function preload(src,obj){
        var img=new Image();
        img.onload=function(){
            numLoaded++;
            funLoading && funLoading(numLoaded,arr.length,src,obj);
            funOnLoad && numLoaded==arr.length && funOnLoad(numError);
        };
        img.onerror=function(){
            numLoaded++;
            numError++;
            funOnError && funOnError(numLoaded,arr.length,src,obj);
        }
        img.src=src;
    }
}