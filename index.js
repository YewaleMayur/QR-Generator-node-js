const qr = require("qrcode");
let data = {
  name: "Cambo Tutorial",
  email: "mayury@gmail.com",
  gender: "Male",
  id: 123,
};
let stjson = JSON.stringify(data);
qr.toString(stjson, { type: "terminal" }, function (err, code) {
    if (err) return console.log("error");
    console.log(code);
});
// 
qr.toFile("qr.png",stjson, { type: "terminal" }, function (err) {
    if(err) return console.log("error");
});


