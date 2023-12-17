var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE teas;'
var seedQuery = 'INSERT INTO teas (title, nick, avatar, about) VALUES ("Чёрный чай", "blacktea", "/images/black_tea.jpg", "Черный чай - это напиток, получаемый из листьев чайного куста, которые проходят процесс окисления. Он имеет тёмный цвет и сильный аромат, а также содержит кофеин и полифенолы, которые имеют положительный эффект на здоровье. Черный чай может быть употреблен как горячим, так и холодным, и часто подаётся с молоком или лимоном. Он является одним из самых популярных напитков в мире и используется в различных культурах и традициях."), ("Зелёный чай", "greentea", "/images/green_tea.jpg", "Зелёный чай - это напиток, получаемый из листьев чайного куста, которые не проходят процесс окисления. Он имеет светло-зеленый цвет и легкий аромат, а также содержит кофеин и полифенолы, которые имеют положительный эффект на здоровье. Зелёный чай употребляется главным образом горячим, без добавления молока или сахара. Он также является популярным напитком во многих культурах и традициях."), ("Травяной чай", "herbaltea", "/images/herbal_tea.jpg","Травяной чай - это напиток, приготовленный из смеси сушеных трав и растений. Он может иметь различные вкусы и ароматы, в зависимости от состава трав. Травяной чай не содержит кофеина и обычно употребляется горячим, без добавления молока или сахара. Он также популярен во многих культурах и используется как средство для расслабления и улучшения здоровья.");'
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'qwertzxc228',
database: 'threetea'
});
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
