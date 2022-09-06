import { Button, CoreTypes, Label, StackLayout, TextField } from "@nativescript/core";

export class Input extends StackLayout {
  constructor() {
    super();
    this.addChild(this.labelA);
    this.addChild(this.inputA);
    this.addChild(this.labelB);
    this.addChild(this.input2);
    this.addChild(this.labelC); 
    this.addChild(this.inputC);
    this.addChild(this.button);
  }

  protected _labelA:Label;
  public get labelA():Label {
    if (! this._labelA) {
      this._labelA = new Label();
      this._labelA.text = 'side a'
      this._labelA.textAlignment = 'center'
      this._labelA.horizontalAlignment = 'center';
    }
    return this._labelA;
  }

  protected _inputA:TextField;
  public get inputA():TextField {
    if (! this._inputA) {
      this._inputA = new TextField();
      this._inputA.keyboardType = CoreTypes.KeyboardType.number;
      this._inputA.marginBottom = 8;
      this._inputA.textAlignment = 'center'
    }
    return this._inputA;
  }

  protected _labelB:Label;
  public get labelB():Label {
    if (! this._labelB) {
      this._labelB = new Label();
      this._labelB.text = 'side b'
      this._labelB.textAlignment = 'center'
      this._labelB.horizontalAlignment = 'center';
    }
    return this._labelB;
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

  protected _labelC:Label;
  public get labelC():Label {
    if (! this._labelC) {
      this._labelC = new Label();
      this._labelC.text = 'side c'
      this._labelC.textAlignment = 'center'
      this._labelC.horizontalAlignment = 'center';
    }
    return this._labelC;
  }

  protected _inputC:TextField;
  public get inputC():TextField {
    if (! this._inputC) {
      this._inputC = new TextField();
      this._inputC.keyboardType = CoreTypes.KeyboardType.number;
      this._inputC.marginBottom = 8;
      this._inputC.textAlignment = 'center'
    }
    return this._inputC;
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
    return [+this.inputA.text, +this.input2.text, +this.inputC.text];
  }

  private _onButtonTapped():void {
    if (typeof this.handler === 'function')
      this.handler(this.values);
    else
      console.log('no handler assigned');
  }
  public handler:(values:Array<number>) => void;
}