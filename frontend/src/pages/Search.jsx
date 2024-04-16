
import userIcon from '../assets/iconuser.jpg'
import rightarr from '../assets/Arrow 1.svg'
import leftarr from '../assets/Arrow 2.svg'
import notLiked from '../assets/bttncirclemed.svg'

import {useSwipeable} from "react-swipeable";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


const testArr = {
    one: [
        {
            title: "1",
            company: "BCD Solutions",
            description: "1",
            salary: "1"
        },
        {
            title: "2",
            company: "BCD Solutions",
            description: "2",
            salary: "2"
        },
        {
            title: "3",
            company: "BCD Solutions",
            description: "3",
            salary: "3"
        },
    ],
    two: [
        {
            title: "4",
            company: "BCD Solutions",
            description: "4",
            salary: "4"
        },
        {
            title: "5",
            company: "BCD Solutions",
            description: "5",
            salary: "5"
        },
        {
            title: "6",
            company: "BCD Solutions",
            description: "6",
            salary: "6"
        },
    ]
}


let vacanciesByCategory = {
    fullstack: [
        {
            title: "Fullstack Developer",
            company: "ABC Company",
            description: "Разработка веб-приложений с использованием технологий фронтенда и бэкенда",
            salary: "$5000"
        },
        {
            title: "Fullstack Developer",
            company: "DEF Co.",
            description: "Работа над различными проектами, включающими разработку фронтенда и бэкенда",
            salary: "$5500"
        },
        {
            title: "Fullstack Engineer",
            company: "MNO Solutions",
            description: "Разработка масштабируемых веб-приложений с нуля",
            salary: "$5500"
        },
        {
            title: "Fullstack Developer",
            company: "QRS Tech",
            description: "Создание масштабируемых веб-приложений с использованием современных технологий",
            salary: "$5200"
        },
        {
            title: "Fullstack Developer",
            company: "VWX Industries",
            description: "Работа над широким спектром проектов, включающих разработку фронтенда и бэкенда",
            salary: "$5000"
        },
        {
            title: "Fullstack Engineer",
            company: "HIJ Systems",
            description: "Работа над сложными веб-приложениями с акцентом на фронтенд и бэкенд",
            salary: "$5400"
        },
        {
            title: "Fullstack Developer",
            company: "LMN Solutions",
            description: "Работа над инновационными веб-проектами, требующими знаний фронтенда и бэкенда",
            salary: "$5100"
        },
        {
            title: "Fullstack Developer",
            company: "ABC Company",
            description: "Разработка веб-приложений с использованием технологий фронтенда и бэкенда",
            salary: "$5000"
        },
        {
            title: "Fullstack Developer",
            company: "DEF Co.",
            description: "Работа над различными проектами, включающими разработку фронтенда и бэкенда",
            salary: "$5500"
        },
        {
            title: "Fullstack Engineer",
            company: "MNO Solutions",
            description: "Разработка масштабируемых веб-приложений с нуля",
            salary: "$5500"
        },
        {
            title: "Fullstack Developer",
            company: "QRS Tech",
            description: "Создание масштабируемых веб-приложений с использованием современных технологий",
            salary: "$5200"
        },
        {
            title: "Fullstack Developer",
            company: "VWX Industries",
            description: "Работа над широким спектром проектов, включающих разработку фронтенда и бэкенда",
            salary: "$5000"
        },
        {
            title: "Fullstack Engineer",
            company: "HIJ Systems",
            description: "Работа над сложными веб-приложениями с акцентом на фронтенд и бэкенд",
            salary: "$5400"
        },
        {
            title: "Fullstack Developer",
            company: "LMN Solutions",
            description: "Работа над инновационными веб-проектами, требующими знаний фронтенда и бэкенда",
            salary: "$5100"
        },
    ],
    web: [
        {
            title: "Web Developer",
            company: "XYZ Inc.",
            description: "Создание и поддержка веб-сайтов с использованием HTML, CSS и JavaScript",
            salary: "$4000"
        },
        {
            title: "Web Developer",
            company: "GHI Ltd.",
            description: "Дизайн и разработка удобных веб-сайтов для клиентов",
            salary: "$4200"
        },
        {
            title: "Web Developer",
            company: "KLM Co.",
            description: "Сотрудничество с дизайнерами для создания визуально привлекательных и функциональных веб-сайтов",
            salary: "$4200"
        },
        {
            title: "Web Developer",
            company: "TUV Inc.",
            description: "Дизайн и разработка веб-сайтов с акцентом на пользовательский опыт",
            salary: "$4300"
        },
        {
            title: "Web Developer",
            company: "FGH Co.",
            description: "Создание веб-сайтов, соответствующих требованиям клиентов и дизайнерских спецификациях",
            salary: "$4400"
        },
        {
            title: "Web Developer",
            company: "OPQ Corp.",
            description: "Создание и поддержка веб-сайтов с акцентом на функциональность и производительность",
            salary: "$4100"
        },
        {
            title: "Web Developer",
            company: "XYZ Inc.",
            description: "Создание и поддержка веб-сайтов с использованием HTML, CSS и JavaScript",
            salary: "$4000"
        },
        {
            title: "Web Developer",
            company: "GHI Ltd.",
            description: "Дизайн и разработка удобных веб-сайтов для клиентов",
            salary: "$4200"
        },
        {
            title: "Web Developer",
            company: "KLM Co.",
            description: "Сотрудничество с дизайнерами для создания визуально привлекательных и функциональных веб-сайтов",
            salary: "$4200"
        },
        {
            title: "Web Developer",
            company: "TUV Inc.",
            description: "Дизайн и разработка веб-сайтов с акцентом на пользовательский опыт",
            salary: "$4300"
        },
        {
            title: "Web Developer",
            company: "FGH Co.",
            description: "Создание веб-сайтов, соответствующих требованиям клиентов и дизайнерских спецификациях",
            salary: "$4400"
        },
        {
            title: "Web Developer",
            company: "OPQ Corp.",
            description: "Создание и поддержка веб-сайтов с акцентом на функциональность и производительность",
            salary: "$4100"
        },
    ],
    back: [
        {
            title: "Back-end Developer",
            company: "123 Corp.",
            description: "Создание серверных приложений и баз данных для веб-приложений",
            salary: "$4500"
        },
        {
            title: "Back-end Developer",
            company: "456 Enterprises",
            description: "Реализация серверной логики и интеграция фронтенд элементов",
            salary: "$4600"
        },
        {
            title: "Back-end Developer",
            company: "BCD Solutions",
            description: "Создание и поддержка серверных приложений и баз данных",
            salary: "$4600"
        },
        {
            title: "Back-end Developer",
            company: "NOP Innovations",
            description: "Создание и поддержка серверной логики для веб-приложений",
            salary: "$4700"
        },
        {
            title: "Back-end Developer",
            company: "WXY Solutions",
            description: "Реализация и поддержка серверных компонентов для веб-приложений",
            salary: "$4500"
        },
        {
            title: "Back-end Developer",
            company: "IJK Innovations",
            description: "Проектирование и реализация серверной архитектуры для веб-приложений",
            salary: "$4800"
        },
        {
            title: "Back-end Developer",
            company: "123 Corp.",
            description: "Создание серверных приложений и баз данных для веб-приложений",
            salary: "$4500"
        },
        {
            title: "Back-end Developer",
            company: "456 Enterprises",
            description: "Реализация серверной логики и интеграция фронтенд элементов",
            salary: "$4600"
        },
        {
            title: "Back-end Developer",
            company: "BCD Solutions",
            description: "Создание и поддержка серверных приложений и баз данных",
            salary: "$4600"
        },
        {
            title: "Back-end Developer",
            company: "NOP Innovations",
            description: "Создание и поддержка серверной логики для веб-приложений",
            salary: "$4700"
        },
        {
            title: "Back-end Developer",
            company: "WXY Solutions",
            description: "Реализация и поддержка серверных компонентов для веб-приложений",
            salary: "$4500"
        },
        {
            title: "Back-end Developer",
            company: "IJK Innovations",
            description: "Проектирование и реализация серверной архитектуры для веб-приложений",
            salary: "$4800"
        },
    ]
}


export const Search = () => {

    const nav = useNavigate()



    const [currentList, setCurrentList] = useState('back');
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex(prevIndex => (prevIndex + 1) % vacanciesByCategory[currentList].length),
        onSwipedRight: () => setCurrentIndex(prevIndex => (prevIndex - 1 + vacanciesByCategory[currentList].length) % vacanciesByCategory[currentList].length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });


    const handleGoProfile = () => {
        nav('/profile');
    }

    return (
        <>
            <div className="container" {...handlers}>
                <header className="header-search">
                    <h1 className={"logo"}>jobHub</h1>
                    <div className="profile" onClick={handleGoProfile}>
                        <p>User</p>
                        <img src={userIcon} alt="User Icon"/>
                    </div>
                </header>

                <main className="main-search">
                    <div className="search-block">
                        <div className="container">
                            <img id={"icon_like"} src={notLiked} alt=""/>
                            <div className="vacancy">
                                <h2>{vacanciesByCategory[currentList][currentIndex].title}</h2>
                                <p>{vacanciesByCategory[currentList][currentIndex].company}</p>
                                <p>{vacanciesByCategory[currentList][currentIndex].description}</p>
                                <p>{vacanciesByCategory[currentList][currentIndex].salary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cute-block">
                        <img src={leftarr} alt="Left Arrow"
                             onClick={() => setCurrentIndex((currentIndex - 1 + testArr[currentList].length) % testArr[currentList].length)}/>
                        <p>Swipe flex</p>
                        <img src={rightarr} alt="Right Arrow"
                             onClick={() => setCurrentIndex((currentIndex + 1) % testArr[currentList].length)}/>
                    </div>
                </main>
            </div>
        </>
    );
}