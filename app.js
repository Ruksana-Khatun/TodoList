// let div=document.querySelector("div");
// let ul=document.querySelector("ul")
// let list=document.querySelectorAll("li")
// // console.log(li);
// // console.log(ul)
// // console.log(div);
// div.addEventListener("click",function(event){
//     event.stopPropagation()
//     console.log("div was clciked");
// })
// ul.addEventListener("click",function(){
//     console.log("ul was clciked");
// })


// for(li of list){
//        li.addEventListener("click",function(event){
//         event.stopPropagation()
//         console.log("li was clicked");
//     })
// }


let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inpu = document.querySelector("input")

btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerText=inpu.value;
    let dltbtn=document.createElement("button")
    dltbtn.innerText="delete";
    dltbtn.classList.add("delete")
    item.appendChild(dltbtn)
    ul.appendChild(item)
    inpu.value=""
});

let dltbtns=document.querySelectorAll(".delete");
for(dltbtn of dltbtns){
   dltbtn.addEventListener("click",function(){
    console.log("element deletd");
    let par=this.parentElement;
    console.log(par);
    par.remove()
   })
}
// ul.addEventListener("click",function(){
//     console.log("ul was clicked");
// })
// inpu.addEventListener("click",function(){
//     console.log("input was clicked");
// })
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove()
        console.log("deleted");
    }

})