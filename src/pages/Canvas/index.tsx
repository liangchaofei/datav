import { useEffect, useRef } from 'react';
const Canvas = () => {
  const canvasRef: any = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 50, 50);

    // 绘制线段
    ctx.beginPath();
    ctx.lineWidth = 1; // 线的宽度
    ctx.strokeStyle = 'blue'; // 颜色
    ctx.moveTo(100, 100); // 起点
    ctx.lineTo(250, 75); // 中间点
    ctx.lineTo(300, 100); // 终点
    ctx.stroke(); // 绘制

    // 绘制圆形
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(400, 100, 50, 0, Math.PI * 2, true); // 圆心坐标，半径，起始角度，结束角度，是否逆时针
    ctx.stroke();
    ctx.fill();

    // 绘制点
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(500, 100, 5, 0, Math.PI * 2, true);
    ctx.fill();
  }, []);
  return <canvas ref={canvasRef} width="800" height="800" />;
};

export default Canvas;
