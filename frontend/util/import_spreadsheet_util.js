export const importSpreadsheet = data => {
    return $.ajax({
        method: 'post', 
        url: 'api/exercises/import', 
        data,
        contentType: false, 
        processData: false
    })
}

