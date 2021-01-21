import React, { useState } from "react";
import './style/HomePage.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div className="mt-4">
           <div className="banner">
                <Slider {...settings}>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://uploads-ssl.webflow.com/5f13e626a1dac6a3bd6b0c13/5f5f3a90e55ab0fd5d9ce4c7_Banner%20Modul%20Desktop-p-2600.png"
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://uploads-ssl.webflow.com/5e7b5d2f46049ebbc421c67a/5f265df315da6c63b7b28769_web%20banner%20pc.png"
                            alt="Third slide"
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://uploads-ssl.webflow.com/5f13e626a1dac6a3bd6b0c13/5f60287bb9d5a99ae8ab3867_Banner%20web%20PETA%20Desktop-p-2600.png"
                            alt="Third slide"
                        />
                    </div>
                </Slider>
           </div>

            <div className="container my-5">
                <p className="judul-section">Kenapa memilih LatihID?</p>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img className="keunggulan-img" src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_1.svg" alt=""></img>
                        <p className="keunggulan-judul">Fokus pada UMKM</p>
                        <p className="keunggulan-info">Konten Berfokus untuk Pengembangan Bisnis UMKM Indonesia</p>
                    </div>
                    <div className="col-md-4">
                        <img className="keunggulan-img" src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_2.svg" alt=""></img>
                        <p className="keunggulan-judul">Bebas Akses Dimana Saja</p>
                        <p className="keunggulan-info">Modul Pelatihan Dapat Diakses dari Perangkat Apa Saja Melihat Website</p>
                    </div>
                    <div className="col-md-4">
                        <img className="keunggulan-img" src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_3.svg" alt=""></img>
                        <p className="keunggulan-judul">Akses Seumur Hidup</p>
                        <p className="keunggulan-info">Akses Seumur Hidup dan Satu Login untuk Semua Kursus Pelatihan yang Ada</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <img className="keunggulan-img" src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_4.svg" alt=""></img>
                        <p className="keunggulan-judul">Akses Kapan Saja</p>
                        <p className="keunggulan-info">Akses 24/7 untuk Semua Modul Pelatihan</p>
                    </div>
                    <div className="col-md-4">
                        <img className="keunggulan-img" src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_5.svg" alt=""></img>
                        <p className="keunggulan-judul">Akses Gratis</p>
                        <p className="keunggulan-info">Akses Gratis untuk Semua Modul Pelatihan</p>
                    </div>
                    <div className="col-md-4">
                        <img className="keunggulan-img" src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_6.svg" alt=""></img>
                        <p className="keunggulan-judul">Konten yang Praktis</p>
                        <p className="keunggulan-info">Pelatihan Praktis yang Dapat Langsung Diterapkan</p>
                    </div>
                </div>

                <div className="modul-banner mt-5">
                    <div className="row">
                        <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-Modul.svg" alt=""></img>
                        <div className="col">
                            <p className="banner-title">Kelas Gratis Populer</p>
                            <div className="banner-btn">
                                <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <section className="mitra-section">
                <div className="row">
                    <div className="col" style={{ backgroundImage: 'url(https://1.bp.blogspot.com/-xj9cgzCuR2o/X4-SU5KwgDI/AAAAAAAAE7k/Y5pAuUEp7rUZXtnTVBtLISC2yJsWUVk_ACLcBGAsYHQ/s0/meeting.png)' }}>
                        <div className="cardWrap w-50">
                            <h2 className="cardTitle">Menjadi Pembicara</h2>
                            <p className="cardDesc">
                                Kami membuka kesempatan untuk individu/lembaga yang ingin menjadi pemateri pada LatihID Modul, Talks, ataupun Pojok Cerita (PETA).
                            </p>
                            <div className="banner-btn">
                                <a href="https://www.latihid.com/p/ayokolaborasi" >Ayo Kolaborasi</a>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{ backgroundImage: 'url(https://1.bp.blogspot.com/-WaLs1vlpcp0/X4-SU7KKPRI/AAAAAAAAE7g/YfKvSUalBRIxfTOumstN75xszg8Ts-B7wCLcBGAsYHQ/s0/Deal.png)' }}>
                        <div className="cardWrap w-50">
                            <h2 className="cardTitle">Menjadi Mitra</h2>
                            <p className="cardDesc">
                                Kami menerima individu/lembaga yang ingin bekerja sama untuk jenis kemitraan lainnya, seperti media partner.
                            </p>
                            <div className="banner-btn">
                                <a href="https://www.latihid.com/p/ayokolaborasi" >Ayo Kolaborasi</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}