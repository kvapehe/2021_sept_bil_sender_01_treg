radio.setGroup(150)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -5) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Roll) < -5) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Roll) > 5) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) > 5) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        radio.sendNumber(5)
        basic.clearScreen()
    }
})
