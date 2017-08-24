var img = [{src:"img/photo0.png"},{src:"img/photo1.png"},{src:"img/photo2.png"},{src:"img/photo3.png"},{src:"img/photo4.png"},{src:"img/photo5.png"},{src:"img/photo6.png"},{src:"img/photo7.png"},{src:"img/photo8.png"}]
var curPos = 0;
function initSlideShow(){
console.log(img[curPos].src);

document.getElementById("indexSlideShow").style.backgroundImage = "url(\""+img[curPos]["src"] +"\")";
}

function buttonForward(){
    if(curPos == img.length-1){
        curPos = 0;
        console.log(img[curPos].src);
        document.getElementById("indexSlideShow").style.backgroundImage="url(\""+img[curPos]["src"] +"\")";
    
    }else{
        curPos += 1;
        console.log(img[curPos].src);
        document.getElementById("indexSlideShow").style.backgroundImage="url(\""+img[curPos]["src"] +"\")";
    }


}

function buttonBackward(){
    if(curPos == 0){
        curPos = img.length-1;
        document.getElementById("indexSlideShow").style.backgroundImage="url(\""+img[curPos]["src"] +"\")";
    
    }else{
        curPos -= 1;
        document.getElementById("indexSlideShow").style.backgroundImage="url(\""+img[curPos]["src"] +"\")";
    }


}
