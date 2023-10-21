import LeakyRelu from "./rede/ativacoes/LeakyRelu";
import Relu from "./rede/ativacoes/Relu";
import Sigmoid from "./rede/ativacoes/Sigmoid";
import FeedForward from "./rede/metodo_feed/FeedForward";

const data = {
    inputs: [0],
    goal: 1,
    epochs: 300,
}
const activations = [
    new Relu(),
    new Sigmoid(),
    new LeakyRelu()
]

activations.forEach(act => {
    new FeedForward(data.inputs, data.goal, data.epochs, act);
})



