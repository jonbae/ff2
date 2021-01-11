// export const selectBench = ({ benches }, benchId) => {
//   return benches[benchId] || { reviewIds: [] };
// };

// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };
// export const asArray = ({ benches }) => (
//   Object.keys(benches).map(key => benches[key])
// );

export const select = entities => state => {
  let resources = Object.values(state.entities[entities])
  
  return resources.filter( resource => resource.user_id === state.session.id)
}

export const selectPerformances = select('performances')


export const selectExercises = state => {
  
  let exercises = Object.values(state.entities.exercises); 
  
  return exercises.filter(
    
    exercise => exercise.userId === state.session.id
  )
}

export const selectTrainees = state => {
  let users = Object.values(state.entities.users); 
  

  return users.filter( 
    user => user.trainerId === state.session.id
  )
}

export const selectTrainer = (state,trainerId) => {
  let users = Object.values(state.entities.users); 
  return users.filter( user => user.id === trainerId); 
}

export const selectExercisePerformances = (state,exerciseId) => {
  let performances = Object.values(state.entities.performances); 
  return performances.filter(
    performance => performance.exerciseId === exerciseId
  )
}



// cheesy
export const selectPerformancesWithExercise = (state) => {
  
  let performances = Object.values(state.entities.performances);
  let exercises = Object.values(state.entities.exercises)

  performances.filter( 
    performance => performance.userId === state.session.id
  )

  for(const performance of performances) {
    for(const exercise of exercises) {
      if(performance.exerciseId == exercise.id){
        performance.exercise = exercise
        
      }
    }
  }
  
  return performances
}

export const selectDays = (state) => {
  let days = Object.values(state.entities.days); 
  
  return days.filter( day => day.userId === state.session.id)
}

export const selectDaysByUserId = (state,userId) => {
  let days = Object.values(state.entities.days); 
  
  return days.filter( day => day.userId === userId)
}

// export const selectDayExercises = (state,dayId) => {
//   let exercises = Object.values(state.entities.exercises); 
//   return exercises.filter(
//       exercise => exercise.dayId === dayId
//   )
// }

export const selectDayExercisesThroughDay = (state,dayId) => {
  let dayExercises = Object.values(state.entities.dayExercises); 

  
  return dayExercises.filter( dayExercise => dayExercise.dayId == dayId)
}

export const selectExerciseIdsFromDayExerciseThroughDay = (state,dayId) => {
  return selectDayExercisesThroughDay(state,dayId).map( x => x.exerciseId) 
}

export const selectDatedPerformancesWithExercise = (state,exerciseId) => {
  let performances  = selectPerformancesWithExercise(state); 
  
  let dayExercises = Object.values(state.entities.dayExercises); 
  return performances.filter( performance => performance.exercise.id === exerciseId)
}

export const selectDayPerformances = (state, dayId) => {
  let dayPerformances = Object.values(state.entities.dayPerformances); 
  
  return dayPerformances.filter( dayPerformance => dayPerformance.dayId === dayId)
}

// export const selectExercisesWithPerformance = state => {
//   let performances = Object.values(state.entities.performances);  
//   performances.filter( 
//     performance => performance.userId === state.session.id  
//   )
//   let exercises = Object.values(staste.entities.exercises); 
//   exercises.filter(  
//     exercise => exercise.userId === state.session.id  
//   )

//     for(const exercise of exercises) {
//       exercise.performanceIds.forEach( performanceId => {
//         performances.forEach( performance => {
//           if(performance.id = performanceId){

//             exercise = {...exercise, ...performance }   
//           }
//         })
//       })
//     }


//     return exercises; 

// } 



// export const selectDatedExercises = (state, dayId) => {
//   let dayExercises = selectDayExercises(state,dayId); 
//   let exercises = Object.values(state.entities.exercises).filter( exercise => {
//     return dayExercises.filter(dayExercise => {
//       return dayExercise.exerciseId === exercise.id
//     })
//   })
//   let performances = Object.values(state.entities.performances);

//   let exercisesWithPerformances = selectExercisesWithPerformance(exercises, performances)
//   return exercisesWithPerformances;
// }

// export const selectExercisesWithPerformance = (exercises, performances) => {
//   for(const exercise of exercises) {
//     exercise.performanceIds.forEach( performanceId => {
//       performances.forEach( performance => {
//         if(performance.id = performanceId){

//           exercise = {...exercise, ...performance } 
//         }
//       })
//     })
//   }

//   return exercises; 
// }


// export const denormalizeDayExercisePerformance = (state) => {
//   let days = Object.values(state.entities.days);
//   let dayExercises; 
//   let exercises = Object.values(state.entities.exercises);
//   let performances = Object.values(state.entities.performances);
  
  
  
// }
// export const selectDaysWithPerformancesWithExercises = state => {
//   const performances = selectPerformancesWithExercise(state); 
//   let days = Object.values(state.entities.days); 
   
//   console.log(performances)
  
// }