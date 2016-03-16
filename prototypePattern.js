var peopleProto = function() {};
peopleProto.prototype.name = "No Name";
peopleProto.prototype.age = "No Age";
peopleProto.prototype.gender = "No Gender";
peopleProto.prototype.printPeople = function() {
    console.log(this.name + ", " + this.age + ", " + this.gender);
};

var p1 = new peopleProto();
p1.name = "Raj";
p1.age = "33";
p1.gender = "Male";
p1.printPeople() // Raj, 33, Male