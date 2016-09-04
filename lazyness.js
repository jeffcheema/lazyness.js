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
