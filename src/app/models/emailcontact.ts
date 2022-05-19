/**
 * Clase EmailContact
 */
export class Emailcontact {
    /**
     * Constructor para instanciar la clase
     * @param id el id del e-mail
     * @param nombre nombre del cliente
     * @param message mensaje del cliente
     * @param email e-mail del comercial asignado
     * @param telefono teléfono del cliente
     * @param empresa el nombre de la empresa del cliente
     * @param provincia provincia de busqueda
     * @param modalidad modalidad de oficina
     * @param puestos cantidad de puestos
     * @param comercial el comercial asignado
     * @param oficina la oficina seleccionada
     */
    constructor(id = "", nombre = "",  message = "", email = "", telefono="", empresa="", provincia="", modalidad="", puestos="", comercial="", oficina="") {
        this.id = id;
        this.nombre= nombre;
        this.message= message;
        this.email= email;
        this.telefono= telefono;
        this.empresa= empresa;
        this.provincia= provincia;
        this.modalidad= modalidad;
        this.puestos= puestos;
        this.comercial= comercial;
        this.oficina= oficina;
      }
      /**
       * atributo que hace referncia al id del e-mail
       */
      id: string;
      /**
       * atributo que hace referencia al nombre del cliente
       */
      nombre: string;
      /**
       * atributo que hace referencia al mensaje
       */
      message: string;
      /**
       * atributo que hace referencia al e-mail del cliente
       */
      email: string;
      /**
       * atributo que hace referencia al teléfono del cliente
       */
      telefono: string;
      /**
       * atributo que hace referencia al nombre de la empresa
       */
      empresa: string;
      /**
       * atributo que hace referencia al nombre de la provincia
       */
      provincia: string;
      /**
       * atributo que hace referencia a la modalidad de oficina
       */
      modalidad: string;
      /**
       * atributo que hace referencia a la cantidad de puestos
       */
      puestos: string;
      /**
       * atributo que hace referencia al nombre del comercial
       */
      comercial: string;
      /**
       * atributo que hace referencia al nombre de la oficina
       */
      oficina: string;
    
      /**
       * Método para pasar el formato JSON a formato string (cadena).
       * @returns devuelve una cadena a partir del objeto JSON
       */
      public toString() : string {
        return JSON.stringify(this)
      }
    }
    
