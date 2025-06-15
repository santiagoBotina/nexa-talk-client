import { memo } from "react";

const Component = ({ className = "w-16 h-16" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="8" fill="#374151" />

    <line x1="50" y1="50" x2="50" y2="22" stroke="#374151" strokeWidth="3" />
    <line x1="50" y1="50" x2="78" y2="22" stroke="#374151" strokeWidth="3" />
    <line x1="50" y1="50" x2="78" y2="78" stroke="#374151" strokeWidth="3" />
    <line x1="50" y1="50" x2="50" y2="78" stroke="#374151" strokeWidth="3" />
    <line x1="50" y1="50" x2="22" y2="78" stroke="#374151" strokeWidth="3" />
    <line x1="50" y1="50" x2="22" y2="22" stroke="#374151" strokeWidth="3" />

    <circle cx="50" cy="15" r="7" fill="#374151" />
    <circle cx="50" cy="15" r="3" fill="white" />

    <circle cx="73" cy="27" r="7" fill="#374151" />
    <circle cx="73" cy="27" r="3" fill="white" />

    <circle cx="85" cy="50" r="7" fill="#374151" />
    <circle cx="85" cy="50" r="3" fill="white" />

    <circle cx="73" cy="73" r="7" fill="#374151" />
    <circle cx="73" cy="73" r="3" fill="white" />

    <circle cx="50" cy="85" r="7" fill="#374151" />
    <circle cx="50" cy="85" r="3" fill="white" />

    <circle cx="27" cy="73" r="7" fill="#374151" />
    <circle cx="27" cy="73" r="3" fill="white" />

    <circle cx="15" cy="50" r="7" fill="#374151" />
    <circle cx="15" cy="50" r="3" fill="white" />

    <circle cx="27" cy="27" r="7" fill="#374151" />
    <circle cx="27" cy="27" r="3" fill="white" />
  </svg>
);

const Logo = memo(Component);

export { Logo };
