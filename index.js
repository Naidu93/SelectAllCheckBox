// METHOD --1

const selectAll = document.getElementById("selectAll");
const checkBoxes = document.querySelectorAll(".item");

// // Targeting selectAll checkbox to make all individual checkboxes checked
// selectAll.addEventListener("click",()=>{
//     console.log("clicked");
    
//     checkBoxes.forEach((element)=>{
//         element.checked = selectAll.checked;
//     })

   
// })



// // Targeting individual checkboxes to make selectAll as checked, if all the individual check boxes are checked
// checkBoxes.forEach((checkBox)=>{
//     checkBox.addEventListener("click",()=>{
//         const selectedValue = Array.from(checkBoxes).every(element=> element.checked);
//         selectAll.checked = selectedValue;
//     })
// });






// METHOD--2

// Function to handle both "Select All " and individual check boxes


// document.body.addEventListener("change",(event)=>{

//     const selectAll = document.getElementById("selectAll");
//     const checkBoxes = document.querySelectorAll(".item");


//     if(event.target.id === "selectAll"){
//         checkBoxes.forEach(checkBox => checkBox.checked = selectAll.checked);
//     }
//     else if(event.target.classList.contains("item")){
//         // Check all the individual elements are checked
//         const allChecked = Array.from(checkBoxes).every(element => element.checked);
//         console.log(allChecked);
//         selectAll.checked = allChecked;
        
//     }


// })


// METHOD--3

selectAll.addEventListener("click",()=>{
    checkBoxes.forEach(element=> element.checked = selectAll.checked);
});


// For individual checkboxes

checkBoxes.forEach(checkBox=>{
    checkBox.addEventListener("click",()=>{
        if(Array.from(checkBoxes).every(element=> element.checked)){
            selectAll.checked =true;
        }else{
            selectAll.checked = false;
        }
    })
});
