import { Container } from "inversify";
import { ICalculator, Calculator } from "./Calculator";

export const dicontainer = new Container();
dicontainer.bind<ICalculator>("Calculator").to(Calculator).inTransientScope();
