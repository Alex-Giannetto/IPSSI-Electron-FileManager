import { Component } from '@angular/core'
import { FilesService } from '../../services/files.service'
import { SelectionService } from '../../services/selection.service'

@Component({
  selector: 'app-path-bar',
  templateUrl: './path-bar.component.html',
  styleUrls: ['./path-bar.component.scss']
})
export class PathBarComponent {

  constructor (private filesService: FilesService, private selectionService: SelectionService) { }

  changePath (index) {
    if(this.selectionService.isEditing){
      return false
    }

    const path = '/' + this.filesService.paths.slice(0, ++index).join('/')
    this.filesService.getFolderContent(path)
  }

}
