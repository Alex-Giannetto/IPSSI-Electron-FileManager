import { FileInterface } from '../interfaces/File.interface'

export class FileModel implements FileInterface{
  private _name: string
  private _path: string
  private _type: 'file' | 'folder' = 'file'
  private _extension: string

  constructor (name: string, path: string) {
    this.name = name
    this.path = path

    this.extension = this._name.split('.').reverse()[0]
  }

  get path (): string {
    return this._path
  }

  set path (value: string) {
    this._path = value
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get type (): "file" | "folder" {
    return this._type
  }

  set type (value: "file" | "folder") {
    this._type = value
  }

  get extension (): string {
    return this._extension
  }

  set extension (value: string) {
    this._extension = value
  }
}
