    // function for redirect to the blog page
    document.getElementById('home').addEventListener('click', function(){   
        window.location.href = "blog.html";
    })  

    // Noakhali Donate Function
    document.getElementById('noakhali-donate-btn').addEventListener('click', function(){    

    const noakhaliInputAmount = document.getElementById('noakhali-donate-input').value

    const balance = document.getElementById('my-balance').innerText 

    const currentDonation = document.getElementById('noakhali-donate').innerText    

    const model = document.getElementById('my-dialog')
        
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

        // Transection History added
        const historyDiv = document.createElement('div')
        historyDiv.classList.add(
                "bg-white", 
                "py-7", 
                "rounded-xl",   
                "shadow",
                "border",
                "m-16",
                "space-y-5"
            )
        historyDiv.innerHTML = `
              <p class="text-xl font-bold pl-7">
              ${noakhaliInputAmount} Taka is Donate for Flood of Noakhali,Bangladesh</p>

              <p class="text-lg font-light text-gray-500 pl-7"> ${new Date().toString()}
        `
        
        document.getElementById('history-section').appendChild(historyDiv)

        // Model function 

        document.getElementById('model-div').classList.remove('hidden')

        document.getElementById('close-btn').addEventListener('click', function(){  
            document.getElementById('model-div').classList.add('hidden')
        })
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

        // Transection History added
        const historyDiv = document.createElement('div')
        historyDiv.classList.add(
                "bg-white", 
                "py-7", 
                "rounded-xl",   
                "shadow",
                "border",
                "m-16",
                "space-y-5"
            )
        historyDiv.innerHTML = `
              <p class="text-xl font-bold pl-7">
              ${feniInputAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</p>

              <p class="text-lg font-light text-gray-500 pl-7"> ${new Date().toString()}
        `
    
        document.getElementById('history-section').appendChild(historyDiv)  
            
        // Model function

        document.getElementById('model-div2').classList.remove('hidden')

        document.getElementById('close-btn2').addEventListener('click', function(){  
            document.getElementById('model-div2').classList.add('hidden')
        })
         
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

        // Transection History added
        const historyDiv = document.createElement('div')
        historyDiv.classList.add(
                "bg-white", 
                "py-7", 
                "rounded-xl",   
                "shadow",
                "border",
                "m-16",
                "space-y-5"
            )
        historyDiv.innerHTML = `
              <p class="text-xl font-bold pl-7">
              ${protestInputAmount} Taka is Donate for Injured in the Quota Movement</p>

              <p class="text-lg font-light text-gray-500 pl-7"> ${new Date().toString()}
        `
    
        document.getElementById('history-section').appendChild(historyDiv)

        // Model function

        document.getElementById('model-div3').classList.remove('hidden')

        document.getElementById('close-btn3').addEventListener('click', function(){  
            document.getElementById('model-div3').classList.add('hidden')
        })
    } 

})          


// 2 button Variable

const historyTab = document.getElementById('history-btn')   

const donateTab = document.getElementById('donate-btn')     

// Buttons functions


    // History Button
historyTab.addEventListener('click', function() {     
    document.getElementById('donate-card').classList.add( "hidden",)    
    
    document.getElementById('history-section').classList.remove('hidden')

    historyTab.classList.add(
        "text-xl",
        "font-semibold",
        "bg-[#B4F461]"
    
    )   
    historyTab.classList.remove(
        "text-gray-600", 
        "border",
        "border-gray-400",
    )   


    donateTab.classList.remove(
        "bg-[#B4F461]"
    
    )       

    donateTab.classList.add(
        "text-gray-600", 
        "border",
        "border-gray-400",
    )           

    document.getElementById('history-card').classList.remove('hidden')
})


    // Donate Button

donateTab.addEventListener('click', function(){ 
    document.getElementById('donate-card').classList.remove('hidden')       

    document.getElementById('history-section').classList.add('hidden')

    historyTab.classList.remove(
        "bg-[#B4F461]"
    
    )   
    historyTab.classList.add(
        "text-gray-600", 
        "border",
        "border-gray-400",
    )   


    donateTab.classList.add(
        "bg-[#B4F461]"
    
    )       

    donateTab.classList.remove(
        "text-gray-600", 
        "border",
        "border-gray-400",
    )       
    
})

