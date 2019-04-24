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

    var studentInfo = {
        'bel': [],
        'math': [],
        'wd': []
    };

    function addDataToDataStructure(data) {
        studentInfo[data.subjId].push(data);
    }

    function dataValid(data) {
        $("#student-data").validate({
            rules: {
                number: {
                    required: true,
                    number: true,
                },
                name: 'required'
            },
            messages: {
                number: 'Полето не трябва да е празно, както и стойността трябва да е цяло число.',
                name: 'Полето не трябва да е празно.',
            }
        });
        return $("#student-data").valid();
    }

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

        if (dataValid(dataObj)) {
            addDataToDataStructure(dataObj);
            writeDataToTable(dataObj);
        } else {
            alert('Въведените данни са грешни.');
        }

    });
    
});