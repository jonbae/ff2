// import React from "react"; 

// export default function DayIndexItem() {

//     return (
//         <div>
//             owiejf
//         </div>
//     )
// }


// renderList(dailyDayPerformances) {
//     const {daysObject, performancesObject, exercisesObject} = this.props; 
//     //
//     return dailyDayPerformances.map( (dayPerformances,i) => {
//         const performances = dayPerformances.map( dayPerformance => {
//             return (
//                 <div key={dayPerformance.id}>
//                     <h2>
//                         {exercisesObject[performancesObject[dayPerformance.performanceId]?.exerciseId]?.name}
//                     </h2>
//                     <li>weight: {performancesObject[dayPerformance.performanceId]?.weight}</li>
//                     <li>duration: {performancesObject[dayPerformance.performanceId]?.duration}</li>
//                     <li>sets: {performancesObject[dayPerformance.performanceId]?.sets}</li>
//                     <li>rest: {performancesObject[dayPerformance.performanceId]?.rest_time}</li>
//                 </div>
//             )
//         })
//         return (
//             <div key={i}>
//                 <h1>
//                     {daysObject[dayPerformances[0]?.dayId]?.name}
//                 </h1>
//                 <button onClick={this.playExercises}>
//                     Start day exercises
//                 </button>
//                 {performances}    
//             </div>
//         )      
//     })
// }