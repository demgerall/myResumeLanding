import React, { useState } from 'react';
import { ModalWindow } from './ModalWindow.jsx';
import './App.scss';

export function App() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <header>
                <div className="menu">
                    <a href="#">Обо мне</a>
                    <a href="#">Услуги</a>
                    <a href="#">Портфолио</a>
                    <a href="#">Отзывы</a>
                    <a href="#">Гарантии</a>
                </div>

                <button onClick={handleOpenModal} className="header_btn">
                    Связаться
                </button>
                <ModalWindow show={showModal} onClose={handleCloseModal}>
                    <h2 style={{ color: '#4824ff', fontSize: '40px' }}>
                        Контакты
                    </h2>
                    <p style={{ fontSize: '22px' }}>
                        Вы можете связаться со мной в Телеграм <br /> или ВК 👇
                    </p>
                </ModalWindow>

                <a href="#" target="_blank" className="icon telegram"></a>
                <a href="#" target="_blank" className="icon vk"></a>
                <a href="#" target="_blank" className="icon github"></a>
                <div className="switch">
                    <div className="theme light"></div>
                </div>
            </header>
        </>
    );
}
