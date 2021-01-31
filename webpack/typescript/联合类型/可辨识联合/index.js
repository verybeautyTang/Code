var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
function demo(car) {
    switch (car.vtype) {
        case 'car':
            console.log('i am a car');
            break;
        case 'cycle':
            console.log('i am a cycle');
            break;
        case 'foot':
            console.log('i am a foot');
            break;
    }
}
var data = { vtype: 'car', money: '2222' };
demo(data);
demo({ vtype: 'car', money: '2222' });
