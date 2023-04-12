import award1 from '../../../static/images/Rank1.svg'
import award2 from '../../../static/images/Rank2.svg'
import award3 from '../../../static/images/Rank3.svg'
import award4 from '../../../static/images/Rank4.svg'
import award5 from '../../../static/images/Rank5.svg'


export function priceFormatWithIcon(amt, currency = 'USD') {
    return amt && `${new Intl.NumberFormat('en-IN', { style: 'currency', currency: currency }).format(amt)}` || '0.00 $'
}

export function priceFormat(amt) {
    return amt && `${amt.toFixed(2)}` || 0.00
}

export function percentRateFormat(amt) {
    if (amt < 0) {
        return amt && `${(Math.abs(amt) * -1).toFixed(2)}%` || '0.00%'
    }
    return amt && `${Math.abs(amt).toFixed(2)}%` || '0.00%'
}

export function getRankMedal(rank) {
    const ranking = {
        1: award1,
        2: award2,
        3: award3,
        4: award4,
        5: award5,
        default: ''
    };
    return ranking?.[rank]?.src || ranking['default'];
}