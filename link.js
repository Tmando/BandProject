var links = [
    {text:"Home",link:"index.html"},
    {text:"Band",link:"band.html"},
    {text:"News",link:"news.html"},
    {text:"Live",link:"live.html"},
    {text:"Media",link:"video.html"},
    {text:"Links",link:"links.html"},
    {text:"Presse",link:"presse.html"},
    {text:"Kontakt",link:"kontakt.html"}
  ];
  function activateBurgerMenu(){
      console.log("hallo1");
      console.log(window.innerWidth);
      if(window.innerWidth<768){
        if(document.getElementById("hamburgerMenu").style.display == "block"){
          document.getElementById("hamburgerMenu").style.display="none";

        }else{
          document.getElementById("hamburgerMenu").style.display="block";
        }

      }else{
          document.getElementById("hamburgerMenu").style.display="none";

      }
}
var tag = "";
tag += "<li><a onclick=\"activateBurgerMenu()\"><span class=\"glyphicon glyphicon-menu-hamburger\" id=\"hamburgerIcon\"></span></a></li>"
var hamburgerMenu = "<div style=\"display:none\" id=\"hamburgerMenu\">";
for(var i=0;i<links.length;i++){
    if(links[i].text=="Media"){
      tag += "<li class=\"navBarLinks dropdown\"><a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\""+ links[i].link + "\">"+links[i].text;
      tag += "<ul class=\"dropdown-menu\">";
      tag +=  "<li><a href=\"video.html\">Video</a></li>";
      tag +=  "<li><a href=\"photo.html\">Foto</a></li>";
      tag +=  "<li><a href=\"songlist.html\">Songlist</a></li>";
      tag += "</ul>";
      tag += "</li>";
    }else{
    tag += "<li class=\"navBarLinks\"><a href=\""+ links[i].link + "\">"+links[i].text + "</a></li>";
    hamburgerMenu += "<li><a href=\""+ links[i].link + "\">"+links[i].text + "</a></li>";
    }
}
tag += "<li><a class=\"navBarLinks\" href=\"https://www.facebook.com/floyddivision\"><i class=\"fa fa-facebook-official\" style=\"font-size:24px\"></i></a></li>";
tag += "<li><a class=\"navBarLinks\" href=\"https://www.youtube.com/user/viennafloyd\"><i class=\"fa fa-youtube\" style=\"font-size:24px\"></i></a></li>";
/* tag += "<li><a href=\"https://www.youtube.com/user/viennafloyd\"<i class=\"fa fa-youtube-play\" style=\"font-size:10px; color:red\"></i></li>"; */
hamburgerMenu += "<li><a href=\"https://www.facebook.com/floyddivision\"><i class=\"fa fa-facebook-official\" style=\"font-size:24px\"></i></a></li>";
hamburgerMenu += "<li><a href=\"https://www.youtube.com/user/viennafloyd\"<i class=\"fa fa-youtube\" style=\"font-size:24px; color:red\"></i></li>";
hamburgerMenu += "</div>";
function navBar(){
  $("#mainNavigation").append(tag);
  $('#hamburgerIcon').append(hamburgerMenu);
}
