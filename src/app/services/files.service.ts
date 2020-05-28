import { EventEmitter, Injectable } from '@angular/core'
import { remote, shell } from 'electron'
import { ElementInterface } from '../interfaces/Element.interface'
import { ToastService } from './toast.service'

const electronFs = remote.require('fs')

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  public updateEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()
  public paths: string[]
  public elements: ElementInterface[] = []

  constructor (private toastService: ToastService) {}

  getFolderContent (path: string): ElementInterface[] {
    this.elements = []

    electronFs.readdirSync(path)
      .filter(name => name.charAt(0) !== '.')
      .forEach((name: string) => {
        const meta = electronFs.statSync(path + '/' + name)
        this.elements.push({
          path,
          name,
          type: meta.isFile() ? 'file' : 'folder',
          size: meta.size,
          createdAt: meta.birthtime
        })
      })

    this.paths = path.split('/')
    this.paths.shift()

    this.updateEmitter.emit(true)

    return this.elements
  }

  openFile (path: string): void {
    shell.openItem(path)
  }

  async rename (element: ElementInterface, name: string): Promise<boolean> {

    if (await this.checkPermissions(`${element.path}/${element.name}`, electronFs.constants.W_OK)) {
      return Promise.reject(new Error('Vous ne possédez pas le droit d\'écriture'))
    }

    return new Promise<boolean>((resolve, reject) => {
      electronFs.rename(`${element.path}/${element.name}`, `${element.path}/${name}`, error => {
        if (error) {
          return reject(error)
        }
        resolve(true)
      })
    })
  }

  checkPermissions (path: string, permisson: any): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      electronFs.access(path, permisson, error => resolve(!!error))
    })
  }

  getExtension (element: ElementInterface): string {
    return element.name.split('.').reverse()[0]
  }
}
