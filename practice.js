var arrAllQandA = [

["Capital city in France?", "Paris", "optionTwo", "optionThree","optionFour", "Paris"],
//last position is the crrect answer -check if last optionOne match option in multiple choice

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
        var div = document.createElement('div')
        div.setAttribute('class', 'sectionBorder')
var storeLabel = document.createElement('H2')// crate label question
var textNote = document.createTextNode(arrAllQandA[i][0])// text in label
storeLabel.appendChild(textNote)//we put textNote in label by appenchild()
div.appendChild(storeLabel)//STORELABEL LINE 22

//1
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')


var name = 'question' + i
storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][1])//i position number
storeRadioButton.setAttribute('id', name + '1' )
div.appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][1])
div.appendChild(storeTextNoteNext2RadioButton)
//end input radio button
//2
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')


storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][2])//i position number
div.appendChild(storeRadioButton)
storeRadioButton.setAttribute('id', name + '2' )

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][2])
div.appendChild(storeTextNoteNext2RadioButton)
//end input radio button
//3
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')


storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][3])//i position number
storeRadioButton.setAttribute('id', name + '3' )
div.appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][3])
div.appendChild(storeTextNoteNext2RadioButton)
//end input radio button

//4
//type is attribute of the tag--crate radio button
var storeRadioButton = document.createElement('input')
storeRadioButton.setAttribute('type', 'radio')
storeRadioButton.setAttribute('class','blockE4RadioB')

var name = 'question' + i
storeRadioButton.setAttribute('name', name)
storeRadioButton.setAttribute('value', arrAllQandA[i][4])//i position number
storeRadioButton.setAttribute('id', name + '4' )
div.appendChild(storeRadioButton)

//crate text next to radio button
var storeTextNoteNext2RadioButton = document.createTextNode(arrAllQandA[i][4])
div.appendChild(storeTextNoteNext2RadioButton)
//end input radio button
document.getElementById('showRadioButton').appendChild(div)
    }

//create button
var storeSubmitButton = document.createElement('button')
storeSubmitButton.setAttribute('onclick', 'submit()')// 'onclick', 'submit()'-> attribute and value
var submitTextNote = document.createTextNode('Submit')//text submit in the button
storeSubmitButton.appendChild(submitTextNote)// this line we put submit word in the button 
storeSubmitButton.setAttribute('id', 'targetSubmitButton')// target submit button for css
//put button on html page
document.getElementById('SubmitButtonSection').appendChild(storeSubmitButton)
}

function submit(){
    //check fecth value if it correct--how many correct answer
    var score = 0
for(i=0 ;i <arrAllQandA.length; i++){
    //check which option been selected
    var name = 'question' + i
    //which one of radio button been selected and check if that radio button is a correct answer
    if(document.getElementById(name+'1').checked == true && document.getElementById(name + '1').value == arrAllQandA[i][5]){
score++
    }
    else if(document.getElementById(name+'2').checked == true && document.getElementById(name + '2').value == arrAllQandA[i][5]){
        score++
            }
            else if(document.getElementById(name+'3').checked == true && document.getElementById(name + '3').value == arrAllQandA[i][5]){
                score++
                    }
                    else if(document.getElementById(name+'4').checked == true && document.getElementById(name + '4').value == arrAllQandA[i][5]){
                        score++
                            }


}
alert('The final score is  ' + score +'.')
}