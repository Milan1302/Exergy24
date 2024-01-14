import React from 'react'
import CompetitionCard from '../components/CompetitionCard'
import Carousel from '../components/Carousel'
import Background from '../components/Background'
import Navibar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Workshops() {
    return (

        <div className='workshops'>
            <Navibar/>
            <Background/>
            <Carousel pagename="WORKSHOPS"/>
            <div className="row">
                <div className="col p-4 m-4">
                    <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="5" title="Optimization" text="Unleash the Power of Efficiency: Where Innovation Meets Optimization!"/>
                </div>
                <div className="col p-4 m-4">
                    <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="6" title="Cipher" text="Decipher the Challenge, Encrypt the Victory: Cracking Codes, Unleashing Brilliance!"/>
                </div>
            </div>
            <div className="row ">
                <div className="col p-4 m-4">
                    <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="7" title="Case Study" text="Unlocking Insights, Solving Challenges: The Case Study Journey Begins!"/>
                </div>
                <div className="col p-4 m-4">
                <CompetitionCard detailsTitle="Details" rulesTitle="Rules" contactTitle="Contact" detailsText="Coming Soon" rulesText="Coming Soon" contactText="Coming Soon" no="8" title="StartUp Pitch" text="Turning Vision into Venture: Our Startup, Your Future."/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
