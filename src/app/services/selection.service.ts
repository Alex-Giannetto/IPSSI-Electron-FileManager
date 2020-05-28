import { EventEmitter, Injectable } from '@angular/core'
import { ElementInterface } from '../interfaces/Element.interface'

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  showInformationElement: EventEmitter<ElementInterface> = new EventEmitter<ElementInterface>()

  selectedElements: ElementInterface[] = []

  get isEditing (): boolean {
    return this.selectedElements.length >= 1
  }

  selectAndUnselectElement (element: ElementInterface) {
    if (this.selectedElements.indexOf(element) > -1) {
      return this.selectedElements = this.selectedElements.filter(item => item !== element)
    }

    this.selectedElements.push(element)
  }

}
