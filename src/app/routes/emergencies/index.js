import React from 'react';
import image1 from '../../../assets/images/dashboard/image-1.png';
import image2 from '../../../assets/images/dashboard/image-2.png';
import image3 from '../../../assets/images/dashboard/image3.png';
import TicketsGraphs from 'components/dashboard/Common/TicketsGraphs/TicketsGraphs';
import TicketsData from 'components/dashboard/Common/TicketsData/TicketsData';

function EmergenciesPage(props) {
    {
        return (
            <div className="app-wrapper">
                <div className="col-lg-3 col-sm-6 col-12">
                    <TicketsGraphs>

                    </TicketsGraphs>

                    <TicketsData>

                    </TicketsData>
                </div>

            </div>
        );
    }
}
export default EmergenciesPage;