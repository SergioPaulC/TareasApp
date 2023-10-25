import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

/*   getData(): Array<Tarea> {
    const tareas = localStorage.getItem('tareas');
    console.log( "hello hello", tareas ? <Tarea[]>(JSON.parse(tareas)) : []);
    return tareas ? <any[]>(JSON.parse(tareas)).map( (x : any) => Tarea.from(x) ) : [];
  } */
  
  getData():Tarea[]{
    const tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas):[];
  }
  saveData(tareas:Tarea[],tarea?:Tarea):void{
    if(tarea) tareas.push(tarea);
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }

}
