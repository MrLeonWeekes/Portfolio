const teams = [" Man Utd ", " Everton ", " Leicester City ", " Liverpool ", " Newcastle ", " Norwich City ", " Arsenal ", " Brentford ", " Southampton ", " Man City ", " Chelsea ", " Crystal Palace ", " Leeds Utd ", " Aston Villa ", " West Ham ", " Tottenham "];

document.getElementById("last16-t1").textContent = teams[0];
document.getElementById("last16-t2").textContent = teams[1];
document.getElementById("last16-t3").textContent = teams[2];
document.getElementById("last16-t4").textContent = teams[3];
document.getElementById("last16-t5").textContent = teams[4];
document.getElementById("last16-t6").textContent = teams[5];
document.getElementById("last16-t7").textContent = teams[6];
document.getElementById("last16-t8").textContent = teams[7];
document.getElementById("last16-t9").textContent = teams[8];
document.getElementById("last16-t10").textContent = teams[9];
document.getElementById("last16-t11").textContent = teams[10];
document.getElementById("last16-t12").textContent = teams[11];
document.getElementById("last16-t13").textContent = teams[12];
document.getElementById("last16-t14").textContent = teams[13];
document.getElementById("last16-t15").textContent = teams[14];
document.getElementById("last16-t16").textContent = teams[15];

document.getElementById("last-16-button").disabled = false;
document.getElementById("qtr-final-button").disabled = true;
document.getElementById("semi-final-button").disabled = true;
document.getElementById("final-button").disabled = true;

function last16() {
    var teamScores = [];
    teams.forEach((item) => {
        var randomScore = Math.random();
        var calculatedScore = Math.floor(randomScore * 6);
        teamScores.push(calculatedScore)
        return teamScores;
    });

    if (teamScores[0] > teamScores[1]) {
        teams.splice(1, 1);
    } else if (teamScores[0] < teamScores[1]) {
        teams.splice(0, 1);
    } else {
        teams.splice(1, 1);
        teamScores[0] = teamScores[0] + 1;
    }

    if (teamScores[2] > teamScores[3]) {
        teams.splice(2, 1);
    } else if (teamScores[2] < teamScores[3]) {
        teams.splice(1, 1);
    } else {
        teams.splice(2, 1);
        teamScores[2] = teamScores[2] + 1;
    }

    if (teamScores[4] > teamScores[5]) {
        teams.splice(3, 1);
    } else if (teamScores[4] < teamScores[5]) {
        teams.splice(2, 1);
    } else {
        teams.splice(3, 1);
        teamScores[4] = teamScores[4] + 1;
    }

    if (teamScores[6] > teamScores[7]) {
        teams.splice(4, 1);
    } else if (teamScores[6] < teamScores[7]) {
        teams.splice(3, 1);
    } else {
        teams.splice(4, 1);
        teamScores[6] = teamScores[6] + 1;
    }

    if (teamScores[8] > teamScores[9]) {
        teams.splice(5, 1);
    } else if (teamScores[8] < teamScores[9]) {
        teams.splice(4, 1);
    } else {
        teams.splice(5, 1);
        teamScores[8] = teamScores[8] + 1;
    }

    if (teamScores[10] > teamScores[11]) {
        teams.splice(6, 1);
    } else if (teamScores[10] < teamScores[11]) {
        teams.splice(5, 1);
    } else {
        teams.splice(6, 1);
        teamScores[10] = teamScores[10] + 1;
    }

    if (teamScores[12] > teamScores[13]) {
        teams.splice(7, 1);
    } else if (teamScores[12] < teamScores[13]) {
        teams.splice(6, 1);
    } else {
        teams.splice(7, 1);
        teamScores[12] = teamScores[12] + 1;
    }

    if (teamScores[14] > teamScores[15]) {
        teams.splice(8, 1);
    } else if (teamScores[14] < teamScores[15]) {
        teams.splice(7, 1);
    } else {
        teams.splice(8, 1);
        teamScores[14] = teamScores[14] + 1;
    }

    document.getElementById("last16-t1-score").textContent = teamScores[0];
    document.getElementById("last16-t2-score").textContent = teamScores[1];
    document.getElementById("last16-t3-score").textContent = teamScores[2];
    document.getElementById("last16-t4-score").textContent = teamScores[3];
    document.getElementById("last16-t5-score").textContent = teamScores[4];
    document.getElementById("last16-t6-score").textContent = teamScores[5];
    document.getElementById("last16-t7-score").textContent = teamScores[6];
    document.getElementById("last16-t8-score").textContent = teamScores[7];
    document.getElementById("last16-t9-score").textContent = teamScores[8];
    document.getElementById("last16-t10-score").textContent = teamScores[9];
    document.getElementById("last16-t11-score").textContent = teamScores[10];
    document.getElementById("last16-t12-score").textContent = teamScores[11];
    document.getElementById("last16-t13-score").textContent = teamScores[12];
    document.getElementById("last16-t14-score").textContent = teamScores[13];
    document.getElementById("last16-t15-score").textContent = teamScores[14];
    document.getElementById("last16-t16-score").textContent = teamScores[15];

    document.getElementById("qtr-t1").textContent = teams[0];
    document.getElementById("qtr-t2").textContent = teams[1];
    document.getElementById("qtr-t3").textContent = teams[2];
    document.getElementById("qtr-t4").textContent = teams[3];
    document.getElementById("qtr-t5").textContent = teams[4];
    document.getElementById("qtr-t6").textContent = teams[5];
    document.getElementById("qtr-t7").textContent = teams[6];
    document.getElementById("qtr-t8").textContent = teams[7];

    document.getElementById("last-16-button").disabled = true;
    document.getElementById("qtr-final-button").disabled = false;
}

///////////////////////////////////////////////////////////////////////////////// QTF FINAL

function qtrFinal1() {
    var teamScores = [];
    teams.forEach((item) => {
        var randomScore = Math.random();
        var calculatedScore = Math.floor(randomScore * 6);
        teamScores.push(calculatedScore)
        return teamScores;
    });

    if (teamScores[0] > teamScores[1]) {
        teams.splice(1, 1);
    } else if (teamScores[0] < teamScores[1]) {
        teams.splice(0, 1);
    } else {
        teamScores[0] = teamScores[0] + 1;
        teams.splice(1, 1);
    }

    if (teamScores[2] > teamScores[3]) {
        teams.splice(2, 1);
    } else if (teamScores[2] < teamScores[3]) {
        teams.splice(1, 1);
    } else {
        teamScores[2] = teamScores[2] + 1;
        teams.splice(2, 1);
    }

    if (teamScores[4] > teamScores[5]) {
        teams.splice(3, 1);
    } else if (teamScores[4] < teamScores[5]) {
        teams.splice(2, 1);
    } else {
        teamScores[4] = teamScores[4] + 1;
        teams.splice(3, 1);
    }

    if (teamScores[6] > teamScores[7]) {
        teams.splice(4, 1);
    } else if (teamScores[6] < teamScores[7]) {
        teams.splice(3, 1);
    } else {
        teamScores[6] = teamScores[6] + 1;
        teams.splice(4, 1);
    }

    document.getElementById("qtr-t1-score").textContent = teamScores[0];
    document.getElementById("qtr-t2-score").textContent = teamScores[1];
    document.getElementById("qtr-t3-score").textContent = teamScores[2];
    document.getElementById("qtr-t4-score").textContent = teamScores[3];
    document.getElementById("qtr-t5-score").textContent = teamScores[4];
    document.getElementById("qtr-t6-score").textContent = teamScores[5];
    document.getElementById("qtr-t7-score").textContent = teamScores[6];
    document.getElementById("qtr-t8-score").textContent = teamScores[7];

    document.getElementById("semi-t1").textContent = teams[0];
    document.getElementById("semi-t2").textContent = teams[1];
    document.getElementById("semi-t3").textContent = teams[2];
    document.getElementById("semi-t4").textContent = teams[3];

    document.getElementById("qtr-final-button").disabled = true;
    document.getElementById("semi-final-button").disabled = false;
}

///////////////////////////////////////////////////////////////////////////////// SEMI FINAL

function semiFinal1() {
    var teamScores = [];
    teams.forEach((item) => {
        var randomScore = Math.random();
        var calculatedScore = Math.floor(randomScore * 6);
        teamScores.push(calculatedScore)
        return teamScores;
    });

    if (teamScores[0] > teamScores[1]) {
        teams.splice(1, 1);
    } else if (teamScores[0] < teamScores[1]) {
        teams.splice(0, 1);
    } else {
        teamScores[0] = teamScores[0] + 1;
        teams.splice(1, 1);
    }

    if (teamScores[2] > teamScores[3]) {
        teams.splice(2, 1);
    } else if (teamScores[2] < teamScores[3]) {
        teams.splice(1, 1);
    } else {
        teamScores[2] = teamScores[2] + 1;
        teams.splice(2, 1);
    }

    document.getElementById("semi-t1-score").textContent = teamScores[0];
    document.getElementById("semi-t2-score").textContent = teamScores[1];
    document.getElementById("semi-t3-score").textContent = teamScores[2];
    document.getElementById("semi-t4-score").textContent = teamScores[3];

    document.getElementById("final-t1").textContent = teams[0];
    document.getElementById("final-t2").textContent = teams[1];

    document.getElementById("semi-final-button").disabled = true;
    document.getElementById("final-button").disabled = false;
}

////////////////////////////////////////////////////////////////////////////////////// FINAL

function final1() {
    var teamScores = [];
    teams.forEach((item) => {
        var randomScore = Math.random();
        var calculatedScore = Math.floor(randomScore * 6);
        teamScores.push(calculatedScore);
        return teamScores;
    });

    if (teamScores[0] > teamScores[1]) {
        document.getElementById("winners").innerHTML = teams[0] + "Win the FA Cup";
    } else if (teamScores[0] < teamScores[1]) {
        document.getElementById("winners").innerHTML = teams[1] + "Win the FA Cup";
    } else {
        teamScores[0] = teamScores[0] + 1;
        document.getElementById("winners").innerHTML = teams[0] + "Win the FA Cup";
    }


    document.getElementById("final-t1-score").textContent = teamScores[0];
    document.getElementById("final-t2-score").textContent = teamScores[1];

    document.getElementById("final-button").disabled = true;
}

////////////////////////////////////////////////////////////////////////////////////// RESET

function restartCup() {
    location.reload();
}




