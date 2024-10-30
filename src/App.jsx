import React, { useState, useEffect, useRef } from 'react';
import { ModalWindow } from './ModalWindow.jsx';
import { AllGalery } from './AllGalery.jsx';
import { Landings } from './Landings.jsx';
import { WebServices } from './WebServices.jsx';
import { Markets } from './Markets.jsx';
import { Review } from './Rewiew.jsx';
import { Theme } from './Theme.jsx';
import './App.scss';
import './index.scss';

export function App() {
    const { theme, setTheme } = Theme();
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const toggleTheme = () => {
        if (isDarkTheme) {
            lightTheme();
        } else {
            darkTheme();
        }
        setIsDarkTheme(!isDarkTheme);
    };

    const lightTheme = () => {
        setTheme('light');
    };
    const darkTheme = () => {
        setTheme('dark');
    };

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

    const containerRef = useRef(null);
    const reviewWidthRef = useRef(0);

    const reviews = [
        <Review
            key={1}
            name="Демид Ч."
            lint="#"
            text="Текст отзыва, оставленного клиентом в Телеграм канале, который можно открыть, 
                  нажав на кнопку в правом верхнем углу этого блока"
        />,
        <Review key={2} name="НеДемид Ч." lint="#" text="Другой отзыв" />,
        <Review
            key={3}
            name="ТожеНеДемид Ч."
            lint="#"
            text="Совсем другой отзыв, отличающийся от двух других отзывов"
        />,
    ];

    const visibleReviews = 3;

    const handleScroll = () => {
        const box = containerRef.current;
        const width = reviewWidthRef.current * visibleReviews;

        if (box.scrollLeft <= 0) {
            box.style.scrollBehavior = 'auto';
            box.scrollLeft = box.scrollWidth - 2 * width;
            box.style.scrollBehavior = 'smooth';
        }

        if (box.scrollLeft >= box.scrollWidth - width) {
            box.style.scrollBehavior = 'auto';
            box.scrollLeft = width;
            box.style.scrollBehavior = 'smooth';
        }
    };

    const btnPrevReview = () => {
        const box = containerRef.current;
        box.scrollLeft -= reviewWidthRef.current;
    };
    const btnNextReview = () => {
        const box = containerRef.current;
        box.scrollLeft += reviewWidthRef.current;
    };

    useEffect(() => {
        const box = containerRef.current;
        const firstReview = box.querySelector('.review-card');
        reviewWidthRef.current = firstReview.clientWidth;
        const width = reviewWidthRef.current * visibleReviews;

        box.scrollLeft = (box.scrollWidth - width) / 2;
        box.addEventListener('scroll', handleScroll);

        return () => {
            box.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [scroll, setScroll] = useState(0);

    const scrollUp = () => {
        setScroll(window.scrollY);
    };

    const upButton = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollUp);
    }, []);

    const toBlock = height => {
        window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header>
                <div className="navigation">
                    <div className="menu">
                        <a onClick={upButton}>Обо мне</a>
                        <a
                            onClick={e =>
                                toBlock(e.target.getAttribute('height'))
                            }
                            height="500"
                        >
                            Услуги
                        </a>
                        <a
                            onClick={e =>
                                toBlock(e.target.getAttribute('height'))
                            }
                            height="1100"
                        >
                            Портфолио
                        </a>
                        <a
                            onClick={e =>
                                toBlock(e.target.getAttribute('height'))
                            }
                            height="1750"
                        >
                            Отзывы
                        </a>
                        <a
                            onClick={e =>
                                toBlock(e.target.getAttribute('height'))
                            }
                            height="2600"
                        >
                            Гарантии
                        </a>
                    </div>

                    <div className="header-buttons">
                        <button
                            onClick={handleOpenModal}
                            className="header_btn"
                        >
                            Связаться
                        </button>

                        <a
                            href="#"
                            target="_blank"
                            className={
                                theme === 'light'
                                    ? 'icon telegram light'
                                    : 'icon telegram dark'
                            }
                        ></a>
                        <a
                            href="#"
                            target="_blank"
                            className={
                                theme === 'light'
                                    ? 'icon vk light'
                                    : 'icon vk dark'
                            }
                        ></a>
                        <a
                            href="#"
                            target="_blank"
                            className={
                                theme === 'light'
                                    ? 'icon github light'
                                    : 'icon github dark'
                            }
                        ></a>
                        <div className="switch" onClick={toggleTheme}>
                            <div
                                className={
                                    theme === 'light'
                                        ? 'theme light'
                                        : 'theme dark'
                                }
                                style={{
                                    transform: isDarkTheme
                                        ? 'translateX(20px)'
                                        : 'translate(0)',
                                }}
                            ></div>
                        </div>
                    </div>
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
                        <p
                            className={
                                theme === 'light'
                                    ? 'icon tag-icon light'
                                    : 'icon tag-icon dark'
                            }
                        ></p>
                        Корпоративные сайты
                    </p>
                    <p className="tag">
                        <p
                            className={
                                theme === 'light'
                                    ? 'icon tag-icon light'
                                    : 'icon tag-icon dark'
                            }
                        ></p>
                        Информационные сайты
                    </p>
                    <p className="tag">
                        <p
                            className={
                                theme === 'light'
                                    ? 'icon tag-icon light'
                                    : 'icon tag-icon dark'
                            }
                        ></p>
                        Онлайн-магазины
                    </p>
                    <p className="tag">
                        <p
                            className={
                                theme === 'light'
                                    ? 'icon tag-icon light'
                                    : 'icon tag-icon dark'
                            }
                        ></p>
                        Веб-сервисы
                    </p>
                </div>
                <div style={{ display: 'flex', marginTop: '16px' }}>
                    <p className="tag">
                        <p
                            className={
                                theme === 'light'
                                    ? 'icon tag-icon light'
                                    : 'icon tag-icon dark'
                            }
                        ></p>
                        Сайты Лендинги
                    </p>
                    <p className="tag">
                        <p
                            className={
                                theme === 'light'
                                    ? 'icon tag-icon light'
                                    : 'icon tag-icon dark'
                            }
                        ></p>
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
                    <h1 className="main-title">ПОРТФОЛИО</h1>
                    <div style={{ position: 'absolute', marginLeft: '-700px' }}>
                        <p className="gradient-part-one"></p>
                        <p className="title-border">ПОРТФ</p>
                    </div>
                    <div style={{ position: 'absolute', marginLeft: '500px' }}>
                        <p className="gradient-part-two"></p>
                        <p className="title-border">ОЛИО</p>
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

            <div className="review-block">
                <h1 style={{ marginBottom: '30px' }}>ОТЗЫВЫ</h1>
                <p className="description" style={{ marginBottom: '20px' }}>
                    Отзывы клиентов, написанные со своих
                    <span className="selecting"> личных аккаунтов </span>
                    Телеграм. Все прозрачно! <br /> Любой отзыв можно
                    <span className="selecting"> открыть </span> в Телеграм и
                    <span className="selecting"> спросить </span> об
                    впечатлениях работы со мной <br /> у создателя отзыва лично.
                </p>

                <div className="review-carousel">
                    <div className="review-container" ref={containerRef}>
                        {reviews.slice(-visibleReviews)}
                        {reviews}
                        {reviews.slice(0, visibleReviews)}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p
                        className="next-button"
                        style={{ transform: 'rotate(180deg)' }}
                    >
                        <p
                            className="arrow-next-icon"
                            onClick={btnPrevReview}
                        ></p>
                    </p>
                    <p className="next-button">
                        <p
                            className="arrow-next-icon"
                            onClick={btnNextReview}
                        ></p>
                    </p>
                </div>
            </div>

            <div className="guarantees-block">
                <h1 style={{ fontSize: '52px', paddingBottom: '20px' }}>
                    ГАРАНТИИ
                </h1>

                <ol className="guarantees-points">
                    <li className="point">
                        Оплату принимаю через платежную систему
                        <span style={{ color: '#4824ff' }}> Название*</span>,
                        которая контролирует <br /> безопасность денежных
                        переводов
                    </li>
                    <li className="point">
                        Убедиться в моей отвественности и профессионализме можно
                        лично в любой момент, <br />
                        <span style={{ color: '#4824ff' }}>
                            {' '}
                            написав заказчикам{' '}
                        </span>
                        , которые оставили свои отзывы.
                    </li>
                    <li className="point">
                        Все
                        <span style={{ color: '#4824ff' }}>
                            {' '}
                            авторские права{' '}
                        </span>
                        на работу переходят заказчику после выполнения заказа.
                    </li>
                    <li className="point">
                        В своих работах использую материалы строго{' '}
                        <span style={{ color: '#4824ff' }}>
                            {' '}
                            разрешенные для личного <br /> и коммерческого
                            использования{' '}
                        </span>
                    </li>
                </ol>
            </div>

            <footer>demgerall</footer>

            <button
                className={
                    scroll < 1960
                        ? ''
                        : theme === 'light'
                          ? 'btn-up light'
                          : 'btn-up dark'
                }
                onClick={upButton}
            ></button>

            <ModalWindow show={showModal} onClose={handleCloseModal}>
                <h2 style={{ color: '#4824ff', fontSize: '40px' }}>Контакты</h2>
                <p style={{ fontSize: '22px' }}>
                    Вы можете связаться со мной в Телеграм <br /> или ВК 👇
                </p>
            </ModalWindow>
        </>
    );
}
