import React from "react";
interface CrossSvgProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  svg: string;
}

export default ({ svg, ...rest }: CrossSvgProps) => {
  return (
    <div
      ref={(r) => {
        if (r && !r.innerHTML) {
          r.innerHTML = svg;
        }
      }}
      {...rest}
    ></div>
  );
};
