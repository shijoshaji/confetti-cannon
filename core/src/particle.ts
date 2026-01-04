
export interface ParticleOptions {
    x: number;
    y: number;
    color: string;
    angle: number;  // in radians
    speed: number;
    decay: number;
    gravity: number;
}

export class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    alpha: number = 1;
    decay: number;
    gravity: number;
    rotation: number;
    rotationSpeed: number;

    constructor(options: ParticleOptions) {
        this.x = options.x;
        this.y = options.y;
        this.color = options.color;
        this.decay = options.decay;
        this.gravity = options.gravity;

        // Calculate velocity based on angle and speed
        this.vx = Math.cos(options.angle) * options.speed;
        this.vy = Math.sin(options.angle) * options.speed;

        // Random rotation
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 10;
    }

    update() {
        // Apply physics
        this.vx *= 0.98; // Air resistance (friction)
        this.vy += this.gravity; // Gravity

        this.x += this.vx;
        this.y += this.vy;

        this.rotation += this.rotationSpeed;
        this.alpha -= this.decay;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;

        // Draw a simple square for now (can be customized later)
        const size = 6;
        ctx.fillRect(-size / 2, -size / 2, size, size);

        ctx.restore();
    }

    isAlive(): boolean {
        return this.alpha > 0;
    }
}
