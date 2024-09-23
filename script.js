    // Noakhali Donate Function
    document.getElementById('noakhali-donate-btn').addEventListener('click', function(){    

    const noakhaliInputAmount = document.getElementById('noakhali-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('noakhali-donate').innerText

    if(!isNaN(noakhaliInputAmount) && typeof noakhaliInputAmount !== 'number'){         

        const newBalance = updateNoakhaliBalance(balance, noakhaliInputAmount)

        document.getElementById('my-balance').innerText = newBalance 

        clearInputField('noakhali-donate-input')

        document.getElementById('noakhali-donate').innerText = noakhaliInputAmount  

        const noakhaliUpdatedDonationAmount = parseInt(currentDonation) + parseInt(noakhaliInputAmount);
        document.getElementById('noakhali-donate').innerText = noakhaliUpdatedDonationAmount;
         
    }
    else{  
        alert('Invalid Amount enter a Valid Amount')
    } 

})

    // Feni Donate Function

    document.getElementById('feni-donate-btn').addEventListener('click', function(){    

    const feniInputAmount = document.getElementById('feni-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('feni-donate').innerText

    if(!isNaN(feniInputAmount) && typeof feniInputAmount !== 'number'){         

        const newBalance = updateBalance(balance, feniInputAmount)

        document.getElementById('my-balance').innerText = newBalance 

        clearInputField('feni-donate-input')

        document.getElementById('feni-donate').innerText = feniInputAmount  

        const feniUpdatedDonationAmount = parseInt(currentDonation) + parseInt(feniInputAmount);
        document.getElementById('feni-donate').innerText = feniUpdatedDonationAmount;
         
    }
    else{  
        alert('Invalid Amount enter a Valid Amount')
    } 

})  

// Protest Donation Function

// Feni Donate Function

document.getElementById('protest-donate-btn').addEventListener('click', function(){    

    const protestInputAmount = document.getElementById('protest-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('protest-donate').innerText

    if(!isNaN(protestInputAmount) && typeof protestInputAmount !== 'number'){         

        const newBalance = updateProtestBalance(balance, protestInputAmount)

        document.getElementById('my-balance').innerText = newBalance 

        clearInputField('protest-donate-input')

        document.getElementById('feni-donate').innerText = protestInputAmount  

        const protestUpdatedDonationAmount = parseInt(currentDonation) + parseInt(protestInputAmount);
        document.getElementById('protest-donate').innerText = protestUpdatedDonationAmount;
         
    }
    else{  
        alert('Invalid Amount enter a Valid Amount')
    } 

})  