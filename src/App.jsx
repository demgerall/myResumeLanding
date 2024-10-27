import React, { useState } from 'react';
import { ModalWindow } from './ModalWindow.jsx';
import { AllGalery } from './AllGalery.jsx';
import { Landings } from './Landings.jsx';
import { WebServices } from './WebServices.jsx';
import { Markets } from './Markets.jsx';
import './App.scss';
import './index.scss';

export function App() {
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const renderComponents = () => {
        switch (selectedCategory) {
            case 'All':
                return <AllGalery />;
            case 'Landings':
                return <Landings />;
            case 'Markets':
                return <Markets />;
            case 'WebServices':
                return <WebServices />;
            default:
                return <AllGalery />;
        }
    };

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

                <a href="#" target="_blank" className="icon telegram"></a>
                <a href="#" target="_blank" className="icon vk"></a>
                <a href="#" target="_blank" className="icon github"></a>
                <div className="switch">
                    <div className="theme light"></div>
                </div>
            </header>

            <div className="welcome-block">
                <div className="first-block">
                    <h1>
                        Frontend-Developer
                        <span className="title"> demgerall</span>
                    </h1>
                    <h2 style={{ marginBottom: '7%', marginTop: '7%' }}>
                        Создаю{' '}
                        <span style={{ color: '#4824ff' }}>невероятные </span> и
                        <span style={{ color: '#4824ff' }}> привлекающие </span>
                        сайты <br /> под ваши запросы
                    </h2>
                    <h3>
                        Занимаюсь веб-разработкой <br /> на протяжении
                        <span style={{ color: '#4824ff' }}> года </span>
                    </h3>
                </div>
                <div className="main-image-box">
                    <img
                        draggable="false"
                        className="first-image-layer"
                        src="./images/my_image.png"
                    />
                </div>
            </div>

            <div className="service-block" draggable="false">
                <h1 style={{ fontSize: '52px', marginBottom: '20px' }}>
                    УСЛУГИ
                </h1>
                <p style={{ fontSize: '27px', marginBottom: '20px' }}>
                    Создаю
                    <span style={{ color: '#4824ff' }}> сайты </span>
                    по следующим направлениям:
                </p>

                <div style={{ display: 'flex' }}>
                    <p className="tag">
                        <p className="tag-icon"></p>
                        Корпоративные сайты
                    </p>
                    <p className="tag">
                        <p className="tag-icon"></p>
                        Информационные сайты
                    </p>
                    <p className="tag">
                        <p className="tag-icon"></p>
                        Онлайн-магазины
                    </p>
                    <p className="tag">
                        <p className="tag-icon"></p>
                        Веб-сервисы
                    </p>
                </div>
                <div style={{ display: 'flex', marginTop: '16px' }}>
                    <p className="tag">
                        <p className="tag-icon"></p>
                        Сайты Лендинги
                    </p>
                    <p className="tag">
                        <p className="tag-icon"></p>
                        Многостраничные сайты
                    </p>
                </div>
                <p style={{ fontSize: '27px', marginTop: '20px' }}>
                    Открыт для обсуждения создания сайтов и по другим
                    направлениям <br />
                    Детальней готов обсудить при{' '}
                    <span
                        style={{ color: '#4824ff', cursor: 'pointer' }}
                        onClick={handleOpenModal}
                    >
                        личной переписке
                    </span>
                    .
                </p>
            </div>

            <div className="portfolio-block" style={{ marginBottom: '40px' }}>
                <div className="first-block">
                    <h1 className="main-title">Портфолио</h1>
                    <div style={{ position: 'absolute', marginLeft: '-700px' }}>
                        <p className="gradient-part-one"></p>
                        <p className="title-border">Портф</p>
                    </div>
                    <div style={{ position: 'absolute', marginLeft: '500px' }}>
                        <p className="gradient-part-two"></p>
                        <p className="title-border">олио</p>
                    </div>
                    <img
                        src="./icons/array.swg"
                        alt=""
                        className="array-icon"
                        draggable="false"
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <p
                        className={`tag ${selectedCategory === 'All' ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory('All')}
                    >
                        Все работы
                    </p>
                    <p
                        className={`tag ${selectedCategory === 'Landings' ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory('Landings')}
                    >
                        Лендинги
                    </p>
                    <p
                        className={`tag ${selectedCategory === 'Markets' ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory('Markets')}
                    >
                        Онлайн-магазины
                    </p>
                    <p
                        className={`tag ${selectedCategory === 'WebServices' ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory('WebServices')}
                    >
                        Веб-сервисы
                    </p>
                </div>

                <div className="content" style={{ margin: '0 -5vw' }}>
                    {renderComponents()}
                </div>
            </div>

            <ModalWindow show={showModal} onClose={handleCloseModal}>
                <h2 style={{ color: '#4824ff', fontSize: '40px' }}>Контакты</h2>
                <p style={{ fontSize: '22px' }}>
                    Вы можете связаться со мной в Телеграм <br /> или ВК 👇
                </p>
            </ModalWindow>
        </>
    );
}
