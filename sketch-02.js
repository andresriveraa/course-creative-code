const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const x = width,
      y = height * 0.5,
      w = width * 0.3,
      h = height * 0.3;
    context.fillStyle = "tomato";

    context.save();
    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.rotate(-0.5);
    context.restore();
    context.translate(100, 400);

    context.beginPath();
    context.arc(0, 0, 50, 0, Math.PI * 2);
    context.fill();
  };
};

canvasSketch(sketch, settings);
