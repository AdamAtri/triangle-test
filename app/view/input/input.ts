import { Button, CoreTypes, Label, StackLayout, TextField } from "@nativescript/core";

export class Input extends StackLayout {
  constructor() {
    super();
    this.addChild(this.label1);
    this.addChild(this.input1);
    this.addChild(this.label2);
    this.addChild(this.input2);
    this.addChild(this.label3); 
    this.addChild(this.input3);
    this.addChild(this.button);
  }

  protected _label1:Label;
  public get label1():Label {
    if (! this._label1) {
      this._label1 = new Label();
      this._label1.text = 'side 1'
      this._label1.textAlignment = 'center'
      this._label1.horizontalAlignment = 'center';
    }
    return this._label1;
  }

  protected _input1:TextField;
  public get input1():TextField {
    if (! this._input1) {
      this._input1 = new TextField();
      this._input1.keyboardType = CoreTypes.KeyboardType.number;
      this._input1.marginBottom = 8;
      this._input1.textAlignment = 'center'
    }
    return this._input1;
  }

  protected _label2:Label;
  public get label2():Label {
    if (! this._label2) {
      this._label2 = new Label();
      this._label2.text = 'side 2'
      this._label2.textAlignment = 'center'
      this._label2.horizontalAlignment = 'center';
    }
    return this._label2;
  }

  protected _input2:TextField;
  public get input2():TextField {
    if (! this._input2) {
      this._input2 = new TextField();
      this._input2.keyboardType = CoreTypes.KeyboardType.number;
      this._input2.marginBottom = 8;
      this._input2.textAlignment = 'center'
    }
    return this._input2;
  }

  protected _label3:Label;
  public get label3():Label {
    if (! this._label3) {
      this._label3 = new Label();
      this._label3.text = 'side 3'
      this._label3.textAlignment = 'center'
      this._label3.horizontalAlignment = 'center';
    }
    return this._label3;
  }

  protected _input3:TextField;
  public get input3():TextField {
    if (! this._input3) {
      this._input3 = new TextField();
      this._input3.keyboardType = CoreTypes.KeyboardType.number;
      this._input3.marginBottom = 8;
      this._input3.textAlignment = 'center'
    }
    return this._input3;
  }

  protected _button:Button;
  public get button():Button {
    if (! this._button) {
      this._button = new Button();
      this._button.className = '-primary';
      this._button.text = 'test';
      this._button.on('tap', this._onButtonTapped, this);
    }
    return this._button;
  }

  get values():Array<number> {
    return [+this.input1.text, +this.input2.text, +this.input3.text];
  }

  private _onButtonTapped():void {
    if (typeof this.handler === 'function')
      this.handler(this.values);
    else
      console.log('no handler assigned');
  }
  public handler:(values:Array<number>) => void;
}