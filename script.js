//object orientation programming
class Student {
    name;
    lastName;
    age;
    votes = [];
    //con constructor imposto una "funzione" che mi permetterà di creare oggetti rapidamente tramite istanza
    constructor(name, lastName, age, vote){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    }

    addVote(vote){
        this.votes.push(vote);
    }
    getVoteAvg(){
        let sum = 0;
        this.votes.forEach((vote) =>{
            sum += vote;
        })
        return sum/this.votes.length;
    }
}


//istanzio un oggetto tramite parole new
const myStudent = new Student("Silvio" , "Salza", 33);
myStudent.addVote(3);
myStudent.addVote(2);
myStudent.addVote(3);
myStudent.addVote(1);

console.log(myStudent);
console.log(myStudent.getFullName())
console.log(myStudent.getVoteAvg());
