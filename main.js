let myinp =document.querySelector(".myinput");
let btn =document.querySelector(".get-button");
let mytxt =document.querySelector(".data-show")

btn.onclick=function(){
    getrepos()
}
function getrepos(){
    if(myinp.value == ""){
        mytxt.innerHTML="<span>Please Enter User Name </span"
    }else{
        fetch(`https://api.github.com/users/${myinp.value}/repos`)
        .then((result)=> result.json())
.then((repositories)=>{
mytxt.innerHTML=" "
repositories.map(repo => {

    let mydiv = document.createElement("div")
    let repoName =document.createTextNode(repo.name)
mydiv.appendChild(repoName)


let theURL=document.createElement("a")
let UrlTEXT= document.createTextNode('visit')
theURL.appendChild(UrlTEXT)
theURL.href=`https://github.com/${myinp.value}/${repo.name}`
theURL.setAttribute('target','_blank')
mydiv.appendChild(theURL)

let stars=document.createElement("span")
let starstext=document.createTextNode(`stars: ${repo.stargazers_count}`)
stars.appendChild(starstext)
mydiv.appendChild(stars)
mydiv.className='mybox'
mytxt.appendChild(mydiv)
});
}
)}
}




