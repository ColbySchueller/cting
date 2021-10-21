//TASKS
//Description: I want to animate the screen counting up a certain number. I want to eas-out (slow down the counting when it gets close to the target number).
 //Exponential Decay: f(x) = a(1 + r)x or f(x) = abx where b = 1 + r.
 //a is the initial or starting value of the function,
 //r is the percent growth or decay rate, written as a decimal,
 //b is the growth factor or growth multiplier.Since powers of negative numbers behave strangely, we limit b to positive values.
$(document).ready(function () {
    var btnLabels = ["Subscribers", "Users", "People", "Admins", "Groups", "Animals", "Pets", "Species", "Bacteria", "Buildings", "Clouds", "Books", "Employees", "Prisoners", "Camels", "Dogs", "Cats",
                     "Subjects", "Classes", "Professors", "Minimalists", "Republicans", "Democrats", "Views", "Labels", "Items", "T-shirts"]

    var startN = 0;
    var endN = Math.ceil(Math.random() * 347);
    var currentN = 0;
    var startInterval = 0; //default interval for time to change
    var changeInterval = 0.2; //interval for time changing
    var rateOfChange = 0.5; //rate of change for number (determined by difference between startN and endN)
    var waitTime = Math.pow(currentN/500.0, 2) * 1.1;

    //Stats
    var totalTime = 0;
    var avgTime = 0;

    var labelIndex = Math.round(Math.random() * (btnLabels.length - 1));
    $('.btn').text(btnLabels[labelIndex]);
    $('.end').text(endN);

    //Progress bar
    var progress = 0;
    var pEnd = window.screen.width;
    var pCurrent = 0;

    console.log("pEnd: " + pEnd);
    //Start
    count(startN);

    function count(number) {
        $('.counter').text(number);
        currentN = number;
        if (currentN != endN) {
            setTimeout(function () {
                count(number + 1);
                updateWaitTime();
                totalTime += waitTime;
                updateProgress();
            }, waitTime);

        }
        else {
            displayResults();
        }
    }
    function updateWaitTime() {
        waitTime = Math.pow(currentN / (endN / 7.0), 2) * (endN / (endN - currentN/2.0)) ;
    }
    function updateProgress() {
        progress = (currentN / endN) * pEnd;
        $('.progress').css('width', progress + "px");
    }
    function displayResults() {
        avgTime = totalTime / endN;
        $('#total').text("Total: " + totalTime/1000.0 + " seconds");
        $('#avg').text("Avg: " + avgTime + " milliseconds");
    }
});