import doc from "components/Doc";
import getUnitList, { getUnitLiList } from "utils/getUnitList";

export default ({
  name,
  value,
  isScreen,
}: {
  name: string;
  value: string;
  isScreen?: boolean;
}) => {
  const getList = isScreen ? getUnitList : getUnitLiList;
  return (
    <div className="max-w-vw overflow-auto">
      <table className="def w-12/12 table-fixed mb-xl">
        <thead>
          <tr>
            {["Class", "Properties"].map((v) => {
              return (
                <th key={v} className={doc.th}>
                  {v}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {[...getList(name, value)].map((item, a) => {
            return (
              <tr key={a}>
                {item.map((v, i) => {
                  return (
                    <td key={i} className={doc.td}>
                      {v}
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
