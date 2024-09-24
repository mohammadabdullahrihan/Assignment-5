    // Noakhali Donate Function
    document.getElementById('noakhali-donate-btn').addEventListener('click', function(){    

    const noakhaliInputAmount = document.getElementById('noakhali-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('noakhali-donate').innerText

    // condition added

    if(isNaN(noakhaliInputAmount) || noakhaliInputAmount <= 0){         
        alert('Invalid Amount. Please enter a valid amount.');
    }

    else if(noakhaliInputAmount > balance){  
        alert('Insufficient balance. Please enter a smaller amount.')
    }

    else{  
        const newBalance = updateNoakhaliBalance(balance, noakhaliInputAmount)

        document.getElementById('my-balance').innerText = newBalance 

        clearInputField('noakhali-donate-input')

        document.getElementById('noakhali-donate').innerText = noakhaliInputAmount  

        const noakhaliUpdatedDonationAmount = parseInt(currentDonation) + parseInt(noakhaliInputAmount);
        document.getElementById('noakhali-donate').innerText = noakhaliUpdatedDonationAmount;
    } 

})

    // Feni Donate Function

    document.getElementById('feni-donate-btn').addEventListener('click', function(){    

    const feniInputAmount = document.getElementById('feni-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('feni-donate').innerText    
        
    // Condations added

    if (isNaN(feniInputAmount) || feniInputAmount <= 0) {
        alert('Invalid Amount. Please enter a valid amount.');
    }   

    else if (feniInputAmount > balance) {
        alert('Insufficient balance. Please enter a smaller amount.');
    }   

    else{  


        const newBalance = updateFeniBalance(balance, feniInputAmount)

        document.getElementById('my-balance').innerText = newBalance 

        clearInputField('feni-donate-input')

        document.getElementById('feni-donate').innerText = feniInputAmount  

        const feniUpdatedDonationAmount = parseInt(currentDonation) + parseInt(feniInputAmount);
        document.getElementById('feni-donate').innerText = feniUpdatedDonationAmount;
         
    } 

})  

// Protest Donation Function


document.getElementById('protest-donate-btn').addEventListener('click', function(){    

    const protestInputAmount = document.getElementById('protest-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('protest-donate').innerText


    // conditions

    if (isNaN(protestInputAmount) || protestInputAmount <= 0) {
        alert('Invalid Amount. Please enter a valid amount.');
    }       

    else if (protestInputAmount > balance) {
        alert('Insufficient balance. Please enter a smaller amount.');
    }


    else{  

        const newBalance = updateProtestBalance(balance, protestInputAmount)

        document.getElementById('my-balance').innerText = newBalance 

        clearInputField('protest-donate-input')

        document.getElementById('feni-donate').innerText = protestInputAmount  

        const protestUpdatedDonationAmount = parseInt(currentDonation) + parseInt(protestInputAmount);
        document.getElementById('protest-donate').innerText = protestUpdatedDonationAmount;
    } 

})  