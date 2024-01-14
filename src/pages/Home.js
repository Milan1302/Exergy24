import React, { useEffect } from 'react';
import Infocard from '../components/Infocard';
import $ from 'jquery';
import Background from '../components/Background'
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Carousel from '../components/Carousel';
import Navibar from '../components/Navbar';
export default function Home() {
    useEffect(() => {
        $(".myHome").hide();
        setTimeout(() => {
            $(".myHome").show(400);
        }, 8600);
    }
        , [])
    return (
        <div className='container home m-0 p-0'>
            <Landing text="EXERGY$ECHOES OF EXOTHERMIA" />

            <div className='myHome'>
            <Navibar/>
                <Background />
                <div className="container-fluid home">
                    <Carousel pagename="EXERGY" />
                    <div className="row">
                        <div className="col">
                            <Infocard title="title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                        <div className="col">
                            <Infocard title="title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Infocard title="title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                        <div className="col">
                            <Infocard title="title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Infocard title="title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                        <div className="col">
                            <Infocard title="title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi doloremque consectetur nulla modi repellat expedita libero at explicabo quia." link="/" />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>

    )
}
