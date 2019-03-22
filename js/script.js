$(document).ready(function() {

    function isDataValid(data) {
        
    }

    function writeToTable(dataToWrite) {
        $("article#" + dataToWrite.subjId + " table tbody").append(
            '<tr>' +
            '<td>' + dataToWrite.classId + '</td>\n' +
            '<td>' + dataToWrite.num + '</td>\n' +
            '<td>' + dataToWrite.name + '</td>\n' +
            '<td>' + dataToWrite.gradeOne + '</td>\n' +
            '<td>' + dataToWrite.gradeTwo + '</td>\n' +
            '</tr>'
        );
    } 
    $("#student-data").submit(function(e) {
        e.preventDefault();

        var dataObj = {
            'classId': $("select[name='class']").val(),
            'subjId': $("select[name='subject']").val(),
            'num': $("input[name='number']").val(),
            'name': $("input[name='name']").val(),
            'gradeOne': $("select[name='grade-one']").val(),
            'gradeTwo': $("select[name='grade-two']").val()
        };

        if (isDataValid(dataObj)) {
            writeToTable(dataObj);
        } else {
            alert("Въведената информация е грешна.");
        }

    });
    
});