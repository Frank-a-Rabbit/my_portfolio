import React from 'react';

type SvgCommonProps = {
    children?: React.ReactNode;
    id?: string;

}

const SvgFilter = ({ id }: SvgCommonProps) => {
    return (
        <filter id={id}>
            <feGaussianBlur stdDeviation="5" />
        </filter>
    )
};

const SvgDefs = ({ children }: SvgCommonProps) => {
    return (
        <defs>
            {children}
        </defs>
    )
};

export { SvgDefs, SvgFilter };