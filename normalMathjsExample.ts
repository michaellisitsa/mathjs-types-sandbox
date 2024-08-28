// run `node index.js` in the terminal
import { parse, isConstantNode, ConstantNode, create, all } from "mathjs";
const node = parse("1");
if (isConstantNode(node)) {
  console.log("I'm constant");
}

const extendedNode = new ConstantNode("1");
if (isConstantNode(extendedNode)) {
  console.log("I'm constant extended node");
}
const invalidExtendedNode = new ConstantNode(null);

// Extending mathjs with create
const math = create(all);
// Typescript allows typing an interface constructor per docs
// https://www.typescriptlang.org/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes

const createdMathNode = new math.ConstantNode(null);
