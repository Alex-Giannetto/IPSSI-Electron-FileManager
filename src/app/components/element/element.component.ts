import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ElementInterface } from '../../interfaces/Element.interface'
import { FilesService } from '../../services/files.service'

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: ElementInterface
  @Input() editionMod: boolean

  @Output() onSimpleClick: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() onDoubleClick: EventEmitter<boolean> = new EventEmitter<boolean>()

  lastClick = {
    timeout: null,
    timestamp: null
  }

  constructor (private filesService: FilesService) {}

  onClick () {
    this.lastClick.timestamp = Date.now()

    const delay = 300

    this.lastClick.timeout = setTimeout(() => {
      if (Date.now() - this.lastClick.timestamp < delay) {
        this.onDoubleClick.emit(true)
      } else {
        this.onSimpleClick.emit(true)
      }

      clearTimeout(this.lastClick.timeout)
    }, delay)
  }
}
