$(document).ready(function() {

    function writeToTable(dataToWrite) {
        $("article#" + dataToWrite.subjId + " table tbody").append(
            "<tr>" +
            "<td>" + dataToWrite.classId + "</td>" +
            "<td>" + dataToWrite.num + "</td>" +
            "<td>" + dataToWrite.name + "</td>" +
            "<td>" + dataToWrite.gradeOne + "</td>" +
            "<td>" + dataToWrite.gradeTwo + "</td>" +
            "</tr>"
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

        writeToTable(dataObj);


    });

});