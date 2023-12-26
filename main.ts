radio.onReceivedValue(function (name, value) {
    if (name == "B") {
        Bereit = value
    }
    if (name == "R") {
        Richtung = value
    }
    if (name == "G") {
        Gas = value
    }
})
let Gas = 0
let Richtung = 0
let Bereit = 0
let Kanal = 7
radio.setGroup(Kanal)
basic.showNumber(Kanal)
if (Bereit) {
    while (Bereit) {
        basic.showIcon(IconNames.No)
    }
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Bereit) {
        hoverbit.start_cushion_simple()
        hoverbit.forward_power_simple(Gas)
    } else {
        hoverbit.stop_all_motors()
    }
    hoverbit.direction_simple(Richtung)
})
