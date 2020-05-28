import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../services/selection.service'
import { ElementInterface } from '../../interfaces/Element.interface'

@Component({
  selector: 'app-preview-bar',
  templateUrl: './preview-bar.component.html',
  styleUrls: ['./preview-bar.component.scss']
})
export class PreviewBarComponent implements OnInit {

  element: ElementInterface

  constructor(private selectionService : SelectionService) { }

  ngOnInit(): void {
    this.selectionService.showInformationElement.subscribe(element => this.element = element)
  }

}
