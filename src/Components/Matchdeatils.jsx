import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import InpageNavigation from './InpageNavigation'




function Matchdeatils() {
let data={
    "team1": {
        "team": {
            "teamid": 59,
            "teamname": "Royal Challengers Bengaluru",
            "teamsname": "RCB",
            "isfullmember": false,
            "isassociated": false,
            "isleagueteam": false,
            "iswomenteam": false,
            "isheader": false,
            "isactive": false,
            "teampriority": "",
            "isvideopresent": false,
            "imageid": 860056,
            "countryname": "",
            "belongsto": "",
            "teamcolor": ""
        },
        "players": [
            {
                "player": [
                    {
                        "id": "1413",
                        "name": "Virat Kohli",
                        "captain": false,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 616517,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10479",
                        "name": "Phil Salt",
                        "captain": false,
                        "role": "WK-Batter",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 848522,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10636",
                        "name": "Rajat Patidar",
                        "captain": true,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 760758,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10214",
                        "name": "Jitesh Sharma",
                        "captain": false,
                        "role": "WK-Batter",
                        "keeper": true,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 226474,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "13169",
                        "name": "Tim David",
                        "captain": false,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 845940,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "13646",
                        "name": "Romario Shepherd",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 845509,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "11311",
                        "name": "Krunal Pandya",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 171069,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1726",
                        "name": "Bhuvneshwar Kumar",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 244967,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1447073",
                        "name": "Abhinandan Singh",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "8554",
                        "name": "Jacob Duffy",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 845524,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "MOUT",
                        "isoverseas": false
                    },
                    {
                        "id": "36487",
                        "name": "Suyash Sharma",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "playing XI"
            },
            {
                "player": [
                    {
                        "id": "13088",
                        "name": "Devdutt Padikkal",
                        "captain": false,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 591960,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "MIN",
                        "isoverseas": false
                    },
                    {
                        "id": "19636",
                        "name": "Jacob Bethell",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 848524,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "14274",
                        "name": "Rasikh Salam Dar",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1457033",
                        "name": "Kanishk Chouhan",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 826110,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10917",
                        "name": "Venkatesh Iyer",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 226278,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "substitutes"
            },
            {
                "player": [
                    {
                        "id": "6258",
                        "name": "Josh Hazlewood",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 845819,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1455995",
                        "name": "Mangesh Yadav",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1430529",
                        "name": "Vihaan Malhotra",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 826112,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "22616",
                        "name": "Vicky Ostwal",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 781081,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "14813",
                        "name": "Jordan Cox",
                        "captain": false,
                        "role": "WK-Batter",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 593790,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10238",
                        "name": "Swapnil Singh",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1457482",
                        "name": "Satvik Deswal",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "bench"
            },
            {
                "player": [
                    {
                        "id": "3406",
                        "name": "Andy Flower",
                        "captain": false,
                        "role": "Head Coach",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 153350,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "145",
                        "name": "Dinesh Karthik",
                        "captain": false,
                        "role": "Batting Coach and Mentor",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 244969,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "42618",
                        "name": "Omkar Salvi",
                        "captain": false,
                        "role": "Bowling Coach",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "8899",
                        "name": "Malolan Rangarajan",
                        "captain": false,
                        "role": "Head of Scouting & Fielding",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1469526",
                        "name": "Richard Halsall",
                        "captain": false,
                        "role": "Fielding Coach",
                        "keeper": false,
                        "teamname": "RCB",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "support staff"
            }
        ]
    },
    "team2": {
        "team": {
            "teamid": 255,
            "teamname": "Sunrisers Hyderabad",
            "teamsname": "SRH",
            "isfullmember": false,
            "isassociated": false,
            "isleagueteam": false,
            "iswomenteam": false,
            "isheader": false,
            "isactive": false,
            "teampriority": "",
            "isvideopresent": false,
            "imageid": 860066,
            "countryname": "",
            "belongsto": "",
            "teamcolor": ""
        },
        "players": [
            {
                "player": [
                    {
                        "id": "12086",
                        "name": "Abhishek Sharma",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 846031,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "8497",
                        "name": "Travis Head",
                        "captain": false,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 845768,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "MOUT",
                        "isoverseas": false
                    },
                    {
                        "id": "10276",
                        "name": "Ishan Kishan",
                        "captain": true,
                        "role": "WK-Batter",
                        "keeper": true,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 846036,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10209",
                        "name": "Heinrich Klaasen",
                        "captain": false,
                        "role": "WK-Batter",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 619866,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1447065",
                        "name": "Aniket Verma",
                        "captain": false,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "14701",
                        "name": "Nitish Reddy",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 591947,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "15418",
                        "name": "Salil Arora",
                        "captain": false,
                        "role": "WK-Batter",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "14695",
                        "name": "Harsh Dubey",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "8175",
                        "name": "Harshal Patel",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 594314,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "6327",
                        "name": "Jaydev Unadkat",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 332903,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "46926",
                        "name": "Eshan Malinga",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "playing XI"
            },
            {
                "player": [
                    {
                        "id": "6834",
                        "name": "David Payne",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 157435,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "MIN",
                        "isoverseas": false
                    },
                    {
                        "id": "1455907",
                        "name": "Shivang Kumar",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10045",
                        "name": "Liam Livingstone",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 617405,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "29130",
                        "name": "Smaran Ravichandran",
                        "captain": false,
                        "role": "Batter",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "33129",
                        "name": "Sakib Hussain",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "substitutes"
            },
            {
                "player": [
                    {
                        "id": "12345",
                        "name": "Shivam Mavi",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 155147,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10946",
                        "name": "Zeeshan Ansari",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "10940",
                        "name": "Kamindu Mendis",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 847173,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "11436",
                        "name": "Brydon Carse",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 717796,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1431793",
                        "name": "Praful Hinge",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1449788",
                        "name": "Krains Fuletra",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1466014",
                        "name": "Amit Kumar",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1453784",
                        "name": "Onkar Tarmale",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "bench"
            },
            {
                "player": [
                    {
                        "id": "205",
                        "name": "Daniel Vettori",
                        "captain": false,
                        "role": "Head Coach",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 154504,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "42646",
                        "name": "Ryan Cook",
                        "captain": false,
                        "role": "Fielding Coach",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "110",
                        "name": "Muthiah Muralidaran",
                        "captain": false,
                        "role": "Spin Bowling Coach",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 154990,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "6293",
                        "name": "Varun Aaron",
                        "captain": false,
                        "role": "Bowling Coach",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 171087,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    },
                    {
                        "id": "1470355",
                        "name": "Russell Domingo",
                        "captain": false,
                        "role": "Batting Coach",
                        "keeper": false,
                        "teamname": "SRH",
                        "isheader": false,
                        "imageId": 0,
                        "battingStyle": "",
                        "bowlingStyle": "",
                        "faceimageid": 182026,
                        "countryimageid": 0,
                        "playingxichange": "",
                        "inmatchchange": "",
                        "isoverseas": false
                    }
                ],
                "category": "support staff"
            }
        ]
    },
    "appindex": {
        "seotitle": "Cricket match squads - RCB vs SRH 1st Match,Indian Premier League 2026 | Cricbuzz.com",
        "weburl": "http://www.cricbuzz.com/cricket-match-squads/149618/rcb-vs-srh-1st-match-indian-premier-league-2026"
    }
}




    let { id } = useParams()
    let[team1,settaem1]=useState([])
    let[team2,settaem2]=useState([])
    let[team1name,setteam1name]=useState("")
    let[team2name,setteam2name]=useState("")

    async function FetchMatchDetail() {
        const url = `https://crickbuzz-official-apis.p.rapidapi.com/match/${id}/squads`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            
            
            settaem1(result.team1.players[0].player)
            settaem2(result.team2.players[0].player)
           setteam1name(result.team1.team.teamsname);
           setteam2name(result.team2.team.teamsname);
          
            
            
        } catch (error) {
            console.error(error);
        }
    }
    // console.log(team1);
    //     console.log(team1.team.teamid);
    // console.log(result);
    
    // console.log(result.team1.team);
    
    useEffect(() => {
        FetchMatchDetail()
        // settaem1(data.team1.players[0].player)
        // settaem2(data.team2.players[0].player)
        // setteam1name(data.team1.team.teamsname)
        // setteam2name(data.team2.team.teamsname)


        
    }, [])

    

    return (
        <div>
           
        <div className='w-full bg-[#22242A]'>
            <div>
                
            </div>
            
            <InpageNavigation   teams={[team1name,team2name]} >
            
           <div className="w-full flex justify-center">
  <div className="w-full md:w-1/2 mt-5">
    {team1.map((team1, i) => (
      <div
        key={i}
        className="p-4 mb-3 rounded-xl bg-white shadow-md"
      >
        <h2 className="text-lg font-semibold">{team1.name}{team1.captain? " (C)":" " }{team1.keeper? " (WK)":" " }</h2>
        <h3 className="text-sm text-gray-500">{team1.role}</h3>
      </div>
    ))}
  </div>
</div>
           <div className="w-full flex justify-center">
  <div className="w-full md:w-1/2 mt-5">
    {team2.map((team2, i) => (
      <div
        key={i}
        className="p-4 mb-3 rounded-xl bg-white shadow-md"
      >
        <h2 className="text-lg font-semibold">{team2.name}{team2.captain? " (C)":" " }{team2.keeper? " (WK)":" " }</h2>
        <h3 className="text-sm text-gray-500">{team2.role}</h3>
      </div>
    ))}
  </div>
</div>
            
            </InpageNavigation>
            {/* <div>
                {team1.map((team1)=>{
                    return(
                        <div>
                        <h2>{team1.name}</h2>
                        <h3>{team1.role}</h3>
                        </div>
                    )
                    
                })}
            </div>
            <div>
                {team2.map((team2)=>{
                    return(
                        <div>
                        <h2>{team2.name}</h2>
                        <h3>{team2.role}</h3>
                        </div>
                    )
                    
                })}
            </div> */}


        </div>
        </div>
    )
}

export default Matchdeatils
