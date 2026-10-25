//leetcode 2409

function countDaysSpentTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    arriveAlice = calculateDays(arriveAlice, monthDays);
    leaveAlice = calculateDays(leaveAlice, monthDays);
    arriveBob = calculateDays(arriveBob, monthDays);
    leaveBob = calculateDays(leaveBob, monthDays);

    let lateArrive = arriveAlice > arriveBob ? arriveAlice : arriveBob;
    let earlyLeave = leaveAlice < leaveBob ? leaveAlice : leaveBob;

    if (lateArrive > earlyLeave) return 0;

    return earlyLeave - lateArrive + 1;
}

function calculateDays(mmDD, monthDays) {
    let monthStr = mmDD.slice(0, 2);
    let daysStr = mmDD.slice(3);
    let sum = 0;
    for (let i = 0; i < monthStr - 1; i++) {
        sum += monthDays[i];
    }
    return sum + Number(daysStr);
}

console.log(countDaysSpentTogether("08-15","08-18", "08-16", "08-19"));

