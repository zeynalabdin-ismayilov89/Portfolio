import React from 'react'


const Experience = () => {
    return (
        <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Experience</h1>
            </div>
            <div className='container experience-wrapper'>

                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>                     
                        <h3>2017-2018</h3>
                        <p>Amerika Birlesmis Statlarinin San fransisko seherinde yerlesen Cisco Academiyasinin IT texnologiyalari uzre sertifikatini almisam.</p>
                    </div>
                </div>

                {/* --experience */}

                  
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2021-2021</h3>
                        <p>IT Brains Akademiyasinin Html , Css , JavaScript , React js proqramlasdirma dilleri uzre sertifikat almisam.</p>
                    </div>
                </div>


                  
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2017-2018</h3>
                        <p>I received a certificate in IT technology from the Cisco Academy in San Francisco, United States.</p>
                    </div>
                </div>

                  
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2021-2021</h3>
                        <p>I received a certificate from the IT Brains Academy in Html, Css, JavaScript, React js programming languages.</p>
                    </div>
                </div>

                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>                     
                        <h3>2017-2018</h3>
                        <p>Я получил сертификат по ИТ-технологиям в Академии Cisco в Сан-Франциско, США.</p>
                    </div>
                </div>
                
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2021-2021</h3>
                        <p>Получил сертификат IT Brains Academy по языкам программирования Html, Css, JavaScript, React js.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
