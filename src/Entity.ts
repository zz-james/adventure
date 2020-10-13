export class Entity {
  private _name: string;
  private _description: string;

  protected constructor(aName:string, aDescription:string) {
    this._name = aName;
    this._description = aDescription;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get description(): string {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }
}