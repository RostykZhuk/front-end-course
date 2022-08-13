let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
            // destructuring data
            
        let{id,name,price,desc,img} = x;
        let search = basket.find((x) => x.id === id) || [];
        // can also write x.id, x.name, x.price, x.desc, x.img instead of destructuring
        return`
        <div id="product-id-${id} "class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick = "decrement(${id})" class="bi bi-dash"></i>
                    <div id = ${id} class="quantity">${search.item===undefined?0:search.item}</div>
                    <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};

generateShop();

let increment = (id) =>{
    let selectedItem = id;
    let serch = basket.find((x)=>{
        return x.id === selectedItem.id;
    });
    
    if(serch===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }
    else{
        serch.item+=1;
    }
    
    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem('data',JSON.stringify(basket));
};


let decrement = (id) =>{
    let selectedItem = id;
    let serch = basket.find((x)=>{
        return x.id === selectedItem.id;
    });
    if(serch===undefined){
        return;
    }

    else if(serch.item===0){
        return;
    }
    else{
        serch.item-=1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>{
        return x.item!==0;
    });
    // console.log(basket);
    localStorage.setItem('data',JSON.stringify(basket));
};


let update = (id) =>{
    let search= basket.find((x)=>{
        return x.id === id;
    }).item;
    // we can also write searh.item instead of adding item at the end of search function
    document.getElementById(id).innerHTML = search;
    calculation();
};
// adding all items together
let calculation = () =>{
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x)=>{
        return x.item;
    }).reduce((x,y)=>{
        return x+y;
    },0);
};
calculation();













