
/**
 * Clase Empleado
 */
export class Employee {
    /**
     * Constructor para instanciar la clase
     * @param id id del empleado
     * @param nombre nombre del empleado
     * @param usuario nombre de usuario del empleado
     * @param pwd contraseña
     * @param email e-mail del empleado
     * @param role rol del empleado
     */
    constructor(id = "", nombre = "", usuario = "", pwd = "", email = "", role="") {
      this.id = id;
      this.nombre = nombre;
      this.usuario = usuario;
      this.pwd = pwd;
      this.email = email;
      this.role = role;
    }
    
    /**
     * atributo que hace referencia al id del empleado
     */
    id: string;
    /**
     * atributo que hace referencia al nombre del empleado
     */
    nombre: string;
    /**
     * atributo que hace referencia al nombre de usuario del empleado
     */
    usuario: string;
    /**
     * atributo que hace referencia a la contraseña del empleado
     */
    pwd: string;
    /**
     * atributo que hace referencia al e-mail del empleado
     */
    email: string;
    
    /**
     * atributo que hace referencia al rol del empleado
     */
    role: string;
  
    /**
       * Método para pasar el formato JSON a formato string (cadena).
       * @returns devuelve una cadena a partir del objeto JSON
       */
    public toString() : string {
      return JSON.stringify(this)
    }
  }
  