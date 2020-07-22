import React from 'react';
import {NavLink} from "react-router-dom";
import phone from "../phone_img.svg"

const MainHeader = () => {
    return (
        <header className={"mainHeader"}>
            <div className={"mainHeader__container"}>
                <div className={"mainHeader__row"}>
                    <div className={"mainHeader__logo"}>
                        AppCo
                        <p className={"mainHeader__logo_p1"}><b>Brainstorming</b> for <br/> desired perfect Usability</p>
                        <p className={"mainHeader__logo_p2"}>Our design projects are fresh and simple and will benefit <br/> your business greatly. Learn more about our work! </p>
                        <div className={"mainHeader__logo_link"}>
                            <NavLink exact to={'/users'} activeClassName={"active"}>
                                Views Stats
                            </NavLink>
                        </div>
                    </div>
                    <div className={"mainHeader__phone"}>
                        <img src={phone} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
