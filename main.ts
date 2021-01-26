input.onButtonPressed(Button.A, function () {
    if (Throttle < 40) {
        Throttle += -5
    } else {
        Throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Arm) {
        Arm = 0
    } else {
        Arm = 1
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    if (Throttle < 40) {
        Throttle += 5
    } else {
        Throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    Throttle = 30
    Arm = 0
})
let Roll = 0
let Pitch = 0
let Arm = 0
let Throttle = 0
let radiogroup = 1
basic.showNumber(radiogroup)
radio.setGroup(radiogroup)
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (Arm) {
        led.plot(0, 0)
    }
    led.plot(0, 4 - Throttle / -25)
    led.plot((45 + Roll) / 22.5, (45 + Pitch) / 22.5)
    radio.sendValue("P", Pitch)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
})
