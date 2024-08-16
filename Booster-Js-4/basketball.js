/*
 John and Mike both play basketball on different teams. In the latest three games:
 
 1- John's team scored 89, 120, and 103 points.
 2- Mike's team scored 116, 94, and 123 points.

 Calculate the average score for each team.
 Determine which team wins on average (highest average score), and print the winner to the console. Also, include the average score in the output.
 Then, change the scores to show different winners. 
*/

const JohnTeam = {
  name: "John's Team",
  scores: [89, 120, 103],
};

const MikeTeam = {
  name: "Mike's Team",
  scores: [116, 94, 123],
};

function average({ scores }) {
  //   let total = 0;
  //   scores.forEach((score) => {
  //     total += score;
  //   });
  //   const average = total / scores.length;

  // or
  const average =
    scores.reduce((total, current) => total + current) / scores.length;

  //   console.log(average);
  return average;
}

function winner(teamOne, teamTwo) {
  if (
    average({ scores: teamOne.scores }) > average({ scores: teamTwo.scores })
  ) {
    console.log(
      `${teamOne.name} is the winner with ${average({
        scores: teamOne.scores,
      })} score!`
    );
  } else {
    console.log(
      `${teamTwo.name} is the winner with ${average({
        scores: teamTwo.scores,
      })} score!`
    );
  }
}
winner(JohnTeam, MikeTeam);
