/**
 * Clase Oficinas
 */
export class Oficinas {
    
    /**
     * Constructor para instanciar la clase
     * @param id id de la oficina
     * @param title nombre/titulo de la oficina
     * @param description descripción de la oficina
     * @param metros metros cuadrados de la oficina
     * @param is_destacada oficina destacada (valor si o no)
     * @param road_name nombre de la calle
     * @param zip_code código postal
     * @param province provincia
     * @param city ciudad
     * @param modality modalidad (alquiler o coworking)
     * @param latitude latitud
     * @param longitude longitud
     * @param floor número de planta
     * @param parking_public parking público 
     * @param parking_private parking privado
     * @param underground línea de metro
     * @param train línea de cercanias
     * @param bus número de autobus
     * @param comercial nombre del comercial
     * @param extPath tipo de extensión del archivo a cargar 
     * @param attachment archivo adjunto
     */
    constructor(id = "",  title="",
    description="",
    metros="",
    is_destacada=Boolean("false"),
    road_name="",
    zip_code="",
    province="",
    city="",
    modality="",
    latitude="",
    longitude="",
    floor="",
    parking_public=Boolean("false"),
    parking_private=Boolean("false"),
    underground="",
    train="",
    bus="",
    comercial="",
    extPath="",
    attachment="") {
    
        this.id = id;
        this.title=title;
        this.metros=metros;
        this.description=description;
        this.is_destacada=is_destacada;
        this.road_name=road_name;
        this.zip_code=zip_code;
        this.province=province;
        this.city=city;
        this.modality=modality;
        this.latitude=latitude;
        this.longitude=longitude;
        this.floor=floor;
        this.parking_public=parking_public;
        this.parking_private=parking_private;
        this.underground=underground;
        this.train=train;
        this.bus=bus;
        this.comercial=comercial;
        this.extPath=extPath;
        this.attachment=attachment
        
      }
      /**
       * atributo que hace referencia al id de la oficina
       */
      id: string;
      /**
       * atributo que hace referencia al titulo de la oficina
       */
      title: string;
      /**
       * atributo que hace referencia a los metros cuadrados de la oficina
       */
      metros: string;
      /**
       * atributo que hace referencia a la descripción de la oficina
       */
      description: string;
      /**
       * atributo que hace referencia a la opción destacada
       */
      is_destacada: Boolean;
      /**
       * atributo que hace referencia al nombre de la calle
       */
      road_name:  string;
      /**
       * atributo que hace referencia al código postal
       */
      zip_code:  string;
      /**
       * atributo que hace referencia a la provincia
       */
      province:  string;
      /**
       * atributo que hace referencia a la ciudad
       */
      city:  string;
      /**
       * atributo que hace referencia a la modalidad de la oficina
       */
      modality:  string;
      /**
       * atributo que hace referencia a la coordenada de latituid
       */
      latitude: string;
      /**
       * atributo que hace referencia a la coordenada de longitud
       */
      longitude: string;
      /**
       * atributo que hace referencia al número de planta
       */
      floor: string;
      /**
       * atributo que hace referencia al parking público
       */
      parking_public: Boolean;
      /**
       * atributo que hace referencia al parking privado
       */
      parking_private: Boolean;
      /**
       * atributo que hace referencia a la línea de metro
       */
      underground: string;
      /**
       * atributo que hace referencia a la línea de cercanias
       */
      train:  string;
      /**
       * atributo que hace referencia a la línea de autobus
       */
      bus: string;
      /**
       * atributo que hace referencia al comercial de oficina
       */
      comercial: string;
      /**
       * atributo que hace referencia a la extensión del archivo a cargar
       */
      extPath: string;
      /**
       * atributo que hace referencia al archivo adjunto
       */
      attachment: string;
    
      /**
       * Método para pasar el formato JSON a formato string (cadena).
       * @returns devuelve una cadena a partir del objeto JSON
       */
      public toString() : string {
        return JSON.stringify(this)
    }
}
