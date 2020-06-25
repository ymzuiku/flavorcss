import { useState, useEffect, ReactNode, CSSProperties, useRef } from "react";

export interface CodeProps {
  children: ReactNode;
  language?: string;
  theme?: "nightOwl" | "github" | "light" | "dark" | "dracula" | "oceanicNext";
  className?: string;
  wrap?: boolean;
  onInput?: (code: string) => any;
  style?: CSSProperties;
}

let Highlight: any;
let defaultProps: any;
let themeList: any;

export default ({
  theme = "nightOwl",
  language = "html",
  wrap,
  children,
  style,
  className,
  onInput,
}: CodeProps) => {
  const code = typeof children === "string" ? children.trim() : "";
  const [num, setNum] = useState(0);
  const ref = useRef<HTMLPreElement>();

  useEffect(() => {
    import("./hightlight").then((d) => {
      Highlight = d.default.Highlight;
      themeList = d.default.theme;
      defaultProps = d.default.defaultProps;
      setNum(num + 1);
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("contenteditable", "true");
    }
  }, [ref.current, Highlight]);

  if (!Highlight) {
    return null;
  }

  return (
    <Highlight
      {...defaultProps}
      theme={themeList[theme]}
      code={code}
      language={language}
    >
      {({
        className: themeClassName,
        style: themeStyle,
        tokens,
        getLineProps,
        getTokenProps,
      }) => {
        return (
          <pre
            ref={(r) => (ref.current = r)}
            spellCheck={false}
            className={[className, themeClassName].join(" ")}
            style={
              {
                WebkitFontSmoothing: "auto",
                ...themeStyle,
                whiteSpace: wrap ? "pre-wrap" : undefined,
                wordWrap: wrap ? "break-word" : undefined,
                overflow: "auto",
                backgroundColor: undefined,
                ...style,
              } as any
            }
            onInput={(e: any) => {
              if (onInput) {
                onInput(e.target.innerText);
              }
            }}
          >
            {tokens.map((line: any, i: number) => (
              <div
                spellCheck={false}
                key={JSON.stringify(line)}
                {...getLineProps({ line, key: i })}
              >
                {line.map((token: any, key: string) => (
                  <span
                    spellCheck={false}
                    key={JSON.stringify(token)}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};