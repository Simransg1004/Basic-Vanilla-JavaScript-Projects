const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    //Check if they had the shift key down
    // And check that they are checking it(not unchecking it)
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;    
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));