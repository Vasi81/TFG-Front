import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../services/oficinas.service';
import { NgForm } from '@angular/forms';
import { Oficinas } from '../../models/oficinas';
/**
 * HomeComponent es el componente de la página principal
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OficinasService],
})
export class HomeComponent implements OnInit {
  /**
   * Constructor para instanciar la clase.
   * @param oficinasService servicio asociado al componente
   */
  constructor(public oficinasService: OficinasService) {}

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    this.getOficinasDestacadas('Alquiler');
    this.getOficinasDestacadas('Coworking');
  }

  /**
   * Método para obtener todas las oficinas.
   */
  getOficinas() {
    this.oficinasService.getOficinas().subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  /**
   * Método para obtener las oficinas destacadas por modalidad (alquler o coworking).
   * @param modality modalidad de la oficina
   */
  getOficinasDestacadas(modality: String) {
    this.oficinasService.getOficinasDestacadas(modality).subscribe((res) => {
      if (modality == 'Alquiler') {
        this.oficinasService.oficinasDestacadasAlquiler = res;
      } else this.oficinasService.oficinasDestacadasCoworking = res;
    });
  }
}
