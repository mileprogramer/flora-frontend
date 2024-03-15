/* Showing one product */
function showProduct(name, prize, img, link){
    let domain = window.location.origin;
    window.location.href = `${domain}${link}`;
    let nameProduct = document.querySelector(".name");
    let prizeProduct = document.querySelector(".prize");
    let imgProduct = document.querySelector(".box-img-holder img");
    nameProduct.textContent = name;
    prizeProduct.textContent = prize;
    imgProduct.src = img;
}

