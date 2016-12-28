String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$= function(param){
var qsfunc =document.querySelectorAll(param);
  if (qsfunc.length == 1){
     qsfunc =document.querySelector(param);
    return qsfunc;
  }
  else{
     qsfunc =document.querySelectorAll(param);
    return qsfunc;
    
  }

}
function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;


    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
Element.prototype.remove = function() {
this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
for(var i = this.length - 1; i >= 0; i--) {
if(this[i] && this[i].parentElement) {
this[i].parentElement.removeChild(this[i]);
}
}
}
getURLquery= function(){
        var query_string = {};
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
  var pair = vars[i].split("=");

  if (typeof query_string[pair[0]] === "undefined") {
    query_string[pair[0]] = decodeURIComponent(pair[1]);

  } else if (typeof query_string[pair[0]] === "string") {
    var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
    query_string[pair[0]] = arr;

  } else {
    query_string[pair[0]].push(decodeURIComponent(pair[1]));
  }
}
return query_string;
}
