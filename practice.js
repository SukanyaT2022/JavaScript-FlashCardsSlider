var arrAllQandA = [

["Question1", "optionOne", "optionTwo", "optionThree","optionFour", "optionOne"],

["Question2", "optionOne", "optionTwo", "optionThree","optionFour", "optionTwo"],

["Question3", "optionOne", "optionTwo", "optionThree","optionFour", "optionThree"],

["Question4", "optionOne", "optionTwo", "optionThree","optionFour", "optionFour"],

["Question5", "optionOne", "optionTwo", "optionThree","optionFour", "optionFour"],

["Question6", "optionOne", "optionTwo", "optionThree","optionFour", "optionThree"]
]

//two dimension array
//while loop use when when we donot know how many question
//for loop we know exactly how many questions
function load(){

    for(i=0;i<arrAllQandA.length;i++){
var storeLabel = document.createElement('H2')// crate label question
var textNote = document.createTextNode(arrAllQandA[i][0])// text in label
storeLabel.appendChild(textNote)//we put textNote in label by appenchild()
document.getElementById('showRadioButton').appendChild(storeLabel)//STORELABEL LINE 22
//1
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')


var name = 'question' + i
storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][1])//i position number
document.getElementById('showRadioButton').appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][1])
document.getElementById('showRadioButton').appendChild(storeTextNoteNext2RadioButton)
//end input radio button
//2
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')


storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][2])//i position number
document.getElementById('showRadioButton').appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][2])
document.getElementById('showRadioButton').appendChild(storeTextNoteNext2RadioButton)
//end input radio button
//3
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')


storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][3])//i position number
document.getElementById('showRadioButton').appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][3])
document.getElementById('showRadioButton').appendChild(storeTextNoteNext2RadioButton)
//end input radio button

//4
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')

var name = 'question' + i
storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][4])//i position number
document.getElementById('showRadioButton').appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][4])
document.getElementById('showRadioButton').appendChild(storeTextNoteNext2RadioButton)
//end input radio button



    }

}