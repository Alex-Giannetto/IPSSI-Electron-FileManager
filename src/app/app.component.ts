import { Component, OnInit } from '@angular/core'
import { FilesService } from './services/files.service'
import { ElementInterface } from './interfaces/Element.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  elements: ElementInterface[] = []

  constructor (private filesService: FilesService) {}

  ngOnInit (): void {
    this.filesService.updateEmitter.subscribe(() => this.updateElements())

    this.filesService.getFolderContent('/Users/alex')
  }

  onSearchChange (search) {
    this.elements = [...this.filesService.elements]
    this.elements = this.elements.filter(element => element.name.indexOf(search) > -1)
  }

  updateElements () {
    this.elements = [...this.filesService.elements]
  }

}
