// export const fetchPerformances = () => {
//     return $.ajax({
//         url: "api/performances", 
//         method: 'get'
//     })
// }

export const fetchPerformance = (id) => {
    return $.ajax({
        url: `api/performances/${id}`, 
        method: 'get',
    })
}

export const fetchExercisePerformances = exercise => {
    return $.ajax({
        url: 'api/performances', 
        method: 'get', 
        data: {exercise}
    })
}

export const createPerformance = (performance) => {
    return $.ajax({
        url: 'api/performances', 
        method: 'post', 
        data: {performance}
    })
}

export const deletePerformance = (id) => {
    return $.ajax({
        url: `api/performances/${id}`, 
        method: 'delete'
    })
}