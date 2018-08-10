$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyA2R2jqcLElYFgqccWMZZb4j0mFTvdq6uQ",
        authDomain: "first-firebase-4e328.firebaseapp.com",
        databaseURL: "https://first-firebase-4e328.firebaseio.com",
        projectId: "first-firebase-4e328",
        storageBucket: "first-firebase-4e328.appspot.com",
        messagingSenderId: "649555136497"
    };

    firebase.initializeApp(config);
    var database = firebase.database();
    var theArray = [];

    $("#foSubmit").on("click", function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var role = $("#role").val();
        var mRate = $("#monthly-rate").val();
        var sDate = $("#start-date").val();

        var varPush = {
            name: name,
            role: role,
            mRate: mRate,
            sDate: sDate
        };

        database.ref().push(
            varPush
        );
        var tbod = $("#tbody");
        var tRow = $("<tr>");

        database.ref().on("child_added", function (childSnapshot, key) {
            var nam = childSnapshot.val().name;
            var rol = childSnapshot.val().role;
            var mrat = childSnapshot.val().mRate;
            var sdat = childSnapshot.val().sDate;
            console.log(name);
            var tnam = $("<td>").text(nam);
            var trol = $("<td>").text(rol);
            var tmrat = $("<td>").text(mrat);
            var tsdat = $("<td>").text(sdat);
            tRow.append(tnam);
            tRow.append(trol);
            tRow.append(tmrat);
            tRow.append(tsdat);
            tbod.append(tRow);

        });

    });
});