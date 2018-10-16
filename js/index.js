var elems = document.body.getElementsByTagName("*");
let i;
for(i=0;i<elems.length;i++){
if(elems[i].className==="ball"){
    elems[i].style.zIndex='-1';
}
else if (elems[i].className==="menu ") {
    elems[i].style.zIndex='9999';
}
else{
    elems[i].style.zIndex='0';
}
}

