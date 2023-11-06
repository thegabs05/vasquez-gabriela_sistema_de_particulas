class Particula {
  constructor() {
    this.tamInicial = random(5, 20);
    this.tam = this.tamInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(10, 300));
    this.tiempoDeVida = this.tiempoDeVidaInicial;

    this.pos = createVector(mouseX, mouseY);

    this.vel = createVector(0, random(1, 3));
    this.vel.rotate(random(40));

    this.g = createVector(0, -0.001);
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
    fill(255, 215, random(64, 255), 50);
    noStroke();
    circle(this.pos.x, this.pos.y, this.tamInicial);
  }
}
