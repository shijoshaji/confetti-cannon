import { Particle } from './particle';

export interface ConfettiOptions {
    particleCount?: number;
    spread?: number; // in degrees
    startVelocity?: number;
    colors?: string[];
    origin?: { x?: number; y?: number };
    angle?: number; // in degrees
    gravity?: number;
    decay?: number;
    ticks?: number;
    zIndex?: number;
}

export interface AttachOptions extends ConfettiOptions {
    on?: 'click' | 'mouseover' | 'mouseenter';
}

export class Confettō {
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private particles: Particle[] = [];
    private animationFrameId: number | null = null;
    private resizeObserver: ResizeObserver | null = null;

    constructor() { }

    private initCanvas(zIndex: number) {
        if (this.canvas) return;

        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = zIndex.toString();

        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.resizeCanvas();

        this.resizeObserver = new ResizeObserver(() => this.resizeCanvas());
        this.resizeObserver.observe(document.body);
    }

    private resizeCanvas() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    public fire(opts: ConfettiOptions = {}) {
        const options = {
            particleCount: 50,
            spread: 45,
            startVelocity: 45,
            colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
            origin: {},
            angle: 90,
            gravity: 1,
            decay: 0.02,
            zIndex: 100,
            ...opts
        };

        this.initCanvas(options.zIndex);

        // Origin calculation (default to bottom center if nothing provided)
        const originX = options.origin.x !== undefined ? options.origin.x * window.innerWidth : window.innerWidth / 2;
        const originY = options.origin.y !== undefined ? options.origin.y * window.innerHeight : window.innerHeight;

        // Convert degrees to radians
        const angleRad = (options.angle * Math.PI) / 180;
        const spreadRad = (options.spread * Math.PI) / 180;

        for (let i = 0; i < options.particleCount; i++) {
            // Random angle within spread
            const pAngle = angleRad + (Math.random() - 0.5) * spreadRad;

            // Random velocity variation
            const pVelocity = options.startVelocity * (0.5 + Math.random() * 0.5);

            this.particles.push(new Particle({
                x: originX,
                y: originY,
                color: options.colors[Math.floor(Math.random() * options.colors.length)],
                angle: -pAngle, // Canvas Y is inverted, so negative angle shoots up
                speed: pVelocity,
                gravity: options.gravity,
                decay: options.decay
            }));
        }

        if (!this.animationFrameId) {
            this.animate();
        }
    }

    private animate = () => {
        if (!this.ctx || !this.canvas) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, index) => {
            p.update();
            p.draw(this.ctx!);

            if (!p.isAlive()) {
                this.particles.splice(index, 1);
            }
        });

        if (this.particles.length > 0) {
            this.animationFrameId = requestAnimationFrame(this.animate);
        } else {
            this.reset();
        }
    };

    public reset() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        this.particles = [];

        if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        // Optional: remove canvas to save DOM nodes, or keep it for next time
        // For now, we keep it but clear it.
    }

    public dispose() {
        this.reset();
        if (this.canvas) {
            this.canvas.remove();
            this.canvas = null;
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    public attach(target: string | HTMLElement, options: AttachOptions = {}) {
        const element = typeof target === 'string' ? document.querySelector(target) as HTMLElement : target;
        if (!element) return;

        const eventType = options.on || 'click';

        element.addEventListener(eventType, () => {
            const rect = element.getBoundingClientRect();
            // Default to center of element
            const x = (rect.left + rect.width / 2) / window.innerWidth;
            const y = (rect.top + rect.height / 2) / window.innerHeight;

            // If it's a mouseover, maybe shoot from the top?
            // Let's stick to center or allow override via options.origin if passed, 
            // but usually origin is auto-calculated here.
            // We merge options, but override origin with our calculated one UNLESS specifically provided.
            // Actually, let's just use the calculated one as default.

            this.fire({
                origin: { x, y },
                ...options
            });
        });
    }
}

export const confettō = new Confettō();
