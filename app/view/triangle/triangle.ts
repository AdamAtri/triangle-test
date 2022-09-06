import { Color, CoreTypes, GridLayout, Image, ImageSource, Label, Property } from "@nativescript/core";

export type TriangleType = 'equilateral'|'scalene'|'isosceles'|null;

export class Triangle extends GridLayout {
  constructor() {
    super();
    this.width = '100%' as any;
    this.rows = 'auto, auto, auto';
    this.columns = '*';
    this.horizontalAlignment = 'center';
    this.addChild(this.image);
    this.addChild(this.label);
    // todo: add errorLabel
    this.addChild(this.errorLabel);
  }

  private _triangleType:TriangleType;
  public get triangleType():TriangleType { return this._triangleType; }
  public set triangleType(v:TriangleType) {
    if (this._triangleType === v) return;
    this._triangleType = v;
    if (isTriangleType(v)) {
      this.image.visibility = 'visible';
      this.image.src = `~/assets/${v}.png`;
      this.label.text = capitalize(v) + ' Triangle';
      // @ts-ignore
      this.label.color = 'black';
    }
    else {
      this.image.visibility = 'collapse';
      this.label.text = 'not a valid triangle';
      //@ts-ignore
      this.label.color = '#EE4444';
    }
    this.requestLayout();
  } 
  
  protected _image:Image;
  public get image():Image {
    if (! this._image) {
      this._image = new Image();
      this._image.stretch = 'aspectFill';
      // @ts-ignore
      this._image.width = '100%';
      this._image.horizontalAlignment = 'center';
    }
    return this._image;
  }
  protected _label:Label;
  public get label():Label {
    if (! this._label) {
      this._label = new Label();
      this._label.fontSize = 20;
      this._label.row = 1;
      this._label.textAlignment = 'center';
      this._label.horizontalAlignment = 'center';
    }
    return this._label;
  }

  // todo: add error message handling
  private _error:string;
  public get error():string { return this._error; }
  public set error(v:string) {
    if (this._error == v) return;
    this._error = v;
    if (v) {
      this.errorLabel.text = v;
      this.errorLabel.visibility = 'visible';
    }
    else {
      this.errorLabel.visibility = 'collapse';
    }
  }

  protected _errorLabel:Label;
  public get errorLabel():Label {
    if (! this._errorLabel) {
      this._errorLabel = new Label();
      this._errorLabel.style.fontFamily = 'monospace';
      this._errorLabel.style.fontWeight = 'bold';
      this._errorLabel.visibility = 'collapse';
      this._errorLabel.row = 2;
      this._errorLabel.horizontalAlignment = 'center';
    }
    return this._errorLabel;
  }
}

function capitalize(s:string):string {
  return s[0].toUpperCase() + s.substring(1)
}
function isTriangleType(t:string):boolean {
  return t === 'equilateral' || t === 'isosceles' || t === 'scalene';
}