var imgsTag = $("#imgs");
var imgsFiles = [
  "img/cube2.jpg",
  "img/cube3.jpg",
  "img/cube4.jpg",
  "img/cube5.jpg",
  "img/cube6.jpg"
];

for (var i = 0; i <= imgsFiles.length; i++) {
  console.log(i);
  switch (i) {
    case 1:
      setTimeout(() => {
        imgsTag.attr("src", imgsFiles[0]);
      }, 1000 * i);
      break;

    case 2:
      setTimeout(() => {
        imgsTag.attr("src", imgsFiles[1]);
      }, 1000 * i);
      break;
    case 3:
      setTimeout(() => {
        imgsTag.attr("src", imgsFiles[2]);
      }, 1000 * i);
      break;
    case 4:
      setTimeout(() => {
        imgsTag.attr("src", imgsFiles[3]);
      }, 1000 * i);
      break;
    case 5:
      setTimeout(() => {
        imgsTag.attr("src", imgsFiles[4]);
      }, 1000 * i);
      break;
  }
}
