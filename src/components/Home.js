import React from "react";
import Blog from "../assets/image-1.png";
import Blogblack from "../assets/black.png";
import blogImage1 from "../assets/blog-image-1.png";
import blogImage2 from "../assets/blog-image-2.png";
import blogImage3 from "../assets/blog-image-3.png";
import blogImage4 from "../assets/blog-image-4.png";
import blogImage5 from "../assets/blog-image-5.png";
import blogImage6 from "../assets/blog-image-6.png";
import image2 from "../assets/image-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const forward=useNavigate();
    const data=[
        {
            src:blogImage1,
            postedDate:"Posted on October 6th 2021",
            totalView:"563 views",
            cardTitle:"5 Genius Car Accessories You Should Never Drive Without",
            cardText:`We provide a full range of front end mechanical repairs for all
            makes and models. We provide a full range of front end mechanical repairs for all
            makes and models`,
        },
        
        {
            src:blogImage2,
            postedDate:"Posted on October 6th 2021",
            totalView:"563 views",
            cardTitle:"5 Genius Car Accessories You Should Never Drive Without",
            cardText:`We provide a full range of front end mechanical repairs for all
            makes and models. We provide a full range of front end mechanical repairs for all
            makes and models`,
        },
        {
            src:blogImage3,
            postedDate:"Posted on October 6th 2021",
            totalView:"563 views",
            cardTitle:"5 Genius Car Accessories You Should Never Drive Without",
            cardText:`We provide a full range of front end mechanical repairs for all
            makes and models. We provide a full range of front end mechanical repairs for all
            makes and models`,
        },
        
        {
            src:blogImage4,
            postedDate:"Posted on October 6th 2021",
            totalView:"563 views",
            cardTitle:"5 Genius Car Accessories You Should Never Drive Without",
            cardText:`We provide a full range of front end mechanical repairs for all
            makes and models. We provide a full range of front end mechanical repairs for all
            makes and models`,
        },
        {
            src:blogImage5,
            postedDate:"Posted on October 6th 2021",
            totalView:"563 views",
            cardTitle:"5 Genius Car Accessories You Should Never Drive Without",
            cardText:`We provide a full range of front end mechanical repairs for all
            makes and models. We provide a full range of front end mechanical repairs for all
            makes and models`,
        },
        
        {
            src:blogImage6,
            postedDate:"Posted on October 6th 2021",
            totalView:"563 views",
            cardTitle:"5 Genius Car Accessories You Should Never Drive Without",
            cardText:`We provide a full range of front end mechanical repairs for all
            makes and models. We provide a full range of front end mechanical repairs for all
            makes and models`,
        },
    ]

const Cards = ({src,postedDate,totalView,cardTitle,cardText}) => {
    return(
        <>
            <div className="col-md-4 py-2">
                    <div className="card" style={{border: "none"}}>
                        <img className="card-img-top" src={src} />
                        <div className="row">
                            <div className="col-sm-6">
                                <span style={{float: "left"}}>{postedDate}</span>
                            </div>
                            <div className="col-sm-6">
                            <FontAwesomeIcon icon={faEye} size="xs" style={{marginLeft: "62%", marginTop: "7px"}}/>
                                <span style={{float: "right"}}> {totalView} </span>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{cardTitle}</h4>
                                <p className="card-text">{cardText}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
    return (
        <>
    <section>
        <div className="container-fixed f-container">
                <div className="row">
                    <div className="col-6" style={{position: "relative"}}>
                            <img src={Blog} id="image-a" alt="alt" />
                            <img src={Blogblack} id="image-b" style={{width: "774px", height: "352px"}}/>
                            <div className="H-text">
                                <h1>Our Blog</h1>
                            </div>  
                    </div>
                    <div className="col-6 bg-dark">
                        <div className="heading">
                            <h2>Diagnose Car Problems If You <br/> Don't Know Much About Cars</h2>
                        </div>
                        <div className="paragraph">
                            <p>We provide a full range of front end mechanical repairs for all makes and <br/> models of
                                cars, no matter the cause. This includes, We provide a full <br/> range of front end mechanical.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <section>
    <div className="container-fluid bg-container">
        <div className="d-flex">
            <div className="bg-card">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="img-fluid">
                            <img src={image2}
                                style={{width: "260px", height: "200px", marginLeft: "30px", marginTop: "20px"}} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4 mt-4">
                                <span style={{float: "left"}}>Posted on October 6th 2021</span>
                            </div>
                            <div className="col-3 mt-4">
                            <FontAwesomeIcon icon={faEye} size="xs" />
                                <span style={{marginLeft: "5px"}}>563 views</span>
                            </div>
                            <div className="col-4 mt-4">
                                <span style={{float: "right", color: "red"}}>FRETURED</span>
                            </div>
                        </div>
                        <div className="b-title mt-3">
                            <div className="btnStyle" onClick={()=>forward("/page")}>
                                <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
                            </div>
                        </div>
                        <div className="b-paragraph mt-4">
                            <p>We provide a full range of front end mechanical repairs for all makes and models. We
                                provide a full range of front end mechanical repairs for all makes and models</p>
                        </div>
                        <div className="txt-read py-3">
                            <a href="#" style={{color: "black"}}>Read more
                            <FontAwesomeIcon icon={faArrowRightLong} style={{color: "black", marginLeft: "10px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section>
        <div className="container">
            <div className="row">
            {data.map( 
                (element,i) => <Cards key={i} {...element} />
                )
            }
            </div>
        </div>
    </section>

    <div style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginRight:"30%"}}>
        <button className="btn bg-dark text-white mt-4">Load More...</button>
    </div>

    </>

    );
};

export default Home;