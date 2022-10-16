let a = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    a = input.acceleration(Dimension.Strength)
    if (a < 5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
    }
})
