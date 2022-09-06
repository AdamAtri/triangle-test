import { GridLayout, Image, ImageSource, Label, Property } from "@nativescript/core";

export type TriangleType = 'equilateral'|'scalene'|'isosceles'|null;

export class Triangle extends GridLayout {
  constructor() {
    super();
    this.width = '100%' as any;
    this.rows = 'auto, auto';
    this.columns = '*';
    this.horizontalAlignment = 'center';
    this.addChild(this.image);
    this.addChild(this.label);
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
    }
    else {
      this.image.visibility = 'collapse';
      this.label.text = 'not a valid triangle';
    }
    this.requestLayout();
  } 
  
  protected _image:Image;
  public get image():Image {
    if (! this._image) {
      this._image = new Image();
      this._image.stretch = 'aspectFill';
      this._image.width = this._image.height = 300;
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
}

function capitalize(s:string):string {
  return s[0].toUpperCase() + s.substring(1)
}
function isTriangleType(t:string):boolean {
  return t === 'equilateral' || t === 'isosceles' || t === 'scalene';
}