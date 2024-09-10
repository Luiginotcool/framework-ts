class Graphics {
    static context: CanvasRenderingContext2D;
    static fg: string;
    static bg: string;

    static init(canvas: HTMLCanvasElement): void {
        Graphics.context = canvas.getContext("2d")!;
        Graphics.fg = "black";
        Graphics.bg = "#776065";
    }

    static drawArrow(startX: number, startY: number, endX: number, endY: number, arrowSize: number): void {
        var context = Graphics.context;
        context.fillStyle = Graphics.fg
        // Calculate arrow angle
        var angle = Math.atan2(endY - startY, endX - startX);
    
        // Draw line
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    
        // Draw arrowhead
        context.beginPath();
        context.moveTo(endX, endY);
        context.lineTo(endX - arrowSize * Math.cos(angle - Math.PI / 6), endY - arrowSize * Math.sin(angle - Math.PI / 6));
        context.lineTo(endX - arrowSize * Math.cos(angle + Math.PI / 6), endY - arrowSize * Math.sin(angle + Math.PI / 6));
        context.closePath();
        context.fill();
    }

    static line(x1: number, y1: number, x2: number, y2: number, colour = Graphics.fg): void {
        let context = Graphics.context;
        context.strokeStyle = colour;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2,y2);
        context.stroke();
    }
    
    static drawFps(fps: number): void {
        Graphics.context.fillStyle = "BLACK";
        Graphics.context.fillRect(8,16,43,18);
        Graphics.context.fillStyle = "white";
        Graphics.context.font = "15px Arial";
        Graphics.context.fillText(`${fps.toFixed(0)} fps`, 10, 30);
    }

    static background(colour = Graphics.bg) {
        if (!App.canvas) {
            console.log("NO CANVAS")
            return;
        }
        console.log("FILLING")
        Graphics.context.fillStyle = colour;
        Graphics.context.fillRect(0, 0, App.canvas.width, App.canvas.height);
    }
    
    static fillRect(x: number, y: number, w: number, h: number, colour = Graphics.fg) {
        Graphics.context.fillStyle = colour;
        Graphics.context.fillRect(x, y, w, h)
    }
    
    static drawCircle(x:number, y:number, radius:number, fill: null | string = null, stroke = Graphics.fg, strokeWidth = 1) {
        let ctx = Graphics.context
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
        if (fill) {
          ctx.fillStyle = fill
          ctx.fill()
        }
        if (stroke) {
          ctx.lineWidth = strokeWidth
          ctx.strokeStyle = stroke
          ctx.stroke()
        }
    }
}