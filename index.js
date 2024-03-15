let products = {data:[{id:1,img:"https://i.pinimg.com/originals/c7/34/28/c734281875174db837c5c68c8caadeb0.jpg",name:"Sofa",price:1000,count:1},
                    {id:2,img:"https://m.media-amazon.com/images/I/41Jv7hj7iUL._AC_UF894,1000_QL80_.jpg",name:"Sofa",price:280,count:1},
                    {id:3,img:"https://ii1.pepperfry.com/media/catalog/product/f/y/494x544/fyn-velvet-lounge-chair-in-grey-colour-fyn-velvet-lounge-chair-in-grey-colour-xkrep1.jpg",name:"Sofa",price:2500,count:1},
                    {id:4,img:"https://i5.walmartimages.com/seo/Velvet-Accent-Chair-Mid-Century-Modern-Fabric-Arm-Chair-Wingback-Button-Tufted-Comfy-Armchair-Gold-Legs-Upholstered-Sofa-Living-Room-Bedroom-Office-D_b49478f9-8982-4523-9d39-8ff22b0794ed.fb2d25d56f20d2a297c39ec21174acdd.jpeg",name:"Sofa",price:2000,count:1},
                    {id:5,img:"https://m.media-amazon.com/images/I/410u6mLot5L._AC_.jpg",name:"sofa",price:2600,count:1},
                    {id:6,img:"https://urban-den.in/wp-content/uploads/2022/06/silla-de-terciopelo-pary-blue5-1.jpg",name:"Sofa",price:5000,count:1},
                    {id:7,img:"https://i.pinimg.com/474x/9f/b0/9f/9fb09f6c843e92884cbebf555cdc4865.jpg",name:"Sofa",price:6000,count:1},
                    {id:8,img:"https://ii1.pepperfry.com/media/catalog/product/c/h/494x544/charming-wing-chair-in-beige-colour-by-dreamzz-furniture-charming-wing-chair-in-beige-colour-by-drea-zchj05.jpg",name:"Sofa",price:9000,count:1},
                    {id:9,img:"https://ii1.pepperfry.com/media/catalog/product/l/u/494x544/ludovic-velvet-slipper-chair-in-aqua-colour-ludovic-velvet-slipper-chair-in-aqua-colour-ws1h95.jpg",name:"Sofa",price:1000,count:1}]}


let itemsContainer = document.getElementById("itemsContainer");

let cartItems = document.getElementById("cartItems");

let average = document.getElementById("average");

let total = document.getElementById("total");

let sortEl = document.getElementById("sortEl");

let clearEl = document.getElementById("clearEl");

let cartArray = [];

sortEl.addEventListener("click",function(){
    cartArray.sort((a, b) => a.price - b.price);

    addToCart()
})

clearEl.addEventListener("click",function(){
    cartArray = [];

    addToCart()

})

function deleteItem(item){
    let foundIndex = cartArray.findIndex(function(each){
        if (item.id === each.id) {
            return true;
        } else {
            return false;
        }
    })

    cartArray.splice(foundIndex,1)

    addToCart()
}



function addToCart(){
    cartItems.textContent = "";

    let totalValue = 0

    let averageValue = 0

    for(item of cartArray){
    
    totalValue = totalValue + (item.price*item.count)
    
    let eachItem = document.createElement("div");

    let itemImage = document.createElement("img")
    itemImage.setAttribute("src",item.img)
    itemImage.classList.add("image")
    eachItem.appendChild(itemImage)

    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container")

    let namePriceContainer = document.createElement("div");
    
    let itemName = document.createElement("h2");
    itemName.classList.add("item-name")
    itemName.textContent = item.name;
    namePriceContainer.appendChild(itemName);

    let itemPrice = document.createElement("p");
    itemPrice.textContent = "Rs."+ item.price
    namePriceContainer.appendChild(itemPrice)

    detailsContainer.appendChild(namePriceContainer);

    let countEl = document.createElement("p");
    countEl.classList.add("count")
    countEl.textContent = "count: " +item.count;

    detailsContainer.appendChild(countEl)

    let icon = document.createElement("i");
    icon.setAttribute("class","fa-solid fa-xmark")
    icon.classList.add("icons")
    icon.addEventListener("click",function(){
        deleteItem(item)
    })

    detailsContainer.appendChild(icon)

    eachItem.append(detailsContainer)

    cartItems.appendChild(eachItem)

    }

    if(totalValue){
        averageValue = totalValue / cartArray.length
    }

    average.textContent = averageValue;
    total.textContent = totalValue

}

function pushToArray(item){
    let found = cartArray.findIndex(function(each){
        if (item.id === each.id) {
            return true;
        } else {
            return false;
        }
    })
    if(found === -1){
        cartArray.push(item);
    }else{
        item.count++
    }
    addToCart();
}


function createProducts(item){
    let eachItem = document.createElement("div");

    let itemImage = document.createElement("img")
    itemImage.setAttribute("src",item.img)
    itemImage.classList.add("image")
    eachItem.appendChild(itemImage)

    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container")

    let namePriceContainer = document.createElement("div");
    
    let itemName = document.createElement("h2");
    itemName.classList.add("item-name")
    itemName.textContent = item.name;
    namePriceContainer.appendChild(itemName);

    let itemPrice = document.createElement("p");
    itemPrice.textContent = "Rs."+item.price
    namePriceContainer.appendChild(itemPrice)

    detailsContainer.appendChild(namePriceContainer);

    let icon = document.createElement("i");
    icon.setAttribute("class","fa-solid fa-cart-shopping")
    icon.classList.add("icons")
    icon.addEventListener("click",function(){
        pushToArray(item)
    })
    detailsContainer.appendChild(icon)

    eachItem.append(detailsContainer)

    itemsContainer.appendChild(eachItem)
}


for(let i of products.data){
    createProducts(i)
}

