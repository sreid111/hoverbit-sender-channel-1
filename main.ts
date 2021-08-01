input.onButtonPressed(Button.A, function () {
    Throttle += -10
})
input.onButtonPressed(Button.AB, function () {
    if (Arm == 0) {
        Arm = 1
    } else {
        Arm = 0
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    Throttle += 10
})
input.onGesture(Gesture.Shake, function () {
    Throttle = 0
    Arm = 0
})
let Roll = 0
let Arm = 0
let Throttle = 0
let RadioGruppe = 1
basic.showNumber(RadioGruppe)
radio.setGroup(RadioGruppe)
basic.forever(function () {
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (Arm) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(Throttle, 0, 100, 4, 0))
    led.plot(Math.map(Roll, -45, 45, 0, 4), 2)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
})
