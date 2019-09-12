$("#firstSentence").addClass("redText");
$("#secondSentence").addClass("redText");

$("#myElement").addClass("blueText");
$("#myElement").click(function(e) {
    // $(e.target).css( "fontSize", "1px" );
    alert("myElement was clicked!");
});

$("#greenBack").addClass("greenBackground");
$("#orangeBack").addClass("orangeBackground");