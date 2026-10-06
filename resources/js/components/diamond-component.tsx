import * as React from "react"

export function DiamondComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 111.2 95"
      fill="currentColor"
      {...props}
    >
      <path d="M111.2 25.2 96.4 1.9l-39.6 21zM0 25.2 15.1 1.9l39.3 21zM55.6 28.1 29.4 62l26.2 33 26.2-33zM83.6 59.4l26.9-31.3-53.7-2.9zM17.2 0l38.4 20.5L94.3 0zM27.6 59.4.9 28.1l53.5-2.9z" />
    </svg>
  )
}
