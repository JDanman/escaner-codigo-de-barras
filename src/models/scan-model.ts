export class ScanData {
    info: string;
    tipo: string;

    constructor(texto: string) {
        this.tipo = "No definido";
        this.info = texto;

        if(texto.startsWith("http")){
            this.tipo = "http";
        }else if(texto.startsWith("geo")){
            this.tipo = "mapa";
        }
    }
}
