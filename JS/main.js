var muscle = 'biceps' //鍛えたい筋力の指定
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': '9fBhhnSRgMSjfO4nbyjGMg==rWsKhUaSIqygaIyy'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result[0]);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});