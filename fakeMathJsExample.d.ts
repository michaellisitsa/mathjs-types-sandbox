import { ConstantNodeCtor } from "./fakeMathJs";

declare module "./fakeMathJs" {
  interface ConstantNodeCtor {
    new (value: number | string | null): ConstantNode;
  }
}
