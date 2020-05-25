import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() searchFilter: EventEmitter<string> = new EventEmitter<string>()
  search: string

  onSearchChange(event){
    this.searchFilter.emit(event.target.value)
  }

}
