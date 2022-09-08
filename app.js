////createing counstructor////
function Worldcup(name, pos, played, won, drawn, lost, goals_for, goals_against, pts) {
    this.pos = pos;
    this.name = name;
    this.played = played;
    this.won = won;
    this.drawn = drawn;
    this.lost = lost;
    this.goals_for = goals_for;
    this.goals_against = goals_against;
    this.pts = pts;
}
let gropATeam1 = new Worldcup("Uruguay", 1, 3, 3, 0, 0, 5, 0, 9);
let gropATeam2 = new Worldcup("Russia", 2, 3, 2, 0, 1, 8, 4, 6);
let gropATeam3 = new Worldcup("Saudi Arabia", 3, 3, 1, 0, 2, 2, 7, 3);
let gropATeam4 = new Worldcup("Egypt", 4, 3, 0, 0, 3, 2, 6, 0);
let gropBTeam1 = new Worldcup("Spain", 1, 3, 1, 2, 0, 6, 5, 5);
let gropBTeam2 = new Worldcup("Portugal", 2, 3, 1, 2, 0, 2, 4, 5);
let gropBTeam3 = new Worldcup("Iran", 3, 3, 1, 1, 1, 2, 2, 4);
let gropBTeam4 = new Worldcup("Morocco", 4, 3, 0, 1, 2, 2, 4, 1);
let gropCTeam1 = new Worldcup("France", 1, 3, 2, 1, 0, 3, 1, 7);
let gropCTeam2 = new Worldcup("Denmark", 2, 3, 1, 2, 0, 2, 1, 5);
let gropCTeam3 = new Worldcup("Peru", 3, 3, 1, 0, 2, 2, 2, 3);
let gropCTeam4 = new Worldcup("Australia", 4, 3, 0, 1, 2, 2, 5, 1);
let gropDTeam1 = new Worldcup("Croatia", 1, 3, 3, 0, 0, 7, 1, 9);
let gropDTeam2 = new Worldcup("Argentina", 2, 3, 1, 1, 1, 3, 5, 4);
let gropDTeam3 = new Worldcup("Nigeria", 3, 3, 1, 0, 2, 3, 4, 3);
let gropDTeam4 = new Worldcup("Iceland", 4, 3, 0, 1, 2, 2, 5, 1);






// name =  "World Cup 2018";
let worldCup = {

    groupA: {
        standings: {
            team1: {
                "name": "Uruguay",
                "code": "URU",
                "pos": 1,
                "played": 3,
                "won": 3,
                "drawn": 0,
                "lost": 0,
                "goals_for": 5,
                "goals_against": 0,
                "pts": 9
            },
            team2: {
                "name": "Russia",
                "code": "RUS",
                "pos": 2,
                "played": 3,
                "won": 2,
                "drawn": 0,
                "lost": 1,
                "goals_for": 8,
                "goals_against": 4,
                "pts": 6
            },

            team3: {
                "name": "Saudi Arabia",
                "code": "KSA",
                "pos": 3,
                "played": 3,
                "won": 1,
                "drawn": 0,
                "lost": 2,
                "goals_for": 2,
                "goals_against": 7,
                "pts": 3
            },
            team4: {
                "name": "Egypt",
                "code": "EGY",
                "pos": 4,
                "played": 3,
                "won": 0,
                "drawn": 0,
                "lost": 3,
                "goals_for": 2,
                "goals_against": 6,
                "pts": 0
            },
        }
    },
    groupB: {
        standings:
        {
            team1: {
                "name": "Spain",
                "code": "ESP",
                "pos": 1,
                "played": 3,
                "won": 1,
                "drawn": 2,
                "lost": 0,
                "goals_for": 6,
                "goals_against": 5,
                "pts": 5
            },
            team2: {
                "name": "Portugal",
                "code": "POR",
                "pos": 2,
                "played": 3,
                "won": 1,
                "drawn": 2,
                "lost": 0,
                "goals_for": 5,
                "goals_against": 4,
                "pts": 5
            },
            team3: {
                "name": "Iran",
                "code": "IRN",
                "pos": 3,
                "played": 3,
                "won": 1,
                "drawn": 1,
                "lost": 1,
                "goals_for": 2,
                "goals_against": 2,
                "pts": 4
            },
            team4: {
                "name": "Morocco",
                "code": "MAR",
                "pos": 4,
                "played": 3,
                "won": 0,
                "drawn": 1,
                "lost": 2,
                "goals_for": 2,
                "goals_against": 4,
                "pts": 1
            },

        }
    },
    groupC: {
        standings: {
            team1: {
                "name": "France",
                "code": "FRA",
                "pos": 1,
                "played": 3,
                "won": 2,
                "drawn": 1,
                "lost": 0,
                "goals_for": 3,
                "goals_against": 1,
                "pts": 7
            },
            team2: {
                "name": "Denmark",
                "code": "DEN",
                "pos": 2,
                "played": 3,
                "won": 1,
                "drawn": 2,
                "lost": 0,
                "goals_for": 2,
                "goals_against": 1,
                "pts": 5
            },
            team3: {
                "name": "Peru",
                "code": "PER",
                "pos": 3,
                "played": 3,
                "won": 1,
                "drawn": 0,
                "lost": 2,
                "goals_for": 2,
                "goals_against": 2,
                "pts": 3
            },
            team4: {
                "name": "Australia",
                "code": "AUS",
                "pos": 4,
                "played": 3,
                "won": 0,
                "drawn": 1,
                "lost": 2,
                "goals_for": 2,
                "goals_against": 5,
                "pts": 1
            }
        }
    },

    groupD: {
        standings: {
            team1: {
                "name": "Croatia",
                "code": "CRO",
                "pos": 1,
                "played": 3,
                "won": 3,
                "drawn": 0,
                "lost": 0,
                "goals_for": 7,
                "goals_against": 1,
                "pts": 9
            },
            team2: {
                "name": "Argentina",
                "code": "ARG",
                "pos": 2,
                "played": 3,
                "won": 1,
                "drawn": 1,
                "lost": 1,
                "goals_for": 3,
                "goals_against": 5,
                "pts": 4
            },
            team3: {
                "name": "Nigeria",
                "code": "NGA",
                "pos": 3,
                "played": 3,
                "won": 1,
                "drawn": 0,
                "lost": 2,
                "goals_for": 3,
                "goals_against": 4,
                "pts": 3
            },
            team4: {
                "name": "Iceland",
                "code": "ISL",
                "pos": 4,
                "played": 3,
                "won": 0,
                "drawn": 1,
                "lost": 2,
                "goals_for": 2,
                "goals_against": 5,
                "pts": 1
            },

        }
    }
    // {
    //     "name": "Group E",
    //     "standings": [
    //         {
    //             "team": {
    //                 "name": "Brazil",
    //                 "code": "BRA"
    //                 },
    //             "pos": 1,
    //             "played": 3,
    //             "won": 2,
    //             "drawn": 1,
    //             "lost": 0,
    //             "goals_for": 5,
    //             "goals_against": 1,
    //             "pts": 7
    //             },
    //         {
    //             "team": {
    //                 "name": "Switzerland",
    //                 "code": "SUI"
    //                 },
    //             "pos": 2,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 2,
    //             "lost": 0,
    //             "goals_for": 5,
    //             "goals_against": 4,
    //             "pts": 5
    //             },
    //         {
    //             "team": {
    //                 "name": "Serbia",
    //                 "code": "SRB"
    //                 },
    //             "pos": 3,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 0,
    //             "lost": 2,
    //             "goals_for": 2,
    //             "goals_against": 4,
    //             "pts": 3
    //             },
    //         {
    //             "team": {
    //                 "name": "Costa Rica",
    //                 "code": "CRC"
    //                 },
    //             "pos": 4,
    //             "played": 3,
    //             "won": 0,
    //             "drawn": 1,
    //             "lost": 2,
    //             "goals_for": 2,
    //             "goals_against": 5,
    //             "pts": 1
    //             }
    //     ]
    // },
    // {
    //     "name": "Group F",
    //     "standings": [
    //         {
    //             "team": {
    //                 "name": "Sweden",
    //                 "code": "SWE"
    //                 },
    //             "pos": 1,
    //             "played": 3,
    //             "won": 2,
    //             "drawn": 0,
    //             "lost": 1,
    //             "goals_for": 5,
    //             "goals_against": 2,
    //             "pts": 6
    //             },
    //         {
    //             "team": {
    //                 "name": "Mexico",
    //                 "code": "MEX"
    //                 },
    //             "pos": 2,
    //             "played": 3,
    //             "won": 2,
    //             "drawn": 0,
    //             "lost": 1,
    //             "goals_for": 3,
    //             "goals_against": 4,
    //             "pts": 6
    //             },
    //         {
    //             "team": {
    //                 "name": "South Korea",
    //                 "code": "KOR"
    //                 },
    //             "pos": 3,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 0,
    //             "lost": 2,
    //             "goals_for": 3,
    //             "goals_against": 3,
    //             "pts": 3
    //             },
    //         {
    //             "team": {
    //                 "name": "Germany",
    //                 "code": "GER"
    //                 },
    //             "pos": 4,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 0,
    //             "lost": 2,
    //             "goals_for": 2,
    //             "goals_against": 4,
    //             "pts": 3
    //             }
    //     ]
    // },
    // {
    //     "name": "Group G",
    //     "standings": [
    //         {
    //             "team": {
    //                 "name": "Belgium",
    //                 "code": "BEL"
    //                 },
    //             "pos": 1,
    //             "played": 3,
    //             "won": 3,
    //             "drawn": 0,
    //             "lost": 0,
    //             "goals_for": 9,
    //             "goals_against": 2,
    //             "pts": 9
    //             },
    //         {
    //             "team": {
    //                 "name": "England",
    //                 "code": "ENG"
    //                 },
    //             "pos": 2,
    //             "played": 3,
    //             "won": 2,
    //             "drawn": 0,
    //             "lost": 1,
    //             "goals_for": 8,
    //             "goals_against": 3,
    //             "pts": 6
    //             },
    //         {
    //             "team": {
    //                 "name": "Tunisia",
    //                 "code": "TUN"
    //                 },
    //             "pos": 3,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 0,
    //             "lost": 2,
    //             "goals_for": 5,
    //             "goals_against": 8,
    //             "pts": 3
    //             },
    //         {
    //             "team": {
    //                 "name": "Panama",
    //                 "code": "PAN"
    //                 },
    //             "pos": 4,
    //             "played": 3,
    //             "won": 0,
    //             "drawn": 0,
    //             "lost": 3,
    //             "goals_for": 2,
    //             "goals_against": 11,
    //             "pts": 0
    //             }
    //     ]
    // },
    // {
    //     "name": "Group H",
    //     "standings": [
    //         {
    //             "team": {
    //                 "name": "Colombia",
    //                 "code": "COL"
    //                 },
    //             "pos": 1,
    //             "played": 3,
    //             "won": 2,
    //             "drawn": 0,
    //             "lost": 1,
    //             "goals_for": 5,
    //             "goals_against": 2,
    //             "pts": 6
    //             },
    //         {
    //             "team": {
    //                 "name": "Japan",
    //                 "code": "JPN"
    //                 },
    //             "pos": 2,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 1,
    //             "lost": 1,
    //             "goals_for": 4,
    //             "goals_against": 4,
    //             "pts": 4
    //             },
    //         {
    //             "team": {
    //                 "name": "Senegal",
    //                 "code": "SEN"
    //                 },
    //             "pos": 3,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 1,
    //             "lost": 1,
    //             "goals_for": 4,
    //             "goals_against": 4,
    //             "pts": 4
    //             },
    //         {
    //             "team": {
    //                 "name": "Poland",
    //                 "code": "POL"
    //                 },
    //             "pos": 4,
    //             "played": 3,
    //             "won": 1,
    //             "drawn": 0,
    //             "lost": 2,
    //             "goals_for": 2,
    //             "goals_against": 5,
    //             "pts": 3
    //             }
    //     ]

    // }

}
// console.log(worldCup.groupA.standings.team1.pos)

///getting body////
let mainBody = document.getElementById("main")

////creating main div/////
// let mainDiv = document.createElement("div")
// mainDiv.setAttribute("style", 'overflow-x:auto')

////heading for group a////////////
let div1 = document.createElement('div')
mainBody.appendChild(div1)
{

let firstDiv = document.createElement("div")
let firstDivh1 = document.createElement('h1')
let firstDivh1Text = document.createTextNode("GROUP A")
firstDivh1.appendChild(firstDivh1Text)
firstDiv.appendChild(firstDivh1)
firstDiv.style.display = "flex";
firstDiv.style.justifyContent = "center";
div1.appendChild(firstDiv)
}




/////// creating table//////

let tableA = document.createElement("table");
/////creating row 1////
{
let tr1 = document.createElement("tr");

//// creating row1 data/////
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")
let th5 = document.createElement("th")
let th6 = document.createElement("th")
let th7 = document.createElement("th")
let th8 = document.createElement("th")
let th9 = document.createElement("th")
let th1textNode = document.createTextNode("POSITION")
let th2textNode = document.createTextNode("TEAMS")
let th3textNode = document.createTextNode("PLAYED")
let th4textNode = document.createTextNode("WON")
let th5textNode = document.createTextNode("DRAWN")
let th6textNode = document.createTextNode("LOST")
let th7textNode = document.createTextNode("GOALS_FOR")
let th8textNode = document.createTextNode("GOALS_AGAINST")
let th9textNode = document.createTextNode("Points")
th1.appendChild(th1textNode)
th2.appendChild(th2textNode)
th3.appendChild(th3textNode)
th4.appendChild(th4textNode)
th5.appendChild(th5textNode)
th6.appendChild(th6textNode)
th7.appendChild(th7textNode)
th8.appendChild(th8textNode)
th9.appendChild(th9textNode)
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)
tr1.appendChild(th5)
tr1.appendChild(th6)
tr1.appendChild(th7)
tr1.appendChild(th8)
tr1.appendChild(th9)
tableA.appendChild(tr1)
}

///// creating row 2////
{
    let tr2 = document.createElement("tr");

    //// creating row2 data/////

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")
    let td1textNode = document.createTextNode(gropATeam1.pos)
    let td2textNode = document.createTextNode(gropATeam1.name)
    let td3textNode = document.createTextNode(gropATeam1.played)
    let td4textNode = document.createTextNode(gropATeam1.won)
    let td5textNode = document.createTextNode(gropATeam1.drawn)
    let td6textNode = document.createTextNode(gropATeam1.lost)
    let td7textNode = document.createTextNode(gropATeam1.goals_for)
    let td8textNode = document.createTextNode(gropATeam1.goals_against)
    let td9textNode = document.createTextNode(gropATeam1.pts)
    td1.appendChild(td1textNode)
    td2.appendChild(td2textNode)
    td3.appendChild(td3textNode)
    td4.appendChild(td4textNode)
    td5.appendChild(td5textNode)
    td6.appendChild(td6textNode)
    td7.appendChild(td7textNode)
    td8.appendChild(td8textNode)
    td9.appendChild(td9textNode)
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)
    tr2.appendChild(td5)
    tr2.appendChild(td6)
    tr2.appendChild(td7)
    tr2.appendChild(td8)
    tr2.appendChild(td9)
    tableA.appendChild(tr2)
}
/////// creating row 3//////
{
let tr3 = document.createElement("tr");

//// creating row3 data/////

let td10 = document.createElement("td")
let td11 = document.createElement("td")
let td12 = document.createElement("td")
let td13 = document.createElement("td")
let td14 = document.createElement("td")
let td15 = document.createElement("td")
let td16 = document.createElement("td")
let td17 = document.createElement("td")
let td18 = document.createElement("td")
let td10textNode = document.createTextNode(gropATeam2.pos)
let td11textNode = document.createTextNode(gropATeam2.name)
let td12textNode = document.createTextNode(gropATeam2.played)
let td13textNode = document.createTextNode(gropATeam2.won)
let td14textNode = document.createTextNode(gropATeam2.drawn)
let td15textNode = document.createTextNode(gropATeam2.lost)
let td16textNode = document.createTextNode(gropATeam2.goals_for)
let td17textNode = document.createTextNode(gropATeam2.goals_against)
let td18textNode = document.createTextNode(gropATeam2.pts)
td10.appendChild(td10textNode)
td11.appendChild(td11textNode)
td12.appendChild(td12textNode)
td13.appendChild(td13textNode)
td14.appendChild(td14textNode)
td15.appendChild(td15textNode)
td16.appendChild(td16textNode)
td17.appendChild(td17textNode)
td18.appendChild(td18textNode)
tr3.appendChild(td10)
tr3.appendChild(td11)
tr3.appendChild(td12)
tr3.appendChild(td13)
tr3.appendChild(td14)
tr3.appendChild(td15)
tr3.appendChild(td16)
tr3.appendChild(td17)
tr3.appendChild(td18)
tableA.appendChild(tr3)
}

{
///// creating row 4////
let tr4 = document.createElement("tr");

//// creating row4 data/////

let td19 = document.createElement("td")
let td20 = document.createElement("td")
let td21 = document.createElement("td")
let td22 = document.createElement("td")
let td23 = document.createElement("td")
let td24 = document.createElement("td")
let td25 = document.createElement("td")
let td26 = document.createElement("td")
let td27 = document.createElement("td")
let td19textNode = document.createTextNode(gropATeam3.pos)
let td20textNode = document.createTextNode(gropATeam3.name)
let td21textNode = document.createTextNode(gropATeam3.played)
let td22textNode = document.createTextNode(gropATeam3.won)
let td23textNode = document.createTextNode(gropATeam3.drawn)
let td24textNode = document.createTextNode(gropATeam3.lost)
let td25textNode = document.createTextNode(gropATeam3.goals_for)
let td26textNode = document.createTextNode(gropATeam3.goals_against)
let td27textNode = document.createTextNode(gropATeam3.pts)
td19.appendChild(td19textNode)
td20.appendChild(td20textNode)
td21.appendChild(td21textNode)
td22.appendChild(td22textNode)
td23.appendChild(td23textNode)
td24.appendChild(td24textNode)
td25.appendChild(td25textNode)
td26.appendChild(td26textNode)
td27.appendChild(td27textNode)
tr4.appendChild(td19)
tr4.appendChild(td20)
tr4.appendChild(td21)
tr4.appendChild(td22)
tr4.appendChild(td23)
tr4.appendChild(td24)
tr4.appendChild(td25)
tr4.appendChild(td26)
tr4.appendChild(td27)
tableA.appendChild(tr4)
}

{
///// creating row 5////
let tr5 = document.createElement("tr");

//// creating row5 data/////

let td28 = document.createElement("td")
let td29 = document.createElement("td")
let td30 = document.createElement("td")
let td31 = document.createElement("td")
let td32 = document.createElement("td")
let td33 = document.createElement("td")
let td34 = document.createElement("td")
let td35 = document.createElement("td")
let td36 = document.createElement("td")
let td28textNode = document.createTextNode(gropATeam4.pos)
let td29textNode = document.createTextNode(gropATeam4.name)
let td30textNode = document.createTextNode(gropATeam4.played)
let td31textNode = document.createTextNode(gropATeam4.won)
let td32textNode = document.createTextNode(gropATeam4.drawn)
let td33textNode = document.createTextNode(gropATeam4.lost)
let td34textNode = document.createTextNode(gropATeam4.goals_for)
let td35textNode = document.createTextNode(gropATeam4.goals_against)
let td36textNode = document.createTextNode(gropATeam4.pts)
td28.appendChild(td28textNode)
td29.appendChild(td29textNode)
td30.appendChild(td30textNode)
td31.appendChild(td31textNode)
td32.appendChild(td32textNode)
td33.appendChild(td33textNode)
td34.appendChild(td34textNode)
td35.appendChild(td35textNode)
td36.appendChild(td36textNode)
tr5.appendChild(td28)
tr5.appendChild(td29)
tr5.appendChild(td30)
tr5.appendChild(td31)
tr5.appendChild(td32)
tr5.appendChild(td33)
tr5.appendChild(td34)
tr5.appendChild(td35)
tr5.appendChild(td36)
tableA.appendChild(tr5)
}
div1.appendChild(tableA)


//////ending table A/////////////




/////creating table B/////


////heading for group b////////////
let div2 = document.createElement('div')
mainBody.appendChild(div2)


{
    let firstDiv = document.createElement("div")
    let firstDivh1 = document.createElement('h1')
    let firstDivh1Text = document.createTextNode("GROUP B")
    firstDivh1.appendChild(firstDivh1Text)
    firstDiv.appendChild(firstDivh1)
    firstDiv.style.display = "flex";
    firstDiv.style.justifyContent = "center";
    div2.appendChild(firstDiv)
 }

let tableB = document.createElement('table')


{
    let tr1 = document.createElement("tr");
    
    //// creating row1 data/////
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    let th4 = document.createElement("th")
    let th5 = document.createElement("th")
    let th6 = document.createElement("th")
    let th7 = document.createElement("th")
    let th8 = document.createElement("th")
    let th9 = document.createElement("th")
    let th1textNode = document.createTextNode("POSITION")
    let th2textNode = document.createTextNode("TEAMS")
    let th3textNode = document.createTextNode("PLAYED")
    let th4textNode = document.createTextNode("WON")
    let th5textNode = document.createTextNode("DRAWN")
    let th6textNode = document.createTextNode("LOST")
    let th7textNode = document.createTextNode("GOALS_FOR")
    let th8textNode = document.createTextNode("GOALS_AGAINST")
    let th9textNode = document.createTextNode("Points")
    th1.appendChild(th1textNode)
    th2.appendChild(th2textNode)
    th3.appendChild(th3textNode)
    th4.appendChild(th4textNode)
    th5.appendChild(th5textNode)
    th6.appendChild(th6textNode)
    th7.appendChild(th7textNode)
    th8.appendChild(th8textNode)
    th9.appendChild(th9textNode)
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)
    tr1.appendChild(th4)
    tr1.appendChild(th5)
    tr1.appendChild(th6)
    tr1.appendChild(th7)
    tr1.appendChild(th8)
    tr1.appendChild(th9)
    tableB.appendChild(tr1)
    }
    
    ///// creating row 2////
    {
        let tr2 = document.createElement("tr");
    
        //// creating row2 data/////
    
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        let td9 = document.createElement("td")
        let td1textNode = document.createTextNode(gropBTeam1.pos)
        let td2textNode = document.createTextNode(gropBTeam1.name)
        let td3textNode = document.createTextNode(gropBTeam1.played)
        let td4textNode = document.createTextNode(gropBTeam1.won)
        let td5textNode = document.createTextNode(gropBTeam1.drawn)
        let td6textNode = document.createTextNode(gropBTeam1.lost)
        let td7textNode = document.createTextNode(gropBTeam1.goals_for)
        let td8textNode = document.createTextNode(gropBTeam1.goals_against)
        let td9textNode = document.createTextNode(gropBTeam1.pts)
        td1.appendChild(td1textNode)
        td2.appendChild(td2textNode)
        td3.appendChild(td3textNode)
        td4.appendChild(td4textNode)
        td5.appendChild(td5textNode)
        td6.appendChild(td6textNode)
        td7.appendChild(td7textNode)
        td8.appendChild(td8textNode)
        td9.appendChild(td9textNode)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tr2.appendChild(td4)
        tr2.appendChild(td5)
        tr2.appendChild(td6)
        tr2.appendChild(td7)
        tr2.appendChild(td8)
        tr2.appendChild(td9)
        tableB.appendChild(tr2)
    }
    /////// creating row 3//////
    {
    let tr3 = document.createElement("tr");
    
    //// creating row3 data/////
    
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")
    let td13 = document.createElement("td")
    let td14 = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")
    let td17 = document.createElement("td")
    let td18 = document.createElement("td")
    let td10textNode = document.createTextNode(gropBTeam2.pos)
    let td11textNode = document.createTextNode(gropBTeam2.name)
    let td12textNode = document.createTextNode(gropBTeam2.played)
    let td13textNode = document.createTextNode(gropBTeam2.won)
    let td14textNode = document.createTextNode(gropBTeam2.drawn)
    let td15textNode = document.createTextNode(gropBTeam2.lost)
    let td16textNode = document.createTextNode(gropBTeam2.goals_for)
    let td17textNode = document.createTextNode(gropBTeam2.goals_against)
    let td18textNode = document.createTextNode(gropBTeam2.pts)
    td10.appendChild(td10textNode)
    td11.appendChild(td11textNode)
    td12.appendChild(td12textNode)
    td13.appendChild(td13textNode)
    td14.appendChild(td14textNode)
    td15.appendChild(td15textNode)
    td16.appendChild(td16textNode)
    td17.appendChild(td17textNode)
    td18.appendChild(td18textNode)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)
    tr3.appendChild(td13)
    tr3.appendChild(td14)
    tr3.appendChild(td15)
    tr3.appendChild(td16)
    tr3.appendChild(td17)
    tr3.appendChild(td18)
    tableB.appendChild(tr3)
    }
    
    {
    ///// creating row 4////
    let tr4 = document.createElement("tr");
    
    //// creating row4 data/////
    
    let td19 = document.createElement("td")
    let td20 = document.createElement("td")
    let td21 = document.createElement("td")
    let td22 = document.createElement("td")
    let td23 = document.createElement("td")
    let td24 = document.createElement("td")
    let td25 = document.createElement("td")
    let td26 = document.createElement("td")
    let td27 = document.createElement("td")
    let td19textNode = document.createTextNode(gropBTeam3.pos)
    let td20textNode = document.createTextNode(gropBTeam3.name)
    let td21textNode = document.createTextNode(gropBTeam3.played)
    let td22textNode = document.createTextNode(gropBTeam3.won)
    let td23textNode = document.createTextNode(gropBTeam3.drawn)
    let td24textNode = document.createTextNode(gropBTeam3.lost)
    let td25textNode = document.createTextNode(gropBTeam3.goals_for)
    let td26textNode = document.createTextNode(gropBTeam3.goals_against)
    let td27textNode = document.createTextNode(gropBTeam3.pts)
    td19.appendChild(td19textNode)
    td20.appendChild(td20textNode)
    td21.appendChild(td21textNode)
    td22.appendChild(td22textNode)
    td23.appendChild(td23textNode)
    td24.appendChild(td24textNode)
    td25.appendChild(td25textNode)
    td26.appendChild(td26textNode)
    td27.appendChild(td27textNode)
    tr4.appendChild(td19)
    tr4.appendChild(td20)
    tr4.appendChild(td21)
    tr4.appendChild(td22)
    tr4.appendChild(td23)
    tr4.appendChild(td24)
    tr4.appendChild(td25)
    tr4.appendChild(td26)
    tr4.appendChild(td27)
    tableB.appendChild(tr4)
    }
    
    {
    ///// creating row 5////
    let tr5 = document.createElement("tr");
    
    //// creating row5 data/////
    
    let td28 = document.createElement("td")
    let td29 = document.createElement("td")
    let td30 = document.createElement("td")
    let td31 = document.createElement("td")
    let td32 = document.createElement("td")
    let td33 = document.createElement("td")
    let td34 = document.createElement("td")
    let td35 = document.createElement("td")
    let td36 = document.createElement("td")
    let td28textNode = document.createTextNode(gropBTeam4.pos)
    let td29textNode = document.createTextNode(gropBTeam4.name)
    let td30textNode = document.createTextNode(gropBTeam4.played)
    let td31textNode = document.createTextNode(gropBTeam4.won)
    let td32textNode = document.createTextNode(gropBTeam4.drawn)
    let td33textNode = document.createTextNode(gropBTeam4.lost)
    let td34textNode = document.createTextNode(gropBTeam4.goals_for)
    let td35textNode = document.createTextNode(gropBTeam4.goals_against)
    let td36textNode = document.createTextNode(gropBTeam4.pts)
    td28.appendChild(td28textNode)
    td29.appendChild(td29textNode)
    td30.appendChild(td30textNode)
    td31.appendChild(td31textNode)
    td32.appendChild(td32textNode)
    td33.appendChild(td33textNode)
    td34.appendChild(td34textNode)
    td35.appendChild(td35textNode)
    td36.appendChild(td36textNode)
    tr5.appendChild(td28)
    tr5.appendChild(td29)
    tr5.appendChild(td30)
    tr5.appendChild(td31)
    tr5.appendChild(td32)
    tr5.appendChild(td33)
    tr5.appendChild(td34)
    tr5.appendChild(td35)
    tr5.appendChild(td36)
    tableB.appendChild(tr5)
    }
    div2.appendChild(tableB)

    //////ending table B//////////


////////creating tableC//////////


let div3 = document.createElement('div')
mainBody.appendChild(div3)


{
    let firstDiv = document.createElement("div")
    let firstDivh1 = document.createElement('h1')
    let firstDivh1Text = document.createTextNode("GROUP C")
    firstDivh1.appendChild(firstDivh1Text)
    firstDiv.appendChild(firstDivh1)
    firstDiv.style.display = "flex";
    firstDiv.style.justifyContent = "center";
    div3.appendChild(firstDiv)
 }

let tableC = document.createElement('table')



{
    let tr1 = document.createElement("tr");
    
    //// creating row1 data/////
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    let th4 = document.createElement("th")
    let th5 = document.createElement("th")
    let th6 = document.createElement("th")
    let th7 = document.createElement("th")
    let th8 = document.createElement("th")
    let th9 = document.createElement("th")
    let th1textNode = document.createTextNode("POSITION")
    let th2textNode = document.createTextNode("TEAMS")
    let th3textNode = document.createTextNode("PLAYED")
    let th4textNode = document.createTextNode("WON")
    let th5textNode = document.createTextNode("DRAWN")
    let th6textNode = document.createTextNode("LOST")
    let th7textNode = document.createTextNode("GOALS_FOR")
    let th8textNode = document.createTextNode("GOALS_AGAINST")
    let th9textNode = document.createTextNode("Points")
    th1.appendChild(th1textNode)
    th2.appendChild(th2textNode)
    th3.appendChild(th3textNode)
    th4.appendChild(th4textNode)
    th5.appendChild(th5textNode)
    th6.appendChild(th6textNode)
    th7.appendChild(th7textNode)
    th8.appendChild(th8textNode)
    th9.appendChild(th9textNode)
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)
    tr1.appendChild(th4)
    tr1.appendChild(th5)
    tr1.appendChild(th6)
    tr1.appendChild(th7)
    tr1.appendChild(th8)
    tr1.appendChild(th9)
    tableC.appendChild(tr1)
    }
    
    ///// creating row 2////
    {
        let tr2 = document.createElement("tr");
    
        //// creating row2 data/////
    
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        let td9 = document.createElement("td")
        let td1textNode = document.createTextNode(gropCTeam1.pos)
        let td2textNode = document.createTextNode(gropCTeam1.name)
        let td3textNode = document.createTextNode(gropCTeam1.played)
        let td4textNode = document.createTextNode(gropCTeam1.won)
        let td5textNode = document.createTextNode(gropCTeam1.drawn)
        let td6textNode = document.createTextNode(gropCTeam1.lost)
        let td7textNode = document.createTextNode(gropCTeam1.goals_for)
        let td8textNode = document.createTextNode(gropCTeam1.goals_against)
        let td9textNode = document.createTextNode(gropCTeam1.pts)
        td1.appendChild(td1textNode)
        td2.appendChild(td2textNode)
        td3.appendChild(td3textNode)
        td4.appendChild(td4textNode)
        td5.appendChild(td5textNode)
        td6.appendChild(td6textNode)
        td7.appendChild(td7textNode)
        td8.appendChild(td8textNode)
        td9.appendChild(td9textNode)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tr2.appendChild(td4)
        tr2.appendChild(td5)
        tr2.appendChild(td6)
        tr2.appendChild(td7)
        tr2.appendChild(td8)
        tr2.appendChild(td9)
        tableC.appendChild(tr2)
    }
    /////// creating row 3//////
    {
    let tr3 = document.createElement("tr");
    
    //// creating row3 data/////
    
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")
    let td13 = document.createElement("td")
    let td14 = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")
    let td17 = document.createElement("td")
    let td18 = document.createElement("td")
    let td10textNode = document.createTextNode(gropCTeam2.pos)
    let td11textNode = document.createTextNode(gropCTeam2.name)
    let td12textNode = document.createTextNode(gropCTeam2.played)
    let td13textNode = document.createTextNode(gropCTeam2.won)
    let td14textNode = document.createTextNode(gropCTeam2.drawn)
    let td15textNode = document.createTextNode(gropCTeam2.lost)
    let td16textNode = document.createTextNode(gropCTeam2.goals_for)
    let td17textNode = document.createTextNode(gropCTeam2.goals_against)
    let td18textNode = document.createTextNode(gropCTeam2.pts)
    td10.appendChild(td10textNode)
    td11.appendChild(td11textNode)
    td12.appendChild(td12textNode)
    td13.appendChild(td13textNode)
    td14.appendChild(td14textNode)
    td15.appendChild(td15textNode)
    td16.appendChild(td16textNode)
    td17.appendChild(td17textNode)
    td18.appendChild(td18textNode)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)
    tr3.appendChild(td13)
    tr3.appendChild(td14)
    tr3.appendChild(td15)
    tr3.appendChild(td16)
    tr3.appendChild(td17)
    tr3.appendChild(td18)
    tableC.appendChild(tr3)
    }
    
    {
    ///// creating row 4////
    let tr4 = document.createElement("tr");
    
    //// creating row4 data/////
    
    let td19 = document.createElement("td")
    let td20 = document.createElement("td")
    let td21 = document.createElement("td")
    let td22 = document.createElement("td")
    let td23 = document.createElement("td")
    let td24 = document.createElement("td")
    let td25 = document.createElement("td")
    let td26 = document.createElement("td")
    let td27 = document.createElement("td")
    let td19textNode = document.createTextNode(gropCTeam3.pos)
    let td20textNode = document.createTextNode(gropCTeam3.name)
    let td21textNode = document.createTextNode(gropCTeam3.played)
    let td22textNode = document.createTextNode(gropCTeam3.won)
    let td23textNode = document.createTextNode(gropCTeam3.drawn)
    let td24textNode = document.createTextNode(gropCTeam3.lost)
    let td25textNode = document.createTextNode(gropCTeam3.goals_for)
    let td26textNode = document.createTextNode(gropCTeam3.goals_against)
    let td27textNode = document.createTextNode(gropCTeam3.pts)
    td19.appendChild(td19textNode)
    td20.appendChild(td20textNode)
    td21.appendChild(td21textNode)
    td22.appendChild(td22textNode)
    td23.appendChild(td23textNode)
    td24.appendChild(td24textNode)
    td25.appendChild(td25textNode)
    td26.appendChild(td26textNode)
    td27.appendChild(td27textNode)
    tr4.appendChild(td19)
    tr4.appendChild(td20)
    tr4.appendChild(td21)
    tr4.appendChild(td22)
    tr4.appendChild(td23)
    tr4.appendChild(td24)
    tr4.appendChild(td25)
    tr4.appendChild(td26)
    tr4.appendChild(td27)
    tableC.appendChild(tr4)
    }
    
    {
    ///// creating row 5////
    let tr5 = document.createElement("tr");
    
    //// creating row5 data/////
    
    let td28 = document.createElement("td")
    let td29 = document.createElement("td")
    let td30 = document.createElement("td")
    let td31 = document.createElement("td")
    let td32 = document.createElement("td")
    let td33 = document.createElement("td")
    let td34 = document.createElement("td")
    let td35 = document.createElement("td")
    let td36 = document.createElement("td")
    let td28textNode = document.createTextNode(gropCTeam4.pos)
    let td29textNode = document.createTextNode(gropCTeam4.name)
    let td30textNode = document.createTextNode(gropCTeam4.played)
    let td31textNode = document.createTextNode(gropCTeam4.won)
    let td32textNode = document.createTextNode(gropCTeam4.drawn)
    let td33textNode = document.createTextNode(gropCTeam4.lost)
    let td34textNode = document.createTextNode(gropCTeam4.goals_for)
    let td35textNode = document.createTextNode(gropCTeam4.goals_against)
    let td36textNode = document.createTextNode(gropCTeam4.pts)
    td28.appendChild(td28textNode)
    td29.appendChild(td29textNode)
    td30.appendChild(td30textNode)
    td31.appendChild(td31textNode)
    td32.appendChild(td32textNode)
    td33.appendChild(td33textNode)
    td34.appendChild(td34textNode)
    td35.appendChild(td35textNode)
    td36.appendChild(td36textNode)
    tr5.appendChild(td28)
    tr5.appendChild(td29)
    tr5.appendChild(td30)
    tr5.appendChild(td31)
    tr5.appendChild(td32)
    tr5.appendChild(td33)
    tr5.appendChild(td34)
    tr5.appendChild(td35)
    tr5.appendChild(td36)
    tableC.appendChild(tr5)
    }
    div3.appendChild(tableC)


//////ending tableC//////////////


///////////creating table D////////////

let div4 = document.createElement('div')
mainBody.appendChild(div4)


{
    let firstDiv = document.createElement("div")
    let firstDivh1 = document.createElement('h1')
    let firstDivh1Text = document.createTextNode("GROUP D")
    firstDivh1.appendChild(firstDivh1Text)
    firstDiv.appendChild(firstDivh1)
    firstDiv.style.display = "flex";
    firstDiv.style.justifyContent = "center";
    div4.appendChild(firstDiv)
 }

let tableD = document.createElement('table')



{
    let tr1 = document.createElement("tr");
    
    //// creating row1 data/////
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    let th4 = document.createElement("th")
    let th5 = document.createElement("th")
    let th6 = document.createElement("th")
    let th7 = document.createElement("th")
    let th8 = document.createElement("th")
    let th9 = document.createElement("th")
    let th1textNode = document.createTextNode("POSITION")
    let th2textNode = document.createTextNode("TEAMS")
    let th3textNode = document.createTextNode("PLAYED")
    let th4textNode = document.createTextNode("WON")
    let th5textNode = document.createTextNode("DRAWN")
    let th6textNode = document.createTextNode("LOST")
    let th7textNode = document.createTextNode("GOALS_FOR")
    let th8textNode = document.createTextNode("GOALS_AGAINST")
    let th9textNode = document.createTextNode("Points")
    th1.appendChild(th1textNode)
    th2.appendChild(th2textNode)
    th3.appendChild(th3textNode)
    th4.appendChild(th4textNode)
    th5.appendChild(th5textNode)
    th6.appendChild(th6textNode)
    th7.appendChild(th7textNode)
    th8.appendChild(th8textNode)
    th9.appendChild(th9textNode)
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)
    tr1.appendChild(th4)
    tr1.appendChild(th5)
    tr1.appendChild(th6)
    tr1.appendChild(th7)
    tr1.appendChild(th8)
    tr1.appendChild(th9)
    tableD.appendChild(tr1)
    }
    
    ///// creating row 2////
    {
        let tr2 = document.createElement("tr");
    
        //// creating row2 data/////
    
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        let td9 = document.createElement("td")
        let td1textNode = document.createTextNode(gropDTeam1.pos)
        let td2textNode = document.createTextNode(gropDTeam1.name)
        let td3textNode = document.createTextNode(gropDTeam1.played)
        let td4textNode = document.createTextNode(gropDTeam1.won)
        let td5textNode = document.createTextNode(gropDTeam1.drawn)
        let td6textNode = document.createTextNode(gropDTeam1.lost)
        let td7textNode = document.createTextNode(gropDTeam1.goals_for)
        let td8textNode = document.createTextNode(gropDTeam1.goals_against)
        let td9textNode = document.createTextNode(gropDTeam1.pts)
        td1.appendChild(td1textNode)
        td2.appendChild(td2textNode)
        td3.appendChild(td3textNode)
        td4.appendChild(td4textNode)
        td5.appendChild(td5textNode)
        td6.appendChild(td6textNode)
        td7.appendChild(td7textNode)
        td8.appendChild(td8textNode)
        td9.appendChild(td9textNode)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tr2.appendChild(td4)
        tr2.appendChild(td5)
        tr2.appendChild(td6)
        tr2.appendChild(td7)
        tr2.appendChild(td8)
        tr2.appendChild(td9)
        tableD.appendChild(tr2)
    }
    /////// creating row 3//////
    {
    let tr3 = document.createElement("tr");
    
    //// creating row3 data/////
    
    let td10 = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")
    let td13 = document.createElement("td")
    let td14 = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")
    let td17 = document.createElement("td")
    let td18 = document.createElement("td")
    let td10textNode = document.createTextNode(gropDTeam2.pos)
    let td11textNode = document.createTextNode(gropDTeam2.name)
    let td12textNode = document.createTextNode(gropDTeam2.played)
    let td13textNode = document.createTextNode(gropDTeam2.won)
    let td14textNode = document.createTextNode(gropDTeam2.drawn)
    let td15textNode = document.createTextNode(gropDTeam2.lost)
    let td16textNode = document.createTextNode(gropDTeam2.goals_for)
    let td17textNode = document.createTextNode(gropDTeam2.goals_against)
    let td18textNode = document.createTextNode(gropDTeam2.pts)
    td10.appendChild(td10textNode)
    td11.appendChild(td11textNode)
    td12.appendChild(td12textNode)
    td13.appendChild(td13textNode)
    td14.appendChild(td14textNode)
    td15.appendChild(td15textNode)
    td16.appendChild(td16textNode)
    td17.appendChild(td17textNode)
    td18.appendChild(td18textNode)
    tr3.appendChild(td10)
    tr3.appendChild(td11)
    tr3.appendChild(td12)
    tr3.appendChild(td13)
    tr3.appendChild(td14)
    tr3.appendChild(td15)
    tr3.appendChild(td16)
    tr3.appendChild(td17)
    tr3.appendChild(td18)
    tableD.appendChild(tr3)
    }
    
    {
    ///// creating row 4////
    let tr4 = document.createElement("tr");
    
    //// creating row4 data/////
    
    let td19 = document.createElement("td")
    let td20 = document.createElement("td")
    let td21 = document.createElement("td")
    let td22 = document.createElement("td")
    let td23 = document.createElement("td")
    let td24 = document.createElement("td")
    let td25 = document.createElement("td")
    let td26 = document.createElement("td")
    let td27 = document.createElement("td")
    let td19textNode = document.createTextNode(gropDTeam3.pos)
    let td20textNode = document.createTextNode(gropDTeam3.name)
    let td21textNode = document.createTextNode(gropDTeam3.played)
    let td22textNode = document.createTextNode(gropDTeam3.won)
    let td23textNode = document.createTextNode(gropDTeam3.drawn)
    let td24textNode = document.createTextNode(gropDTeam3.lost)
    let td25textNode = document.createTextNode(gropDTeam3.goals_for)
    let td26textNode = document.createTextNode(gropDTeam3.goals_against)
    let td27textNode = document.createTextNode(gropDTeam3.pts)
    td19.appendChild(td19textNode)
    td20.appendChild(td20textNode)
    td21.appendChild(td21textNode)
    td22.appendChild(td22textNode)
    td23.appendChild(td23textNode)
    td24.appendChild(td24textNode)
    td25.appendChild(td25textNode)
    td26.appendChild(td26textNode)
    td27.appendChild(td27textNode)
    tr4.appendChild(td19)
    tr4.appendChild(td20)
    tr4.appendChild(td21)
    tr4.appendChild(td22)
    tr4.appendChild(td23)
    tr4.appendChild(td24)
    tr4.appendChild(td25)
    tr4.appendChild(td26)
    tr4.appendChild(td27)
    tableD.appendChild(tr4)
    }
    
    {
    ///// creating row 5////
    let tr5 = document.createElement("tr");
    
    //// creating row5 data/////
    
    let td28 = document.createElement("td")
    let td29 = document.createElement("td")
    let td30 = document.createElement("td")
    let td31 = document.createElement("td")
    let td32 = document.createElement("td")
    let td33 = document.createElement("td")
    let td34 = document.createElement("td")
    let td35 = document.createElement("td")
    let td36 = document.createElement("td")
    let td28textNode = document.createTextNode(gropDTeam4.pos)
    let td29textNode = document.createTextNode(gropDTeam4.name)
    let td30textNode = document.createTextNode(gropDTeam4.played)
    let td31textNode = document.createTextNode(gropDTeam4.won)
    let td32textNode = document.createTextNode(gropDTeam4.drawn)
    let td33textNode = document.createTextNode(gropDTeam4.lost)
    let td34textNode = document.createTextNode(gropDTeam4.goals_for)
    let td35textNode = document.createTextNode(gropDTeam4.goals_against)
    let td36textNode = document.createTextNode(gropDTeam4.pts)
    td28.appendChild(td28textNode)
    td29.appendChild(td29textNode)
    td30.appendChild(td30textNode)
    td31.appendChild(td31textNode)
    td32.appendChild(td32textNode)
    td33.appendChild(td33textNode)
    td34.appendChild(td34textNode)
    td35.appendChild(td35textNode)
    td36.appendChild(td36textNode)
    tr5.appendChild(td28)
    tr5.appendChild(td29)
    tr5.appendChild(td30)
    tr5.appendChild(td31)
    tr5.appendChild(td32)
    tr5.appendChild(td33)
    tr5.appendChild(td34)
    tr5.appendChild(td35)
    tr5.appendChild(td36)
    tableD.appendChild(tr5)
    }
    div4.appendChild(tableD)