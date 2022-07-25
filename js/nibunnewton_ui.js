window.addEventListener("load", () => {
    var nnn = new Nibunnewton_ui(
        document.querySelector("#start"),
        document.querySelector("#clear"),
        document.querySelector("#plus"),
        document.querySelector("#slidebar"),
    );
    nnn.setNumber_ui(document.querySelectorAll("#kyoyou > button"));
})



class Nibunnewton_ui{
    constructor(start, clear, plus, slidedbar){
        this.start = start;
        this.clear = clear;
        this.plus = plus;
        this.slidedbar = slidedbar;
        this.nibunnewton = new nibunnewton();

        this.slidedbar.addEventListener("change", () => {
            this.bar = (slidedbar.value);
            console.log(this.bar);
        });

        this.clear.addEventListener("click", () =>{
            this.text1 = document.querySelector("#nibun");
            this.text1.innerText ="ループ回数:0\n近似値:0";
            this.text2 = document.querySelector("#newton")
            this.text2.innerText ="ループ回数:0\n近似値:0";
    
        })

        this.plus.addEventListener("click", () =>{
            
        })

        this.start.addEventListener("click", () => {
            let result1 =this.nibunnewton.nibun(this.bar,this.kyoyougosa);
            this.text1 = document.querySelector("#nibun");
            this.text1.innerText ="ループ回数:"+result1[1]+"\n近似値:"+result1[0];
            let result2 =this.nibunnewton.newton(this.bar,this.kyoyougosa);
            this.text2 = document.querySelector("#newton")
            this.text2.innerText ="ループ回数:"+result2[1]+"\n近似値:"+result2[0];
        })
    }
    setNumber_ui(btnArray){
        for(let btn of btnArray){
            btn.addEventListener("click", () => {
                if(btn.getAttribute("number")){
                    this.kyoyougosa = btn.getAttribute("number");
                    console.log(this.kyoyougosa);
                }
            })
        }
    }

    
}