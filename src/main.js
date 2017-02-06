
import Button from './components/dom/Button';
import Group from './components/dom/Group';
import TextField from './components/dom/TextField';


const statusField = new TextField();

const textFieldText = "This <i>text</i> is <b>provided</b>!"

const textField = new TextField(textFieldText, {
  hidden: () => {
    statusField.setText('hidden');
  },
  showing: () => {
    statusField.setText('visible');
  }
});

const group = new Group({ elements: [
  new Group({ elements: [
    new Button("show", { click: () => {
      textField.show();
    }}),
    new Button("hide", { click: () => {
      textField.hide();
    }})
  ]}),
  textField,
  statusField
]});

group.render();

document.body.appendChild(group.el);
