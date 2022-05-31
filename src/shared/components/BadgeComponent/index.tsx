import React, { FC } from 'react'
import { BadgeTypesDefinition } from '../../../definitions/badgeTypesDefinition';
import { BadgeTypes } from '../../../enums/badgeTypes';
import "./badgeComponent.scss"

interface BadgeComponentProps {
    type: BadgeTypes
}

const BadgeComponent: FC<BadgeComponentProps> = (props) => {
    const { type } = props;

    return (
        <div className={`badge-component ${type}`}>
            {BadgeTypesDefinition[type]}
        </div>
    )
}

export default BadgeComponent;