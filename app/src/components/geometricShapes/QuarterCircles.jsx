// // "use client"

// // const QuarterCircles = () => {
// //     return(
// //         <></>
// //     )
// // };
// // export default QuarterCircles;


// "use client";

// import React from 'react';

// const colors = ['#08bbb5', '#08bbb5', '#0000FF', '#FFFF00', '#FF00FF'];

// const QuarterCircles = () => {
//   return (
//     <div style={{ position: 'relative', width: '500px', height: '500px' }}>
//       {colors.map((color, index) => {
//         const diameter = 160 + index * 90;
//         return (
//           <div
//             key={index}
//             style={{
//               position: 'absolute',
//               width: diameter,
//               height: diameter,
//               borderRadius: '50%',
//               backgroundColor: color,
//               top: `calc(50% - ${diameter / 2}px)`,
//               left: `calc(50% - ${diameter / 2}px)`,
//               opacity: 1 - index * 0.2, // تنظیم شفافیت به طوری که رنگ‌ها قابل مشاهده باشند
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default QuarterCircles;


"use client";

import React from 'react';

const colors = [ '#044e5b','#067a80', '#068e90','#07a9a7', '#08bbb5'];

const QuarterCircles = () => {
  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      {colors.map((color, index) => {
        const diameter = 160 + (colors.length - 1 - index) * 90;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: diameter,
              height: diameter,
              borderRadius: '50%',
              backgroundColor: color,
              top: `calc(50% - ${diameter / 2}px)`,
              left: `calc(50% - ${diameter / 2}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default QuarterCircles;

