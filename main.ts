let yy = 0
let ii = 0
let xx = 0
let jj = 0
basic.forever(function () {
    yy = 4
    ii = 1
    while (ii <= 4) {
        xx = 4
        jj = yy
        while (jj <= 4) {
            led.plot(xx, jj)
            xx += -1
            jj += 1
        }
        ii += 1
        yy += -1
        basic.pause(200)
    }
    xx = 4
    yy = 4
    ii = 0
    while (ii <= 4) {
        jj = 0
        while (jj <= yy) {
            led.plot(xx - jj, jj)
            jj += 1
        }
        ii += 1
        xx += -1
        yy += -1
        basic.pause(200)
    }
})
