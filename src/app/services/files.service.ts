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
  path: EventEmitter<string> = new EventEmitter<string>()

  getFolderContent (path: string): (FolderModel | FileInterface)[] {
    const elements: (FolderModel | FileInterface)[] = []

    electronFs.readdirSync(path).forEach(fileName => {
      if (fileName.charAt(0) !== '.') {
        const elementPath = path + '/' + fileName

        const meta = electronFs.statSync(elementPath)

        if (meta.isFile()) {
          elements.push(new FileModel(fileName, path))

        } else if (meta.isDirectory()) {
          elements.push(new FolderModel(fileName, path))
        }
      }
    })

    return elements
  }
}
