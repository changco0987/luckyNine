//game components
var playersTurn;
var delay;
var time;
//player1 cards
var firstPic;
var secondPic;
var thirdPic;
var p11;
var p12;
var p13;
var cardValue1;
var score1 = 0;
//player2 cards
var fourthPic;
var fifthPic;
var sixthPic;
var p21;
var p22;
var p23;
var cardValue2;
var score2 = 0;
//enemy cards
var AICard1;
var AICard2;
var AICard3;
var enemyPicture1;
var enemyPicture2;
var enemyPicture3;
var enemyCardHolder1;
var summaryHolder;
var AIscore = 0;

var deck = ["Cards/10 (1).png","Cards/2 (1).png","Cards/2 (2).png","Cards/2 (3).png","Cards/2 (4).png","Cards/8 (1).png",
            "Cards/10 (2).png","Cards/3 (1).png","Cards/4 (1).png","Cards/6 (1).png","Cards/7 (1).png","Cards/8 (2).png",
            "Cards/10 (3).png","Cards/3 (2).png","Cards/4 (2).png","Cards/6 (2).png","Cards/7 (2).png","Cards/8 (3).png",
            "Cards/10 (4).png","Cards/3 (3).png","Cards/4 (3).png","Cards/6 (3).png","Cards/7 (3).png","Cards/8 (4).png",
            "Cards/1 (1).png","Cards/3 (4).png","Cards/4 (4).png","Cards/6 (4).png","Cards/7 (4).png","Cards/9 (4).png",
            "Cards/1 (2).png","Cards/1 (4).png","Cards/5 (1).png","Cards/5 (4).png","Cards/9 (2).png","Cards/9 (3).png",
            "Cards/1 (3).png","Cards/9 (1).png","Cards/5 (2).png","Cards/5 (3).png"];


function gameFunction()
{
    time = 5;
    playersTurn = 1;
    document.getElementById("turnMessage").innerHTML = "player 1 turn!";
    player1Method();
    console.log(firstPic);
    player2Method();
    enemyFunction();
    cardSummary();
    document.getElementById("remainingCards").innerHTML = "Cards:"+deck.length;
}

function turnEnd()
{
    if(playersTurn==1)
    {
        document.getElementById("turnMessage").innerHTML = "Player 2 turn!";
        playersTurn++;
    }
    else if(playersTurn==2)
    {
        document.getElementById("turnMessage").innerHTML = "Enemy turn!";
        delay = setInterval(timer,1000);
        playersTurn=4;
    }
    else if(playersTurn==3)
    {
        document.getElementById("AICardSum").innerHTML = "Computer";
        document.getElementById("Card3").src = "Cards/red_joker.png";
        document.getElementById("Card6").src = "Cards/red_joker.png";
        document.getElementById("AI2").src = "Cards/red_joker.png";
        document.getElementById("AI3").src = "Cards/red_joker.png";
        p13 = 0;
        p23 = 0;
        enemyPicture3 = 0;
        if(deck.length>=6)
        {

            gameFunction();
        }
        else
            {
                if(score1>score2 && score1>AIscore)
                {
                    document.getElementById("turnMessage").innerHTML = "Player 1 wins the game!";
                    document.getElementById("Card1").src = "Cards/red_joker.png";
                    document.getElementById("Card2").src = "Cards/red_joker.png";
                    document.getElementById("Card3").src = "Cards/red_joker.png";
                    document.getElementById("Card4").src = "Cards/red_joker.png";
                    document.getElementById("Card5").src = "Cards/red_joker.png";
                    document.getElementById("Card6").src = "Cards/red_joker.png";
                    document.getElementById("AI1").src = "Cards/red_joker.png";
                    document.getElementById("AI2").src = "Cards/red_joker.png";
                    document.getElementById("AI3").src = "Cards/red_joker.png";
                }
                else if(score2>score1 && score2>AIscore)
                {
                    document.getElementById("turnMessage").innerHTML = "Player 2 wins the game!";
                    document.getElementById("Card1").src = "Cards/red_joker.png";
                    document.getElementById("Card2").src = "Cards/red_joker.png";
                    document.getElementById("Card3").src = "Cards/red_joker.png";
                    document.getElementById("Card4").src = "Cards/red_joker.png";
                    document.getElementById("Card5").src = "Cards/red_joker.png";
                    document.getElementById("Card6").src = "Cards/red_joker.png";
                    document.getElementById("AI1").src = "Cards/red_joker.png";
                    document.getElementById("AI2").src = "Cards/red_joker.png";
                    document.getElementById("AI3").src = "Cards/red_joker.png";
                }
                else if(AIscore>score1 && AIscore>score2)
                {
                    document.getElementById("turnMessage").innerHTML = "Enemy wins the game!";
                    document.getElementById("Card1").src = "Cards/red_joker.png";
                    document.getElementById("Card2").src = "Cards/red_joker.png";
                    document.getElementById("Card3").src = "Cards/red_joker.png";
                    document.getElementById("Card4").src = "Cards/red_joker.png";
                    document.getElementById("Card5").src = "Cards/red_joker.png";
                    document.getElementById("Card6").src = "Cards/red_joker.png";
                    document.getElementById("AI1").src = "Cards/red_joker.png";
                    document.getElementById("AI2").src = "Cards/red_joker.png";
                    document.getElementById("AI3").src = "Cards/red_joker.png";
                }
                else if(score1==score2||score2==score1)
                {
                    document.getElementById("turnMessage").innerHTML = "Player 1 and Player 2 wins the game!";
                    document.getElementById("Card1").src = "Cards/red_joker.png";
                    document.getElementById("Card2").src = "Cards/red_joker.png";
                    document.getElementById("Card3").src = "Cards/red_joker.png";
                    document.getElementById("Card4").src = "Cards/red_joker.png";
                    document.getElementById("Card5").src = "Cards/red_joker.png";
                    document.getElementById("Card6").src = "Cards/red_joker.png";
                    document.getElementById("AI1").src = "Cards/red_joker.png";
                    document.getElementById("AI2").src = "Cards/red_joker.png";
                    document.getElementById("AI3").src = "Cards/red_joker.png";
                }
                else if(AIscore==score1||score1==AIscore)
                {
                    document.getElementById("turnMessage").innerHTML = "Player 1 and Enemy wins the game!";
                    document.getElementById("Card1").src = "Cards/red_joker.png";
                    document.getElementById("Card2").src = "Cards/red_joker.png";
                    document.getElementById("Card3").src = "Cards/red_joker.png";
                    document.getElementById("Card4").src = "Cards/red_joker.png";
                    document.getElementById("Card5").src = "Cards/red_joker.png";
                    document.getElementById("Card6").src = "Cards/red_joker.png";
                    document.getElementById("AI1").src = "Cards/red_joker.png";
                    document.getElementById("AI2").src = "Cards/red_joker.png";
                    document.getElementById("AI3").src = "Cards/red_joker.png";
                }
                else if(AIscore>score2||score2==AIscore)
                {
                    document.getElementById("turnMessage").innerHTML = "Player 2 Enemy wins the game!";
                    document.getElementById("Card1").src = "Cards/red_joker.png";
                    document.getElementById("Card2").src = "Cards/red_joker.png";
                    document.getElementById("Card3").src = "Cards/red_joker.png";
                    document.getElementById("Card4").src = "Cards/red_joker.png";
                    document.getElementById("Card5").src = "Cards/red_joker.png";
                    document.getElementById("Card6").src = "Cards/red_joker.png";
                    document.getElementById("AI1").src = "Cards/red_joker.png";
                    document.getElementById("AI2").src = "Cards/red_joker.png";
                    document.getElementById("AI3").src = "Cards/red_joker.png";
                }

            }
    }
}

function timer()
{
    document.getElementById("AICardSum").innerHTML = "Computer is thinking "+time;
    if(time==0)
    {
        //enemy thinking algorithm
        if(summaryHolder<5)
        {
            if(deck.length>=1)
            {

                document.getElementById("AI2").src = enemyCardHolder1;
                enemyDraw();
                document.getElementById("AICardSum").innerHTML = summaryHolder;
            }
        }
        else
            {
                document.getElementById("AI2").src = enemyCardHolder1;
                cardSummary();
                document.getElementById("AICardSum").innerHTML = summaryHolder;
            }
        playersTurn--;

        //scoring function
        if(summaryHolder>cardValue1 && summaryHolder>cardValue2)
        {
            AIscore+=2;
            document.getElementById("enemyScore").innerHTML = "00"+AIscore;
            document.getElementById("turnMessage").innerHTML = "Enemy Wins";
        }
        else if(cardValue1>summaryHolder && cardValue1>cardValue2)
        {
            score1+=2;
            document.getElementById("player1Score").innerHTML = "00"+score1;
            document.getElementById("turnMessage").innerHTML = "Player 1 Wins";
        }
        else if(cardValue2>summaryHolder && cardValue2>cardValue1)
        {
            score2+=2;
            document.getElementById("player2Score").innerHTML = "00"+score2;
            document.getElementById("turnMessage").innerHTML = "Player 2 Wins";
        }
        else if(cardValue1==cardValue2)
        {
            score1++;
            score2++;
            document.getElementById("player1Score").innerHTML = "00"+score1;
            document.getElementById("player2Score").innerHTML = "00"+score2;
            document.getElementById("turnMessage").innerHTML = "Player 1 and Player 2 Wins";
        }
        else if(summaryHolder==cardValue1)
        {
            score1++;
            AIscore++;
            document.getElementById("player1Score").innerHTML = "00"+score1;
            document.getElementById("enemyScore").innerHTML = "00"+AIscore;
            document.getElementById("turnMessage").innerHTML = "Player 2 loose";
        }
        else if(summaryHolder==cardValue2)
        {
            score2++;
            AIscore++;
            document.getElementById("player2Score").innerHTML = "00"+score2;
            document.getElementById("enemyScore").innerHTML = "00"+AIscore;
            document.getElementById("turnMessage").innerHTML = "Player 1 loose";
        }
        clearInterval(delay);
    }
    time-=1;
}

function cardDraw()
{
    if(playersTurn==1)
    {
        document.getElementById("turnMessage").innerHTML = "player 2 turn!";
        if(deck.length>=1)
        {
            player1Draw();
        }
        turnEnd();
    }
    else if(playersTurn==2)
    {
        document.getElementById("turnMessage").innerHTML = "Enemy turn!";
        if(deck.length>=1)
        {
            player2Draw();
        }
        turnEnd();

    }
}

function enemyFunction()
{
//AI
    enemyPicture1 = document.getElementById("AI1");
    enemyPicture2 = document.getElementById("AI2");

    //enemy 1st card
    AICard1 = Math.floor(Math.random()*deck.length);
    switch(AICard1)
    {
        case 0:
            enemyPicture1.src = deck[0];
            enemyPicture1 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            enemyPicture1.src = deck[1];
            enemyPicture1 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            enemyPicture1.src = deck[2];
            enemyPicture1 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            enemyPicture1.src = deck[3];
            enemyPicture1 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            enemyPicture1.src = deck[4];
            enemyPicture1 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            enemyPicture1.src = deck[5];
            enemyPicture1 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            enemyPicture1.src = deck[6];
            enemyPicture1 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            enemyPicture1.src = deck[7];
            enemyPicture1 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            enemyPicture1.src = deck[8];
            enemyPicture1 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            enemyPicture1.src = deck[9];
            enemyPicture1 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            enemyPicture1.src = deck[10];
            enemyPicture1 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            enemyPicture1.src = deck[11];
            enemyPicture1 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            enemyPicture1.src = deck[12];
            enemyPicture1 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            enemyPicture1.src = deck[13];
            enemyPicture1 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            enemyPicture1.src = deck[14];
            enemyPicture1 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            enemyPicture1.src = deck[15];
            enemyPicture1 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            enemyPicture1.src = deck[16];
            enemyPicture1 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            enemyPicture1.src = deck[17];
            enemyPicture1 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            enemyPicture1.src = deck[18];
            enemyPicture1 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            enemyPicture1.src = deck[19];
            enemyPicture1 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            enemyPicture1.src = deck[20];
            enemyPicture1 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            enemyPicture1.src = deck[21];
            enemyPicture1 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            enemyPicture1.src = deck[22];
            enemyPicture1 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            enemyPicture1.src = deck[23];
            enemyPicture1 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            enemyPicture1.src = deck[24];
            enemyPicture1 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            enemyPicture1.src = deck[25];
            enemyPicture1 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            enemyPicture1.src = deck[26];
            enemyPicture1 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            enemyPicture1.src = deck[27];
            enemyPicture1 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            enemyPicture1.src = deck[28];
            enemyPicture1 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            enemyPicture1.src = deck[29];
            enemyPicture1 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            enemyPicture1.src = deck[30];
            enemyPicture1 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            enemyPicture1.src = deck[31];
            enemyPicture1 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            enemyPicture1.src = deck[32];
            enemyPicture1 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            enemyPicture1.src = deck[33];
            enemyPicture1 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            enemyPicture1.src = deck[34];
            enemyPicture1 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            enemyPicture1.src = deck[35];
            enemyPicture1 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            enemyPicture1.src = deck[36];
            enemyPicture1 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            enemyPicture1.src = deck[37];
            enemyPicture1 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            enemyPicture1.src = deck[38];
            enemyPicture1 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            enemyPicture1.src = deck[39];
            enemyPicture1 = deck[39];

            deck.splice(39,1);
            break;
        default:
            enemyPicture1.src = "Cards/red_joker.png";
            break;
    }


    //enemy 2nd card
    AICard2 = Math.floor(Math.random()*deck.length);
    switch(AICard2)
    {
        case 0:
            enemyCardHolder1 = deck[0];
            enemyPicture2 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            enemyCardHolder1 = deck[1];
            enemyPicture2 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            enemyCardHolder1 = deck[2];
            enemyPicture2 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            enemyCardHolder1 = deck[3];
            enemyPicture2 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            enemyCardHolder1 = deck[4];
            enemyPicture2 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            enemyCardHolder1 = deck[5];
            enemyPicture2 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            enemyCardHolder1 = deck[6];
            enemyPicture2 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            enemyCardHolder1 = deck[7];
            enemyPicture2 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            enemyCardHolder1 = deck[8];
            enemyPicture2 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            enemyCardHolder1 = deck[9];
            enemyPicture2 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            enemyCardHolder1 = deck[10];
            enemyPicture2 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            enemyCardHolder1 = deck[11];
            enemyPicture2 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            enemyCardHolder1 = deck[12];
            enemyPicture2 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            enemyCardHolder1 = deck[13];
            enemyPicture2 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            enemyCardHolder1 = deck[14];
            enemyPicture2 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            enemyCardHolder1 = deck[15];
            enemyPicture2 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            enemyCardHolder1 = deck[16];
            enemyPicture2 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            enemyCardHolder1 = deck[17];
            enemyPicture2 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            enemyCardHolder1 = deck[18];
            enemyPicture2 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            enemyCardHolder1 = deck[19];
            enemyPicture2 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            enemyCardHolder1 = deck[20];
            enemyPicture2 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            enemyCardHolder1 = deck[21];
            enemyPicture2 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            enemyCardHolder1 = deck[22];
            enemyPicture2 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            enemyCardHolder1 = deck[23];
            enemyPicture2 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            enemyCardHolder1 = deck[24];
            enemyPicture2 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            enemyCardHolder1 = deck[25];
            enemyPicture2 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            enemyCardHolder1 = deck[26];
            enemyPicture2 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            enemyCardHolder1 = deck[27];
            enemyPicture2 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            enemyCardHolder1 = deck[28];
            enemyPicture2 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            enemyCardHolder1 = deck[29];
            enemyPicture2 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            enemyCardHolder1 = deck[30];
            enemyPicture2 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            enemyCardHolder1 = deck[31];
            enemyPicture2 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            enemyCardHolder1 = deck[32];
            enemyPicture2 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            enemyCardHolder1 = deck[33];
            enemyPicture2 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            enemyCardHolder1 = deck[34];
            enemyPicture2 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            enemyCardHolder1 = deck[35];
            enemyPicture2 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            enemyCardHolder1 = deck[36];
            enemyPicture2 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            enemyCardHolder1 = deck[37];
            enemyPicture2 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            enemyCardHolder1 = deck[38];
            enemyPicture2 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            enemyCardHolder1 = deck[39];
            enemyPicture2 = deck[39];

            deck.splice(39,1);
            break;
    }

}

function enemyDraw()
{
    enemyPicture3 = document.getElementById("AI3");

    //enemy 3rd card
    AICard3 = Math.floor(Math.random()*deck.length);
    switch(AICard3)
    {
        case 0:
            enemyPicture3.src = deck[0];
            enemyPicture3 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            enemyPicture3.src = deck[1];
            enemyPicture3 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            enemyPicture3.src = deck[2];
            enemyPicture3 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            enemyPicture3.src = deck[3];
            enemyPicture3 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            enemyPicture3.src = deck[4];
            enemyPicture3 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            enemyPicture3.src = deck[5];
            enemyPicture3 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            enemyPicture3.src = deck[6];
            enemyPicture3 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            enemyPicture3.src = deck[7];
            enemyPicture3 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            enemyPicture3.src = deck[8];
            enemyPicture3 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            enemyPicture3.src = deck[9];
            enemyPicture3 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            enemyPicture3.src = deck[10];
            enemyPicture3 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            enemyPicture3.src = deck[11];
            enemyPicture3 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            enemyPicture3.src = deck[12];
            enemyPicture3 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            enemyPicture3.src = deck[13];
            enemyPicture3 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            enemyPicture3.src = deck[14];
            enemyPicture3 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            enemyPicture3.src = deck[15];
            enemyPicture3 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            enemyPicture3.src = deck[16];
            enemyPicture3 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            enemyPicture3.src = deck[17];
            enemyPicture3 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            enemyPicture3.src = deck[18];
            enemyPicture3 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            enemyPicture3.src = deck[19];
            enemyPicture3 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            enemyPicture3.src = deck[20];
            enemyPicture3 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            enemyPicture3.src = deck[21];
            enemyPicture3 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            enemyPicture3.src = deck[22];
            enemyPicture3 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            enemyPicture3.src = deck[23];
            enemyPicture3 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            enemyPicture3.src = deck[24];
            enemyPicture3 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            enemyPicture3.src = deck[25];
            enemyPicture3 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            enemyPicture3.src = deck[26];
            enemyPicture3 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            enemyPicture3.src = deck[27];
            enemyPicture3 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            enemyPicture3.src = deck[28];
            enemyPicture3 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            enemyPicture3.src = deck[29];
            enemyPicture3 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            enemyPicture3.src = deck[30];
            enemyPicture3 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            enemyPicture3.src = deck[31];
            enemyPicture3 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            enemyPicture3.src = deck[32];
            enemyPicture3 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            enemyPicture3.src = deck[33];
            enemyPicture3 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            enemyPicture3.src = deck[34];
            enemyPicture3 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            enemyPicture3.src = deck[35];
            enemyPicture3 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            enemyPicture3.src = deck[36];
            enemyPicture3 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            enemyPicture3.src = deck[37];
            enemyPicture3 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            enemyPicture3.src = deck[38];
            enemyPicture3 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            enemyPicture3.src = deck[39];
            enemyPicture3 = deck[39];

            deck.splice(39,1);
            break;
        default:
            enemyPicture3.src = "Cards/red_joker.png";
            break;
    }

    document.getElementById("remainingCards").innerHTML = "Cards:"+deck.length;
    cardSummary();

}

function player1Method()
{
//player1
    p11 = document.getElementById("Card1");
    p12 = document.getElementById("Card2");

    //player 1 1st card
    firstPic = Math.floor(Math.random()*deck.length);
    switch(firstPic)
    {
        case 0:
            p11.src = deck[0];
            p11 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            p11.src = deck[1];
            p11 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            p11.src = deck[2];
            p11 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            p11.src = deck[3];
            p11 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            p11.src = deck[4];
            p11 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            p11.src = deck[5];
            p11 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            p11.src = deck[6];
            p11 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            p11.src = deck[7];
            p11 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            p11.src = deck[8];
            p11 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            p11.src = deck[9];
            p11 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            p11.src = deck[10];
            p11 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            p11.src = deck[11];
            p11 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            p11.src = deck[12];
            p11 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            p11.src = deck[13];
            p11 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            p11.src = deck[14];
            p11 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            p11.src = deck[15];
            p11 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            p11.src = deck[16];
            p11 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            p11.src = deck[17];
            p11 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            p11.src = deck[18];
            p11 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            p11.src = deck[19];
            p11 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            p11.src = deck[20];
            p11 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            p11.src = deck[21];
            p11 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            p11.src = deck[22];
            p11 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            p11.src = deck[23];
            p11 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            p11.src = deck[24];
            p11 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            p11.src = deck[25];
            p11 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            p11.src = deck[26];
            p11 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            p11.src = deck[27];
            p11 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            p11.src = deck[28];
            p11 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            p11.src = deck[29];
            p11 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            p11.src = deck[30];
            p11 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            p11.src = deck[31];
            p11 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            p11.src = deck[32];
            p11 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            p11.src = deck[33];
            p11 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            p11.src = deck[34];
            p11 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            p11.src = deck[35];
            p11 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            p11.src = deck[36];
            p11 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            p11.src = deck[37];
            p11 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            p11.src = deck[38];
            p11 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            p11.src = deck[39];
            p11 = deck[39];

            deck.splice(39,1);
            break;
        default:
            p11.src = "Cards/red_joker.png";
            break;
    }

    //player 1 2nd card
    secondPic = Math.floor(Math.random()*deck.length);
    switch(secondPic)
    {
        case 0:
            p12.src = deck[0];
            p12 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            p12.src = deck[1];
            p12 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            p12.src = deck[2];
            p12 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            p12.src = deck[3];
            p12 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            p12.src = deck[4];
            p12 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            p12.src = deck[5];
            p12 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            p12.src = deck[6];
            p12 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            p12.src = deck[7];
            p12 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            p12.src = deck[8];
            p12 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            p12.src = deck[9];
            p12 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            p12.src = deck[10];
            p12 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            p12.src = deck[11];
            p12 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            p12.src = deck[12];
            p12 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            p12.src = deck[13];
            p12 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            p12.src = deck[14];
            p12 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            p12.src = deck[15];
            p12 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            p12.src = deck[16];
            p12 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            p12.src = deck[17];
            p12 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            p12.src = deck[18];
            p12 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            p12.src = deck[19];
            p12 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            p12.src = deck[20];
            p12 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            p12.src = deck[21];
            p12 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            p12.src = deck[22];
            p12 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            p12.src = deck[23];
            p12 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            p12.src = deck[24];
            p12 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            p12.src = deck[25];
            p12 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            p12.src = deck[26];
            p12 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            p12.src = deck[27];
            p12 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            p12.src = deck[28];
            p12 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            p12.src = deck[29];
            p12 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            p12.src = deck[30];
            p12 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            p12.src = deck[31];
            p12 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            p12.src = deck[32];
            p12 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            p12.src = deck[33];
            p12 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            p12.src = deck[34];
            p12 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            p12.src = deck[35];
            p12 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            p12.src = deck[36];
            p12 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            p12.src = deck[37];
            p12 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            p12.src = deck[38];
            p12 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            p12.src = deck[39];
            p12 = deck[39];

            deck.splice(39,1);
            break;
        default:
            p12.src = "Cards/red_joker.png";
            break;
    }


}

function player1Draw()
{

    p13 = document.getElementById("Card3");

    //player 1 1st card
    thirdPic = Math.floor(Math.random()*deck.length);
    switch(thirdPic)
    {
        case 0:
            p13.src = deck[0];
            p13 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            p13.src = deck[1];
            p13 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            p13.src = deck[2];
            p13 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            p13.src = deck[3];
            p13 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            p13.src = deck[4];
            p13 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            p13.src = deck[5];
            p13 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            p13.src = deck[6];
            p13 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            p13.src = deck[7];
            p13 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            p13.src = deck[8];
            p13 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            p13.src = deck[9];
            p13 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            p13.src = deck[10];
            p13 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            p13.src = deck[11];
            p13 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            p13.src = deck[12];
            p13 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            p13.src = deck[13];
            p13 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            p13.src = deck[14];
            p13 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            p13.src = deck[15];
            p13 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            p13.src = deck[16];
            p13 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            p13.src = deck[17];
            p13 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            p13.src = deck[18];
            p13 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            p13.src = deck[19];
            p13 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            p13.src = deck[20];
            p13 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            p13.src = deck[21];
            p13 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            p13.src = deck[22];
            p13 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            p13.src = deck[23];
            p13 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            p13.src = deck[24];
            p13 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            p13.src = deck[25];
            p13 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            p13.src = deck[26];
            p13 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            p13.src = deck[27];
            p13 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            p13.src = deck[28];
            p13 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            p13.src = deck[29];
            p13 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            p13.src = deck[30];
            p13 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            p13.src = deck[31];
            p13 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            p13.src = deck[32];
            p13 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            p13.src = deck[33];
            p13 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            p13.src = deck[34];
            p13 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            p13.src = deck[35];
            p13 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            p13.src = deck[36];
            p13 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            p13.src = deck[37];
            p13 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            p13.src = deck[38];
            p13 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            p13.src = deck[39];
            p13 = deck[39];

            deck.splice(39,1);
            break;
        default:
            p13.src = "Cards/red_joker.png";
            break;
    }

    document.getElementById("remainingCards").innerHTML = "Cards:"+deck.length;
    cardSummary();
}

function player2Method()
{
    //player2
    p21 = document.getElementById("Card4");
    p22 = document.getElementById("Card5");

    //player2 1st card
    fourthPic = Math.floor(Math.random()*deck.length);
    switch(fourthPic)
    {
        case 0:
            p21.src = deck[0];
            p21 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            p21.src = deck[1];
            p21 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            p21.src = deck[2];
            p21 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            p21.src = deck[3];
            p21 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            p21.src = deck[4];
            p21 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            p21.src = deck[5];
            p21 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            p21.src = deck[6];
            p21 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            p21.src = deck[7];
            p21 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            p21.src = deck[8];
            p21 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            p21.src = deck[9];
            p21 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            p21.src = deck[10];
            p21 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            p21.src = deck[11];
            p21 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            p21.src = deck[12];
            p21 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            p21.src = deck[13];
            p21 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            p21.src = deck[14];
            p21 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            p21.src = deck[15];
            p21 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            p21.src = deck[16];
            p21 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            p21.src = deck[17];
            p21 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            p21.src = deck[18];
            p21 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            p21.src = deck[19];
            p21 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            p21.src = deck[20];
            p21 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            p21.src = deck[21];
            p21 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            p21.src = deck[22];
            p21 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            p21.src = deck[23];
            p21 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            p21.src = deck[24];
            p21 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            p21.src = deck[25];
            p21 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            p21.src = deck[26];
            p21 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            p21.src = deck[27];
            p21 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            p21.src = deck[28];
            p21 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            p21.src = deck[29];
            p21 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            p21.src = deck[30];
            p21 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            p21.src = deck[31];
            p21 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            p21.src = deck[32];
            p21 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            p21.src = deck[33];
            p21 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            p21.src = deck[34];
            p21 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            p21.src = deck[35];
            p21 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            p21.src = deck[36];
            p21 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            p21.src = deck[37];
            p21 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            p21.src = deck[38];
            p21 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            p21.src = deck[39];
            p21 = deck[39];

            deck.splice(39,1);
            break;
        default:
            p21.src = "Cards/red_joker.png";
            break;
    }



    //player2 2nd card
    fifthPic = Math.floor(Math.random()*deck.length);
    switch(fifthPic)
    {
        case 0:
            p22.src = deck[0];
            p22 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            p22.src = deck[1];
            p22 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            p22.src = deck[2];
            p22 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            p22.src = deck[3];
            p22 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            p22.src = deck[4];
            p22 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            p22.src = deck[5];
            p22 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            p22.src = deck[6];
            p22 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            p22.src = deck[7];
            p22 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            p22.src = deck[8];
            p22 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            p22.src = deck[9];
            p22 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            p22.src = deck[10];
            p22 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            p22.src = deck[11];
            p22 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            p22.src = deck[12];
            p22 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            p22.src = deck[13];
            p22 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            p22.src = deck[14];
            p22 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            p22.src = deck[15];
            p22 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            p22.src = deck[16];
            p22 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            p22.src = deck[17];
            p22 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            p22.src = deck[18];
            p22 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            p22.src = deck[19];
            p22 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            p22.src = deck[20];
            p22 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            p22.src = deck[21];
            p22 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            p22.src = deck[22];
            p22 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            p22.src = deck[23];
            p22 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            p22.src = deck[24];
            p22 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            p22.src = deck[25];
            p22 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            p22.src = deck[26];
            p22 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            p22.src = deck[27];
            p22 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            p22.src = deck[28];
            p22 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            p22.src = deck[29];
            p22 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            p22.src = deck[30];
            p22 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            p22.src = deck[31];
            p22 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            p22.src = deck[32];
            p22 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            p22.src = deck[33];
            p22 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            p22.src = deck[34];
            p22 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            p22.src = deck[35];
            p22 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            p22.src = deck[36];
            p22 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            p22.src = deck[37];
            p22 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            p22.src = deck[38];
            p22 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            p22.src = deck[39];
            p22 = deck[39];

            deck.splice(39,1);
            break;
        default:
            p22.src = "Cards/red_joker.png";
            break;
    }



}

function player2Draw()
{

    p23 = document.getElementById("Card6");

    //player2 1st card
    sixthPic = Math.floor(Math.random()*deck.length);
    switch(sixthPic)
    {
        case 0:
            p23.src = deck[0];
            p23 = deck[0];

            deck.splice(0,1);
            break;
        case 1:
            p23.src = deck[1];
            p23 = deck[1];

            deck.splice(1,1);
            break;
        case 2:
            p23.src = deck[2];
            p23 = deck[2];

            deck.splice(2,1);
            break;
        case 3:
            p23.src = deck[3];
            p23 = deck[3];

            deck.splice(3,1);
            break;
        case 4:
            p23.src = deck[4];
            p23 = deck[4];

            deck.splice(4,1);
            break;
        case 5:
            p23.src = deck[5];
            p23 = deck[5];

            deck.splice(5,1);
            break;
        case 6:
            p23.src = deck[6];
            p23 = deck[6];

            deck.splice(6,1);
            break;
        case 7:
            p23.src = deck[7];
            p23 = deck[7];

            deck.splice(7,1);
            break;
        case 8:
            p23.src = deck[8];
            p23 = deck[8];

            deck.splice(8,1);
            break;
        case 9:
            p23.src = deck[9];
            p23 = deck[9];

            deck.splice(9,1);
            break;
        case 10:
            p23.src = deck[10];
            p23 = deck[10];

            deck.splice(10,1);
            break;
        case 11:
            p23.src = deck[11];
            p23 = deck[11];

            deck.splice(11,1);
            break;
        case 12:
            p23.src = deck[12];
            p23 = deck[12];

            deck.splice(12,1);
            break;
        case 13:
            p23.src = deck[13];
            p23 = deck[13];

            deck.splice(13,1);
            break;
        case 14:
            p23.src = deck[14];
            p23 = deck[14];

            deck.splice(14,1);
            break;
        case 15:
            p23.src = deck[15];
            p23 = deck[15];

            deck.splice(15,1);
            break;
        case 16:
            p23.src = deck[16];
            p23 = deck[16];

            deck.splice(16,1);
            break;
        case 17:
            p23.src = deck[17];
            p23 = deck[17];

            deck.splice(17,1);
            break;
        case 18:
            p23.src = deck[18];
            p23 = deck[18];

            deck.splice(18,1);
            break;
        case 19:
            p23.src = deck[19];
            p23 = deck[19];

            deck.splice(19,1);
            break;
        case 20:
            p23.src = deck[20];
            p23 = deck[20];

            deck.splice(20,1);
            break;
        case 21:
            p23.src = deck[21];
            p23 = deck[21];

            deck.splice(21,1);
            break;
        case 22:
            p23.src = deck[22];
            p23 = deck[22];

            deck.splice(22,1);
            break;
        case 23:
            p23.src = deck[23];
            p23 = deck[23];

            deck.splice(23,1);
            break;
        case 24:
            p23.src = deck[24];
            p23 = deck[24];

            deck.splice(24,1);
            break;
        case 25:
            p23.src = deck[25];
            p23 = deck[25];

            deck.splice(25,1);
            break;
        case 26:
            p23.src = deck[26];
            p23 = deck[26];

            deck.splice(26,1);
            break;
        case 27:
            p23.src = deck[27];
            p23 = deck[27];

            deck.splice(27,1);
            break;
        case 28:
            p23.src = deck[28];
            p23 = deck[28];

            deck.splice(28,1);
            break;
        case 29:
            p23.src = deck[29];
            p23 = deck[29];

            deck.splice(29,1);
            break;
        case 30:
            p23.src = deck[30];
            p23 = deck[30];

            deck.splice(30,1);
            break;
        case 31:
            p23.src = deck[31];
            p23 = deck[31];

            deck.splice(31,1);
            break;
        case 32:
            p23.src = deck[32];
            p23 = deck[32];

            deck.splice(32,1);
            break;
        case 33:
            p23.src = deck[33];
            p23 = deck[33];

            deck.splice(33,1);
            break;
        case 34:
            p23.src = deck[34];
            p23 = deck[34];

            deck.splice(34,1);
            break;
        case 35:
            p23.src = deck[35];
            p23 = deck[35];

            deck.splice(35,1);
            break;
        case 36:
            p23.src = deck[36];
            p23 = deck[36];

            deck.splice(36,1);
            break;
        case 37:
            p23.src = deck[37];
            p23 = deck[37];

            deck.splice(37,1);
            break;
        case 38:
            p23.src = deck[38];
            p23 = deck[38];

            deck.splice(38,1);
            break;
        case 39:
            p23.src = deck[39];
            p23 = deck[39];

            deck.splice(39,1);
            break;
        default:
            p23.src = "Cards/red_joker.png";
            break;
    }

    document.getElementById("remainingCards").innerHTML = "Cards:"+deck.length;
    cardSummary();
}

function cardSummary()
{
    switch(p11)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            p11 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            p11 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            p11 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            p11 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            p11 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            p11 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            p11 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            p11 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            p11 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            p11 = 0;
            break;
    }


    switch(p12)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            p12 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            p12 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            p12 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            p12 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            p12 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            p12 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            p12 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            p12 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            p12 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            p12 = 0;
            break;
    }

    switch(p13)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            p13 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            p13 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            p13 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            p13 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            p13 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            p13 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            p13 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            p13 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            p13 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            p13 = 0;
            break;
    }

    if(p13)
    {
        cardValue1 = p11+p12+p13;
    }
    else
    {
        cardValue1 = p11+p12;
    }

    for(var checker = 10;checker<=30;checker++)
    {
        if(checker==cardValue1)
        {
            cardValue1 = checker-10;
            if(cardValue1>=10)
            {
                cardValue1-=10;
                if(cardValue1==10)
                {
                    cardValue1-=10;
                }
            }
            else
            {
                checker=31;
            }
        }
    }
    document.getElementById("player1Sum").innerHTML = cardValue1;

    switch(p21)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            p21 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            p21 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            p21 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            p21 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            p21 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            p21 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            p21 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            p21 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            p21 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            p21 = 0;
            break;
    }

    switch(p22)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            p22 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            p22 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            p22 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            p22 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            p22 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            p22 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            p22 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            p22 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            p22 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            p22 = 0;
            break;
    }

    switch(p23)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            p23 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            p23 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            p23 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            p23 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            p23 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            p23 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            p23 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            p23 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            p23 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            p23 = 0;
            break;
    }

    if(p23)
    {
        cardValue2 = p21+p22+p23;
    }else
    {
        cardValue2 = p21+p22;
    }

    for(var checker = 10;checker<=30;checker++)
    {
        if(checker==cardValue2)
        {
            cardValue2 = checker-10;
            if(cardValue2>=10)
            {
                cardValue2-=10;
                if(cardValue2==10)
                {
                    cardValue2-=10;
                }
            }
            else
            {
                checker=31;
            }
        }
    }
    document.getElementById("player2Sum").innerHTML = cardValue2;

    switch(enemyPicture1)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            enemyPicture1 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            enemyPicture1 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            enemyPicture1 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            enemyPicture1 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            enemyPicture1 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            enemyPicture1 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            enemyPicture1 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            enemyPicture1 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            enemyPicture1 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            enemyPicture1 = 0;
            break;
    }


    switch(enemyPicture2)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            enemyPicture2 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            enemyPicture2 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            enemyPicture2 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            enemyPicture2 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            enemyPicture2 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            enemyPicture2 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            enemyPicture2 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            enemyPicture2 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            enemyPicture2 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            enemyPicture2 = 0;
            break;
    }


    switch(enemyPicture3)
    {
        case "Cards/1 (1).png":
        case "Cards/1 (2).png":
        case "Cards/1 (3).png":
        case "Cards/1 (4).png":
            enemyPicture3 = 1;
            break;
        case "Cards/2 (1).png":
        case "Cards/2 (2).png":
        case "Cards/2 (3).png":
        case "Cards/2 (4).png":
            enemyPicture3 = 2;
            break;
        case "Cards/3 (1).png":
        case "Cards/3 (2).png":
        case "Cards/3 (3).png":
        case "Cards/3 (4).png":
            enemyPicture3 = 3;
            break;
        case "Cards/4 (1).png":
        case "Cards/4 (2).png":
        case "Cards/4 (3).png":
        case "Cards/4 (4).png":
            enemyPicture3 = 4;
            break;
        case "Cards/5 (1).png":
        case "Cards/5 (2).png":
        case "Cards/5 (3).png":
        case "Cards/5 (4).png":
            enemyPicture3 = 5;
            break;
        case "Cards/6 (1).png":
        case "Cards/6 (2).png":
        case "Cards/6 (3).png":
        case "Cards/6 (4).png":
            enemyPicture3 = 6;
            break;
        case "Cards/7 (1).png":
        case "Cards/7 (2).png":
        case "Cards/7 (3).png":
        case "Cards/7 (4).png":
            enemyPicture3 = 7;
            break;
        case "Cards/8 (1).png":
        case "Cards/8 (2).png":
        case "Cards/8 (3).png":
        case "Cards/8 (4).png":
            enemyPicture3 = 8;
            break;
        case "Cards/9 (1).png":
        case "Cards/9 (2).png":
        case "Cards/9 (3).png":
        case "Cards/9 (4).png":
            enemyPicture3 = 9;
            break;
        case "Cards/10 (1).png":
        case "Cards/10 (2).png":
        case "Cards/10 (3).png":
        case "Cards/10 (4).png":
            enemyPicture3 = 0;
            break;
    }

    if(enemyPicture3)
    {
        summaryHolder = enemyPicture1+enemyPicture2+enemyPicture3;
    }
    else
    {
        summaryHolder = enemyPicture1+enemyPicture2;
    }

    for(var checker = 10;checker<=30;checker++)
    {
        if(checker==summaryHolder)
        {
            summaryHolder= checker-10;
            if(summaryHolder>=10)
            {
                summaryHolder-=10;
                if(summaryHolder==10)
                {
                    summaryHolder-=10;
                }
            }
            else
            {
                checker=31;
            }
        }
    }


}


