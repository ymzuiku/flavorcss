import React, { ReactNode, CSSProperties, useState, useRef } from "react";
import useSSRLayoutEffect from "components/useSSRLayoutEffect";
import useResize from "components/useResize";

export interface CrossTableItem {
  value: string;
  label: ReactNode;
  style?: CSSProperties;
  width?: number;
  stickyLeft?: boolean;
  stickyRight?: boolean;
  className?: string;
  [key: string]: any;
}

export interface CrossTableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  height?: string;
  data?: { [key: string]: ReactNode; $$checked?: boolean }[];
  columns: CrossTableItem[];
  onChangeSelect?: Function;
  showCheckbox?: boolean;
  showIndex?: boolean;
  checkboxClassName?: string;
  colClassName?: string;
  headClassName?: string;
  indexLabel?: string;
}

const Table: React.FC<CrossTableProps> = ({
  className,
  children,
  columns,
  data,
  showCheckbox,
  showIndex,
  onChangeSelect,
  checkboxClassName,
  indexLabel = "Index",
  height = "100%",
  colClassName,
  headClassName,
  ...rest
}) => {
  const [changed, updateChanged] = useState(1);
  const [box, wh] = useResize();
  const isHaveData = data && data.length > 0;
  let isHaveUnChecked = useRef<boolean>(false);
  const nowCols = [...columns];
  if (showCheckbox) {
    nowCols.unshift({
      value: "$$checkbox",
      width: 50,
      label: (
        <input
          type="checkbox"
          className={checkboxClassName}
          value={isHaveUnChecked.current as any}
          onChange={() => {
            isHaveUnChecked.current = !!data.find((item) => !item.$$checked);
            data.forEach((item) => {
              item.$$checked = isHaveUnChecked.current;
            });
            updateChanged(changed + 1);
            onChangeSelect && onChangeSelect();
          }}
        />
      ),
    });
  }
  if (showIndex) {
    nowCols.unshift({
      value: "$$index",
      label: indexLabel,
      width: 50,
      style: {
        textAlign: "center",
      },
    });
  }
  data = data.map((item, i) => {
    if (showCheckbox) {
      if (item.$$checked === undefined) {
        item.$$checked = false;
      }
    }
    if (showIndex) {
      item["$$index"] = i + 1;
    }
    return item;
  });

  let colW = 0;

  return (
    <div
      ref={(r) => (box.current = r)}
      className={[className, "width-12/12 relative"].join(" ")}
      {...rest}
    >
      <table
        className="mini-scrollbar block w-12/12 overflow-auto border-collapse"
        style={{ width: wh.w, height }}
      >
        <thead className="">
          <tr className="margin-0">
            {nowCols.map((col, i) => {
              if (col.width) {
                colW += col.width;
              }
              const isStickyLeft =
                col.stickyLeft ||
                col.value === "$$index" ||
                col.value === "$$checkbox";
              return (
                <th
                  key={col.value}
                  cr-table-sticky-left={isStickyLeft ? "on" : "off"}
                  cr-table-index={col.value === "$$index"}
                  className={[
                    "align-start sticky top-0 z-10",
                    col.className,
                    headClassName,
                  ].join(" ")}
                  style={{
                    width: col.width,
                    minWidth: col.width,
                    ...col.style,
                    left: colW - (col.width || 0),
                  }}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white">
          {isHaveData &&
            data.map((item, cellIndex) => {
              let w = 0;
              return (
                <tr key={cellIndex} className="">
                  {nowCols.map((col, i) => {
                    if (col.width) {
                      w += col.width;
                    }
                    const isStickyLeft =
                      col.stickyLeft ||
                      col.value === "$$index" ||
                      col.value === "$$checkbox";

                    return (
                      <td
                        key={col.value}
                        cr-table-sticky-left={isStickyLeft ? "on" : "off"}
                        cr-table-index={col.value === "$$index"}
                        className={[col.className, colClassName].join(" ")}
                        style={{
                          position: isStickyLeft ? "sticky" : undefined,
                          width: col.width,
                          minWidth: col.width,
                          ...col.style,
                          left: w - (col.width || 0),
                        }}
                      >
                        {col.value !== "$$checkbox" ? (
                          item[col.value]
                        ) : (
                          <input
                            type="checkbox"
                            value={item.$$checked as any}
                            className={checkboxClassName}
                            onChange={() => {
                              item.$$checked = !item.$$checked;
                              updateChanged(changed + 1);
                              onChangeSelect && onChangeSelect(item);
                            }}
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
