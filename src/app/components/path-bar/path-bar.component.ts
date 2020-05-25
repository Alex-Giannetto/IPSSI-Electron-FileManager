import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service'

@Component({
  selector: 'app-path-bar',
  templateUrl: './path-bar.component.html',
  styleUrls: ['./path-bar.component.scss']
})
export class PathBarComponent {

  constructor(private filesService: FilesService) { }

  changePath(index){
    const path = '/' + this.filesService.paths.slice(0, ++index).join('/')
    this.filesService.getFolderContent(path)
  }

}
