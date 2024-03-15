/* Show modal Cart */
let showCart = {
    init: function(){
        let iconBtnDesktop = document.querySelector("#openCart");
        let modalCart = document.querySelector(".modal-cart");
        iconBtnDesktop.addEventListener("click",function(){
            modalCart.classList.add("active")
        })
    }
}
showCart.init();

let displayShop = {
    shop: document.querySelector(".shop-products"),
    init: function(shopProducts){
        if(shopProducts === undefined){
            shopProducts = shop.productsList;
        }
        this.shop.innerHTML = "";
        for(let i = 0; i<shopProducts.length; i++){
            this.shop.appendChild(shopProducts[i]);
        }
    }
}
displayShop.init();

let displayShopCategory = {
    init: function(){
        let buttonsParent = document.querySelector(".shop-filters-category-parent");
        let numProducts = {};
        let categories = []
        shop.productsList.forEach(product =>{
            let categoryProduct = product.getAttribute("data-category");
            categories.push(categoryProduct)
        })
        categories.forEach((category)=>{
            numProducts[category] = (numProducts[category] || 0) + 1
        })
        

        for(let category in numProducts){
            let button = document.createElement("div");
            let pCategory = document.createElement("p");
            let quantity = numProducts[category];
            let quantityText = document.createElement("h5")
            pCategory.textContent = category;
            quantityText.textContent = quantity;
            buttonsParent.appendChild(button);
            button.appendChild(pCategory);
            button.appendChild(quantityText);
        }
    },
}
displayShopCategory.init();


let shopProductSearch = new Search(
    document.querySelector(".pre-header-search input"), document.getElementById("search-result")
);

let sortCategory = new SortCategory(
    document.querySelectorAll(".shop-filters-category-parent div")
)

let sortPrizeRange = new SortPrizeRange(
    document.querySelector(".shop-filters-price-range #min"),
    document.querySelector(".shop-filters-price-range #max")
)

