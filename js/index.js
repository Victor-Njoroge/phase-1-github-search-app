let userName= " ";
const getUserName=()=>{
let button=document.querySelector(".btn")
button.addEventListener("click", (e)=>{
    e.preventDefault()
      userName =document.querySelector("input").value;
     console.log(userName)
     fetchData(userName);
     
})
    
}
getUserName();

const fetchData=(userName)=>{
   
    fetch(`https://api.github.com/users/${userName}`,{
        headers:{
            "Accept":"application/vnd.github.v3+json"
        }
    })
      .then((resp) =>{
        resp.json()
        .then((data) =>{
            display(data)
        })
      })
     
}

const repos=(userName)=>{
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((resp) =>{
        resp.json()
        .then((repos) =>{
            display(repos)
        })
      })

}



const display=(data,)=>{
    console.log(data)
    const details=document.createElement("div")
    details.innerHTML=`
    <p class="name">${data.login}</p>
    `

    const avatar=document.createElement("div")
    avatar.className="avatar"
    avatar.innerHTML=`
    <img src="${data.avatar_url}"/>
    `
    const info=document.createElement("div");
    info.className="box"
    info.innerHTML=`
    <img src="${data.avatar_url}"/>
    <button class="btn2">follow</button>
    <h1>${data.login}</h1>
    <p><i class="fas fa-user"></i> followers <span>${data.followers}</span> ${"    "}  ${"    "} following   <span>${data.following}</span> </p>

     `



document.querySelector(".box-container").appendChild(info)
document.querySelector(".header").appendChild(avatar)
document.querySelector(".logo").appendChild(details)
}
