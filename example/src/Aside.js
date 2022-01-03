import React from 'react';
import { Aside } from 'react-adminlte-3'

export function DemoAside(props) {
  const {setSettings, dark, fixedFooter, fixedSidebar, fixedNavbar, collapsedSidebar, boxed} = props
  return (
    <Aside>
        <h5>Layout Options</h5>
        <div className="mb-1">
            <input type="checkbox" checked={dark} onChange={ () => setSettings(!dark, fixedFooter, fixedSidebar, fixedNavbar, collapsedSidebar, boxed)} className="mr-1" />
            <span>Dark Mode</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" checked={fixedFooter} onChange={ () => setSettings(dark, !fixedFooter, fixedSidebar, fixedNavbar, collapsedSidebar, boxed)} className="mr-1" />
            <span>Fixed Footer</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" checked={fixedSidebar} onChange={ () => setSettings(dark, fixedFooter, !fixedSidebar, fixedNavbar, collapsedSidebar, boxed)} className="mr-1" />
            <span>Fixed sidebar</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" checked={fixedNavbar} onChange={ () => setSettings(dark, fixedFooter, fixedSidebar, !fixedNavbar, collapsedSidebar, boxed)} className="mr-1" />
            <span>Fixed navbar</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" checked={collapsedSidebar} onChange={ () => setSettings(dark, fixedFooter, fixedSidebar, fixedNavbar, !collapsedSidebar, boxed)} className="mr-1" />
            <span>Collapsed Sidebar</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" checked={boxed} onChange={ () => setSettings(dark, fixedFooter, fixedSidebar, fixedNavbar, collapsedSidebar, !boxed)} className="mr-1" />
            <span>Boxed</span>
        </div>
    </Aside>
  );
}

export default { DemoAside };