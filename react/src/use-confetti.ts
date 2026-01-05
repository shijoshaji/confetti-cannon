import { confetto, ConfettiOptions } from '@jojovms/confetti-cannon-core';

export const useConfetti = () => {
    const fire = (opts: ConfettiOptions = {}) => {
        confetto.fire(opts);
    };

    return { fire };
};
