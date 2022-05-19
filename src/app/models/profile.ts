/**
 * Interfaz para la modalidad de oficina.
 */
export interface Profile {
    
  /**
   * atributo que hace referencia al id
   */
    _id: string;
    /**
     * atributo  que hace referencia al id de la oficina
     */
    oficinaId: string;

    /**
     * atributo que hace referencia al nombre de la oficina
     */
    name: string;
    /**
     * atributo que hace referencia a la imagen principal
     */
    imagePrincipal: string;
    /**
     * atributo que hace referencia a la ruta de acceso a la imagen
     */
    imagePath: string;

    /**
     * atributo que hace referencia al tipo de extensión de archivo a cargar 
     */
    extPath: string;
  }
  