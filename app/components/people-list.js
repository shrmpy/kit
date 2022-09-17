import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import Blockly from 'blockly';

export default class PeopleListComponent extends Component {
  @tracked toolbox;
  @tracked workspace;

  constructor(owner, args) {
    super(owner, args);

 this.toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "controls_if"
    },
    {
      "kind": "block",
      "type": "controls_repeat_ext"
    },
    {
      "kind": "block",
      "type": "logic_compare"
    },
    {
      "kind": "block",
      "type": "math_number"
    },
    {
      "kind": "block",
      "type": "math_arithmetic"
    },
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "text_print"
    },
  ]
}

 this.workspace = Blockly.inject('blocklyDiv', {toolbox: this.toolbox});
  }
}

