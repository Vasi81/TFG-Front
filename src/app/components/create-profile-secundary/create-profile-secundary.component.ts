import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Profile } from '../../models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

/**
 * CreateProfileSecundaryComponent
 */
@Component({
  selector: 'app-create-profile-secundary',
  templateUrl: './create-profile-secundary.component.html',
  styleUrls: ['./create-profile-secundary.component.css'],
})
export class CreateProfileSecundaryComponent implements OnInit {
  /**
   * atributo que hace referencia al perfil
   */
  profile: Profile | undefined;

  /**
   * atributo que hace referencia a los datos de la imagen
   */
  imageData: string = '';
  /**
   * atributo que hace referencia al id de la oficina
   */
  idOficina: string = '';

  /**
   * Objeto de la clase FormGroup. El constructor de la clase contiene objetos de la clase FormControl.
   */
  form = new FormGroup({
    oficinaId: new FormControl(null),
    name: new FormControl(null),
    imagePrincipal: new FormControl(null),
    image: new FormControl(null),
  });

  /**
   * Constructor para instanciar la clase.
   * @param profileService servicio asociado al componente
   * @param profilesService servicio asociado al componente
   * @param route  ruta asociada al componente
   */
  constructor(
    public profileService: ProfileService,
    public profilesService: ProfileService,
    private route: ActivatedRoute
  ) {}

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML, una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit(): void {
    this.idOficina = this.route.snapshot.params['id'];

    this.form = new FormGroup({
      oficinaId: new FormControl(null),
      name: new FormControl(null),
      imagePrincipal: new FormControl(null),
      image: new FormControl(null),
    });
  }

  /**
   * Método para seleccionar el archivo de la imagen a cargar.
   * @param event evento
   */
  onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    //const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Método para enviar el formulario con el archivo seleccionado de la imagen.
   */
  onSubmit() {
    this.profileService.addProfile(
      this.idOficina,
      this.form.value.name,
      'no',
      this.form.value.image
    );
    this.form.reset();
    this.imageData = '';
    this.getProfilesByOficinaId( this.idOficina);
  }


  /**
   * Método para obtener el perfil de oficina cuyo id se ha pasado como parámetro.
   * @param oficinaId id de la oficina
   */
     getProfilesByOficinaId(oficinaId: string) {
      this.profilesService.getProfilesByOficinaId(oficinaId).subscribe((res) => {
        this.profilesService.profiles = res;
      });
    }
}
