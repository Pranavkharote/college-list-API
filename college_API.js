let url = "http://universities.hipolabs.com/search?name=";

let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener('click', async () => {
    let country = input.value;
    console.log(country);
    let collArr = await getColleges(country);
    show(collArr);
    input.value = "";
})

function show(collArr){
    let ul = document.querySelector("ul");
    ul.innerText = "";
    for(col of collArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
        
    }
}

// let country = "india";

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }catch(err){ 
        console.log("error",err); 
        return [];
    }
    
}
