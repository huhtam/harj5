import { useState } from "react";

const FlightsTable = ({ data, column, setSelectedItem }) => {
    const [selectedRow, setSelectedRow] = useState(null);
  
    const handleRowSelect = (segmentItem) => {
      setSelectedRow(segmentItem);
      setSelectedItem(segmentItem);
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Select</th>
            {column.map((item, index) => (
              <TableHeadItem item={item} key={index} />    
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow2
              item={item}
              column={column}
              key={index}
              rowIndex={index}
              selectedRow={selectedRow}
              handleRowSelect={handleRowSelect}
            />
          ))}
        </tbody>
      </table>
    );
  };
  
  function TableHeadItem({ item }) {
    return <th>{item.heading}</th>;
}
  const TableRow2 = ({
    item,
    column,
    rowIndex,
    selectedRow,
    handleRowSelect,
  }) => {
    return (
      <>
        {item.segment.map((segmentItem, index) => (
          <tr key={index}>
            <td>
              <input
                type="radio"
                name="row-select"
                value={index}
                checked={selectedRow === segmentItem}
                onChange={() => handleRowSelect(segmentItem)}
              />
            </td>
            {column.map((columnItem, columnIndex) => {
              if (columnItem.value.includes(".")) {
                const itemSplit = columnItem.value.split(".");
                if (
                  itemSplit[1] === "departureTime" ||
                  itemSplit[1] === "arrivalTime"
                ) {
                  const formattedTime = formatDate(segmentItem.departureTime);
                  return (
                    <td
                      key={`${rowIndex}-${columnIndex}-${columnItem.value}`}
                    >
                      {formattedTime}
                    </td>
                  );
                }
                return (
                  <td
                    key={`${rowIndex}-${columnIndex}-${columnItem.value}`}
                  >
                    {segmentItem[itemSplit[1]]}
                  </td>
                );
              }
              return (
                <td key={`${rowIndex}-${columnIndex}-${columnItem.value}`}>
                  {item[columnItem.value]}
                </td>
              );
            })}
          </tr>
        ))}
      </>
    );
  };

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export default FlightsTable
/*


<thead>
                <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
                </tr>
            </thead>

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.')
        return <td key={item}>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      item.itemSplit[0].forEach(item, index => {
                return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
            });

            item.itemSplit[0].forEach(element, index => {
                return <td>{item[itemSplit[0]][index][element[index]]}</td>
            });

            columnItem.itemSplit[0].map((columnItems)) => {
                return <td>{item[itemSplit[0]][0][itemSplit[1]]}</td>
            }

            const TableRow2 = ({ item, column }) => (
    <tr>
      {column.map((columnItem) => {
        if (columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.')
          return <td>{item[itemSplit[0]].map((nestedItem) => nestedItem[itemSplit[1]])}</td>
        }
        return <td>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )

  WORKING:
  const TableRow = ({ item, column }) => (
    <tr>
    {column.map((columnItem) => {
        
        if(columnItem.value.includes('.')) {
            const itemSplit = columnItem.value.split('.')
            
            return <td>{item[itemSplit[0]][0][itemSplit[1]]}</td>
        }
      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

  const TableRow2 = ({ item, column }) => (
    <>
      {item.segment.map((segmentItem, index) => (
        <tr key={index}>
          {column.map((columnItem) => {
            if (columnItem.value === 'departureTime') {
              const formattedTime = formatDate(segmentItem[columnItem.value]);
              return <td>{formattedTime}</td>;
            }
            if (columnItem.value.includes('.')) {
              const itemSplit = columnItem.value.split('.')
              return <td>{segmentItem[itemSplit[1]]}</td>
            }
            return <td>{item[`${columnItem.value}`]}</td>
          })}
        </tr>
      ))}
    </>
  )

  const TableRow2 = ({ item, column }) => (
    <>
      {item.segment.map((segmentItem, index) => (
        <tr key={`${item.id}-${index}`}>
          {column.map((columnItem) => {
            
            if (columnItem.value.includes('.')) {
              const itemSplit = columnItem.value.split('.');
              if (itemSplit[1] === 'departureTime' || itemSplit[1] === 'arrivalTime') {
                const formattedTime = formatDate(segmentItem.departureTime);
                return <td key={`${item.id}-${index}-${columnItem.value}`}>{formattedTime}</td>;
              }
              return <td key={`${item.id}-${index}-${columnItem.value}`}>{segmentItem[itemSplit[1]]}</td>;
            }
            return <td key={`${item.id}-${index}-${columnItem.value}`}>{item[`${columnItem.value}`]}</td>;
          })}
        </tr>
      ))}
    </>
  );
*/