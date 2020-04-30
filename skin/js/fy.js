$(function(){var sp=document.getElementById('newslist').getElementsByTagName('ul');var last=document.getElementById('last');var next=document.getElementById('next');var n=0;for(var i=1;i<sp.length;i++){sp[i].style.display='none';}
last.onclick=function(){n--;if(n<0){n=0;}
for(var i=0;i<sp.length;i++){sp[i].style.display='none';}
sp[n].style.display='block';}
next.onclick=function(){n++;if(n>sp.length-1){n=sp.length-1;}
for(var i=0;i<sp.length;i++){sp[i].style.display='none';}
sp[n].style.display='block';}});