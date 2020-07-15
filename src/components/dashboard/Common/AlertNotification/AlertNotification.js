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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));


function AlertNotification() {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">

                    <div className="alert" style={{ position: "relative" }}>
                        <img src={"../image.png"} style={{ height: "300px", width: "250px" }} /><br />
                        <img src={"../image.png"} id="icon" alt="User Icon" style={{ width: "15px", height: "15px" }} />
                        <label><b style={{ color: "black" }}>Somebody is at risk</b></label><br />
                        <label style={{ color: "black" }}>time,frontdoor</label><br />
                        <label style={{ color: "black" }}>ask question</label><br />
                        <button className="btn btn-danger" style={{ position: "absolute", left: "70px" }}  >Questions</button>
                        <button className="btn btn-default" style={{ position: "absolute", left: "60px" }}><b>Next</b></button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                </div>
            </div>
        </div>
    );
}

export default AlertNotification;