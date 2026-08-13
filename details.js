const getIdFromUrl = ()=>{
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}
const getDetails = async ()=>{
    const id = getIdFromUrl();
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const product = response.data;

    const imgesDetails = product.images.map((img)=>{
        return`
        <img src = "${img}" style="width:100px; height:100px" />
        `
    }).join("");

    const reviewsDetails = product.reviews.map((rev)=>{
        return `
        <div >
        <div class="d-flex justify-content-between">
        <p>${rev.reviewerName}</p>
        <span> * ${rev.rating}</span>
        </div>
        <p>
        ${rev.comment}
        </p>
        </div>
        `
    }).join("");

    const result =`
    <div class="row my-4">
    <div class = "col-md-6">
    <div class="d-flex flex-wrap mb-3">
    ${imgesDetails}
    </div>
    </div>
    <div>
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p>
    <span> Stock:</span>
    ${product.stock}
    </p>
    <h5>Reviews:</h5>
    <div>
    ${reviewsDetails}
    </div>
    </div>
    </div>`
        

    document.querySelector(".details").innerHTML=result
}
getDetails();