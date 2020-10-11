import { Entity } from './Entity';
import {Room} from './Room';

export class Actor extends Entity{
  private _location:Room;

  public constructor(aName:string, aDescription:string, aRoom:Room) {
    super(aName, aDescription)
    this._location = aRoom;
  }

  get location(): Room {
    return this._location;
  }

  set location(newRoom: Room) {
    this._location = newRoom;
  }
}