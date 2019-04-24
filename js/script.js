$(document).ready(function() {
    
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please"); 
    
    var studentInfo = {
        'bel': [],
        'math': [],
        'wd': []
    };

    function showRelevantTable(targetObj) {
        $.each($('section#diary article'), function(k, obj) {
            $(obj).css('display', 'none');
        });

        $('section#diary article#' + $(targetObj).attr('data-subj-id')).css({
            'display': 'block'
        });
    }

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

    $('section#diary span.card').on('click', function() {
        showRelevantTable($(this));
    });

});