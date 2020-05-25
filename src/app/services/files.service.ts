import { EventEmitter, Injectable } from '@angular/core'
import { remote } from 'electron'
import { FileModel } from '../models/File.model'
import { FolderModel } from '../models/Folder.model'
import { FileInterface } from '../interfaces/File.interface'

const electronFs = remote.require('fs')

@Injectable({
  providedIn: 'root',
})
export class FilesService {

  public updateEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()
  public paths: string[]
  public elements: (FolderModel | FileInterface)[] = []


  getFolderContent (path: string): (FolderModel | FileInterface)[] {
    this.elements = []

    electronFs.readdirSync(path).forEach(fileName => {
      if (fileName.charAt(0) !== '.') {
        const elementPath = path + '/' + fileName

        const meta = electronFs.statSync(elementPath)

        if (meta.isFile()) {
          this.elements.push(new FileModel(fileName, path))

        } else if (meta.isDirectory()) {
          this.elements.push(new FolderModel(fileName, path))
        }
      }
    })

    this.paths = path.split('/')
    this.paths.shift()

    this.updateEmitter.emit(true)

    return this.elements
  }
}
