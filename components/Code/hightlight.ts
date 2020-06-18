import light from "prism-react-renderer/themes/duotoneLight";
import dark from "prism-react-renderer/themes/duotoneDark";
import dracula from "prism-react-renderer/themes/dracula";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import Highlight, { defaultProps } from "prism-react-renderer";

const vscode = {
  plain: {
    backgroundColor: "#F5F2F0",
    color: "#728fcb",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#b6ad9a",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#063289",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#b29762",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#2d2006",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#896724",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
      ],
      style: {
        color: "#728fcb",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#93abdc",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#896724",
      },
    },
  ],
};

export default {
  Highlight,
  defaultProps,
  theme: {
    vscode,
    light,
    dark,
    dracula,
    oceanicNext,
  },
};
