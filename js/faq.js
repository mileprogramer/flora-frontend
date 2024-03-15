class Faq{
    constructor(text,answer){
        this.text = text;
        this.answer = answer;
        this.make()
    }
    make(){
        let accordian = document.createElement("div")
        accordian.classList.add("faq-table-accordian")
        accordian.innerHTML = `
            <div class="faq-table-accordian-body">
                <p class="faq-table-accordian-body-sign">+</p>
                <p class="faq-table-accordian-body-question">${this.text}</p>
            </div>
            <div class="faq-table-accordian-body-answer">
                <p>${this.answer}</p>
            </div>
        `;
        accordian.addEventListener("click",function(){
            let answer = this.querySelector(".faq-table-accordian-body-answer");
            let sign = this.querySelector(".faq-table-accordian-body-sign");
            if(answer.style.height === ""){
                answer.style.height =   answer.scrollHeight + "px";
                sign.innerHTML = "-";
            }else{
                sign.innerHTML = "+";
                answer.style.height = "";
            }
        });
        return accordian;
        
    }
}