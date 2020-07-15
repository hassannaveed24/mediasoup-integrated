import React, { Fragment } from 'react'
//import './front.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Dashboardcss } from '../../../../styles/dashboard.scss';
import image from './image.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiationAlt, faTemperatureHigh, faExclamationCircle, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const tileData = [
    {
        img: image,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
        cols: 2,
    }
];
const divdata = [
    {
        position: 'absolute',
        top: 60,
        left: 45,
        width: 15,
        height: 15,
        color: 'red'
    },
    {
        position: 'absolute',
        top: 70,
        right: 20,
        width: 15,
        height: 15,
        color: 'red'

    },
    {
        position: 'absolute',
        top: 80,
        right: 40,
        width: 15,
        height: 15,
        color: 'red'
    },
    {
        position: 'absolute',
        top: 100,
        right: 90,
        width: 15,
        height: 15,
        color: 'red'
    }


];

const images = [
    {
        original: "../image.png",//'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: "../image-1.png",//'http://lorempixel.com/250/150/nature/1/',
    },
    {
        original: "../image.png",//'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: "../image-1.png",//'http://lorempixel.com/250/150/nature/2/'
    },
    {
        original: "../image.png",// 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: "../image-1.png",// 'http://lorempixel.com/250/150/nature/3/'
    }
]


function CameraFeed() {

    const notify = () => toast("Recieved");
    const alert = () => toast("Alert is generated");
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-4 col-xs-12">
                    <div className="mybox">
                        <FontAwesomeIcon icon={faTemperatureHigh} style={{ color: 'orange', fontSize: '18px' ,marginLeft:'2px' }} /> &nbsp;
                            <b>38.2 C</b>
                        <br />
                        <FontAwesomeIcon icon={faRadiationAlt} style={{ color: 'red', fontSize: '18px',marginLeft:'0px' }} />&nbsp;&nbsp;
                           <b> 85%</b>
                    </div>
                    <div className="leftbottom">
                        <label> Front door </label>
                    </div>
                    <div className="righttop">
                        <label> Mon, 2 March 2020 </label><br />
                        <label>15:21:27</label>
                    </div>

                    <ImageGallery style={{ width: "500px !important", height: 'px !important' }} showPlayButton={false} showFullscreenButton={false} additionalClass="" showThumbnails={true} showNav={true} items={images} />
                    <div className="Table">
                        <div className="Row">
                            <div className="myCell">

                                <img src={"../m.png"} style={{ width: "300px", marginLeft: '20px' }} />
                                {divdata.map((pointer) => (
                                    <FontAwesomeIcon icon={faRadiationAlt} id="icon" alt="User Icon" style={pointer} />))}
                            </div>

                            <div className="Cell" style={{ verticalAlign: 'top' }}>
                                <button className="alerts btn btn-basic" onClick={notify} style={{ border: 'solid', height: '60px', width: '150px' }}>
                                    <FontAwesomeIcon icon={faHandPaper} style={{ color: 'white', fontSize: '30px' }} />
                                   &nbsp; Cleaning team
                                </button>
                                <ToastContainer />

                                <button className="alert2 btn btn-basic" onClick={alert} style={{ border: 'solid', height: '60px' }}>
                                    <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'grey', fontSize: '30px' }} />
                             &nbsp; Virus alert &nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>



    );
}

export default CameraFeed;


{/* <div className="container">
    <div className="row">
        <div className="col-md-1 col-sm-4 col-xs-12">
            <div className="box">
                <FontAwesomeIcon icon={faTemperatureHigh} style={{ color: 'orange', fontSize: '20px' }} />
                            38.2 C
                        <br />
                <FontAwesomeIcon icon={faRadiationAlt} style={{ color: 'red', fontSize: '20px' }} />
                            85%
            </div>
            <div className="leftbottom">
                <label> Frontdoor </label>
            </div>
            <img src={"../image.png"} style={{ height: "230px" }, { width: "600px" }} />
            <div className="righttop">
                <label> Mon, 2 March 2020 </label><br />
                <label>15:21:27</label>
            </div>
            <div className={classes.root} style={{ width: "600px" }}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map((tile, i) => (
                        <GridListTile key={i}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                        <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
                    &nbsp;
                    <div class="Table">
                <div class="Row">
                    <div class="Cell">
                        <img src={"../m.png"} style={{ height: "300px" }, { width: "370px" }} />
                    </div>
                    <div class="Cell" style={{ verticalAlign: 'top' }}>
                        <button class="alerts btn btn-basic" style={{ border: 'solid', height: '60px' }}>
                            <FontAwesomeIcon icon={faHandPaper} style={{ color: 'white', fontSize: '30px' }} />
                                   &nbsp; Cleaning team
                                </button>
                        <button class="alert2 btn btn-basic" style={{ border: 'solid', height: '60px' }}>
                            <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'grey', fontSize: '30px' }} />
                                    &nbsp; Virus alert
                                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
