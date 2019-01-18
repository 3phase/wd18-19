$(document).ready(function() {

    function writeDataToTable(objToWrite) {
        $("article#" + objToWrite.subjId + " table tbody").append(
            "<tr>" +
            "<td>" + objToWrite.classId + "</td>" +
            "<td>" + objToWrite.num + "</td>" +
            "<td>" + objToWrite.name + "</td>" +
            "<td>" + objToWrite.gradeOne + "</td>" +
            "<td>" + objToWrite.gradeTwo + "</td>" +
            "</tr>",
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

        writeDataToTable(dataObj);

    });

});