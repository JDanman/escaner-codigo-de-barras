export class ScanData {
    //Variables a Utilizar
    info: string;
    tipo: string;

    constructor(texto: string) {
        //Valores por defecto
        this.tipo = "No definido";
        this.info = texto;

        //Tipos de Enlaces (Escaneos)
        if( texto.startsWith("http") ){
          this.tipo = "http";
        }else if( texto.startsWith("geo") ){
          this.tipo = "mapa";
        }else if( texto.startsWith("BEGIN:VCARD") ){
          this.tipo = "contacto";
        }else if( texto.startsWith("MATMSG") ){
          this.tipo = "email";
        }

    }
}
