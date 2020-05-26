import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  addToast(message: string){
    alert(message)
  }
}
