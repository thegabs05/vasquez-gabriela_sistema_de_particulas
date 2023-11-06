class Particula {
  constructor() {
    this.estaMuerta = false;
    this.tiempoDeVida = 10;

    this.pos = createVector(width / 2, height / 2);

    this.vel = createVector(0, random(5, 20));
    this.vel.rotate(random(360));

    this.g = createVector(0, 0.5);
  }
  // Metodo -> method update
  update() {
    this.vel.add(this.g);
    this.pos.add(this.vel);

    this.tiempoDeVida -= 1;
    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      
    }
    print("ups, me mori!");
  }
  // Metodo -> method display
  display() {
    circle(this.pos.x, this.pos.y, 20);
  }
}
