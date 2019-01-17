$(document).ready(function() {

    function validateData(formData) {
        for (var key in formData) {
            if (!formData[key]) 
                return false;
        }
        return true;
    }

    function writeData(formData) {
        if (!validateData(formData)) {
            alert("Моля, проверете всички полета.");
            return;
        }
        
        var table = $("#"+formData['subj']);
        table.find("tbody").append(
            '<tr>' +
            '<td>' + formData['class'] + '</td>' +
            '<td>' + formData['num'] + '</td>' +
            '<td>' + formData['name'] + '</td>' +
            '<td>' + formData['gradeOne'] + '</td>' +
            '<td>' + formData['gradeTwo'] + '</td>' +
            '</tr>',
        );
    
    }

    $("#student-data").submit(function(e) {
        e.preventDefault();
        
        let formData = {
            'class': $("select[name='class']").val(),
            'subj': $("select[name='subject']").val(),
            'num': $("input[name='number']").val(),
            'name': $("input[name='name']").val(),
            'gradeOne': $("select[name='grade-one']").val(),
            'gradeTwo': $("select[name='grade-two']").val()
        };

        writeData(formData);

    });

});