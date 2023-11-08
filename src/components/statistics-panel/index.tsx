import React, { type ReactElement } from 'react';
import './style.scss';
import { ProgressBar } from '../progress-bar';
import { LayoutIconType } from '../../enums/icon-type';
import { IconItemLayout } from '../layout/icon-item-layout';
import { getAllBlueprintTypes } from '../../data/blueprints/blueprints';

const StatisticPanel = (): ReactElement => {
    const logData = (): void => {
        const blueprints = getAllBlueprintTypes();
        console.log(blueprints);
    };

    return (
        <div className="row statistic-container">
            <div className="row statistic-block">
                <IconItemLayout type={LayoutIconType.FOOD}/>
                <span>0</span>
            </div>
            <div className="row statistic-block">
                <IconItemLayout type={LayoutIconType.CALENDAR}/>
                <span>0</span>
            </div>
            <div className="row statistic-block">
                <IconItemLayout type={LayoutIconType.CLOCK}/>
                <ProgressBar value={20}/>
            </div>
            <button onClick={logData}>Log</button>
        </div>
    );
};

export default StatisticPanel;
