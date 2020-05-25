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

  elementsClick (element: (FolderModel | FileInterface)) {
    if (element.type === 'folder') {
      const path = '/' + this.filesService.paths.join('/') + '/' + element.name
      this.filesService.getFolderContent(path)
    }
  }
}
