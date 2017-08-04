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

//go to loop and grab each label and value and put it in array (2 arrays) and take arrays and set attribute to
//new variable to make new label will give attribute...appendchild into selection object.
//attribute to create fields then another to create options inside of 1st attribute.
function hello (){
  // Select the first element from the array
  let forth = formData[ 4 ];

  let languageFuncArr = []

  let language = document.querySelector('#fields');
  let languageSel = document.createElement('select');
  languageSel.setAttribute('type', "select");
  languageSel.setAttribute('name', "Select Language");
  languageSel.setAttribute('id', "user-language");
  languageSel.setAttribute('value', "languageFuncArr");
  language.appendChild(languageSel);

  for (let i = 0; i < forth.options.length; i++) {
      let labelArr = forth.options[i].label;
      languageFuncArr.push(labelArr);
      console.log(labelArr);
      for (let n = 0; n < forth.options.length; n++) {
          let labelArrValue = forth.options[n].value;
          languageFuncArr.push(labelArrValue);
          // console.log(labelArrValue);
      }


      let languageDropDown = document.querySelector("#user-language");
      let languageDropDownSel = document.createElement('option');
      languageDropDownSel.setAttribute('label', labelArr);
      // languageDropDownSel.setAttribute('value', forth.options.value);

      languageDropDown.appendChild(languageDropDownSel);
      languageFuncArr.push(languageFuncArr);

      language.appendChild(languageSel);
  }

  console.log(languageFuncArr);

  console.log(forth)

};


//wrap options in a select div

// -------- Your Code Goes Below this Line --------

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



let email = document.querySelector('#fields');
let emailAdd = document.createElement('input');
emailAdd.setAttribute('type', "email");
emailAdd.setAttribute('placeholder', "Email Address");
emailAdd.setAttribute('id', "user-email");
emailAdd.setAttribute('icon', "fa-envelope");

email.appendChild(emailAdd);


let website = document.querySelector('#fields');
let websiteInput = document.createElement('input');
websiteInput.setAttribute('type', "text");
websiteInput.setAttribute('placeholder', "Current Website URL");
websiteInput.setAttribute('id', "user-website");
websiteInput.setAttribute('icon', "fa-globe");

website.appendChild(websiteInput);


hello();
// let language = document.querySelector('#fields');
// let languageSel = document.createElement('select');
// languageSel.setAttribute('type', "select");
// languageSel.setAttribute('placeholder', "Select Language");
// languageSel.setAttribute('id', "user-language");
// languageSel.setAttribute('value', "languageFuncArr");
//
// language.appendChild(languageSel);

//
// (function languageFunc(){
//   let languageFuncArr = [];
//
//     for (var i = 0; i < formData[4].options.length; i++) {
//         let forth = formData[4].options[i];
//         languageFuncArr.push(forth);
//
//         // console.log(languageFuncArr);
//     }
//     // let languageDropDown = document.querySelector("#user-language");
//     // let languageDropDownSel = document.createElement('options');
//     // languageDropDownSel.setAttribute('value', "English");
//     // languageDropDownSel.setAttribute('value', "French");
//     // languageDropDownSel.setAttribute('value', "Spanish");
//     // languageDropDownSel.setAttribute('value', "Chinese");
//     // languageDropDownSel.setAttribute('value', "Japanese");
//     //
//     // languageDropDown.appendChild(languageDropDownSel);
//     // languageFuncArr.push(langlanguageFunc);
//     console.log(languageFuncArr);
// })
let textArea = document.querySelector('#fields');
let textAreaIn = document.createElement('textarea');
textAreaIn.setAttribute('type', "textarea");
textAreaIn.setAttribute('placeholder', "Your Comment");
textAreaIn.setAttribute('id', "user-comment");
textAreaIn.setAttribute('icon', "fa-comments");

textArea.appendChild(textAreaIn);


let telMobile = document.querySelector('#fields');
let telMobileIn = document.createElement('input');
telMobileIn.setAttribute('type', "tel");
telMobileIn.setAttribute('placeholder', "Mobile Number");
telMobileIn.setAttribute('id', "user-mobile");
telMobileIn.setAttribute('icon', "fa-mobile-phone");

telMobile.appendChild(telMobileIn);


let telHome = document.querySelector('#fields');
let telHomeIn = document.createElement('input');
telHomeIn.setAttribute('type', "tel");
telHomeIn.setAttribute('placeholder', "Home Number");
telHomeIn.setAttribute('id', "user-phone");
telHomeIn.setAttribute('icon', "fa-phone");

telHome.appendChild(telHomeIn);
