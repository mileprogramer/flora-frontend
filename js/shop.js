class Product{
    constructor(name, prize, img, category){
        this.name = name;
        this.prize = prize;
        this.img = img;
        this.category = category;
    }
    makeProduct(){
        let product = document.createElement("div");
        product.classList.add("product")
        product.setAttribute('data-category', this.category);
        product.innerHTML = `
            <a href="/product.html/${this.link()}" class="parent">
                <div class="img-holder"><img src="${this.img}" alt="" loading="lazy" width="290" height="300"></div>
                <p class="name">${this.name}</p>
                <p class="prize">${this.prize}$</p>
            </a>
            <a class="add_to_cart btn-white" href="#">Buy</a>
        `;
        let btn = product.querySelector(".add_to_cart");
        let parent = product.querySelector(".parent");
        let name = this.name;
        let prize = this.prize;
        let img = this.img;
        btn.addEventListener("click",function(e){
            e.preventDefault();
            cart.showModal(name, prize, img)
        })
        parent.addEventListener("click",function(e){
            e.preventDefault();
            let link = this.href;
            showProduct(name, prize, img, link)
        })
        return product;
    }
    link(){
        let link = this.name;
        link = link.toLowerCase();
        if(link.indexOf(" ")){
            link = link.replace(" ", "-")
        }
        return link
    }
}

let shop = {
    productsList : [],
    init: function(){
        products.forEach((product)=>{
            let newProduct = new Product(
                product.name,
                product.prize,
                product.img,
                product.category
            )
            this.productsList.push(newProduct.makeProduct());
        })
    }
}
shop.init();
