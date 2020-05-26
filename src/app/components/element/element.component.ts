import { Component, Input, Output } from '@angular/core'
import { ElementInterface } from '../../interfaces/Element.interface'
import { FilesService } from '../../services/files.service'

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: ElementInterface
  @Input() editionMod : boolean

  constructor (private filesService: FilesService) {}
}
