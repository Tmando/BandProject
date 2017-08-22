var links = [
    {text:"Home",link:"index.html"},
    {text:"Band",link:"band.html"},
    {text:"News",link:"news.html"},
    {text:"Live",link:"live.html"},
    {text:"Media",link:"media.html"},
    {text:"Gästebuch",link:"Gästebuch.html"},
    {text:"Links",link:"links.html"},
    {text:"Presse",link:"presse.html"},
    {text:"Kontakt",link:"kontakt.html"}
  ];
var tag = "";
for(var i=0;i<links.length;i++){
  console.log(i);
  tag += "<li><a href=\""+ links[i].link + "\">"+links[i].text + "</a></li>";
}
tag += "<li><a href=\"https://www.facebook.com/floyddivision\"><i class=\"fa fa-facebook-official\" style=\"font-size:24px\"></i></a></li>";
tag += "<li><a href=\"https://www.youtube.com/user/viennafloyd\"<i class=\"fa fa-youtube\" style=\"font-size:24px\"></i></li>"
function navBar(){
  $("#mainNavigation").append(tag);
}
