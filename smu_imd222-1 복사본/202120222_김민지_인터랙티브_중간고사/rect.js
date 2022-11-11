class Rect {
  constructor(x, y, width, height, options) {
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    Composite.add(engine.world, this.body);
  }
  renderBody() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    // rectMode(CENTER)를 안쓰고 중앙기준으로 직사각형 그리기.
    rect(-this.width * 0.5, -this.height * 0.5, this.width, this.height);
    pop();
  }
  renderDirVector() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    line(0, 0, this.width * 0.5, 0);
    pop();
  }
}
