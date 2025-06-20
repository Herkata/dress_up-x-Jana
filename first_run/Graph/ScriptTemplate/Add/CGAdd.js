/**
 * @file CGAdd.js
 * @author
 * @date 2021/8/15
 * @brief CGAdd.js
 * @copyright Copyright (c) 2021, ByteDance Inc, All Rights Reserved
 */

const {BaseNode} = require('./BaseNode');
const APJS = require('./amazingpro');

class CGAdd extends BaseNode {
  constructor() {
    super();
  }

  getOutput() {
    const curType = this.valueType;
    if (curType == null) {
      return null;
    }

    if (curType == 'Int' || curType == 'Double') {
      let result = 0.0;
      for (let k = 0; k < this.inputs.length; ++k) {
        const op = this.inputs[k]();

        if (op == null) {
          return null;
        }
        result += op;
      }
      return result;
    } else if (curType == 'Vector2f') {
      let resultX = 0.0;
      let resultY = 0.0;
      for (let k = 0; k < this.inputs.length; ++k) {
        const op = this.inputs[k]();

        if (op == null) {
          return null;
        }
        resultX += op.x;
        resultY += op.y;
      }
      return new APJS.Vector2f(resultX, resultY);
    } else if (curType == 'Vector3f') {
      let resultX = 0.0;
      let resultY = 0.0;
      let resultZ = 0.0;

      for (let k = 0; k < this.inputs.length; ++k) {
        const op = this.inputs[k]();

        if (op == null) {
          return null;
        }
        resultX += op.x;
        resultY += op.y;
        resultZ += op.z;
      }
      return new APJS.Vector3f(resultX, resultY, resultZ);
    } else if (curType == 'Vector4f') {
      let resultX = 0.0;
      let resultY = 0.0;
      let resultZ = 0.0;
      let resultW = 0.0;

      for (let k = 0; k < this.inputs.length; ++k) {
        const op = this.inputs[k]();

        if (op == null) {
          return null;
        }
        resultX += op.x;
        resultY += op.y;
        resultZ += op.z;
        resultW += op.w;
      }
      return new APJS.Vector4f(resultX, resultY, resultZ, resultW);
    }
  }
}

exports.CGAdd = CGAdd;
