function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            currentNumber++
            callback(currentNumber)
        }
    }
}
function writeMessenger(){
memory1.push(document.getElementById("writeMessenger").value);

    console.log(memory1)
}
function saveMe(){
    memory2.push(document.getElementById("writeMessenger").value)
    alert("tin nhắn đã được lưu");
    console.log(memory2)}

