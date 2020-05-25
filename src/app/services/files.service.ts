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
  path: string[]
  elements: (FolderModel | FileInterface)[] = []

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

    this.path = path.split('/')

    return this.elements
  }
}
