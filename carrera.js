class carrera{
    vias = [new vias('sencillo',3,['recta','recta','curva','recta','recta','curva','recta','recta','curva','recta','recta','curva']),]
    coches =  [new mercedes(300,4,6,true),new honda(275,6,4,true)];
    resultados = [];
    instante = 0;
    corriendo=true;

    start(){
        while (this.corriendo) {
            this.instante++;
            console.log(this.resultados.length)
            this.coches.map((coche)=>{
                if(coche.ingame==true){
                    console.log(coche.jugabilidad)
                    console.log(`${coche.name }->${coche.dr}; v:${coche.vel}`)
                    if(coche.dr<this.vias.distancia ){
                        this.juego(coche,this.vias.pista[parseInt(coche.dr/100)]);
                    }else{
                        coche.ingame=false;
                        this.resultados.push({instante:this.instante,coche})
                        if(this.resultados.length == this.coches.length){
                            this.corriendo=false;
                        }
                    }
                }

            })
        }
        console.log(this.resultados)
    }
    juego(coche,posicion) {
        switch(posicion) {
            case 'recta':
                coche.acelerar();
                break;
            case 'curva':
                coche.frenar();
                break;
        }
    }
}