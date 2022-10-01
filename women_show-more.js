async function filterData()
{
    try
    {
        let query = document.getElementById("query").value;
        //let input = document.getElementById("input").value;

        let res =  await fetch(`https://jiyakiapi.herokuapp.com/data?q=${query}`)

        let data = await res.json();

        appendData(data.products_m)

        console.log(data.products_m);
    }
    
    catch(err)
    {
        console.log("Err:",err);
    }
}
getMovie();

function appendData(data)
{
    if(data === undefined)
    {
        return false;
    }

    let container = document.getElementById("container2");

    container.innerHTML = null;

    data.forEach(function(el){

        let div = document.createElement("div");

        let name = document.createElement("h3");
        name.innerText = el.name;

        let desc = document.createElement("p");
        desc.innerText = el.desc;

        let img = document.createElement("img");
        img.src = el.link;

        let price = document.createElement("h4");
        price.innerText = "Rs."+el.price;
        
        div.append(img,name,desc,price);
        container.append(div);

   });
}

let id;

function debounce(func, delay)
{
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function (){
        func();
    }, delay);
}

