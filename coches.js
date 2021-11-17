class coche{
    velocidad=0;
    constructor(marca,matricula,n_ruedas,n_puertas,anyos,velocidad,){
        this.marca=marca;
        this.matricula=matricula
        this.n_ruedas=n_ruedas
        this.n_puertas=n_puertas
        this.anyos=anyos
        this.velocidad=velocidad
    }
    acelerar(){
        return this.velocidad+=30
    }
    frenar(){
        return this.velocidad=0
    }
    aparcar(){
        this.frenar
        return "aparcao"
    }
}