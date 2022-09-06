import { Observable } from '@nativescript/core'
import { TriangleType } from './view/triangle/triangle';



export class TriangleModel extends Observable {

  onTap = (values:Array<number>) => {
    // todo: assign the triangle type based on the values supplied
    alert('Supplied values: ' + values + '\nNow make it work');
  }

  public _validateSideValues(values:Array<number>):boolean {
    // todo: create a function that validates the values using the Triangle Inequality Theorum
    // (see tests)
    return false;
  }

  public _determineTriangleType(values:Array<number>):TriangleType {
    if (! this._validateSideValues(values))
      return null;
    // todo: create a function that returns the triangle type based on the values provided
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
