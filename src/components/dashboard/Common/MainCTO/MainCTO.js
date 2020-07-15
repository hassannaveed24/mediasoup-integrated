import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import CameraFeed from './../CameraFeed';
import CTO from './../CTO';

function MainCTO(props) {
    const [camData, setCameraData] = useState(props.camData);
    const [TOdata, setTOdata] = useState(props.TOdata);

    useEffect(() => {
    });

    return (
        <div className="mTable">
            <div className="mRow"  >
                <div id="CTOFeedDiv" className="mLCell" >
                    <CTO camData={camData} TOdata={TOdata} >
                    </CTO>
                </div>
                <div id="CamFeedDiv" className="ColHide"  >
                    <CameraFeed>
                    </CameraFeed>
                </div>
            </div>
        </div>
    )
};

export default MainCTO;

