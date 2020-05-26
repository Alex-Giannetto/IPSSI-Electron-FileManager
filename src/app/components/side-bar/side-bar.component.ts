import { Component } from '@angular/core'
import { FilesService } from '../../services/files.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  favorites: { name: string, path: string }[] = [
    { name: 'alex', path: '/Users/alex' },
    { name: 'downloads', path: '/Users/alex/Downloads' }
  ]

  constructor (private filesService: FilesService) {}

  onDrop (e) {
    let { type, name, path } = this.filesService.elements[e.previousIndex]
    path = path + '/' + name

    if (type === 'folder' && this.favorites.filter(element => element.path === path).length === 0) {
      this.favorites.push({ name, path })
    }

  }
}
