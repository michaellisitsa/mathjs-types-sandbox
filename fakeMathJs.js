class ConstantNode {
  constructor(value) {
    this.value = value;
  }

  someMethod() {
    console.log("Method called with value:", this.value);
  }
}

// math.js
function create() {
  return {
    ConstantNode: function (value) {
      this.value = value;
      this.someMethod = function () {
        console.log("Method called with value:", this.value);
      };
    },
  };
}

module.exports = { create };
