export const selectBench = ({ benches }, benchId) => {
  return benches[benchId] || { reviewIds: [] };
};

export const selectReviewsForBench = ({ benches, reviews }, bench) => {
  return bench.reviewIds.map(reviewId => reviews[reviewId]);
};
export const asArray = ({ benches }) => (
  Object.keys(benches).map(key => benches[key])
);

export const selectExercises = state => {
  
  let exercises = Object.values(state.entities.exercises); 
  
  return exercises.filter(
    //fix user_id to userId
    
    exercise => exercise.user_id === state.session.id
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