import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  url: string = '';

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.url);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creación del proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
