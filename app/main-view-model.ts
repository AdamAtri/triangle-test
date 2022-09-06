import { Observable } from '@nativescript/core'
import gsap from 'gsap';
import { TriangleType } from './view/triangle/triangle';

export type ErrorString = 
  'invalid or incorrect number of inputs' | 
  'inputs must be greater than 0' | 
  'inputs must be numbers' |
  'a + b <= c' | 
  'b + c <= a' | 
  'c + a <= b' |
  'unknown error' |
  null;


export class TriangleModel extends Observable {

  onTap = (values:Array<number>) => {
    this.triangleType = this._determineTriangleType(values);
  }

  // todo: refactor _validateSideValues to return an <ErrorString>
  public _validateSideValues(values:Array<number>):boolean {
    if (! values || values.length !== 3)
      return false;
    const [a, b, c] = values;
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number')
      return false;
    if (a <= 0 || b <= 0 || c <= 0)
      return false;
    if ((a + b > c) && (b + c > a) && (c + a > b))
      return true;
    return false;
  }

  public _determineTriangleType(values:Array<number>):TriangleType {
    // todo: create a const `error` and assign it the value returned from _validateSideValues
    // if there is an error assign it to `errorMessage`
    if (! this._validateSideValues(values))
      return null;
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
