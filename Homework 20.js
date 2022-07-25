let price_malibu = 30000
let price_gentra = 16000
let car_1 = 'malibu'
let car_2 = 'gentra'
let hatch_pers = 15
let transparetcy_pres = 5
let color_pers = 2


let car = prompt('Which car do you want?')
if(car === car_1) {
    alert('Your engine is 2.0')
    let hatch = prompt('Do you want to have a hatch?')
    if(hatch === 'yes') {
        let price_malibu1 = price_malibu + price_malibu*hatch_pers/100
        let transparetcy = prompt('Do you want to have transparetcy?')
        if(transparetcy === 'yes') {
            let price_malibu2 = price_malibu1 + price_malibu*transparetcy_pres/100
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_malibu3 = price_malibu2 + price_malibu*color_pers/100
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
            if(color === 'black') {
                let price_malibu3 = price_malibu2
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
        }
        else if(transparetcy === 'no') {
            let price_malibu2 = price_malibu1
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_malibu3 = price_malibu2 + price_malibu*color_pers/100
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
            if(color === 'black') {
                let price_malibu3 = price_malibu2
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
        }
    }
    else if(hatch === 'no') {
        let price_malibu1 = price_malibu
        let transparetcy = prompt('Do you want to have transparetcy?')
        if(transparetcy === 'yes') {
            let price_malibu2 = price_malibu1 + price_malibu*transparetcy_pres/100
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_malibu3 = price_malibu2 + price_malibu*color_pers/100
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
            else if(color === 'black') {
                let price_malibu3 = price_malibu2
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
        }
        else if(transparetcy === 'no') {
            let price_malibu2 = price_malibu1
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_malibu3 = price_malibu2 + price_malibu*color_pers/100
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
            if(color === 'black') {
                let price_malibu3 = price_malibu2
                final_price = 'The price is ' + price_malibu3
                alert(final_price)
            }
        }
    }
}

else if(car === car_2) {
    alert('Your engine is 1.5')
    let hatch = prompt('Do you want to have a hatch?')
    if(hatch === 'yes') {
        let price_gentra1 = price_gentra + price_gentra*hatch_pers/100
        let transparetcy = prompt('Do you want to have transparetcy?')
        if(transparetcy === 'yes') {
            let price_gentra2 = price_gentra1 + price_gentra*transparetcy_pres/100
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_gentra3 = price_gentra2 + price_gentra*color_pers/100
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
            if(color === 'black') {
                let price_gentra3 = price_gentra2
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
        }
        else if(transparetcy === 'no') {
            let price_gentra2 = price_gentra1
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_gentra3 = pprice_gentra2 + price_gentra*color_pers/100
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
            if(color === 'black') {
                let price_gentra3 = price_gentra2
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
        }
    }
    else if(hatch === 'no') {
        let price_gentra1 = price_gentra
        let transparetcy = prompt('Do you want to have transparetcy?')
        if(transparetcy === 'yes') {
            let price_gentra2 = price_gentra1 + price_gentra*transparetcy_pres/100
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_gentra3 = price_gentra2 + price_gentra*color_pers/100
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
            else if(color === 'black') {
                let price_gentra3 = price_gentra2
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
        }
        else if(transparetcy === 'no') {
            let price_gentra2 = price_gentra1
            let color = prompt('Which color do you want?')
            if(color === 'white') {
                let price_gentra3 = price_gentra2 + price_gentra*color_pers/100
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
            if(color === 'black') {
                let price_gentra3 = price_gentra2
                final_price = 'The price is ' + price_gentra3
                alert(final_price)
            }
        }
    }
}

else {
    alert('We do not sell such a car')
}