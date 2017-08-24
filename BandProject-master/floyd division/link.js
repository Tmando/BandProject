var links = [
    {text:"Home",link:"index.html"},
    {text:"Band",link:"band.html"},
    {text:"News",link:"news.html"},
    {text:"Live",link:"live.html"},
    {text:"Media",link:"media.html"},
    {text:"Gästebuch",link:"gästebuch.html"},
    {text:"Links",link:"links.html"},
    {text:"Presse",link:"presse.html"},
    {text:"Kontakt",link:"kontakt.html"}
  ];
  tag = "";
  for(var i=0;i<links.length;i++){
    console.log(i);
    tag += "<li><a href=\""+ links[i].link + "\">"+links[i].text + "</a></li>";


  }
  $( document ).ready(function() {
    $("#mainNavigation").append(tag);
  });
