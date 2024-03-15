let cart = {
  overlay: document.getElementById("overlay"),
  closeModalBtn: document.getElementById("modalCloseBtn"),
  continueShopBtn: document.getElementById("continueShopModal"),


  showModal: function(name, prize,img){
    let modal = document.querySelector(".modal-cart");
    if(modal.classList.contains("active")){
        modal.classList.remove("active");
        this.overlay.classList.remove("active")
    }else if(modal.classList.contains !== "active"){
        modal.classList.add("active");
        this.overlay.classList.add("active")
    }
    let addedToCart = modal.querySelector(".addedToCart");
    addedToCart.innerHTML += `
        <div class="addedToCart-parent">
            <img src="${img}" alt="">
            <p>${name}</p>
            <p class="prize">${prize}$</p>
            <div class="quantity">
                <button class="quantity-minus">-</button>
                <p data-counter = "1">1</p>
                <button class="quantity-plus">+</button>
            </div>
            <button class="remove">x</button>
        </div>
    `;
    /* Dodavanje količine proizvoda, pozivanje funckije*/
    let plusBtn = addedToCart.getElementsByClassName("quantity-plus");
    for(let i = 0;i<plusBtn.length; i++){
        plusBtn[i].addEventListener("click", this.increaseQuantity)
    }
    /* Oduzimanje vrednosti pozivanje funckije */
    let minusBtn = addedToCart.getElementsByClassName("quantity-minus");
    for(let i = 0;i<minusBtn.length; i++){
        minusBtn[i].addEventListener("click", this.deacreasingQuantity);
    }
    /* Uklanjanje elementa pozivanje funckije */
    let removeBtn = addedToCart.getElementsByClassName("remove");
    for(let i = 0; i<removeBtn.length; i++){
        removeBtn[i].addEventListener("click", this.removeProduct)
    }
    cart.total();
  },
  /* Dodavanje količine funkcija */
  increaseQuantity: function(){
    let p = this.parentElement.querySelector("p");
    let counter = +p.getAttribute("data-counter");
    counter++;
    p.textContent = counter;
    p.setAttribute("data-counter",counter);
    cart.total();
  },
  /* Oduzimanje vrednosti funckija  */
  deacreasingQuantity: function(){
    let p = this.parentElement.querySelector("p");
    let counter = +p.getAttribute("data-counter");
    counter <= 1 ? counter = 1: counter--;
    p.textContent = counter;
    p.setAttribute("data-counter",counter);
    cart.total();
  },
  /* Uklanjanje proizvoda */
  removeProduct: function(){
    this.parentElement.remove();
    cart.total()
  },
  /* Računanje ukupne vrednosti korpe */
  total: function(){
    let prize = document.querySelector(".modal-cart-total span");
    let addedProduct = document.querySelectorAll(".addedToCart .addedToCart-parent");
    let totalPrize = 0;
    addedProduct.forEach((product) =>{
        let prizeProduct = product.querySelector(".prize").textContent;
        prizeProduct = +prizeProduct.substring(0, prizeProduct.length-1);
        let quantity = +product.querySelector(".quantity p").textContent;
        let totalProductPrize = prizeProduct*quantity;
        totalPrize += totalProductPrize
    });
    prize.textContent = totalPrize+"$"
  },
  /* Zatvaranje modal-a */
  closeModal: function(){
    let modal = document.querySelector(".modal-cart");
    this.overlay.addEventListener("click",close);
    this.closeModalBtn.addEventListener("click",close);
    this.continueShopBtn.addEventListener("click",close);
    function close(){
        modal.classList.remove("active");
        cart.overlay.classList.remove("active");
    }
  }
}
cart.closeModal();
