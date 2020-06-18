import Code from "components/Code";
import { useState, useRef, useEffect, CSSProperties } from "react";

interface Props {
  className?: string;
  codeClassName?: string;
  style?: CSSProperties;
  children: string;
  theme?: "vscode" | "light" | "dark" | "dracula" | "oceanicNext";
  wrap?: boolean;
}

export default ({
  theme = "dark",
  children,
  codeClassName,
  wrap,
  ...rest
}: Props) => {
  const [code, setCode] = useState(children);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    ref.current.innerHTML = code;
  }, [code]);
  return (
    <div {...rest}>
      <Code wrap={wrap} theme={theme} className={codeClassName} onInput={setCode}>
        {children}
      </Code>
      <div ref={(r) => (ref.current = r)}></div>
    </div>
  );
};
