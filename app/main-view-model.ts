import { Observable } from '@nativescript/core'
import gsap from 'gsap';
import { TriangleType } from './view/triangle/triangle';

export type ErrorString = 
  'invalid or incorrect number of inputs' | 
  'inputs must be numbers' |
  'inputs must be greater than 0' | 
  'a + b <= c' | 
  'b + c <= a' | 
  'c + a <= b' | 
  'unknown error' |
  null;


export class TriangleModel extends Observable {

  onTap = (values:Array<number>) => {
    this.triangleType = this._determineTriangleType(values);
  }

  public _validateSideValues(values:Array<number>):ErrorString {
    if (! values || values.length !== 3)
      return 'invalid or incorrect number of inputs';
    const [a, b, c] = values;
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number')
      return 'inputs must be numbers';
    if (a <= 0 || b <= 0 || c <= 0)
      return 'inputs must be greater than 0';
    if ((a + b > c) && (b + c > a) && (c + a > b))
      return null;
    else if (a + b <= c)
      return 'a + b <= c';
    else if (b + c <= a)
      return 'b + c <= a';
    else if (c + a <= b)
      return 'c + a <= b';
    return 'unknown error';
  }

  public _determineTriangleType(values:Array<number>):TriangleType {
    this.errorMessage = null;
    const error = this._validateSideValues(values);
    if (error) {
      this.errorMessage = error;
      return null;
    }
    const [a, b, c] = values;
    if (a == b && b == c) return 'equilateral';
    else if (a != b && b !== c && c != a) return 'scalene';
    else if (a == b || b == c || c == a) return 'isosceles';
    else return null;
  }

  private _triangleType:TriangleType = 'isosceles';
  public get triangleType():TriangleType { return this._triangleType; }
  public set triangleType(v:TriangleType) {
    if (this._triangleType === v) return;
    this._triangleType = v;
    this.notifyPropertyChange('triangleType', v);
  }

  private _errorMessage:string;
  public get errorMessage():string { return this._errorMessage; }
  public set errorMessage(v:string) {
    if (this._errorMessage === v) return;
    this._errorMessage = v;
    this.notifyPropertyChange('errorMessage', v);
  }
}
