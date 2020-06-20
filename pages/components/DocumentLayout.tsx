import Nav from "pages/Nav";
import { ReactNode } from "react";
import DocumentSide, { DocumentSideProps } from "./DocumentSide";

export interface DocumentlayoutProps extends DocumentSideProps {
  children: ReactNode;
  nowUrl?: string;
}

export default ({ children, nowUrl, list }: DocumentlayoutProps) => {
  return (
    <div className="h-vh col">
      <Nav nowUrl={nowUrl} />
      <div className="mt-2xl h-auto flex-1 row">
        <div
          className="sm:none fixed left-0 bg-white z-10"
          style={{
            height: "100%",
            maxHeight: "100vh",
          }}
        >
          <DocumentSide nowUrl={nowUrl} list={list} />
        </div>
        <div className="lg:pl-5xl w-12/12">{children}</div>
      </div>
    </div>
  );
};
