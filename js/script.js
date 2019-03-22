$(document).ready(function() {
    
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please"); 
    
    var studentInfo = {
        'bel': [],
        'math': [],
        'wd': []
    };

    function addDataToStudentInfo(dataObj) {
        studentInfo[dataObj.subjId].push(dataObj);
    }

    function isDataValid(data) {
        $("#student-data").validate({
            rules: {
                number: {
                    required: true,
                    number: true
                },
                name: {
                    required: true,
                    lettersonly: true
                }
            },
            messages: {
                number: 'Моля, въведете стойност за номер, която да е целочислена.',
                name: 'Моля, въведете стойност за името, състояща се само от букви',
            }
        });
        return $("#student-data").valid();
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
            addDataToStudentInfo(dataObj);
            writeToTable(dataObj);
        }

    });

});