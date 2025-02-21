"use client";

import * as React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import { useAppContext } from '@/contexts';


export interface IMetricButtonProps {
}

export default function MetricButton (props: IMetricButtonProps) {
    const {changeMetric} = useAppContext();

  return (
    <div>
      <ToggleSwitch id="DegreeToggleSwitch" labelOff='°C' labelOn='°F' changeFunction={changeMetric}/>
    </div>
  );
}
