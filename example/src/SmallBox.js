import React from 'react';
import { SmallBox } from 'react-adminlte-3'

import { faBalanceScale, faBriefcase, faBullseye, faBullhorn } from '@fortawesome/free-solid-svg-icons'

export const DemoSmallBox = () => (
  <div>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="info" title="1000" icon={faBalanceScale}>
              <p>Some demo text</p>
          </SmallBox>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="warning" title="90" icon={faBriefcase}>
              <p>Some demo text</p>
          </SmallBox>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="success" title="11" icon={faBullseye}>
              <p>Some demo text</p>
          </SmallBox>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="danger" title="67" icon={faBullhorn}>
              <p>Some demo text</p>
          </SmallBox>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="info" title="1000" icon={faBalanceScale} loading />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="warning" title="90" icon={faBriefcase} loading />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="success" title="11" icon={faBullseye} loading />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-3">
          <SmallBox type="danger" title="67" icon={faBullhorn} loading />
        </div>
      </div>
  </div>
);

export default { DemoSmallBox };