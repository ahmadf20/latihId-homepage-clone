import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function NavBar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/AQCqx5hFT0bNbzcGstV1" height="35" alt="logo"></img>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto ml-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Program</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="https://www.latihid.com/courses/category/LatihIDModul">LatihID Modul</a>
                                <a className="dropdown-item" href="https://www.latihid.com/courses/category/LatihIDTalks">LatihID Talks</a>
                                <a className="dropdown-item" href="https://www.latihid.com/p/peta">LatihID PETA</a>
                                <a className="dropdown-item" href="https://www.latihid.com/p/maju">LatihID MAJU</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.latihid.com/blog">Artikel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.latihid.com/p/tentangkami">Tentang Kami</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.latihid.com/p/ayokolaborasi">Ayo Kolaborasi</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bantuan</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="https://www.latihid.com/p/bantuan">FAQ</a>
                                <a className="dropdown-item" href="https://www.latihid.com/p/contact">Kontat Kami</a>
                            </div>
                        </li>
                    </ul>
                    <a className="nav-link text-dark" href="https://www.latihid.com/sign_in">Masuk</a>
                    <div className="banner-btn" style={{ backgroundColor: '#FC8047' }}>
                        <a href="https://www.latihid.com/sign_up" >Daftar</a>
                    </div>
                </div>

            </div>
        </nav>
    );
}