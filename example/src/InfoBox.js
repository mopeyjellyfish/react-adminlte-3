import React from 'react';
import { InfoBox, ProgressBar } from 'react-adminlte-3'

import { faEnvelope, faFlag, faCopy, faCalendar } from '@fortawesome/free-solid-svg-icons'

export const DemoInfoBox = () => (
    <div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox backgroundType="info" title="Messages" message="120456" icon={faEnvelope}>
                    <ProgressBar percentage={55}/>
                </InfoBox>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox iconBackgroundType="info" title="Bookmarks" message="340" icon={faFlag}>
                    <ProgressBar type="success" percentage={55}/>
                </InfoBox>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox backgroundType="success" title="Copies" message="120" icon={faCopy} />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox backgroundType="warning" title="Calender" message="99" icon={faCalendar} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox backgroundType="info" title="Messages" icon={faEnvelope} loading />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox iconBackgroundType="info" title="Bookmarks" icon={faFlag} loading />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox backgroundType="success" title="Copies" icon={faCopy} loading />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <InfoBox backgroundType="warning" title="Calender" icon={faCalendar} loading />
            </div>
        </div>
    </div>
);

export default { DemoInfoBox };