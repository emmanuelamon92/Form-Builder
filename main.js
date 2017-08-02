// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

for (var i = 0; i < formData.length; i++){
  // console.log(formData[i]);
}


let nameF = document.querySelector('#fields');
let nameInputF = document.createElement('input');
nameInputF.setAttribute('type', "text");
nameInputF.setAttribute('id', "user-first-name");
nameInputF.setAttribute('placeholder', "First Name");
nameInputF.setAttribute('icon', "fa-user");
nameF.appendChild(nameInputF);

let nameL = document.querySelector('#fields');
let nameInputL = document.createElement('input');
nameInputL.setAttribute('type', "text");
nameInputL.setAttribute('id', "user-last-name");
nameInputL.setAttribute('placeholder', "Last Name");
nameInputL.setAttribute('icon', "fa-user");

nameL.appendChild(nameInputL);

// "type": "email",
// "label": "Email Address",
// "id": "user-email",
// "icon": "fa-envelope",
// "options": []

let email = document.querySelector('#fields');
let emailAdd = document.createElement('input');
emailAdd.setAttribute('type', "email");
emailAdd.setAttribute('placeholder', "Email Address");
emailAdd.setAttribute('id', "user-email");
emailAdd.setAttribute('icon', "fa-envelope");

email.appendChild(emailAdd);
