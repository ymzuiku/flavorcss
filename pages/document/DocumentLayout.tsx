import Nav from "pages/Nav";
import { ReactNode } from "react";
import DocumentSide from "./DocumentSide";

interface Props {
  children: ReactNode;
  nowUrl?: string;
}

export default ({ children, nowUrl }: Props) => {
  return (
    <div className="h-vh col">
      <Nav />
      <div className="mt-2xl flex-1 row sm:col-r">
        <DocumentSide nowUrl={nowUrl} />
        {children}
      </div>
    </div>
  );
};
