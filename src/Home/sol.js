// Prints top n scores of an innings
const topNScores = (inningScore, n) => {
  //Sort players by scores
  const sortedKeys = Object.keys(inningScore).sort(
    (a, b) => inningScore[b].score - inningScore[a].score
  );
  //Print top n scores
  const prizeAmount = Object.keys(inningScore).sort(
    (a, b) => inningScore[b].amount - inningScore[a].amount
  );
  for (let i = 0; i < n; i++) {
    let player = sortedKeys[i];
    let amount = prizeAmount[i];
    console.log(player, "=", inningScore[player].score);
    console.log(player, "winning", inningScore[amount].amount, "$");
  }
};

// Get all innings scores
const overallScores = (allInningsScores) => {
  const r = allInningsScores[0];
  //   const a = allInningsScores[0].amount;

  for (let i = 1; i < allInningsScores.length; i++) {
    for (const player of Object.keys(allInningsScores[i])) {
      r[player].score += allInningsScores[i][player].score;
      r[player].amount += allInningsScores[i][player].amount;
    }
  }
  return r;
};

// overallScores(scores, 4);

const main = () => {
  var allInningsScores = [
    {
      p1: {
        score: 100,
        amount: 10,
      },
      p2: {
        score: 70,
        amount: 5,
      },
      p3: {
        score: 116,
        amount: 4,
      },
      p4: {
        score: 15,
        amount: 2,
      },
    },
    {
      p1: {
        score: 100,
        amount: 10,
      },
      p2: {
        score: 70,
        amount: 5,
      },
      p3: {
        score: 116,
        amount: 4,
      },
      p4: {
        score: 15,
        amount: 2,
      },
    },
    {
      p1: {
        score: 100,
        amount: 10,
      },
      p2: {
        score: 70,
        amount: 5,
      },
      p3: {
        score: 116,
        amount: 4,
      },
      p4: {
        score: 15,
        amount: 2,
      },
    },
  ];
  var prizeAmount = [10, 5, 3];
  const n = 3;
  for (let i = 0; i < allInningsScores.length; i++) {
    console.log("Innings " + (i + 1) + " top " + n + " scores");
    topNScores(allInningsScores[i], n, prizeAmount);
  }

  const overall = overallScores(allInningsScores);
  console.log("Top " + n + " scores of all innings");
  topNScores(overall, n);
};

main();
