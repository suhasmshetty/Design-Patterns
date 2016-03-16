var peopleFactory = function(name, age, gender) {
    var temp = {};
    temp.name = name;
    temp.age = age;
    temp.gender = gender;
    temp.printPerson = function() {
        console.log(temp.name + ", " + temp.age + ", " + temp.gender);
    };
    return temp;
};

var p1 = new peopleFactory("Ali", "23", "Male");
var p2 = new peopleFactory("Som", "13", "Female");
p1.printPerson(); //"Ali, 23, Male"
p2.printPerson(); //"Som, 13, Female"