import React, { useState, useCallback, useEffect } from 'react';
import './ModalMenu.scss';

export function ModalMenu({ show, onClose, children }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = useCallback(
        event => {
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div
            className={`modal-menu-backdrop ${show ? 'show' : ''}`}
            style={{ display: isVisible }}
            onClick={onClose}
        >
            <div
                className="modal-menu-content"
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
