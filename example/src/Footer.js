import React from 'react';
import { Footer } from 'react-adminlte-3'

export const DemoFooter = () => (
  <Footer>
    <div className="float-right d-none d-sm-block">
      <b>
Version
      </b>
      {' '}
0.0.1
    </div>
    <strong>
      <span>
&copy; Copyright
        {' '}
        {(new Date().getFullYear())}
        {' '}
David Hall
      </span>
    </strong>
  </Footer>
);

export default { DemoFooter };
