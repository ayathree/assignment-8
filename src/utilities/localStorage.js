import Swal from 'sweetalert2';

export const saveWishDataToLocalStorage = (card) => {
    const saveWishData = JSON.parse(localStorage.getItem('wishs')) || [];
    const saveReadData = JSON.parse(localStorage.getItem('reads')) || [];

    const hasReadData = saveReadData.find(item => item.id === card.id);
    if (hasReadData) {
        Swal.fire({
            title: " Already Marked as Read",
            icon: "warning"
        });
    } else {
        const hasWishData = saveWishData.find(item => item.id === card.id);
        if (hasWishData) {
            Swal.fire({
                title: "Already Exist",
                icon: "warning"
            });
        } else {
            saveWishData.push(card);
            const localWishValue = JSON.stringify(saveWishData);
            localStorage.setItem('wishs', localWishValue);
            Swal.fire({
                title: "Added Successfully",
                icon: "success"
            });
        }
    }
}

export const saveReadDataToLocalStorage = (card) => {
    const saveReadData = JSON.parse(localStorage.getItem('reads')) || [];
    const hasReadData = saveReadData.find(item => item.id === card.id);
    if (hasReadData) {
        Swal.fire({
            title: "Already Exist",
            icon: "warning"
        });
    } else {
        saveReadData.push(card);
        const localReadValue = JSON.stringify(saveReadData);
        localStorage.setItem('reads', localReadValue);
        Swal.fire({
            title: "Added Successfully",
            icon: "success"
        });
    }
}
