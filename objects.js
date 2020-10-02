var student1 = {id:23, phone: 345, name: 'Abir'};
var student2 = {id: 53, phone: 5332, name: 'Kayum'};

// console.log(student1["phone"]);         //student.phone instead of student["phone"]

student1.phone = 44443,
student1["phone"] = 88383;
student1.job = 'Student';

console.log(student1)