import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../services/selection.service'
import { FilesService } from '../../services/files.service'

@Component({
  selector: 'app-edit-bar',
  templateUrl: './edit-bar.component.html',
  styleUrls: ['./edit-bar.component.scss']
})
export class EditBarComponent {

  state = {
    rename : {
      state: false,
      value: ''
    }
  }

  constructor(private selectionService: SelectionService, private filesService: FilesService) { }

  prepareRename(){
    const element = this.selectionService.selectedElements[0]
    this.state.rename = {
      state: true,
      value: element.name
    }
  }

  async rename(){
    const element = this.selectionService.selectedElements[0]

    const name = this.state.rename.value

    this.filesService.rename(element, name).then(() => {
      element.name = name
      this.cancel()
    })
  }

  cancel(){
    this.selectionService.selectedElements = []
    this.state.rename = {
      state: false,
      value: ''
    }
  }
}
