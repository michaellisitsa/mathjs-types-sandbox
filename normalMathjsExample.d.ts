import { ConstantNodeCtor, ConstantNode } from "mathjs";

declare module "mathjs" {
  interface ConstantNodeCtor {
    new (value: number | string | null): ConstantNode;
  }
}
