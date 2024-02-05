//QUESTION NO: 1

var myResume={
    "basics": {
      "name": "ELAMATHI G",
      "email": "elamathi2611@gmail.com",
      "phone": 9361582272,
      "degree": "M.A",
      "location": {
        "address": "93, Pettai Perumal Kovil Street, Anthiyur",
        "postalCode": 638501,
        "city": "Erode",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/elamathig2000",
          "github":"https://github.com/Elamathi26"
        }
      ]
    },
    "education": [
      { "institution": "J.K.K.Nataraja College Of Arts and Science",
        "department": "English Literature",
        "studyType": "fulltime",
        "batch start year": 2021,
        "batch end year": 2023,
        "gpa": 7.0,
      }
    ],
    "skills": [
      {
        "name": "javascript,ms word,ms excel",
        "level": "beginner",
        "project": [
          "Nil"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "content writter,story writing,",
      }
    ]
  }
  console.log(myResume);

  //QUESTION NO : 2

  var json = [{
    "name" : "elamathi1", 
    "content" : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "elamathi2611@gmail.com"
},

];
//for loop
for(var i=0; i<json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.content);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.name); });
json.forEach(function(obj) { console.log(obj.content); });
json.forEach(function(obj) { console.log(obj.task); });
json.forEach(function(obj) { console.log(obj.mail); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].name);
console.log(json[key].content);
console.log(json[key].task);
console.log(json[key].mail);
 
}
}
//for Of
var text = "";
for (var x of json[key].name) {
 text += x; 
}
 console.log(text);