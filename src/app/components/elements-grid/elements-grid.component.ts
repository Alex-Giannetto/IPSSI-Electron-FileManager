import { Component, Input } from '@angular/core'
import { FileInterface } from '../../interfaces/File.interface'
import { FolderModel } from '../../models/Folder.model'
import { FilesService } from '../../services/files.service'

@Component({
  selector: 'app-elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss']
})
export class ElementsGridComponent {
  @Input() elements: (FolderModel | FileInterface)[] = []

  constructor (private filesService: FilesService) {}

  elementsClick (element: (FolderModel | FileInterface)): void {
    const path = '/' + this.filesService.paths.join('/') + '/' + element.name

    if (element.type === 'folder') {
      this.filesService.getFolderContent(path)
      return
    }

    this.filesService.openFile(path)
  }
}
