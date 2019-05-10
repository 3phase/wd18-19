$(document).ready(function() {

    var studentInfo = {
        'bel': [],
        'math': [],
        'wd': []
    };

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    function openArticle(targetArticle) {
        $("section#diary article").css("display", "none");
        $("section#diary article#" + targetArticle).css("display", "block");
        $("section#diary header span.active").removeClass("active");
        $("section#diary header span[data-attr-subj='" + targetArticle + "']").addClass("active");
    }

    function saveData(data) {
        studentInfo[data.subjId].push(data);
    }

    function isDataValid(data) {
        $("#student-data").validate({
            rules: {
                number: {
                    required: true,
                    number: true,
                }, 
                name: {
                    required: true,
                    lettersonly: true
                }
            },
            messages: {
                 number: "Номерът е задължителен.",
                 name: "Името е задължително"
            }
        });

        return $("#student-data").valid();
    }

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

        if (isDataValid(dataObj)) {
            saveData(dataObj);
            writeToTable(dataObj);
        }


    });

    $("header span.card").on("click", function() {
        openArticle($(this).attr("data-attr-subj"));
    });

});