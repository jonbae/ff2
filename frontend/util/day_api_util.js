export const fetchDays = () => {
    return $.ajax({
        method: 'get', 
        url: 'api/days',
    })
}

export const createDay = (day) => {
    return $.ajax({
        method: 'post', 
        url: 'api/days',
        data: {day}
    })
}

export const deleteDay = (id) => {
    return $.ajax({
        method: 'delete', 
        url: `api/days/${id}`
    })
}