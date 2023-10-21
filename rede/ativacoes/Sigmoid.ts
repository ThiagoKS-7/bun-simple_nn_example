import Activation from "./Activation";

export default class Sigmoid implements Activation{
    run(sumRes: number) : number {
        return  1 / (1 + Math.pow(Math.E, -sumRes));
    }

}