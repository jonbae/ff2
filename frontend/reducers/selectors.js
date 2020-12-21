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
