//define input as the txt file
const input = document.querySelector('input[type="file"]')
//add a event listener so that when there is a change to the input something happens as shown
input.addEventListener('change', function(e){
    console.log(input.files);
    const reader = new FileReader();
    //read the files as text
    reader.readAsText(input.files[0]);
    //what it should do once a file is loaded
    reader.onload=function(){
    console.log(reader.result);
    //we are now making it look better by making new lines and adding commas
    const lines = reader.result.split('/n').map(function (line){
        return line.split(',')
    })
    //display the data onto the html site
    document.getElementById('showdata').innerHTML=reader.result;
    }
}, false)