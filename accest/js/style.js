
//setTimeOUt of Box chat
let menu = document.querySelector('.box_chat');
let children = menu.children;
// for (let index = 0; index < children.length; index++) {
//     const element = children[index];
//     setTimeout(() => {
//         element.classList.add("moveup")
//     }, index * 1000);
// }

var ck=false;

var list=document.getElementsByClassName('teamworkslide');
var onetime=document.querySelector(".header_reason div");
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll<=2260){
        list[0].style.opacity=1
    }
    if(winScroll<=2260 && winScroll>=2216 ){
   list[0].classList.add('trans');
    }
    if(winScroll>=1835 && winScroll<=2260){
        list[0].classList.add('display')
}
else{
    list[0].classList.remove('trans')
    list[0].classList.remove('display')
}
if(winScroll>=2260 && winScroll<=3040){
    list[0].style.opacity=0;
    list[1].classList.add('display')
    list[1].classList.add('trans')
    for (let index = 0; index < children.length; index++) {
            const element = children[index];
            setTimeout(() => {
                element.classList.add("moveup")
            }, index * 1000);
        }
}
else{
list[1].classList.remove('display')
list[1].classList.remove('trans')
for (let index = 0; index < children.length; index++) {
    const element = children[index];
        element.classList.remove("moveup")

}
}
if(winScroll>=3040&& winScroll<=3800){
    list[2].classList.add('display')
    list[2].classList.add('trans')
}
else{
list[2].classList.remove('display')
list[2].classList.remove('trans')}
if(winScroll>=3800){
    list[3].classList.add('display')
    var leadava=document.querySelector(".lead_avatar img");
    leadava.classList.add("leadscale")
    list[3].classList.add('trans')
}
else{
list[3].classList.remove('display')
var leadava=document.querySelector(".lead_avatar img");
leadava.classList.remove("leadscale")
}
if(winScroll>=4280){
    list[3].classList.add("stay")
}
else{
    list[3].classList.remove("stay")
}

if(winScroll>=4617 && winScroll <=5240){
    onetime.classList.add("after")
}
}

var ct =1;

var set1= setInterval(() => {

    document.getElementById("mem"+ct).checked=true;
    ct++
    if(ct>3){
        ct=1;
    }
}, 5000);
let lb=document.getElementsByClassName("finish");
lb[0].onclick=function name(params) {
    clearInterval(set1)
}
lb[1].onclick=function name(params) {
    clearInterval(set1)
}
lb[2].onclick=function name(params) {
    clearInterval(set1)
}
// show hide code
 let show=document.querySelector(".show")
 let hide=document.querySelector(".hide")
const input = document.querySelector('.password');

input.addEventListener('input', updateValue);

function updateValue(e) {
     hide.style.display="block";    
     if(input.value==""){
        hide.style.display="none"; 
        show.style.display="none"; 
     }
}
hide.onclick=function showpass(params) {
         show.style.display="block";   
        hide.style.display="none"; 
        input.type="text"   
}
show.onclick=function hidepass(params) {
    show.style.display="none";    
    hide.style.display="block"; 
    input.type="password"   
}
// phone res icon menu
function myFunction(x) {
    x.classList.toggle("change");
  console.log(document.querySelector('.menuicon').classList.contains('change'));

    if(document.querySelector('.menuicon').classList.contains('change')===true){
        document.querySelector('.headertitle_phone.res-phone').style.display="block";
        document.querySelector('.headertitle_nav.res-phone').style.display="block";
        document.querySelector('.main_logo').style.cssText=`
        position: fixed;
        left: 37px;
        `;
        document.querySelector('.menuicon').style.cssText=`
        position: fixed;
        top: 50px;
        right: 34px;
        `;
        document.querySelector('.res-phone .text_view.naviglheader').style.cssText=`
        display: unset;
        position: absolute;
        left: 0;
        top: 110px;
        font-size: 20px;
        `;
        document.querySelector(".header_nav_text").style.cssText=`
        animation: unset;
        margin: 25px 5%;
        `;
        document.querySelector(".res-phone.headertitle_phone").style.cssText=`
        position: absolute;
        display: block;
        bottom: 0;
        margin: 5%;
        width: 100%;
        `;
        document.querySelector(".res-phone.headertitle_phone > a").style.cssText=`
        font-size: 29px;
        margin: 0;
        `;
        document.querySelector(".res-phone.headertitle_phone > span").style.cssText=`
        font-size: 26px;
        margin: 0 5px;
        `;
        document.querySelector(".res-phone.headertitle_phone  .login").style.cssText=`
        margin: unset;
        `;
        document.querySelector(".res-phone.headertitle_phone .login > a").style.cssText=`
        font-size: 26px;
        `;
    }
    else{
        document.querySelector('.headertitle_phone.res-phone').style.display="";
        document.querySelector('.headertitle_nav.res-phone').style.display="";
        document.querySelector('.main_logo').style.cssText=`
        `;
        document.querySelector('.menuicon').style.cssText=`
        `;
        document.querySelector('.res-phone .text_view.naviglheader').style.cssText=`
        `;
        document.querySelector(".header_nav_text").style.cssText=`
        `;
        document.querySelector(".res-phone.headertitle_phone").style.cssText=`
        `;
        document.querySelector(".res-phone.headertitle_phone > a").style.cssText=`

        `;
        document.querySelector(".res-phone.headertitle_phone > span").style.cssText=`

        `;
        document.querySelector(".res-phone.headertitle_phone  .login").style.cssText=`

        `;
        document.querySelector(".res-phone.headertitle_phone .login > a").style.cssText=`

        `;
    
    }
  }
