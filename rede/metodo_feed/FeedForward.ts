import Activation from "../ativacoes/Activation";

export default class FeedForward {
    private outputs:number = 0;
    private weights:Array<number> = []; 
    private multiplication:Array<number> = [];
    private sumRes: number = 0; 
    private errorRes: any = 0;

    constructor(inputs:Array<number>=[], goal:number=0, epochs:number=1, activationFn:Activation) {
        inputs.forEach(element => {
            this.weights.push(Math.random());
        });
        for(let epoch=0; epoch <=epochs; epoch++) {
            inputs.forEach((element, index) => {
                if(element <=0) element = 0.1;
                this.multiplication.push(element * this.weights[index]);
            });

            this.sumRes = this.sumItems(this.multiplication);

            this.outputs = activationFn.run(this.sumRes);
            this.errorRes = Math.abs(epochs - this.outputs).toFixed(4);
            
            inputs.forEach((input,index) =>{
                if(input <= 0) input = 0.1;
                this.weights[index] += inputs[index] * this.gradientDescent(this.errorRes);
            });
            let impr = epoch.toString().padStart(8,'0');
            console.info(`Epoch ${impr} - taxa de erro ${this.errorRes} - saída ${this.outputs}`);
        }
    }
    private gradientDescent(n:number=0.0): number {
        return n * (1-n);
    }
    
    private sumItems(arr:Array<number>=[]): number {
        return arr.reduce((a,b) => a+b);
    }
}