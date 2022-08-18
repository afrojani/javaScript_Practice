function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'Invalid Input'
    }
    else {
        const dieselPirce = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
        let totalDieselCost = dieselPirce * dieselQuantity;
        let totalPterolCost = petrolPrice * petrolQuantity;
        let totalOctaneCost = octanePrice * octaneQuantity;
        let totalCost = totalDieselCost + totalPterolCost + totalOctaneCost;
        return totalCost

    }

}
console.log(oilPrice(0, 2, 3))