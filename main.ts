basic.forever(function () {
    // if it's sunny it'll say good morning if not a moon will scroll across the screen
    if (input.lightLevel() > 128) {
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
