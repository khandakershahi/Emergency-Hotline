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
function callService(btnId, nameId, numberID) {
    const serviceName = document.getElementById(nameId).innerText;
    const serviceNumber = document.getElementById(numberID).innerText;

    document.getElementById(btnId).addEventListener('click', function () {
        let coinCountNumber = parseInt(document.getElementById('coin-count').innerText);
        if (coinCountNumber >=  20) {

            coinCountNumber = coinCountNumber - 20;
            document.getElementById('coin-count').innerText = coinCountNumber;
            alert(`📞 calling ${serviceName} ${serviceNumber}...`);

            const d = new Date();
            let time = d.toLocaleTimeString();
            const historyData = document.getElementById('history-body-wrapper');
            const newCallData = `
         <div class="history-body bg-[#FAFAFA] flex justify-between gap-4 items-center p-4 rounded-[8px] mb-2">
                <div class="left">
                    <h3 class="history-card-title">${serviceName}</h3>
                    <p class="card-category">${serviceNumber}</p>
                </div>
                <div class="right">
                  <p class="card-category">${time}</p>
                </div>
            </div>
         `;
            historyData.innerHTML += newCallData;

        } else {
            alert(`❌ You don't have enough coin, minimum 20 coin needed to call`);
        }
    })

}

callService('call-national','service-name-national','service-number-national');
callService('call-police', 'service-name-police','service-number-police')
callService('call-fire', 'service-name-fire','service-number-fire')
callService('call-ambulance', 'service-name-ambulance','service-number-ambulance')
callService('call-women', 'service-name-women','service-number-women')
callService('call-corruption', 'service-name-corruption','service-number-corruption')

// history clear button
function historyClear() {
    document.getElementById('clear').addEventListener('click', function (event) {
        const historyData = document.getElementById('history-body-wrapper');
        historyData.remove(historyData.childNodes);
    })

}

historyClear();

// copy function
function copyNumber(btnId, serviceNumberId) {
    let copyNumber = document.getElementById(serviceNumberId);


    document.getElementById(btnId).addEventListener('click', function () {

        navigator.clipboard.writeText(copyNumber.innerText);

        alert("Number copied: " + copyNumber.innerText);
        const copyCounter =document.getElementById('copy-counter');
        let copyCountNumber = parseInt(copyCounter.innerText);
       copyCountNumber+= 1;
       copyCounter.innerText = copyCountNumber;
       
    })

}
copyNumber('copy-number-national','service-number-national')
copyNumber('copy-number-police','service-number-police')
copyNumber('copy-number-fire','service-number-fire')
copyNumber('copy-number-ambulance','service-number-ambulance')
copyNumber('copy-number-women','service-number-women')
copyNumber('copy-number-corruption','service-number-corruption')





