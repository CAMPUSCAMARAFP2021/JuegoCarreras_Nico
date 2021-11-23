class coches {
    vmax;
    acc;
    vel = 0;
    dr = 0;
    deacc;
    gas=0;
    constructor(vmax, acc, deacc, ingame, tank) {
        this.vmax = vmax;
        this.acc = acc;
        this.deacc = deacc
        this.ingame = ingame;
        this.tank = tank;
        this.gas = tank;
    }

    acelerar() {
        this.vel = this.vel + this.acc;
        this.vel >= this.vmax ? this.vel = this.vmax : this.vel;
        this.dr = this.dr + this.vel;
        this.gas = this.vel/100
    }

    frenar() {
        this.vel = this.vel - this.acc;
        this.vel <= 0 ? this.vel = 0 : this.vel;
        this.dr = this.dr + this.vel;
    }

    repostar(){
        this.gas+=15
        this.gas>this.tank ? this.gas=this.tank : this.gas;
    }

}
