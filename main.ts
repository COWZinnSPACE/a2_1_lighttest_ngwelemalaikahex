let photocell = 0
basic.forever(function () {
    photocell = pins.analogReadPin(AnalogPin.P1)
    // if it's sunny it'll say good morning if not a moon will scroll across the screen
    if (photocell > 900) {
        basic.showString("GOOD MORNING")
    } else {
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . # . .
            # . . . .
            # . # . .
            # # . . .
            `)
        basic.showLeds(`
            . # # . .
            # # . # .
            # # . . .
            # # . # .
            . # # . .
            `)
        basic.showLeds(`
            . . # # .
            . # # . #
            . # # . .
            . # # . #
            . . # # .
            `)
        basic.showLeds(`
            . . . # #
            . . # # .
            . . # # .
            . . # # .
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . . # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
