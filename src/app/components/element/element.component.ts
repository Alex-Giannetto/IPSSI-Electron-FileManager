import { Component, Input } from '@angular/core'
import { FileInterface } from '../../interfaces/File.interface'
import { FolderInterface } from '../../interfaces/Folder.Interface'

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: (FileInterface | FolderInterface)
}
