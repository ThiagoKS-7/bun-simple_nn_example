import Activation from "./Activation";

export default class Relu implements Activation{
    run(sumRes: number) :number{
        return Math.max(sumRes, 0);
    }
    
}