import { injectable } from "inversify";
export interface ICalculator {
  add(a: number, b: number): number;
}

@injectable()
export class Calculator implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
