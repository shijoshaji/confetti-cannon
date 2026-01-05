import { Injectable } from '@angular/core';
import { confetto, ConfettiOptions } from '@jojovms/confetti-cannon-core';

@Injectable({
    providedIn: 'root'
})
export class ConfettiService {
    fire(options?: ConfettiOptions) {
        confetto.fire(options);
    }
}
