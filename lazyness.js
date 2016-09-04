String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function qsa(param){
var qsafunc =document.querySelectorAll(param);
return qsafunc
}
function qs(param){
var qsfunc =document.querySelector(param);
return qsfunc
}
function shortenurl(url){
    $.getJSON('  https://api-ssl.bitly.com/v3/shorten?access_token=5e56641ffce09ad21fd0d0481d767c8267bd7819&longUrl='+encodeURIComponent(url)+'&format=json',

    function(response) {
      return response.data.url
   
    }

);
}
