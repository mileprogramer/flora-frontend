class Search{
    constructor(input, searchResult){
        this.input = input;
        this.searchResult = searchResult;
        let productsInfo = [];
        for(let i = 0; i<shop.productsList.length; i++){
            productsInfo.push({
                name: shop.productsList[i].querySelector(".name").textContent,
                img: shop.productsList[i].querySelector("img").src,
                category: shop.productsList[i].getAttribute("data-category")
            })
        }
        input.addEventListener("input", this.find.bind(this, productsInfo));
    }
    find(productsInfo){
        let inputValue = this.input.value;
        let searchResult = this.searchResult;
        if(inputValue.length === 0){
            searchResult.style.display = "none";
            searchResult.innerHTML = "";
        }else{
            searchResult.innerHTML = "";
            let filteredProducts = productsInfo.filter(function(product){
                return product.name.toLowerCase().includes(inputValue);
            })
            if(filteredProducts.length === 0){
                searchResult.innerHTML = `<p class="mistake">We could not find what you have been looking for, check did you type right</p>`
                searchResult.style.display ="flex"
            }
            filteredProducts.forEach((product)=>{
                let divResult = document.createElement("div");
                divResult.innerHTML = `
                    <p>${product.name}</p>
                    <img src="${product.img}">
                `;
                searchResult.style.display = "flex";
                searchResult.appendChild(divResult);
            })
        }
    }
}
