const Header = () => {
    const view = `
        <div class="header-main">
            <div class="header-logo">
                <a href="/">
                    <img src="https://res.cloudinary.com/dfmafb0cf/image/upload/v1597629777/platzi/rm-logo.png">
                </a>
            </div>
            <h3>Rick and Morty Directory</h3>
            <div class="header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;

    return view;
}

export default Header;