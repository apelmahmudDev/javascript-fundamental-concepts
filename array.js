var friendAges = [12, 44, 21, 17, 19];

friendAges[2] = 33;

var sabbirAge = friendAges[2];

var position = friendAges.indexOf(22);

// console.log(position);


var friendsName = ['Abir', 'Kabir', 'Nasir', 'Babir', 'Sanir'];

var babirPosition = friendsName.indexOf('Babir');
var dabirPosition = friendsName.indexOf('Dabir');

friendsName[2] = 'Basir';

// console.log(friendsName);

friendsName.push('Solayman');
friendsName.push('Komola bibi');

friendsName.pop();
friendsName.pop();
friendsName.shift();
friendsName.shift();
friendsName.unshift('Shayra Banu');
friendsName.unshift('Shayra');

console.log(friendsName.length);