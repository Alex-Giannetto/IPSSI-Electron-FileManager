import { Component, Input } from '@angular/core'
import { FolderInterface } from '../../interfaces/Folder.Interface'
import { FileInterface } from '../../interfaces/File.interface'
import { FolderModel } from '../../models/Folder.model'

@Component({
  selector: 'app-elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss']
})
export class ElementsGridComponent {

  @Input() elements: (FolderModel|FileInterface)[] = []

}
