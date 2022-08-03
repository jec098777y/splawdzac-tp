OLED.init(128, 64)
radio.setGroup(2)
let kolory = robotbit.rgb()
radio.setTransmitPower(7)
radio.onReceivedString(function on_received_string(receivedString: string) {
    let temp = parseFloat(receivedString)
    if (temp < 32 || temp > 36) {
        kolory.showColor(7)
    }
    
    OLED.writeStringNewLine(receivedString)
    
})
