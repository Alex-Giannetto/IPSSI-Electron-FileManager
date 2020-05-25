import { Component, OnInit } from '@angular/core'
import { FilesService } from './services/files.service'
import { FolderModel } from './models/Folder.model'
import { FileInterface } from './interfaces/File.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  elements: (FolderModel | FileInterface)[] = []

  constructor (private filesService: FilesService) {}

  ngOnInit (): void {
    this.filesService.getFolderContent('/')
    this.elements = [...this.filesService.elements]
  }

  onSearchChange (search) {
    this.elements = [...this.filesService.elements]
    this.elements = this.elements.filter(element => element.name.indexOf(search) > -1)
  }

}
