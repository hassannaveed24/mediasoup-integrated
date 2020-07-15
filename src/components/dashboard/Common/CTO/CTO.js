import React from 'react';
import { Card, CardImg } from 'reactstrap';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { CardContent, CardActions } from '@material-ui/core';
import { Dashboardcss } from '../../../../styles/dashboard.scss';
import { useState, useEffect } from 'react';
import { faRadiationAlt, faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';

function CTO(props) {
    const [CamFeed, setCamFeed] = useState(false);
    const [CameraData, setCameraData] = useState(props.camData);
    const [thermoOxiData, setTOdata] = useState(props.TOdata);

    useEffect(() => {
    });

    function CallCamFeed() {
        if (CamFeed == true)
            document.getElementById('CamFeedDiv').className = 'ColHide';
        else
            document.getElementById('CamFeedDiv').className = 'mRCell';
        setCamFeed(!CamFeed);
    }

    return (
        <div className="containerTop">
            <div className="row">
                {CameraData.map((item, index) =>
                    <div className="container--inline-flex">
                        <div className="flex-child">
                            <Card className="">
                                <div className="mcontainer">
                                    <div className="mbox" >
                                        <CardImg id="showDiv" height="80%" top width="80%" onClick={CallCamFeed} src={item.source} alt="" />
                                    </div>
                                    <div className="box stack-top">
                                        <div className="box stack-top-font">
                                            {item.title}  </div>
                                    </div>
                                </div>
                                <CardContent style={{ height: '250', background: '#191C25' }}>
                                    <div className="Table">
                                        {
                                            thermoOxiData.filter(name => name.id == item.id).map(filteredName => (
                                                <div className="Row">
                                                    <div className="Cell">
                                                        {parseFloat(filteredName.thermoReading) > 37 ?
                                                            <FontAwesomeIcon icon={faTemperatureHigh} style={{ color: 'orange', fontSize: '20px' }} />
                                                            : <FontAwesomeIcon icon={faTemperatureHigh} style={{ color: 'green', fontSize: '20px' }} />
                                                        }
                                                    </div>
                                                    <div className="Cell">
                                                        <div className="fontCommon">
                                                            {parseFloat(filteredName.thermoReading) > 0 ?
                                                                <span>Infrared thermometer C</span>
                                                                : <span>&nbsp;&nbsp;</span>
                                                            }
                                                            <br />
                                                            {filteredName.thermoDesc != "" ? filteredName.thermoDesc : <span>&nbsp;&nbsp;</span>}
                                                        </div>

                                                    </div>
                                                    <div className="CellLargeSize">
                                                        {filteredName.thermoReading != "" ? filteredName.thermoReading : <span>&nbsp;&nbsp;</span>}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="Row">
                                            <div className="Cell">
                                            </div>
                                            <div className="Cell">
                                            </div>
                                            <div className="Cell">
                                            </div>
                                        </div>
                                        {
                                            thermoOxiData.filter(name => name.id == item.id).map(filteredName => (
                                                <div className="Row">
                                                    <div className="Cell">
                                                        <span className="spanright" >
                                                            {
                                                                parseInt(filteredName.oxiReading) > 80 ?
                                                                    <FontAwesomeIcon icon={faRadiationAlt} style={{ color: 'red', fontSize: '20px' }} />
                                                                    : parseInt(filteredName.oxiReading) == 0 ?
                                                                        <span>&nbsp;&nbsp;</span>
                                                                        : <FontAwesomeIcon icon={faRadiationAlt} style={{ color: 'green', fontSize: '20px' }} />
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="Cell">
                                                        {parseFloat(filteredName.oxiReading) > 0 ?
                                                            <span>Oximeter</span>
                                                            : <span>&nbsp;&nbsp;</span>
                                                        }
                                                        <br />
                                                        {filteredName.oxiDesc != "" ? filteredName.oxiDesc : <span>&nbsp;&nbsp;</span>}
                                                    </div>
                                                    <div className="CellLargeSize">
                                                        {filteredName.oxiReading != "" ? filteredName.oxiReading + "%" : <span>&nbsp;&nbsp;</span>}
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
};

export default CTO;

