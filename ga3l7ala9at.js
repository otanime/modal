//<![CDATA[
var numfeed = 5;
var startfeed = 0;
var urlblog = "http://www.otanime.tk/";
var charac = 0;
var urlprevious, urlnext;

function maskolisfeed(johny,banget){
var showfeed = johny.split("<");
for(var i=0;i<showfeed.length;i++){
if(showfeed[i].indexOf(">")!=-1){
showfeed[i] = showfeed[i].substring(showfeed[i].indexOf(">")+1,showfeed[i].length);
}
}
showfeed =  showfeed.join("");
showfeed = showfeed.substring(0,banget-1);
return showfeed;
}
function showterbaru(json) {
var entry, posttitle, posturl, postimg, postcontent;
var showblogfeed = "";
urlprevious = "";
urlnext = "";
for (var k = 0; k < json.feed.link.length; k++) {
if (json.feed.link[k].rel == 'previous') {
urlprevious = json.feed.link[k].href;
}
if (json.feed.link[k].rel == 'next') {
urlnext = json.feed.link[k].href;
}
}
for (var i = 0; i < numfeed; i++) {
if (i == json.feed.entry.length) { break; }
entry = json.feed.entry[i];
posttitle = entry.title.$t;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}
if ("content" in entry) {
postcontent = entry.content.$t;
} else if ("summary" in entry) {
postcontent = entry.summary.$t;
} else {
postcontent = "";
}
if ("media$thumbnail" in entry) {
postimg = entry.media$thumbnail.url;
} else {
postimg = "https://lh3.googleusercontent.com/-w--hCn9RYyQ/UskwP6tSIWI/AAAAAAAAC68/ONRgcNuu3_4/s133/noimagethumb.gif";
}
showblogfeed += "<div class='mas-elemen'>";
showblogfeed += "<a href='" + posturl + "' target='_blank'><img src='" + postimg + "' /></a>";
showblogfeed += "<h6><a href='" + posturl + "'>" + posttitle + "</a></h6>";
showblogfeed += "<p>" + maskolisfeed(postcontent,charac) + "...</p>";
showblogfeed += "</div>";
}
document.getElementById("terbaru").innerHTML = showblogfeed;
showblogfeed = "";
if(urlprevious) {
showblogfeed += "<a href='javascript:navigasifeed(-1);' class='previous'>السابق ◄</a>";
} else {
showblogfeed += "<span class='noactived previous'></span>";
}
if(urlnext) {
showblogfeed += "<a href='javascript:navigasifeed(1);' class='next'>► التالي</a>";
} else {
showblogfeed += "<span class='noactived next'></span>";
}
showblogfeed += "<a href='javascript:navigasifeed(0);' class='home'>الرئيسية</a>";
document.getElementById("mas-navigasifeed").innerHTML = showblogfeed;
}

function navigasifeed(url){
var p, parameter;
if(url==-1) {
p = urlprevious.indexOf("?");
parameter = urlprevious.substring(p);
} else if (url==1) {
p = urlnext.indexOf("?");
parameter = urlnext.substring(p);
} else {
parameter = "?start-index=1&max-results=" + numfeed + "&orderby=published&alt=json-in-script"
}
parameter += "&callback=showterbaru";
incluirscript(parameter);
}
function incluirscript(parameter) {
if(startfeed==1) {removerscript();}
document.getElementById("terbaru").innerHTML = "<div id='mas-loading'></div>";
document.getElementById("mas-navigasifeed").innerHTML = "";
var archievefeed = urlblog + "/feeds/posts/default/-/Joker Game"+ parameter;
var terbaru = document.createElement('script');
terbaru.setAttribute('type', 'text/javascript');
terbaru.setAttribute('src', archievefeed);
terbaru.setAttribute('id', 'MASLABEL');
document.getElementsByTagName('head')[0].appendChild(terbaru);
startfeed = 1;
}
function removerscript() {
var elemen = document.getElementById("MASLABEL");
var parent = elemen.parentNode;
parent.removeChild(elemen);
}
onload=function() { navigasifeed(0); }

document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E")); //]]>
