import GrainSvg from "components/GrainSvg";
import type { ReactNode } from "react";
import classNames from "utils/classNames";

export default function ({
  children,
  href,
}: {
  children: string | ReactNode | ReactNode[];
  href?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(
          "py-3 px-6 transition-all flex rounded-xl text-dark font-bold",
          "bg-gradient-to-r from-secondary to-primary relative z-0 hover:scale-105"
        )}
      >
        <GrainSvg frequency={0.4} borderRadius="rounded-xl" />
        {children}
      </a>
    );
  }
  return (
    <button className="py-3 px-6 transition-all rounded-lg text-dark font-bold bg-gradient-to-r from-secondary to-primary relative">
      <GrainSvg frequency={0.4} borderRadius="rounded-xl" />
      {children}
    </button>
  );
}

// .btn-grad {
//   background-image: linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%);
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }

// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }
