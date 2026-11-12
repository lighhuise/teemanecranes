import { SVGProps } from "react";

export default function LogoMark(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 184.93 157.99"
            {...props}
        >
            <g>
                <polygon
                    className="fill-[#026093]"
                    points="184.93 41.91 160.32 3.16 94.46 38.08 184.93 41.91"
                />
                <polygon
                    className="fill-[#026093]"
                    points="0 41.91 25.11 3.16 90.47 38.08 0 41.91"
                />
                <polygon
                    className="fill-[#026093]"
                    points="92.47 46.73 48.89 103.11 92.47 157.99 136.04 103.11 92.47 46.73"
                />
            </g>
            <polygon
                className="fill-[#918e88] dark:fill-white transition-colors duration-300"
                points="139.03 98.79 183.77 46.73 94.46 41.91 139.03 98.79"
            />
            <polygon
                className="fill-[#918e88] dark:fill-white transition-colors duration-300"
                points="28.6 0 92.47 34.09 156.83 0 28.6 0"
            />
            <polygon
                className="fill-[#918e88] dark:fill-white transition-colors duration-300"
                points="45.9 98.79 1.5 46.73 90.47 41.91 45.9 98.79"
            />
        </svg>
    );
}
