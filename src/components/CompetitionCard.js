import React, { useEffect, useState } from 'react'
import myimg from '../images/myimg.jpg';
import $ from 'jquery';
export default function CompetitionCard(props) {
    const [data, setData] = useState(Array(3).fill(false));
    const n = "text_card" + props.no
    const p = ".text_card" + props.no;
    const q = "card" + props.no;
    const w = ".card" + props.no;
    const t = "examplemodal"+props.no
    const t1 = "#examplemodal"+props.no

    useEffect(() => {

        $(p).hide();
        $(w).mouseenter(
            () => {
                $(p).fadeIn(500);
            }
        )
        $(w).mouseleave(
            () => {
                $(p).fadeOut(500)
            }
        )
        $(w + " #explore").click(
            () => {
                if (data[0])
                    $(".one").show(500);
            }
        )
        $(".modal #rules").click(() => {
            $(".modal-title").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-title').text(props.rulesTitle).fadeIn("slow");
            });
            $(".modal-body").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-body').text(props.rulesText).fadeIn("slow");
            });
        })
        $(".modal #details").click(() => {
            $(".modal-title").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-title').text(props.detailsTitle).fadeIn("slow");
            });
            $(".modal-body").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-body').text(props.detailsText).fadeIn("slow");
            });
        })
        $(".modal #contact").click(() => {
            $(".modal-title").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-title').text(props.contactTitle).fadeIn("slow");
            });
            $(".modal-body").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-body').text(props.contactText).fadeIn("slow");
            });
        })
        $(".modal #close").click(() => {
            $(".modal-title").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-title').text(props.detailsTitle).fadeIn("slow");
            });
            $(".modal-body").fadeOut("slow", function () {
                // Change the text and fade it back in
                $('.modal-body').text(props.detailsText).fadeIn("slow");
            });
        })
    })
    return (
        <div className='c  d-block'>
            <div className={"card m-auto " + q} >
                <img src={myimg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title gradient-text">{props.title}</h5>
                    <p className={"card-text " + n}>{props.text}</p>
                    <div className="row">
                        <div className="col">
                            <a href="/" className="btn btn-dark" id='register'>Register</a>
                        </div>
                        <div className="col">
                            <a href="/" className="btn btn-dark" id='explore' data-bs-toggle="modal" data-bs-target={t1}>Explore</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={t} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {props.detailsTitle}
                            </h1>
                            <button type="button" className="btn btn-light-close cros" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.detailsText}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" id='details'>Details</button>
                            <button type="button" className="btn btn-dark" id='rules'>Rules</button>
                            <button type="button" className="btn btn-dark" id='contact'>Contact</button>
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" id='close'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
