window.onload = function(){
 var imgBig = document.getElementsByTagName('img');
    for(var i=0;i<imgBig.length;i++){
    imgBig[i].onclick = function(){this.className='enlarge'}
    imgBig[i].onclick = function(){this.className='';}
    }
}