class Particula {
  constructor() {
    this.tamInicial = random(5, 25);
    this.tam = this.tamInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(10, 300));
    this.tiempoDeVida = this.tiempoDeVidaInicial;

    this.pos = createVector(mouseX, mouseY);

    this.vel = createVector(0, random(-0.01, -0.2));
    this.vel.rotate(random(5, 15));

    this.g = createVector(0, -0.06);
  }
  // Metodo -> method update
  update() {
    this.vel.add(this.g);
    this.pos.add(this.vel);

    this.tam = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      0,
      this.tamInicial
    );

    this.tiempoDeVida -= 1;

    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      circle(this.pos.x, this.pos.y, this.tamInicial);
    }
    //print("ups, me mori!");
  }
  // Metodo -> method display
  display() {
    fill(random(255, 0), 255, 0, 70);
    noStroke();
    circle(this.pos.x, this.pos.y, this.tamInicial);
  }
}
