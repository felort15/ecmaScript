const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2022-01-01");
console.table(matchers);

//spread

const user = {
    userName : 'gndx',
    age : 30,
    country : 'MX'
}
const {userName, ...values}=user;
console.log(userName);
console.log(values);
