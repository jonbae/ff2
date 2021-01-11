export const fetchDayPerformances = () => {
    
    return $.ajax({
        url: `api/day_performances`, 
        method: 'get'
    })
}

export const fetchTraineeDayPerformances = (traineeId) => {
    
    return $.ajax({
        url: `api/day_performances`, 
        method: 'get', 
        data: {traineeId}
    })
}

// //test
// export const fetchDayExercises = () => {
//     return $.ajax({
//         url: `api/day_exercises`, 
//         method: 'get',
//     })
// } 

// export const fetchDayExercise = (id) => {
//     return $.ajax({
//         url: `api/day_exercises/${id}`, 
//         method: 'get',
//     })
// } 

// export const createDayExercise = (dayExercise) => {
//     return $.ajax({
//         url: `api/day_exercises/${dayExercise.id}`, 
//         method: 'post',
//         data: dayExercise
//     })
// }

// export const deleteDayExercise = (id) => {
//     return $.ajax({
//         url: `api/day_exercises/${id}`,
//         method: 'delete'
//     })
// }

