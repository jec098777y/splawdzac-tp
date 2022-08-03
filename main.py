OLED.init(128, 64)
radio.set_group(2)
kolory = robotbit.rgb()
radio.set_transmit_power(7)
def on_received_string(receivedString):
    temp = parse_float(receivedString)
    if temp < 32 or temp > 36:
        kolory.show_color(7)
    OLED.write_string_new_line(receivedString)
    pass
radio.on_received_string(on_received_string)
