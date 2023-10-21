import Activation from "./Activation";

export default class LeakyRelu implements Activation {
    run(sumRes: number) :number {
        return Math.max(sumRes, 0.01);
    }

}