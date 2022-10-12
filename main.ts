let count = 0
input.onButtonPressed(Button.A, function () {
    count = 9
    while (count >= 0) {
        basic.showNumber(count)
        count += -1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        # . . . #
        . . # . .
        # . . . #
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    count = 0
})
