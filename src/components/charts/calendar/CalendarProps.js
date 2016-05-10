/*
 * This file is part of the nivo library.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict';

import { PropTypes } from 'react';
import Nivo          from '../../../Nivo';
import { margin }    from '../../../PropTypes';
import {
    DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL
} from '../../../constants/directions';


const { object, number, string, any, func, oneOf } = PropTypes;


/**
 * Calendar components propTypes.
 *
 * @type {object}
 */
export const calendarPropTypes = {
    width:                number.isRequired,
    height:               number.isRequired,
    margin,
    direction:            oneOf([DIRECTION_HORIZONTAL, DIRECTION_VERTICAL]),
    // days
    daySpacing:           number.isRequired,
    dayBorderWidth:       number.isRequired,
    dayBorderColor:       string.isRequired,
    // months
    monthBorderWidth:     number.isRequired,
    monthBorderColor:     string.isRequired,
    // transitions
    motionStiffness:      number.isRequired, // react-motion
    motionDamping:        number.isRequired, // react-motion
    transitionDuration:   number.isRequired, // d3 transitions
    transitionEasing:     string.isRequired, // d3 transitions
    transitionStaggering: number.isRequired, // d3 transitions
};


/**
 * Calendar components defaultProps.
 *
 * @type {object}
 */
export const calendarDefaultProps = {
    margin:               Nivo.defaults.margin,
    direction:            DIRECTION_HORIZONTAL,
    // days
    daySpacing:           0,
    dayBorderWidth:       1,
    dayBorderColor:       '#000',
    // months
    monthBorderWidth:     2,
    monthBorderColor:     '#000',
    // transitions
    motionStiffness:      Nivo.defaults.motionStiffness,    // react-motion
    motionDamping:        Nivo.defaults.motionDamping,      // react-motion
    transitionDuration:   Nivo.defaults.transitionDuration, // d3 transitions
    transitionEasing:     Nivo.defaults.transitionEasing,   // d3 transitions
    transitionStaggering: 5,                                // d3 transitions
};
