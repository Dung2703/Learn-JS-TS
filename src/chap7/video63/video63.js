console.log("video63");

//fetch
const temp = fetch("http://localhost:8000/users");

temp
    .then(data => data.json())
    .then(d => console.log(d));
