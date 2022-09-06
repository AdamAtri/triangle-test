import { Observable } from '@nativescript/core'
import gsap from 'gsap';
import { TriangleType } from './view/triangle/triangle';



export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super()

    // Initialize default values.
    this._counter = 42;
    this.updateMessage()
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    alert('tapped');
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }

  private _triangleType:TriangleType = 'isosceles';
  public get triangleType():TriangleType { return this._triangleType; }
  public set triangleType(v:TriangleType) {
    if (this._triangleType === v) return;
    this._triangleType = v;
    this.notifyPropertyChange('triangleType', v);
  }
}
