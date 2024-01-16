import React, { useEffect } from 'react';
import Infocard from '../components/Infocard';
import $ from 'jquery';
import Background from '../components/Background'
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Carousel from '../components/Carousel';
import Navibar from '../components/Navbar';
export default function Home() {
    // useEffect(() => {
    //     $(".myHome").hide();
    //     setTimeout(() => {
    //         $(".myHome").show(400);
    //     }, 8600);
    // }
    //     , [])
    return (
        <div className='container home m-0 p-0'>


            <div className='myHome'>
                <Navibar />
                <Background />
                <div className="container-fluid home">
                    <Carousel pagename="EXERGY'24" text="ECHOES OF EXOTHERMIA"/>
                    <div className="row">
                        <div className="col">
                            <Infocard title="Competitions" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/competitions" />
                        </div>
                        <div className="col">
                            <Infocard title="Workshops" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/workshops" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Infocard title="Talks" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/talks" />
                        </div>
                        <div className="col">
                            <Infocard title="Campus Ambassador" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </div>

    )
}
