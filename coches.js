class coche{
    velocidad=0;
    constructor(piloto,marca,capacidad,gasolina,combustion,velocidad,velocidadmax,peso,ruedas,desgaste,color,acelerar,frenar){
        this.piloto=piloto
        this.marca=marca
        this.capacidad=cap acidad
        this.gasolina=gasolina
        this.combustion=combustion
        this.velocidad=velocidad 
        this.velocidadmax=velocidadmax
        this.peso=peso
        this.ruedas=ruedas
        this.desgaste=desgaste
        this.color=color
        this.acelerar=acelerar
        this.frenar=frenar
    }
    getPiloto(){
        return this.piloto
    }
    getMarca(){
        return this.marca
    }
    getCapacidad(){
        return this.capacidad
    }
    getGasolina(){
        return this.gasolina
    }
    getCombustion(){
        return this.combustion
    }
    getVelocidad(){
        return this.velocidad
    }
    getPeso(){
        return this.peso
    }
    getRuedas(){
        return this.ruedas
    }
    getDesgaste(){
        return this.desgaste
    }
    getColor(){
        return this.color
    }
    getAcelerar(){
        return this.acelerar
    }
    getFrenar(){
        return this.acelerar
    }
    aceleracion(){
        return this.velocidad += this.acelerar
        if(this.velocidad >= this.velocidadmax){
            this.velocidad = this.velocidadmax
        }
    }
    freno(){
        return this.velocidad -= this.frenar
        if(this.velocidad<=0){
            return "Aparcao"
        }
    }
    respostar(){
        if(this.gasolina >= 30){
                //meter un random para ver si necesita repostar
        }
    }
    cambiarRuedas(){
        if(this.ruedas >= 30){
              //meter un random para ver si necesita cambiar ruedas  
        }
    }
    marchaatras(){
        if(this.velocidad < 0){
            return "Estás yendo marcha atrásmn "
        }
    }
}