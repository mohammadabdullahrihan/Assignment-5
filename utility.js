
// Utility function to update the balance for Noakhali Fund

const updateNoakhaliBalance = (balance, noakhaliInputAmount) => {
    return parseInt(balance) - parseInt(noakhaliInputAmount);
};

// Utility function to update the balance for Feni Fund

const updateFeniBalance = (balance, feniInputAmount) => {   
    return parseInt(balance) - parseInt(feniInputAmount);
}


// Utility function to update the balance forn Quota protest    

const updateProtestBalance = (balance, protestInputAmount) => { 
    return parseInt(balance - parseInt(protestInputAmount))
}   

// Utility function to clear the input field after donation 

const clearInputField = () => {
    document.getElementById('noakhali-donate-input').value = ''
    document.getElementById('feni-donate-input').value = '' 
    document.getElementById('protest-donate-input').value = ''
};  
