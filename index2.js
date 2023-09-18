    // first javascript code
    
    let person = {
        name: 'Porter',
        age: 35
    };
    
    person.name = 'Bobby';
    
    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 1;
    
    
    function greet(name, lastName) {
        console.log('Hello ' + name +' ' + lastName);
    }
    
    // Calculating value
    function square(number) {
        return number * number;
    }
    
    // let points = 110;
    // let type = points > 100 ? 'gold' : 'silver';
    
    // for (let i = 0; i < 5; i++){
    //     console.log('Hello World');
    // }
    
    // do while
    // let i = 9;
    // do {
    //     if (i % 2 !== 0) console.log(i);
    //     i++;
    // }while (i <= 5);
    
    // let number = max(13,7);
    // console.log(number);
    // function max(a,b) {
    //     return (a > b) ? a : b;
    // }
    
    
    // speeding(70)
    
    // function speeding(speed){
    //     let factor = Math.floor(speed/5);
    //     if (factor > 27) console.log('suspended');
    //     else if (factor > 14) 
    //         console.log('points' + (factor-14))
    //     else
    //         console.log('ok')
    // }
    
    
    
    function starStopper(num){
        for (let i = 0; i <= num; i++){
            let pattern = '';
            for (let y = 0;y < i; y++)
                pattern += '*';
            console.log(pattern);
            
        }
    
    }
    
    const address = {
        zipCode : 85042,
        city : 'Phoenix',
        street : 'Mullins',
    };
    
    function lookUp(add){
        for(key in add)
            console.log(add[key]);
    };
    
    // factory function
    function createAddress(street, city, zipCode){
    return {
        street, 
        city, 
        zipCode
    };
    }
    
    // constructor function
    function Address(street, city, zipCode){
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
    
    let add1 = new Address('minton', 'phx', '85042');
    let add2 = new Address('minton', 'phx', '85042');
    
    function areEqual(address1, address2){
        return address1 === address2;
    }
    
    function areSame(address1, address2){
        return address1.zipCode === address2.zipCode &&
        address1.city === address2.city &&
        address1.street === address2.street;
    }
    
    
    function arrayFinder(val, arr){
        const ans = [];
        for (let element of arr)
            if (element !== val)
                ans.push(element)
        return ans
    }
    const movies = [
        { title: 'a', year: 2018, rating: 4.5},
        { title: 'b', year: 2018, rating: 4.7},
        { title: 'c', year: 2018, rating: 3.0},
        { title: 'd', year: 2017, rating: 4.7},
    ]
    
    const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
    
    
    const circle = {
        radius: 1, 
        get area() {
            return Math.PI * this.radius * this.radius;
        }
    };
    
    let arr = [3, 3];
    let tar = 6;
    
    
    function factions(nums, target){
       const ans = [];
       for (let a of nums){
            let x = nums.indexOf(a)
            let y = nums.lastIndexOf((target-a));
            if ((y !== -1) && (x !== y)){
                ans.push(x);
                ans.push(y);
                return ans;
            }
            }
    
       }
    
    
    let splitter = 'this is s atest TO the split'
    
    function splitIt(str){
        let ans = [];
        let addIt = false;
        let x = str.length;
        if (x % 2 !== 0) addIt = true;
        for (i = 0;i < x; i++){
            if (i < (x-1)){
                ans.push((str[i] + str[i+1]));
                i += 1;
            }
            else
                ans.push((str[i] + '_'));
        }
        return ans
    }
    
    function pana(string){
        let str = string.toLocaleLowerCase()
        let ans = ''
        let amount = str.length
        for (let y of str){
            if (ans.indexOf(y) === -1) ans += y;
        }
        return ans;
    }
    
    
    
    
    function numberSquares(nums){
        let z = String(nums);
        let amount = nums.length;
        let temp = 0;
        let ans = '';
        for (i = 0; i < amount; i++){
            temp = 0;
            temp += nums[i] ** 2;
            ans += String(temp);
        }
        return Number(ans);
    }
    
    function numFinder(numbers){
        let nums = numbers.split(' ');
        let min = 100;
        let max = 0;
        for (let y of nums){
            if (Number(y) > max) max = Number(y);
            if (Number(y) < min) min = Number(y);
        }
        return `${max} ${min}`;
    }
    
    
    // getUser(1, getRepos);
    // getUser(1)
    //     .then(user => getRepositories(user.gitHubUsername))
    //     .then(repos => console.log('repositories', repos))
    //     .catch(err => console.log('Error', err.message));
    
    
    // Async and Await approach
    async function displayRepositories() {
        try {
            const user = await getUser(1);
            const repos = await getRepositories(user.gitHubUsername);
            console.log(repos);
        }
        catch (err) {
            console.log('Error', err.message);
        }
    }
    // displayRepositories()
    
    // function getRepos(user) {
    //     console.log('User', user);
    //     getRepositories(user.gitHubUsername, displayRepo);
    // }
    // function displayRepo(repos) {
    //     console.log('repositories: ', repos);
    // }
    
    function getUser(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Reading a user from db');
                resolve({ id: id, gitHubUsername: 'Porter' });
        }, 2000);
        });
        
    }
    
    function getRepositories(username) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('reading repositsss...ss..');
                resolve(['repo1', 'repo2', 'repo3']);
            }, 2000);
        });
      
    }


    let a = [1, 2, 3, 4, 5];
    let b = [1, 4, 91, 16, 25];

    function comp(a,b) {
        let count = 0
        for (let y of a) {
            if(b.indexOf((y*y)) === -1) return false;
            
        }
        return true;
    };

let sequen = [1, 1, 2];

function sequenNext(arr, n) {
    let val = 0;
    for (let i = 0; i < (n-3); i++) {
        val = (arr[(arr.length-1)] + arr[(arr.length-2)] + arr[(arr.length-3)]);
        arr.push(val);
    }
    return arr
};
let friends = ['mark', 'tony', 'timmy', 'amy', 'nathan', 'michael'];

function friendFinder(frie) {
    let ans = [];
    for (let y of frie) {
        if (y.length === 4) ans.push(y);
    }
    return ans;
};




let names = ['tim', 'dave', 'tom', 'albert', 'molly', 'maria'];

names.reverse();

let newd = names.filter((name) => name.startsWith('m'));
console.log(newd);

function NumbersStats(nums) {
    this.nums = nums
}

// let octoNums = new NumbersStats([1,2,3,4,5,6]);
// let strings = String(octoNums.nums);
// let resulstss = [];
// for (i of strings) {
//     if( i !== ',') resulstss.push(i);
// }


// var letterCombinations = function(digits) {
//     const letters = {
//         '2': ["a", "b", "c"],
//         '3': ['d','e','f'],
//         '4': ['g','h','i'],
//         '5': ['j','k','l'],
//         '6': ['m','n','o'],
//         '7': ['p','q','r','s'],
//         '8': ['t','u','v'],
//         '9': ['w','x','y','z']
//     };

//     let ans = [];
//     let total = digits.length;
//     for (let i = 0; i < total; i++) {
//         let remaining = total - (i+1);
//         let tempVal = '';
//         let letter = letters[digits[i]];
//         for (let y of letter) {
//             tempVal.push(y);
//             for (let rem = 0;rem < remaining; rem++) {
//                 for 
//             }
//             ans.push(tempVal)
//         }

//     }
//     return ans;
// };

let digits = [2,3,4,[5,6,7,8,[9,4,5,4],5],7,3,[2,3,4],4];

function flat(arr, n) {
    if (n === 0) return arr;
    let ans = arr;
    for (let i = 0;i < n; i++) {
        let ref = [];
        for (let y of ans) {
            if (y.length >= 2) {
                for ( let z of y) ref.push(z);
            } else {
                ref.push(y);
            }
        }
        ans = ref;
    }
    return ans;
}

console.log(flat(digits,1));