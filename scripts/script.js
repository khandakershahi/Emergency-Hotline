// heart count function;
function heart() {
    const hearts = document.querySelectorAll('.heart-click');
    const countHeart = document.getElementById('heart-count');
    let count = parseInt(countHeart.innerText);

    for (const heart of hearts) {
        heart.addEventListener('click', function () {
            count += 1;
            countHeart.innerText = count;
        });
    }
}

heart();


// call function
function callService(id) {
    const serviceName = document.getElementById('service-name-national').innerText;
    const serviceNumber = document.getElementById('service-number-national').innerText;

    document.getElementById(id).addEventListener('click', function () {
        alert(`calling ${serviceName} ${serviceNumber}...`)
    })

}

callService('call-national');

// copy function
function copyNumberNational() {
    let copyNumber = document.getElementById('service-number-national');
     navigator.clipboard.writeText(copyNumber.innerText);

    document.getElementById('copy-number-national').addEventListener('click', function () {
        
        alert("Number copied: " + copyNumber.innerText);
    })

}
copyNumberNational()




