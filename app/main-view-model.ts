import { Observable } from '@nativescript/core'
import gsap from 'gsap';
import { TriangleType } from './view/triangle/triangle';



export class TriangleModel extends Observable {

  onTap = (values:Array<number>) => {
    this.triangleType = this._determineTriangleType(values);
  }

  public _validateSideValues(values:Array<number>):boolean {
    // todo: create a function that validates the values using the Triangle Inequality Theorum
    // (see tests)
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
    // todo: create a function that returns the triangle type based on the values provided
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
}
