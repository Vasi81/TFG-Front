import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../services/oficinas.service';

/**
 * GooglemapsComponent
 */
@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css'],
})
export class GooglemapsComponent implements OnInit {
  // Prueba Google Maps
  /**
   * @ignore
   */
  title = 'gmaps';
  /**
   * @ignore
   */
  lat = 40.397967334367756;
  /**
   * @ignore
   */
  lng = -3.6060971307418024;
  /**
   * @ignore
   */
  zoom = 10;
  /**
   * @ignore
   */
  label = {
    color: '#ee4646',
    fontFamily: '',
    fontSize: '10px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    text: 'texto por defecto',
  };
  /**
   * atributo que hace referencia al array de marcadores del mapa de google maps
   */
  markers: any[] = [];

  /**
   * Constructor para instanciar la clase.
   * @param oficinasService servicio asociado al componente
   */
  constructor(public oficinasService: OficinasService) {}

  /**
   * atributo que hace referencia al tipo o modalidad de oficina
   */
  typeOficina: string = '';

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
   * Método para obtener en el mapa todas las oficinas destacadas
   * @param modality la modalidad de la oficina
   */
   getOficinasDestacadas(modality: String) {
    this.oficinasService.getOficinasDestacadas(modality).subscribe((res) => {
      if (modality=="Alquiler"){
        this.oficinasService.oficinasDestacadasAlquiler = res;

      } else{
        this.oficinasService.oficinasDestacadasCoworking = res;
      }  

        for(let dataA in res){
          this.markers.push({
            lat: +res[dataA].latitude,
            long: +res[dataA].longitude,
            title:  res[dataA].title ,
            label: {
              color: '#FF8C00',
              text: res[dataA].title,
              fontFamily: '',
              fontSize: '20px',
              fontWeight: 'bold',
              letterSpacing:'0.5px'
            }
        })
        }
    });
  }
}
