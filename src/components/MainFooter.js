import React from 'react';

const MainFooter = () => {
    return (
        <footer className={"mainFooter"}>
            <div className={"mainFooter__container"}>
                <div className={"mainFooter__row"}>
                    <div className={"mainFooter__logo"}>
                        AppCo
                    </div>
                    <div className={"mainFooter__mid"}>
                        All rights reserved by ThemeTags
                    </div>
                    <div className={"mainFooter__end"}>
                        Copyrights © 2019
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;
