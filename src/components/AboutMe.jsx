import React from 'react'
import photo from './img/profile2.jpg'


// arrow function
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={photo} alt=''/>
                    </div>
                </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">Haqqimda</h1>
                <p className="p-text">Men Ismayilov Zeynalabdin 19 noyabr 1989-cu ilde anadan olmusam.Hal-hazirda Baki Metropoliteni "QSC"-de operator vezifesinde calisiram.2018-ci ilde Amerika Birlesmis Statlarinin Cisco akademiyasinin IT texnologialari sertifikatin almisam. 2020-ci ilden "front-end" proqramlasdirma sahesi uzre maraqlaniram.
                2021-ci ilde IT Brains akademiyasinin Javascript ve React js proqramlasdirma dilleri uzre sertifikat almisam.</p>
                <h1 className="about-heading">About Me</h1>
                <p className="p-text">
                I am Ismayilov Zeynalabdin, born on November 19, 1989. I am currently working as an operator at Baku Metro "CJSC". In 2018, I received a certificate in IT technology from the Cisco Academy of the United States. From 2020, I am interested in "front-end" programming. In 2021, I received a certificate from the IT Brains Academy in Javascript and React js programming languages
                </p>
                <h1 className="about-heading">Обо мне</h1>
                <p className="p-text">Я Исмаилов Зейналабдин, 19 ноября 1989 года рождения. В настоящее время работаю оператором в ЗАО «Бакинский метрополитен». В 2018 году получил сертификат по ИТ-технологиям Академии Cisco в США. С 2020 года меня интересует "front-end" программирование. В 2021 году я получил сертификат IT Brains Academy по языкам программирования Javascript и React js.</p>
            </div>


            </div>
            
        </div>
    )
}

export default AboutMe
