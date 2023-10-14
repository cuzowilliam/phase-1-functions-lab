function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return (someValue - 42);
    }
    else {
        return (42 - someValue);
    }  
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);

    return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return ((start - destination) * 264);
    }
    else {
        return ((destination - start) * 264);
    }
  }

  function calculatesFarePrice(start, destination) {
    let distanceFeet = distanceTravelledInFeet(start, destination);

    if (distanceFeet <= 400) {
        return 0;
    }
    else if ((distanceFeet > 400) && (distanceFeet < 2000)) {
        return ((distanceFeet - 400) * .02);
    }
    else if ((distanceFeet > 2000) && (distanceFeet < 2500)) {
        return 25;
    }
    else if (distanceFeet > 2500) {
        return 'cannot travel that far';
    }
    }