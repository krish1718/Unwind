import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart({sum}) {
    var last =sum[sum.length-1];
    console.log(last);
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 24], [1, 18], [2, 20], [3, 16], [4, last]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return(
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>)
}
export default MyChart