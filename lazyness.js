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
