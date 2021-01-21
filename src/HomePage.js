import React from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard.js"
import Spinner from "react-bootstrap/Spinner"
import './style/HomePage.css';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class HomePage extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    async getModulData() {

        try {
            await fetch('https://latih-id.herokuapp.com/modul')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (this._isMounted) this.setState({ data: data });
                });
        } catch (err) {
            console.log(err);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        this.getModulData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true
        }

        const modulSliderSettings1 = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        const modulSliderSettings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        const modulSliderSettings3 = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            rows: 3
        }

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
                        <div>
                            <img
                                className="d-block w-100"
                                src="https://uploads-ssl.webflow.com/5f13e626a1dac6a3bd6b0c13/5ffc6646e6ae96a859472787_Copy%20of%20Banner%20LIT%2017.png"
                                alt="Forth slide"
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
                        <div className="row ml-1">
                            <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-Modul.svg" alt=""></img>
                            <div className="col">
                                <p className="banner-title">Kelas Gratis Populer</p>
                                <div className="banner-btn">
                                    <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                </div>
                            </div>
                        </div>
                        {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                            <Slider {...modulSliderSettings1}>
                                {this.state.data.filter((value) => value.category.includes('latihIDModul') && value.price === null).map(course => <CourseCard data={course} key={course._id} />)}
                            </Slider>
                        </div>}
                    </div>

                    <div className="modul-banner mt-5" style={{ backgroundColor: '#d6d2c4' }}>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_3.svg" alt=""></img>
                                <div className="col p-0">
                                    <p className="banner-title my-2">Kelas LatihID Terbaru</p>
                                    <p>LatihID selalu berkomitment untuk memberikan pelatihan-pelatihan terbaru yang sesuai dengan trend, pasar, dan kondisi nyata di lapangan.</p>
                                    <div className="banner-btn">
                                        <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings2}>
                                        {this.state.data.filter((value) => value.category.includes('terbaru')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className="modul-banner mt-5" style={{ backgroundColor: '#ffe7dc' }}>
                        <div className="row ml-1">
                            <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/2-Talks.svg" alt=""></img>
                            <div className="col">
                                <p className="banner-title">Expert Class</p>
                                <div className="banner-btn">
                                    <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                </div>
                            </div>
                        </div>
                        {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                            <Slider {...modulSliderSettings1}>
                                {this.state.data.filter((value) => value.category.includes('expertClass')).map(course => <CourseCard data={course} key={course._id} />)}
                            </Slider>
                        </div>}
                    </div>

                    <div className="row">
                        <div className="px-md-3 col-lg-4 col-md-6">
                            <div className="modul-banner mt-5">
                                <div className="row ml-1">
                                    <div className="col">
                                        <p className="banner-title">LatihID Modul</p>
                                        <div className="banner-btn">
                                            <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                        </div>
                                    </div>
                                </div>
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings3}>
                                        {this.state.data.filter((value) => value.category.includes('latihIDModul')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                        <div className="px-md-3 col-lg-4 col-md-6">
                            <div className="modul-banner mt-5">
                                <div className="row ml-1">
                                    <div className="col">
                                        <p className="banner-title">LatihID Talks</p>
                                        <div className="banner-btn">
                                            <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                        </div>
                                    </div>
                                </div>
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings3}>
                                        {this.state.data.filter((value) => value.category.includes('latihIDTalks')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                        <div className="px-md-3 col-lg-4 col-md-6">
                            <div className="modul-banner mt-5">
                                <div className="row ml-1">
                                    <div className="col">
                                        <p className="banner-title">LatihID PETA</p>
                                        <div className="banner-btn">
                                            <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                        </div>
                                    </div>
                                </div>
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings3}>
                                        {this.state.data.filter((value) => value.category.includes('latihIDPeta')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className="modul-banner mt-5" style={{ backgroundColor: '#d6d2c4' }}>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_1.svg" alt=""></img>
                                <div className="col p-0">
                                    <p className="banner-title my-2">Kelas Memulai Bisnis</p>
                                    <p>Bingung mau mulai Bisnis ? Sudah punya Ide tapi belum tahu cara implementasi bisnis nya? Gabung di kelas memulai bisnis sekarang !</p>
                                    <div className="banner-btn">
                                        <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings2}>
                                        {this.state.data.filter((value) => value.category.includes('bisnis')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className="modul-banner mt-5" style={{ backgroundColor: '#d6d2c4' }}>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_2.svg" alt=""></img>
                                <div className="col p-0">
                                    <p className="banner-title my-2">Kelas Pemasaran</p>
                                    <p>Ingin bisnismu lebih dikenal oleh pasar ? Ikuti kelas tentang pemasaran dan dapatkan manfaatnya dalam bisnismu !</p>
                                    <div className="banner-btn">
                                        <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings2}>
                                        {this.state.data.filter((value) => value.category.includes('pemasaran')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className="modul-banner mt-5" style={{ backgroundColor: '#d6d2c4' }}>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://design.upanastudio.com/latih_id_asset/Aset%20LatihID/misc/1-KeunggulanLatihID_3.svg" alt=""></img>
                                <div className="col p-0">
                                    <p className="banner-title my-2">Kelas Manajemen Operasional</p>
                                    <p>Belajar Manajemen Operasional menjadi mudah dengan ikut kelas-kelas di sini! Bisa kamu praktekan langsung di Usahamu.</p>
                                    <div className="banner-btn">
                                        <a href="https://www.latihid.com/courses/category/LatihIDModul">Lihat Modul Lainnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.state.isLoading ? <Spinner animation="border" /> : <div className="modul-content mt-4">
                                    <Slider {...modulSliderSettings2}>
                                        {this.state.data.filter((value) => value.category.includes('manajemen')).map(course => <CourseCard data={course} key={course._id} />)}
                                    </Slider>
                                </div>}
                            </div>
                        </div>
                    </div>


                </div>

                <section className="mitra-section">
                    <div className="row">
                        <div className="col" style={{ backgroundImage: 'url(https://1.bp.blogspot.com/-xj9cgzCuR2o/X4-SU5KwgDI/AAAAAAAAE7k/Y5pAuUEp7rUZXtnTVBtLISC2yJsWUVk_ACLcBGAsYHQ/s0/meeting.png)' }}>
                            <div className="cardWrap col-md-10 col-lg-8">
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
                            <div className="cardWrap col-md-10 col-lg-8">
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
}

export default HomePage

