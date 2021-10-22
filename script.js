document.querySelector("#myUser").addEventListener("click",getUserData);
document.querySelector("#myPost").addEventListener("click",getPostData);
document.querySelector("#myAlbum").addEventListener("click",getAlbumData);



function getUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((user)=>{
        let myUserOutput = "<br>";
        user.forEach(user => {
            myUserOutput += `
            <ul>
                <li>ID: ${user.id}</li>    
                <li>Name: ${user.name}</li>            
                <li>Email: ${user.email}</li>            
            </ul>
            `
        })
        document.querySelector("#myUserDiv").innerHTML = myUserOutput;
    })
    .catch((err=>{
        console.log(err);
    }))
}
function getPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((user)=>{
        let myPostOutput = "";
        user.forEach(post => {
            myPostOutput += `
            <div class="post">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </div>
            `
        })
        document.querySelector("#myUserDiv").innerHTML = myPostOutput;
    })
    .catch((err=>{
        console.log(err);
    }))
}
function getAlbumData(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res)=> res.json())
    .then((user)=>{
        let myAlbumOutput = "";
        user.forEach(album => {
            myAlbumOutput += `
            <div class="album">
                <li>ID: ${album.id}</li>
                <p>${album.title}</p>
            </div>
            `
        })
        document.querySelector("#myUserDiv").innerHTML = myAlbumOutput;
    })
    .catch((err=>{
        console.log(err);
    }))
}
