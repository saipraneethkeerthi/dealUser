import { Skeleton } from 'antd';
import React, { CSSProperties, FC } from 'react'
import "./cardSkeletonComponent.scss"

interface CardSkeletonComponentProps {
    className?: string,
    style?: CSSProperties,
    rows?: number
}

const CardSkeletonComponent: FC<CardSkeletonComponentProps> = (props) => {
    const { className, style, rows } = props;

    return (
        <div className={`card-skeleton-component ${className}`} style={style}>
            <Skeleton active paragraph={{rows: rows ?? 6}}/>
        </div>
    )
}

export default CardSkeletonComponent;