import Swal from 'sweetalert2';

export const saveWishDataToLocalStorage =(card)=>{
    const saveWishData = JSON.parse(localStorage.getItem('cards')) || [];
        const hasWishData = saveWishData.find((item) => item.id == card.id);
        if (hasWishData) {
            Swal.fire({
                title: "Already Exist",
                icon: "warning"
              });
            
        }
    
       
        else {
            saveWishData.push(card)
             const localWishValue = JSON.stringify(saveWishData);
             
            localStorage.setItem('wish', localWishValue);
            Swal.fire({
                title: "Added Successfully",
                icon: "success"
              });

        
        }
       
        
} 





export const saveReadDataToLocalStorage =(card )=>{
    const saveReadData = JSON.parse(localStorage.getItem('cards')) || [];
   
    
        const hasReadData = saveReadData.find((item) => item.id == card.id);
        if (hasReadData) {
            Swal.fire({
                title: "Already Exist",
                icon: "warning"
              });
            
        }
        else if(saveReadData.includes('card')){
            localStorage.removeItem('cards')

        }
        else{
            saveReadData.push(card)
           
             const localReadValue = JSON.stringify(saveReadData);
            localStorage.setItem('cards', localReadValue);
            Swal.fire({
                title: "Added Successfully",
                icon: "success"
              });
            
        }
} 


