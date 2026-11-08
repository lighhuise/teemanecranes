import React, { useId } from 'react';

export interface LineDividerProps extends React.SVGProps<SVGSVGElement> {
    containerClassName?: string;
}

function LineDivider({ className = '', containerClassName = '', ...props }: LineDividerProps) {
    const uid = useId().replace(/:/g, '');
    const blueId = `${uid}-blue`;
    const grayId = `${uid}-gray`;
    const whiteId = `${uid}-white`;
    const graySheenId = `${uid}-gray-sheen`;
    const grayShadowId = `${uid}-gray-shadow`;
    const whiteShadowId = `${uid}-white-shadow`;

    return (
        <div
            aria-hidden={true}
            className={`relative h-px w-full z-10 overflow-visible pointer-events-none ${containerClassName}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 1366 186"
                className={`absolute left-0 top-1/2 block w-full h-auto -translate-y-1/2 ${className}`}
                {...props}
            >
                <defs>
                    {/* Brand blue: lighter at the outer edge, deeper toward the centre */}
                    <linearGradient id={blueId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#1d7fc0" />
                        <stop offset="0.55" stopColor="#0d5f96" />
                        <stop offset="1" stopColor="#063d63" />
                    </linearGradient>

                    {/* Gray: brushed-metal vertical falloff */}
                    <linearGradient id={grayId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#e5e9ee" />
                        <stop offset="0.5" stopColor="#a9b1bb" />
                        <stop offset="1" stopColor="#737c88" />
                    </linearGradient>

                    {/* Horizontal sheen that fades the gray toward the edges */}
                    <linearGradient id={graySheenId} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#000" stopOpacity="0.18" />
                        <stop offset="0.5" stopColor="#fff" stopOpacity="0.2" />
                        <stop offset="1" stopColor="#000" stopOpacity="0.18" />
                    </linearGradient>

                    {/* White: soft highlight into a cool tint */}
                    <linearGradient id={whiteId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#dde4ec" />
                    </linearGradient>

                    <filter id={grayShadowId} x="-5%" y="-40%" width="110%" height="200%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#021a2e" floodOpacity="0.55" />
                    </filter>

                    <filter id={whiteShadowId} x="-5%" y="-60%" width="110%" height="250%">
                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#1c2530" floodOpacity="0.45" />
                    </filter>
                </defs>

                {/* Bottom layer: blue */}
                <path
                    fill={`url(#${blueId})`}
                    d="M683 64.7C172 64.7 0 0 0 0v186s172-64.7 683-64.7 683 64.7 683 64.7V0s-172 64.7-683 64.7"
                />

                {/* Second layer: gray */}
                <g filter={`url(#${grayShadowId})`}>
                    <path
                        fill={`url(#${grayId})`}
                        d="M683 79.46C172 79.46 0 48.52 0 48.52v88.96s172-30.94 683-30.94 683 30.94 683 30.94V48.52s-172 30.94-683 30.94"
                    />
                    <path
                        fill={`url(#${graySheenId})`}
                        d="M683 79.46C172 79.46 0 48.52 0 48.52v88.96s172-30.94 683-30.94 683 30.94 683 30.94V48.52s-172 30.94-683 30.94"
                    />
                </g>

                {/* Centre layer: white */}
                <path
                    fill={`url(#${whiteId})`}
                    filter={`url(#${whiteShadowId})`}
                    d="M683 88.88c-511 0-683-9.42-683-9.42v27.07s172-9.42 683-9.42 683 9.42 683 9.42V79.46s-172 9.42-683 9.42"
                />
            </svg>
        </div>
    );
}

export default LineDivider;

LineDivider.displayName = 'LineDivider';
