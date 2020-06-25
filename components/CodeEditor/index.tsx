import Code from "components/Code";
import { useState, useRef, useEffect, CSSProperties } from "react";

interface Props {
  className?: string;
  codeClassName?: string;
  style?: CSSProperties;
  children: string;
  language?: string;
  theme?: "nightOwl" | "github" | "light" | "dark" | "dracula" | "oceanicNext";
  wrap?: boolean;
  notRender?: boolean;
}

export default ({
  theme = "nightOwl",
  children,
  codeClassName = "bg-gray-900 p-md bl-sm br-sm b-gray-700 mini-scrollbar",
  className = "mt-sm mb-md b-px b-teal-900 b-opacity-10 radius-sm overflow-hidden",
  language = "html",
  wrap,
  notRender,
  ...rest
}: Props) => {
  const [code, setCode] = useState(children);
  const ref = useRef<HTMLDivElement>();
  const [isWrap, setWrap] = useState(wrap);

  const handleChangeWrap = () => {
    setWrap(!isWrap);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = code;
    }
  }, [code]);
  return (
    <div className={[className, "relative"].join(" ")} {...rest}>
      <Code
        language={language}
        wrap={isWrap}
        theme={theme}
        className={codeClassName}
        onInput={setCode}
      >
        {children}
      </Code>
      <div
        className="absolute top-0 right-0 c-white c-opacity-30 py-sm px-sm bg-gray-700 hover:bg-gray-600 active:bg-gray-500 fs-sm radius-a-md cursor-pointer fw-700"
        onClick={handleChangeWrap}
      >
        {isWrap ? "UnWrap" : "Wrap"}
      </div>
      {!notRender && <div ref={(r) => (ref.current = r)}></div>}
    </div>
  );
};
