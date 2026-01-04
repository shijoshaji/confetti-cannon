import { NgModule } from '@angular/core';
import { ConfettiDirective } from './confetti.directive';

@NgModule({
    declarations: [ConfettiDirective],
    exports: [ConfettiDirective]
})
export class ConfettiModule { }
