class nibunnewton{
    nibun(syoki, kyoyougosa){
        const EPS = kyoyougosa;
        let a = 0.0;
        let d = syoki;
        let c,count=0;
        let b = Number(d);

        do{
            c = (a + b) / 2.0;
            count++;
            if(this.func_y(a)<0 && this.func_y(b)<0 && this.func_y(c)<0){
                c = "求められません";
                break;
            }else if( this.func_y(c) * this.func_y(a) < 0) b = c;
            else a = c;
        }while (Math.abs(a - b) > EPS);
        return [c, count];
    }

    func_y(x) {
        return Math.pow(x, 3.0) + x - 1.0;
    }

    newton(syoki, kyoyougosa){
        const EPS = kyoyougosa;
        let d = syoki;
        let b,count=0;
        let a = Number(d);

        while(1){
            if(this.func_y(a) > 0){
                b = a - this.func_y(a) / this.func_z(a);
                count++;
                if(Math.abs(a - b) < EPS) break;
                else a = b;
            }else{
                b = "求められません"
                break;
            } 
            
        }
        return [b,count];

    }

    func_z(x) {
        return 3.0 * Math.pow(x, 2.0) + 1.0;
    }
}