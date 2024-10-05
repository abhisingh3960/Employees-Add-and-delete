window.onload = function() {
    let EmpName = document.getElementById('e_name');
    let EmpProfession = document.getElementById('e_profession');
    let EmpAge = document.getElementById('e_age');
    let AddBtn = document.getElementById('add_btn');
    let error_msg = document.getElementById('error_msg');
    let h6 = document.getElementById('h6');
    let Imputemp = document.getElementById('AddEmp');

    AddBtn.addEventListener('click', (e) => {
        e.preventDefault();
        error_msg.innerHTML = "";

        // Check if fields are empty
        if (EmpName.value.trim() === "" || EmpAge.value.trim() === "" || EmpProfession.value.trim() === "") {
            let errorDiv = document.createElement('div');
            errorDiv.classList.add('error_msg');
            errorDiv.innerText = "Error: Please make sure all fields are filled before adding an employee!";
            
            error_msg.appendChild(errorDiv);
        }
        
        else {
            h6.style.display = "none";

            // Get employee details
            let name = EmpName.value;
            let profession = EmpProfession.value;
            let age = EmpAge.value;

            // Create a new div for the employee
            let AddEmpDiv = document.createElement('div');
            AddEmpDiv.classList.add('employee');
            AddEmpDiv.innerText = `${name} - ${profession} - ${age} `;

            // Create a delete button
            let delbtn = document.createElement('button');
            delbtn.classList.add('delete_btn');
            delbtn.innerText = "Delete";

            // Append the  button 
            AddEmpDiv.appendChild(delbtn);
            Imputemp.appendChild(AddEmpDiv);

            // Add event listener to delete button to remove employee entry
            delbtn.addEventListener('click', () => {
                Imputemp.removeChild(AddEmpDiv);
                h6.style.display = "block";
            });

            // Optionally clear the form inputs
            EmpName.value = "";
            EmpProfession.value = "";
            EmpAge.value = "";
        }
    });
};
