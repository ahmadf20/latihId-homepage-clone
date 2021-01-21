import React from 'react';
import './style/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container pt-5">
                <section className="container row">
                    <div className="col">
                        <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/Logo%20LatihID%20-%20New/NEW%20LOGO%20LATIHID%20Color.png" alt="logo" width="70" className=""></img>
                        <p className="small mt-4">LatihID adalah suatu platform penyedia pelatihan gratis dan berkualitas untuk UMKM di Indonesia</p>
                    </div>
                    <div className="col">
                        <h2 class="ft-title">Menu</h2>
                        <ul>
                            <li><a href="https://www.latihid.com">Beranda</a></li>
                            <li><a href="/courses">Modul</a></li>
                            <li><a href="https://www.latihid.com/p/tentangkami">Tentang Kami</a></li>
                            <li><a href="https://www.latihid.com/p/contact">Hubungi Kami</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2 class="ft-title">Info</h2>
                        <ul>
                            <li><a href="https://www.latihid.com/p/bantuan">FAQ</a></li>
                            <li><a href="https://www.latihid.com/p/ayokolaborasi">Ayo Kolaborasi</a></li>
                            <li><a href="https://www.latihid.com/p/privacy">Kebijakan Privasi</a></li>
                            <li><a href="https://www.latihid.com/p/terms">Syarat Penggunaan</a></li>

                        </ul>
                    </div>

                    <div className="col">
                        <h2 class="ft-title">Ikuti Kami</h2>
                        <ul>
                            <li><a target="_blank" href="https://www.youtube.com/channel/UCi2WG2vnvehuplyf6R5T2Ew"> <i class="fa fa-youtube-play"></i> LatihID Official</a></li>
                            <li><a target="_blank" href="https://www.instagram.com/latihidofficial/"> <i class="fa fa-instagram" ></i> @latihidofficial</a></li>
                            <li><a target="_blank" href="https://www.facebook.com/latihidofficial/"> <i class="fa fa-facebook-square"></i> Latih ID</a></li>

                        </ul>
                    </div>

                    {/* <div className="col">
                        <h2 class="ft-title">Jadi yang pertama mengetahui</h2>
                        <h2 class="ft-title">update terbaru dari kami !</h2>
                        <form action="https://latihid.us19.list-manage.com/subscribe/post?u=b9566c387466e869bbafe27aa&amp;id=55ccb2e4bd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
                            <div id="mc_embed_signup_scroll">

                                <div className="mc-field-group" >
                                    <input type="text" placeholder="Nama" value="" name="nama" className="required inputan" id="nama"></input>
                                </div>

                                <div className="mc-field-group">
                                    <input type="email" placeholder="Email" value="" name="EMAIL" className="required inputan" id="mce-EMAIL"></input>
                                </div>

                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" ></div>
                                    <div className="response" id="mce-success-response" ></div>
                                </div>

                                <div aria-hidden="true">
                                    <input type="text" name="b_b9566c387466e869bbafe27aa_55ccb2e4bd" tabindex="-1" value=""></input>
                                </div>

                                <div className="clear">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btnx"></input>
                                </div>

                            </div>
                        </form>

                    </div> */}

                </section>
                <section className="ft-legal">
                    <h2 className="ft-title">© 2020 Copyright LatihID</h2>
                </section>
            </div>
        </footer>
    );
}