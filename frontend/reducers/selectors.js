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
  selectDaysByUserId(state,state.session.id);
}

export const selectDaysByUserId = (state,userId) => {
  let days = Object.values(state.entities.days); 
  
  return days.filter( day => day.userId === userId)
}

export const selectDayPerformances = (state, dayId) => {
  let dayPerformances = Object.values(state.entities.dayPerformances); 
  
  return dayPerformances.filter( dayPerformance => dayPerformance.dayId === dayId)
}

export const selectPerformancesByDayId = (state,dayId) => {
  let performances = Object.values(state.entities.performances); 
  let dayPerformances = selectDayPerformances(state,dayId)

  return performances.filter( performance => dayPerformances.filter( dayPerformance => dayPerformance.performanceId === performance.id))

}