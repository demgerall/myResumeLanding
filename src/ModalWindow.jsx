import React, { useState, useCallback, useEffect } from 'react';
import './ModalWindow.scss';

export function ModalWindow({ show, onClose, children }) {
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
            className={`modal-backdrop ${show ? 'show' : ''}`}
            style={{ display: isVisible }}
            onClick={onClose}
        >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="modal-close-button"
                    aria-label="Close modal"
                ></button>
                {children}
                <div style={{ display: 'flex', marginTop: '2%' }}>
                    <a href="#" target="_blank" className="social-button">
                        <a className="social telegram"></a>
                        Telegram
                    </a>

                    <a href="#" target="_blank" className="social-button">
                        <a className="social vk"></a>
                        VK
                    </a>

                    <a href="#" target="_blank" className="social-button">
                        <a className="social github"></a>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
