import React from 'react';
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import clean from "./images/clean.svg"
import secure from "./images/secure.svg"
import retina from "./images/retina.svg"

const MainPage = (props) => {

    return (
        <div className={"wrapper"}>
            <MainHeader/>
            <div className={"container"}>
                <div className={"content"}>
                    <div className={"main__title"}>
                        <p className={"main__title_p1"}> Why <b>small business owners <br/> love</b> AppCo?</p>
                        <p className={"main__title_p2"}> Our design projects are fresh and simple and will benefit your business <br/>  greatly. Learn more about our work!</p>
                </div>
                    <div className={"trio"}>
                        <div className={"trio__el"}>
                            <div className={"trio__el_img"}>
                                <img src={clean} />
                            </div>
                            <div className={"trio__el_text"}>
                                <p className={"trio__el_text_p1"}>Clean Design</p>
                                <p className={"trio__el_text_p2"}>Increase sales by showing true dynamics of your website.</p>
                            </div>
                        </div>
                        <div className={"trio__el"}>
                            <div className={"trio__el_img"}>
                                <img src={secure} />
                            </div>
                            <div className={"trio__el_text"}>
                                <p className={"trio__el_text_p1"}>Secure Data</p>
                                <p className={"trio__el_text_p2"}>Build your online store’s trust using Social Proof & Urgency.</p>
                            </div>
                        </div>
                        <div className={"trio__el"}>
                            <div className={"trio__el_img"}>
                                <img src={retina} />
                            </div>
                            <div className={"trio__el_text"}>
                                <p className={"trio__el_text_p1"}>Retina Ready</p>
                                <p className={"trio__el_text_p2"}>Realize importance of social proof in customer’s purchase decision.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    );
}

export default MainPage