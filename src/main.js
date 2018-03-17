import {
    AgeFinder
} from "./agefinder";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";

$(document).ready(function () {
    $('#age-finder-button').hover(function () {
        $(this).text("Are you sure?");
        $(this).removeClass("btn-primary");
        $(this).addClass("btn-danger");
    }, function () {
        $(this).text("Calculate");
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-primary");
    });
    $('#age-finder-button').click(function () {
        $(this).off();
        $(this).text("BRUTAL");
        $(this).fadeOut(4000);
        const newAge = new AgeFinder($("#age-input").val() * 365);
        $("#results").empty();
        const data = ["Earth: " + newAge.lifeExpectancyEarthInDays() / 365, "Mercury: " + newAge.lifeExpectancyMercuryInDays() / 365, "Venus: " + newAge.lifeExpectancyVenusInDays() / 365, "Mars: " + newAge.lifeExpectancyMarsInDays() / 365, "Jupiter: " + newAge.lifeExpectancyJupiterInDays() / 365];
        $("#results").append("<em>Average life left per planet:</em> <br><br>");

        data.forEach(element => {
            $("#results").append("<li>" + element + "</li>");
        });

    });
});