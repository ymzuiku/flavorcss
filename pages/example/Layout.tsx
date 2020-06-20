import React from "react";
import DocumentLayout, {
  DocumentlayoutProps,
} from "pages/components/DocumentLayout";

export default ({ nowUrl, children }: DocumentlayoutProps) => {
  return <DocumentLayout nowUrl={nowUrl} list={list} children={children} />;
};

const list = [
  { head: "Example" },
  { title: "Button", url: "/document" },
  { head: "入门" },
  { title: "安装", url: "/document/install" },
  { title: "浏览器支持", url: "/document/browser" },
  { head: "核心概念" },
  { title: "运行机制", url: "/document/operating" },
  { title: "Utility-First", url: "/document/utility-first" },
  { title: "响应式设计", url: "/document/relevant-design" },
  { title: "Pseudo-Class Variants", url: "/document/pseudo-class" },
  { title: "提取组件", url: "/document/use-components" },
  { head: "定制" },
  { title: "配置", url: "/document/config" },
  { title: "主题", url: "/document/theme" },
  { title: "断点", url: "/document/block-point" },
  { title: "颜色", url: "/document/colors" },
  { title: "间距", url: "/document/spaces" },
  { title: "编写插件", url: "/document/plugin" },
  { head: "基础样式" },
  { title: "单位", url: "/document/util" },
];
