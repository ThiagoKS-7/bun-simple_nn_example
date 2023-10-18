class FeedForward {
    private static outputs:number = 0;
    private static weights:Array<number> = []; 
    private static multiplication:Array<number> = [];
    private static sumRes: number = 0; 
    private static errorRes: number = 0;

    constructor(inputs:Array<number>=[], goal:number=0, epochs:number=1, activationFn:Function) {
        inputs.forEach(element => {
            weights.push(Math.random());
        });
        for(let epoch=0; i <=epochs; epoch++) {
            inputs.forEach((element, index) => {
                if(element <=0) element = 0.1;
                this.multiplication.push(element * weights[index]);
            });
        }
        this.sumRes = this.sumItems(this.multiplication);

        this.outputs = parseFloat(activationFn.run(this.sumRes)).toFixed(4);
    }
    private static gradientDescent(n:number=0.0): number {
        return n * (1-n);
    }
    
    private static sumItems(arr:Array=[]): number {
        return arr.reduce((a,b) => a+b);
    }
}