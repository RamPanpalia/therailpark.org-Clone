
var x=0;
function buttonFunction(){
    var bar1=document.querySelector('.bar1');
    var bar2=document.querySelector('.bar2');
    if(x==0){
        bar1.style.transform="rotate(45deg) translateY(7.5px)";
        bar2.style.transform="rotate(-45deg) translateY(-7.5px)";
        x=1;
    }
    else{
        bar1.style.transform="rotate(0deg)";
        bar2.style.transform="rotate(0deg)";
        x=0;
    }
}
document.querySelector('.sidebutton').addEventListener("click",buttonFunction);
document.querySelector('.arrowl').addEventListener("click",function(){
    var a2=document.querySelector('.a2');
    var a1=document.querySelector('.a1');
    if(a2.style.display=="flex"){
        a2.style.display="none";
        a1.style.display="flex";
    }
    else{
        a2.style.display="flex";
        a1.style.display="none";
    }
});

document.querySelector('.arrowr').addEventListener("click",function(){
    var a2=document.querySelector('.a2');
    var a1=document.querySelector('.a1');
    if(a2.style.display=="flex"){
        a2.style.display="none";
        a1.style.display="flex";
    }
    else{
        a2.style.display="flex";
        a1.style.display="none";
    }
});

document.querySelector('.inputt').addEventListener("focus",function(){
    document.querySelector('.inputt').style.border="none";
});

var flag=0;

document.querySelector('.sidebutton').addEventListener("click",function(){
    if(flag==0){
        // document.querySelector('.NavOverlay').style.width="100%";
        // document.querySelector('.NavOverlay').style.transform="translateX(0)";
        document.querySelector('.mainbody').style.display="none";
        document.querySelector('body').style.background="black";
        document.querySelector('.navbar').style.background="black";
        document.querySelector('.navbar').style.color="white";
        document.querySelector('.NavOverlay').style.display="block";
        document.querySelector('.donatebutton').style.background="#04C75C";
        document.querySelector('.bar1').style.background="#04C75C";
        document.querySelector('.bar2').style.background="#04C75C";
        document.querySelector('.donatebutton').style.color="white";
        document.querySelector('.donatebutton').style.border="#04C75C";
        document.querySelector('.hideele').style.display="none";
        document.querySelector('.hideele1').style.display="none";
        document.querySelector('.hideele2').style.display="none";
        document.querySelector('.searchbar').style.display="block";
        flag=1;
    }
    else{
        // document.querySelector('.NavOverlay').style.width="0%";
        // document.querySelector('.NavOverlay').style.transform="translateX(-1000px)";
        document.querySelector('.mainbody').style.display="block";
        document.querySelector('body').style.background="#faf9f7";
        document.querySelector('.navbar').style.background="#faf9f7";
        document.querySelector('.navbar').style.color="black";
        document.querySelector('.NavOverlay').style.display="none";
        document.querySelector('.donatebutton').style.background="white";
        document.querySelector('.bar1').style.background="black";
        document.querySelector('.bar2').style.background="black";
        document.querySelector('.donatebutton').style.color="black";
        document.querySelector('.donatebutton').style.border="1px solid black";
        document.querySelector('.hideele').style.display="block";
        document.querySelector('.hideele1').style.display="block";
        document.querySelector('.hideele2').style.display="block";
        document.querySelector('.searchbar').style.display="none";
        flag=0;
    }
});