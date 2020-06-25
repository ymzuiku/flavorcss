import Nav from "pages/components/Nav";
import { ReactNode, useState } from "react";
import DocumentSide, { DocumentSideProps } from "./DocumentSide";

export interface DocumentlayoutProps extends DocumentSideProps {
  children: ReactNode;
  nowUrl?: string;
}

function ToggleSideBar({ list }: any) {
  const [showSide, setShowSide] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  const closeSide = ()=> setShowSide(false);
  const changeSide = ()=> setShowSide(!showSide);
  const mask = ["bg-gray-800 w-vw h-vh z-20 fixed top-0 left-0 transition-500", showSide?"events-auto bg-opacity-50":"events-none bg-opacity-0"].join(' ');

  return (
    <div className="pc:none">
     <div
        className={[
          "fixed left-0 z-30 top-0 h-vh row transition-400 bg-white",
          showSide?"events-auto move-x-0":"events-none move-x--5xl",
        ].join(" ")}
      >
        <DocumentSide list={list} />
      </div>
      <div
          className={mask}
          onClick={closeSide}
      />
      <div className={["cursor-pointer fixed top-3xl bg-indigo-700 c-white p-sm ml-sm mt--sm radius-sm shadow-lg left-0 z-20 row transition-400", showSide && "move-x-5xl"].join(' ')} onClick={changeSide}>
        <svg
          className={[
            "align-middle w-md h-md fill-current transition-0",
            showSide && "scale--100",
          ].join(" ")}
          viewBox="0 0 1024 1024"
          version="1.1"
        >
          <path
            d="M659.626667 149.333333H89.173333C75.52 149.333333 64.362667 160.213333 64 173.845333v76.842667a25.173333 25.173333 0 0 0 25.173333 24.490667h570.453334c13.909333 0 25.216-11.242667 25.216-25.173334V174.506667c0-13.952-11.306667-25.194667-25.194667-25.194667zM89.173333 585.578667h494.933334a25.173333 25.173333 0 0 0 25.194666-25.194667v-75.456a25.173333 25.173333 0 0 0-25.173333-25.194667H89.173333A25.173333 25.173333 0 0 0 64 483.989333v77.312a25.173333 25.173333 0 0 0 25.173333 24.277334zM659.626667 770.133333H89.173333c-13.653333 0-24.810667 10.88-25.173333 24.490667v76.842667A25.173333 25.173333 0 0 0 89.173333 896h570.453334c13.909333 0 25.216-11.242667 25.216-25.173333v-75.477334c0-13.952-11.306667-25.194667-25.194667-25.194666zM947.2 508.224l-209.301333-161.621333c-11.648-9.386667-33.706667-4.074667-33.706667 23.850666v309.248c0 33.92 22.058667 33.877333 33.706667 23.850667l209.322666-161.621333c11.584-8.746667 10.794667-24.341333 0-33.706667z"
            p-id="8343"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ({ children, nowUrl, list }: DocumentlayoutProps) => {
  return (
    <div className="h-vh col">
      <Nav />
      <div className="mt-2xl h-auto flex-1 row">
        <div
          className="none pc:flex fixed left-0 bg-white z-10"
          style={{
            height: "100%",
            maxHeight: "100vh",
          }}
        >
          <DocumentSide list={list} />
        </div>
        <ToggleSideBar list={list} />
        <div className="pl-0 pc:pl-5xl w-12/12">{children}</div>
      </div>
    </div>
  );
};
