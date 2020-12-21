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

export const createExercise = payload => (
    $.ajax({
        method: 'post',
        url: 'api/exercises',
        data: { payload }
    })
)

export const updateExercise = payload => (
    $.ajax({
        method: 'patch',
        url: `api/exercises/${payload.id}`,
        data: { payload }
    })
)

export const deleteExercise = id => (
    $.ajax({
        method: 'delete', 
        url: `api/exercises/${id}`
    })
)