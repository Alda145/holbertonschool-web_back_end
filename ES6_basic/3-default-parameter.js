
export default function getSumOfHoods(initialNumber = 34, expansion1989, expansion2019) {

    expansion1989 = typeof expansion1989 !== "undefined" ? expansion1989 : 0;

    expansion2019 = typeof expansion2019 !== "undefined" ? expansion2019 : 0;

    return initialNumber + expansion1989 + expansion2019;
}