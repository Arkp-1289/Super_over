runs = [1, 2, 3, 4, 6, "W"]
s_a = 0
s_b = 0
TEAM_A="TEAM-A"
TEAM_B="TEAM-B"
TEAM_A=prompt("enter 1st team name");
TEAM_B=prompt("enter 2nd team name");
TEAM_A=TEAM_A.toUpperCase()
TEAM_B=TEAM_B.toUpperCase()
// batcolour(TEAM_A);
// function batcolour(team){
//     if (team=="CSK"){document.getElementsByClassName('pixel').style.backgroundColor = "yellow"}
//    else if (team=="MI"){document.getElementsByClassName('pixel').style.backgroundColor = "blue"}
//  else if (team=="RCB"){document.getElementsByClassName('pixel').style.backgroundColor = "red"}
    
// }
toss = prompt("enter Head(h) or Tail(t)");
String(toss)

while (toss.toLowerCase() != "head" && toss.toLowerCase() != "tail") {
    toss = prompt("enter Head(h) or Tail(t)");
    console.log("You Entered Wrong")

}
var T;
toss_arr = ["head", "tail"]
if (toss.toLowerCase() == toss_arr[Math.floor(Math.random() * 2)]) {
    alert("Hurray TEAM-A WON THE TOSS")
    T = 1
    console.log("T " + T)

} else {
    alert("OOPS... TEAM-B WON THE TOSS")
    T = 2
    console.log("T " + T)
}

option = prompt("enter Your choice Bat or Bowl")
String(option)
while (option.toLowerCase() != "bat" && option.toLowerCase() != "bowl") {
    option = prompt("enter Your choice Bat or Bowl")

}

res(T)
console.log("T " + T)

function res(T) {
    console.log("T " + T)
    console.log("inside Ress")
    if (T == 1) {
        if (option.toLowerCase() == "bat") {
            document.getElementById("tres").innerHTML += TEAM_A+" won the toss and Elected to bat first";
            bat = 1;
            document.getElementById("bat_team").innerHTML = TEAM_A;
            document.getElementById("bowl_team").innerHTML = TEAM_B;


        } else {
            document.getElementById("tres").innerHTML += TEAM_A + " won the toss and Elected to Bowl first";
            bat = 2;
            document.getElementById("bowl_team").innerHTML = TEAM_A;
            document.getElementById("bat_team").innerHTML = TEAM_B;

        }


    } else {
        if (option.toLowerCase() == "bat") {
            document.getElementById("tres").innerHTML += TEAM_B+ " won the toss and Elected to bat first";
            bat = 2;
            document.getElementById("bat_team").innerHTML = TEAM_B;
            document.getElementById("bowl_team").innerHTML = TEAM_A;

        } else {
            document.getElementById("tres").innerHTML += TEAM_B +" won the toss and Elected to Bowl first";
            bat = 1;
            document.getElementById("bowl_team").innerHTML = TEAM_B;
            document.getElementById("bat_team").innerHTML = TEAM_A;

        }

    }
}
score = 0
bat_w_c = 0
bow_w_c = 0

count = 1

function batting() {
    if (count > 6) {
        alert("No possible clicks")
        return;
    } else {
        document.getElementById("rem_balls").innerHTML = 6 - count;
        k = runs[Math.floor(Math.random() * 6)]
        console.log(k)
        document.getElementById("each").innerHTML = k
        if (k == "W") {
            bat_w_c += 1
            if (bat_w_c > 1) {
                document.getElementById("wick").innerHTML = "Two wickets down ";
                count = 7;
                document.getElementById("score").innerHTML = score;
                document.getElementById("target").innerHTML = score + 1;
                return;
            }
        } else {
            score += k
        }
    }

    document.getElementById("score").innerHTML = score;
    count += 1;
    document.getElementById("target").innerHTML = score + 1;

}




count2 = 1
score2 = 0


function bowling() {
    if (count<7) { alert("bowling team have to finish first"); return; }
     if (bat == 1) {
        document.getElementById("bat_team").innerHTML = TEAM_B;
        document.getElementById("bowl_team").innerHTML = TEAM_A;
    } else {
        document.getElementById("bat_team").innerHTML = TEAM_A;
        document.getElementById("bowl_team").innerHTML = TEAM_B;
    }
    if (count2 > 6) {
        alert("No possible clicks")
        return;
    
    } else {
        k = runs[Math.floor(Math.random() * 6)]
        console.log(k)
        document.getElementById("each").innerHTML = k
        document.getElementById("rem_balls").innerHTML = 6 - count2;
        if (k == "W") {
            bow_w_c += 1
            if (bow_w_c > 1) { document.getElementById("wick").innerHTML = "Two wickets down ";
                count2 = 7; return; }
        } else {
            score2 += k
            document.getElementById("score").innerHTML = score2
        }

    }

    document.getElementById("score").innerHTML = score2;
    document.getElementById("score2").innerHTML = score2
    console.log("Score1: " + score + " score2: " + score2)
    if (score2 > score) {
        document.getElementById("result").innerHTML = "Batting Team Won The match"
        count2 = 7;
        return;
    } else if (score == score2) {
        console.log("hello")
        console.log("Score1: " + score + " score2: " + score2)
        document.getElementById("result").innerHTML = "Match Tied"
    } else {
        document.getElementById("result").innerHTML = "Bowling Team defended the target won the match"
    }

    count2 += 1

}
