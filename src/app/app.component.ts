import { Component, OnInit } from '@angular/core'
import { FilesService } from './services/files.service'
import { FileInterface } from './interfaces/File.interface'
import { FolderInterface } from './interfaces/Folder.Interface'
import { FolderModel } from './models/Folder.model'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit{

  elements : (FolderModel|FileInterface)[] = []

  constructor (private filesService: FilesService) {}

  ngOnInit (): void {
    this.elements = this.filesService.getFolderContent('/users/alex')
  }

  pathChanged (e){
    console.log(e.value)
  }
}
