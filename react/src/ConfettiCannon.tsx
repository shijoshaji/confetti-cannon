import { useEffect, useRef, ReactNode } from 'react';
import { ConfettiOptions, confetto } from '@jojovms/confetti-cannon-core';

export interface ConfettiCannonProps extends ConfettiOptions {
    /**
     * Whether to fire confetti immediately when the component mounts.
     * @default true (if no children provided)
     */
    fireOnMount?: boolean;
    /**
     * The event that triggers the confetti when wrapping children.
     * @default 'click'
     */
    trigger?: 'click' | 'hover' | 'manual';
    /**
     * The content to wrap. If provided, the component renders a container.
     */
    children?: ReactNode;
    /**
     * Class name for the container div.
     */
    className?: string;
}

export const ConfettiCannon = ({
    fireOnMount,
    trigger = 'click',
    children,
    className,
    ...props
}: ConfettiCannonProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    // Default fireOnMount to true if no children, false if children
    const shouldFireOnMount = fireOnMount ?? !children;

    useEffect(() => {
        if (shouldFireOnMount) {
            confetto.fire(props);
        }
    }, [shouldFireOnMount]);

    const fireAtElement = () => {
        if (!elementRef.current) return;
        const rect = elementRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetto.fire({
            origin: { x, y },
            ...props
        });
    };

    const handleClick = () => {
        if (trigger === 'click') fireAtElement();
    };

    const handleMouseEnter = () => {
        if (trigger === 'hover') fireAtElement();
    };

    if (!children) return null;

    return (
        <div
            ref={elementRef}
            className={className}
            style={{ display: 'inline-block' }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </div>
    );
};
