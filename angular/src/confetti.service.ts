import { Injectable } from '@angular/core';
import { confettō, ConfettiOptions } from '@jojovms/confetti-cannon-core';

@Injectable({
    providedIn: 'root'
})
export class ConfettiService {
    fire(options?: ConfettiOptions) {
        confettō.fire(options);
    }
}
