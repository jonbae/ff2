// export const fetchPerformances = () => {
//     return $.ajax({
//         url: "api/performances", 
//         method: 'get'
//     })
// }

export const createPerformance = (performance) => {
    return $.ajax({
        url: 'api/performances', 
        method: 'post', 
        data: performance
    })
}

export const deletePerformance = (id) => {
    return $.ajax({
        url: `api/performances/${id}`, 
        method: 'delete'
    })
}