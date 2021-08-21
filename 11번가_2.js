
function setup() {
    // Write your code here.
    console.log(document.body.innerHTML)
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div id='rating'>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
  </div>`;
  
  setup();
  
  document.getElementsByTagName("span")[2].click();
  console.log(document.body.innerHTML);