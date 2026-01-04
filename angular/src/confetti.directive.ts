import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { confettō, ConfettiOptions } from '@jojovms/confetti-cannon-core';

@Directive({
    selector: '[confetti]'
})
export class ConfettiDirective {
    @Input('confetti') options: ConfettiOptions = {};
    @Input() confettiTrigger: 'click' | 'hover' | 'manual' = 'click';

    constructor(private el: ElementRef) { }

    @HostListener('click') onClick() {
        if (this.confettiTrigger === 'click') this.fire();
    }

    @HostListener('mouseenter') onHover() {
        if (this.confettiTrigger === 'hover') this.fire();
    }

    public fire() {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confettō.fire({
            origin: { x, y },
            ...this.options
        });
    }
}
