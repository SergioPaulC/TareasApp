import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private storage:StorageService){  }
  
  eliminarTareas(){
    this.storage.saveData(new Array<Tarea>());
    location.reload();
  }
}
