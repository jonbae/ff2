export const fetchExercises = () => (
    $.ajax({
        method: 'get', 
        url: 'api/exercises', 
        
    })
)

export const fetchExercise = id => (
    $.ajax({
        method: 'get',
        url: `api/exercises/${id}`
    })
)

export const createExercise = exercise => {
     
    return $.ajax({
        method: 'post',
        url: 'api/exercises',
        data:  { exercise }  
    })
}

export const updateExercise = exercise => {
    return $.ajax({
        method: 'patch',
        url: `api/exercises/${exercise.id}`,
        data: { exercise }
    })
}

export const deleteExercise = id => {
    return $.ajax({
        method: 'delete', 
        url: `api/exercises/${id}`
    })
}