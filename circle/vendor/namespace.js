//vendor/namespace.js

function $(x){
    return document.getElementById(x);
}
function ns(xlist){
    xlist=xlist.split(' ');
    for(var i=0;i<xlist.length;i++){
        var x=xlist[i];
        window['$'+x.replace('-','_')]=$(x);
    }
}
