import Activation from "./rede/ativacoes/Activation";
import FeedForward from "./rede/metodo_feed/FeedForward";
class Sigmoid implements Activation{
    run(sumRes: number) : number {
        return  1 / (1 + Math.pow(Math.E, -sumRes));
    }

}

new FeedForward([0], 0.1, 20, new Sigmoid());

