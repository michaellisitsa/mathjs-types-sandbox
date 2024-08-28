// // Interface for the constructor
// // But you can't use it directly
export interface ConstantNode {
  someMethod(): void;
}

export interface ConstantNodeCtor {
  new (value: number | string): ConstantNode;
}
export interface MathJsFactory {
  create: () => MathJsInstance;
}
export interface MathJsInstance extends MathJsFactory {
  ConstantNode: ConstantNodeCtor;
}

export const { create }: MathJsInstance;
