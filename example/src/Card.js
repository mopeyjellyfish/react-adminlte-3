import React from 'react';
import { Card } from 'react-adminlte-3'

export const DemoCard = () => (
    <div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Default example">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Primary example" type="primary">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Secondary example" type="secondary">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success example" type="success">
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Info example" type="info">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Warning example" type="warning">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Danger example" type="danger">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Dark example" type="dark">
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Default outline" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Primary outline" type="primary" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Secondary outline" type="secondary" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success outline" type="success" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Info outline" type="info" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Warning outline" type="warning" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Danger outline" type="danger" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Dark outline" type="dark" outline={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Primary bg" background="primary">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Secondary bg" background="secondary">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success bg" background="success">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success bg" background="info">
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Warning bg" background="warning">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Danger bg" background="danger">
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Dark bg" background="dark">
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Primary gradient" background="primary" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Secondary gradient" background="secondary" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success gradient" background="success" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success gradient" background="info" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Warning gradient" background="warning" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Danger gradient" center background="danger" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Dark gradient" center background="dark" gradient={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Minimize example" minimize={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Maximize example" maximize={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Removable example" removable={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="All example" minimize={true} maximize={true} removable={true}>
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Default footer" footer='Some text for the footer'>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Secondary footer" background="secondary" gradient={true}  footer='Some text for the footer'>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success footer" background="success" gradient={true}  footer='Some text for the footer'>
                    <p>Some demo text</p>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success footer" background="info" gradient={true}  footer='Some text for the footer'>
                    <p>Some demo text</p>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Default loading" loading={true}>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Secondary loading" background="secondary" gradient={true} loading={true}>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success loading" background="success" gradient={true} loading={true}>
                </Card>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Card title="Success loading" background="info" gradient={true} loading={true}>
                </Card>
            </div>
        </div>
    </div>
);

export default { DemoCard };