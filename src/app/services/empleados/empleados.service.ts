import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


interface Empleado{
  id: number;
  name: String;
  jobTitle: String;
  department: String;
}

@Injectable({
  providedIn: 'root'
})


export class EmpleadosService {

  constructor(private http: HttpClient) {}
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>('http://localhost:4200/assets/data/empleados.json')}
}
