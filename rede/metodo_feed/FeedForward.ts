import Activation from "../ativacoes/Activation";

export default class FeedForward {
    private outputs:any = 0;
    private weights:Array<number> = []; 
    private multiplication:Array<number> = [];
    private sumRes: number = 0; 
    private errorRes: any = 0;

    constructor(inputs:Array<number>=[], goal:number=0, epochs:number=1, activationFn:Activation) {
        if(goal <= 0) goal=0.1;
        else if(goal>1) goal =1;

        this.weights = [];
        for(let i=0; i<inputs.length; i++) {
            this.weights.push(Math.random());
        }

        for(let epoch=0; epoch <=epochs; epoch++) {
            for(let j=0; j< inputs.length; j++) {
                if(inputs[j] <=0) inputs[j] = 0.1;
                this.multiplication.push(inputs[j] * this.weights[j]);
            }

            this.sumRes = this.sumItems(this.multiplication);

            this.outputs = parseFloat(activationFn.run(this.sumRes)).toFixed(4);
            this.errorRes = Math.abs(goal - this.outputs).toFixed(4);
            for(let k=0; k<inputs.length; k++) {
                if(inputs[k] <= 0) inputs[k] = 0.1;
                this.weights[k] += inputs[k] * this.gradientDescent(this.errorRes);
            }
            let impr = epoch.toString().padStart(8,'0');
            console.info(`Epoch ${impr} - taxa de erro ${this.errorRes} - saída ${this.outputs}`);
            if(this.errorRes <= 0.1) {
                break;
            }
        }
        console.info(this.weights);
    }
    private gradientDescent(n:number=0): number {
        return n * (1-n);
    }
    
    private sumItems(arr:Array<number>=[]): number {
        return arr.reduce((a,b) => a+b);
    }
}