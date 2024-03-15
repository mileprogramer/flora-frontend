class SortCategory{
    constructor(buttonCategory){
        this.buttonCategory = buttonCategory;
        buttonCategory.forEach(button =>{
            button.addEventListener("click", this.showCategory)
        })
    }
    
    showCategory(){
        let category = this.querySelector("p").textContent;
        let sortedProducts = shop.productsList;
        sortedProducts = sortedProducts.filter(product =>{
            let productCategory = product.getAttribute("data-category")
            return productCategory === category;
        })
        return displayShop.init(sortedProducts);
    }
}

class SortPrizeRange{
    constructor(prizeRangeMin, prizeRangeMax){
        self = this;
        this.prizeRangeMin = prizeRangeMin;
        this.prizeRangeMax = prizeRangeMax;
        prizeRangeMin.addEventListener("input", this.sortRange);
        prizeRangeMax.addEventListener("input", this.sortRange);
    }
    sortRange(){
        /* Sellecting value of inputs type range */
        let minValue = self.prizeRangeMin.value;
        let maxValue = self.prizeRangeMax.value;
        /* Putting min and max value in input */ 
        let inputMin = document.querySelector(".shop-filters-price-range-inputs-input-min input");
        let inputMax = document.querySelector(".shop-filters-price-range-inputs-input-max input");
        inputMin.value = minValue;
        inputMax.value = maxValue;
        /* sorting products */
        let productsList = document.querySelectorAll(".shop-products .product")
        let sortedProducts = [];
        productsList.forEach(product => {
            let prize = product.querySelector(".prize").textContent;
            prize = +prize.slice(0, prize.length-1);
            if(prize >= minValue && prize <= maxValue){
                sortedProducts.push(product);
            }
        })
        displayShop.init(sortedProducts)
    }
}