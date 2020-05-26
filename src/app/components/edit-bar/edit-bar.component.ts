import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../services/selection.service'
import { FilesService } from '../../services/files.service'
import { ToastService } from '../../services/toast.service'

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

  constructor(private selectionService: SelectionService, private filesService: FilesService, private toastService: ToastService) { }

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

    try {
      console.log(await this.filesService.rename(element, name))
      element.name = name
    } catch (e) {
      this.toastService.addToast(e.message)
    } finally {
      this.cancel()
    }
  }

  cancel(){
    this.selectionService.selectedElements = []
    this.state.rename = {
      state: false,
      value: ''
    }
  }
}
