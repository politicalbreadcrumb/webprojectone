window.onload = () => {
const fileInput = document.getElementById('fileInput');
    //add the event listener for when there is a change
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  //add the file reader
  const reader = new FileReader();

  //what to do when a file is loaded
  reader.onload = () => {
    const data = reader.result;
    //so now whenever in the .txt file there is a '.' after a word a new line is made
    const lines = data.split('.');
    //ok so this removes any leading or trailing white space from each line
    //and the join() method brings the lines together with <br> which makes new lines.
    const array = lines.map(line => line.trim()).join('<br>');
    //log the array to the console
    console.log(array);
    //display the .txt file which is now an array onto the website from the html side
    document.getElementById('showdata').innerHTML= array
  };

  //read's the content as a string for the html
  reader.readAsText(file);
})
};