import { confettō, ConfettiOptions } from '@jojovms/confetti-cannon-core';

export const useConfetti = () => {
    const fire = (opts: ConfettiOptions = {}) => {
        confettō.fire(opts);
    };

    return { fire };
};
