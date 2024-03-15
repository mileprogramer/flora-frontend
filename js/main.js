/* Show modal popup under construnction */
let modalConstruction = {
    modal: document.querySelector(".modal-making"),
    init: function(){
        modalConstruction.modal.style.display = "block";
        let close = modalConstruction.modal.querySelector("img");
        close.addEventListener("click", modalConstruction.close);
    },
    close: function(){
        modalConstruction.modal.style.display = "none";
    }
}
setTimeout(modalConstruction.init, 3000);
/* Show modal Cart */
let showCart = {
    init: function(){
        let iconBtnDesktop = document.querySelector("#openCart");
        console.log(iconBtnDesktop)
        let modalCart = document.querySelector(".modal-cart");
        console.log(modalCart)
        iconBtnDesktop.addEventListener("click",function(){
            console.log("radi")
            modalCart.classList.add("active")
        })
    }
}
showCart.init();
let featuredProducts = {
    barBox: document.querySelectorAll(".featured-products-content-bar-box"),
    listedProducts: document.querySelector(".featured-products-content-products-table-products"),
    init: function(){
        for(let i = 0; i<shop.productsList.length; i++){
            let product = shop.productsList[i];
            if (product.getAttribute("data-category") === "flowers") {
                this.listedProducts.appendChild(product);
            }
        }
        
        for(let i = 0;i<this.barBox.length; i++){
            this.barBox[i].addEventListener("click", function(){
                let p = this.querySelector("p");
                let pText = p.textContent;
                let pCategory = pText.toLowerCase();
                featuredProducts.listedProducts.innerHTML ="";
                featuredProducts.changeCategory(pCategory);
                featuredProducts.changeText(pText);
                featuredProducts.removeText();
                p.classList.add("activeText");
                
            })
        }
    },
    removeText: function(){
        let barBoxText = document.querySelectorAll(".featured-products-content-bar-box p");
        for(let i = 0; i<barBoxText.length;i++){
            barBoxText[i].classList.remove("activeText");
        }
    },
    changeText: function(text){
        let categoryName = document.querySelector(".featured-products-content-products h3");
        categoryName.textContent = text;
    },
    changeCategory(category){
        for(let i = 0; i<shop.productsList.length; i++){
            let product = shop.productsList[i];
            if (product.getAttribute("data-category") === `${category}`) {
                this.listedProducts.appendChild(product);
            }
        }
        
    }
}
featuredProducts.init();

/* Img scroll effect */
let imgScroll ={
    img: document.querySelector(".custom-bouqet-img-holder img"),
}
let newScrollEffect = new Scroll(imgScroll.img, 10, 5, 18, 2);
window.addEventListener("wheel",function(e){
    newScrollEffect.effect(e);
})

/* Faq */
let faq = {
    accordian1: new Faq("How to order your flowers or custom bouqet", `You can buy or order our products on our <a href="shop.html">here</a>`),
    accordian2: new Faq("What payment methods do you accept?", `We accept various payment methods, including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can choose the preferred payment method during the checkout process on our website.`),
    accordian3: new Faq("What is your return policy?", `Our return policy allows you to return the purchased items within 30 days of delivery for a refund or exchange. The items must be in their original condition and packaging. Please contact our customer support team for further assistance and instructions on initiating a return.`),
    accordian4: new Faq("What is your delivery policy for flower orders?", `We offer delivery services for flower orders. Once you place an order, our team will carefully prepare the arrangements and schedule a delivery to the specified address. Delivery fees may vary based on the location and distance. Please ensure that the delivery address is accurate and provide any specific delivery instructions if needed.`),
    faqTable: document.querySelector(".faq-table"),
    accordians: [],
    init: function(){
        this.accordians.push(this.accordian1,this.accordian2,this.accordian3,this.accordian4);
        for(let i = 0; i<this.accordians.length; i++){
            this.faqTable.appendChild(this.accordians[i].make());
        }
    }
}
faq.init();

/* testemonial */
let testemonials = {
    testemonialsContet:[
        {
            name: `"Loren Trump"`,
            text: "The flower shop beautifully prepared an exquisite array of flowers for the wedding, creating a stunning ambiance with their vibrant colors and enchanting fragrances, leaving a lasting impression of elegance and romance.",
            heading: "They make mine weeding beatiful",
            img: "img/index/brideWithFlowers.webp"
        },
        {
            name: `"Jany Clark"`,
            text: "The floral boutique showcased an impeccable selection of blooms for the wedding ceremony, showcasing artistry in their intricate arrangements. The fragrant petals and vibrant hues added an ethereal touch, creating an enchanting atmosphere that captured the essence of love and celebration.",
            heading: "Flora mark my life",
            img: "img/index/brideWithFlowersSecond.webp"
        },
        {
            name: `"Mark Gordon"`,
            text: "The Flora team has been my savior whenever I find myself in the doghouse. Their expert advice and exquisite flower arrangements have helped me mend countless arguments with my girlfriend. Their assistance and the beautiful bouquets have worked like magic, melting her heart and bringing us closer every time. I am forever grateful to the flora",
            heading: "Flora workers saved my life",
            img: "img/index/apologes.webp"
        },
        {
            name: `"Mike Daves"`,
            text: "The moment I step inside, I know that Ema(my girlfriend) will be suprised. Each time I present my girlfriend with a bouquet from Flora, her face lights up with joy and her heart fills with warmth. Flora has become an integral part of our journey, creating cherished memories and strengthening our bond through the beauty of flowers.",
            heading: "Memorable Moments",
            img: "img/index/suprise.webp"
        }
    ],
    init: function(){
        let buttonLeft = document.querySelector(".testemonials-content-left");
        let buttonRight = document.querySelector(".testemonials-content-right");
        let img = document.querySelector(".testemonials-img-holder img");
        let heading = document.querySelector(".testemonials-content-heading");
        let text = document.querySelector(".testemonials-content-text");
        let name = document.querySelector(".testemonials-content-name")

        let positon = 0;
        buttonRight.addEventListener("click",function(){
            positon++;
            if(positon >= testemonials.testemonialsContet.length){
                positon = 0;
            }
            img.setAttribute("src", `${testemonials.testemonialsContet[positon].img}`);
            heading.textContent = testemonials.testemonialsContet[positon].heading;
            text.textContent = testemonials.testemonialsContet[positon].text;
            name.textContent = testemonials.testemonialsContet[positon].name;
        })
        buttonLeft.addEventListener("click",function(){
            positon--;
            if(positon <= 0){
                positon = testemonials.testemonialsContet.length-1;
            }
            img.setAttribute("src", `${testemonials.testemonialsContet[positon].img}`);
            heading.textContent = testemonials.testemonialsContet[positon].heading;
            text.textContent = testemonials.testemonialsContet[positon].text;
            name.textContent = testemonials.testemonialsContet[positon].name;
        })
    }
}
testemonials.init()


