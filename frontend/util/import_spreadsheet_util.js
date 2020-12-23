export const importSpreadsheet = data => {
    debugger
    return $.ajax({
        method: 'post', 
        url: 'api/exercises/import', 
        data,
        contentType: false, 
        processData: false
    })
}

