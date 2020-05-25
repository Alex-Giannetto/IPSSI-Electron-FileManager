import { FolderInterface } from '../interfaces/Folder.Interface'
import { ElementInterface } from '../interfaces/Element.interface'

export class FolderModel implements FolderInterface {
  private _name: string
  private _path: string
  private _type: 'file' | 'folder' = 'folder'
  private _children: ElementInterface[] = []

  constructor (name: string, path: string, children: ElementInterface[] = null) {
    this.name = name
    this.path = path

    if(children){
      this.children = children
    }
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get path (): string {
    return this._path
  }

  set path (value: string) {
    this._path = value
  }

  get type (): "file" | "folder" {
    return this._type
  }

  set type (value: "file" | "folder") {
    this._type = value
  }

  get children (): ElementInterface[] {
    return this._children
  }

  set children (value: ElementInterface[]) {
    this._children = value
  }
}
