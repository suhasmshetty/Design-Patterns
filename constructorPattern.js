var peopleConstructor = function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.peoplePrint = function() {
        console.log(this.name + ", " + this.age + ", " + this.gender);
    }

}
var p1 = new peopleConstructor("Raj", "33", "Male"); // "Raj, 33, Male"
var p2 = new peopleConstructor("Rose", "33", "Female"); // "Rose, 33, Female"
p1.peoplePrint();
p2.peoplePrint();