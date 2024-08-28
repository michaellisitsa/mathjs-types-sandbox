import { create } from "./fakeMathJs";

// // Doesn't apply when declared in index.d.ts
const math = create();

const node = new math.ConstantNode(null);
