import React from 'react'
import CompetitionCard from '../components/CompetitionCard'
import Background from '../components/Background'
import Carousel from '../components/Carousel';
import Navibar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Competitions() {
    return (

        <div className='competitions'>
            <Navibar/>
            <Background/>
            <Carousel pagename="COMPETITIONS"/>
            <div className="row">
                <div className="col p-4 m-4">
                    <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon1" rulesText="Coming Soon" contactText="Coming Soon" no="1" title="Optimization" text="Unleash the Power of Efficiency: Where Innovation Meets Optimization!"/>
                </div>
                <div className="col p-4 m-4">
                    <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="2" title="Cipher" text="Decipher the Challenge, Encrypt the Victory: Cracking Codes, Unleashing Brilliance!"/>
                </div>
            </div>
            <div className="row ">
                <div className="col p-4 m-4">
                    <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="4" title="Case Study" text="Unlocking Insights, Solving Challenges: The Case Study Journey Begins!"/>
                </div>
                <div className="col p-4 m-4">
                <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="3" title="StartUp Pitch" text="Turning Vision into Venture: Our Startup, Your Future."/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
