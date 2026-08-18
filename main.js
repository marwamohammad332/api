
const getCategories = async () => {
    const response = await axios.get(
        'https://dummyjson.com/products/category-list'
    );
    return response.data;
}

const displyCategories = async () => {
    const categories = await getCategories();
    const result = categories.map((category)=>{
        return `<li>
        <a class="dropdown-item text-capitalize" href="#category"
        onclick="getProducts('${category}')">
        ${category}
        </a>
        </li>`
    }).join("");
    document.querySelector(".dropdown-menu").innerHTML = result;
    document.getElementById("section-dropdown-menu").innerHTML = result;
}
displyCategories();

const getProducts = async (category) => {
    const response = await axios.get(
        `https://dummyjson.com/products/category/${category}?limit=10`
    );
    const products = response.data.products;
console.log(products);
    const result = products.map((product) => {

        return `<div class="col">
        <div class="card h-100" onclick="window.location.href='details.html?id=${product.id}'" 
        style="cursor: pointer;">
        <img src="${product.thumbnail}" class="card-img-top p-3"
        alt="${product.title}"/>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title flex-grow-1">${product.title}</h5>
            <p class="card-text">Price:$${product.price}</p>
            <p class="card-text">Rating:${product.rating}</p>
            <a onclick="event.stopPropagation()" href="#" class="btn btn-warning mt-auto">ADD TO CART</a>
        </div>
        </div>
        </div>`;
    }).join("");
    document.querySelector(".products .row").innerHTML = result;
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:2000,

  autoplay: {
    delay:2500,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});