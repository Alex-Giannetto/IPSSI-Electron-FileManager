import { Component, Input } from '@angular/core'
import { FilesService } from '../../services/files.service'
import { SelectionService } from '../../services/selection.service'
import { ElementInterface } from '../../interfaces/Element.interface'

@Component({
  selector: 'app-elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss']
})
export class ElementsGridComponent {
  @Input() elements: ElementInterface[] = []
  longPressing: boolean = false

  constructor (private filesService: FilesService, private selectionService: SelectionService) {}

  elementsClick (element: ElementInterface): void {
    if (this.longPressing) {
      return
    }

    if (this.selectionService.isEditing) {
      this.selectionService.selectAndUnselectElement(element)
      return
    }

    const path = '/' + this.filesService.paths.join('/') + '/' + element.name

    if (element.type === 'folder') {
      this.filesService.getFolderContent(path)
      return
    }

    this.filesService.openFile(path)
  }

  elementLongPressEnd () {
    setTimeout(() => this.longPressing = false, 200)
  }
}
