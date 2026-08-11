const getProducts=async()=>{
    const response = await axios.get(
        "https://dummyjson.com/products?limit=10"
    );
    
return response.data.products
}

const displyProducts = async()=>{
    const products = await getProducts();
    console.log(products);
    const result = products.map((product)=>{

        return `<div class="col">
        <div class="card h-100">
        <img src="${product.thumbnail}" class="card-img-top p-3"
        alt="${product.title}"/>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title flex-grow-1">${product.title}</h5>
            <p class="card-text">Price:$${product.price}</p>
            <p class="card-text">Rating:${product.rating}</p>
            <a href="#" class="btn btn-warning mt-auto">ADD TO CART</a>
        </div>
        </div>
        </div>`;
    }).join("");
    document.querySelector(".products .row").innerHTML = result;
    }
displyProducts();