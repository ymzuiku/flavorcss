import light from "prism-react-renderer/themes/duotoneLight";
import dark from "prism-react-renderer/themes/duotoneDark";
import github from "prism-react-renderer/themes/github";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import dracula from "prism-react-renderer/themes/dracula";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import Highlight, { defaultProps } from "prism-react-renderer";


export default {
  Highlight,
  defaultProps,
  theme: {
    github,
    nightOwl,
    light,
    dark,
    dracula,
    oceanicNext,
  },
};
