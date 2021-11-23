class carrera {

    coches =  [new Coche(200,4), new Coche(230, 3)];
    resultados = [];
    distancia = 100;
    instante = 0;

    constructor(distance){
        this.distancia=distance;
    }
    start(){
        while (this.coches.length=== this.resultados.length) {
            this.instante++;
            this.coche.map((coche)=>{
                coche.acelerar();
                coche.dr < this.distancia || this.resultados.push({instante:this.instante,coche})
            })

        }

    }
}