const rideObj = [];

function enter(name) {
    rideObj.push(name);
    console.log(`${name} 입장, 현재 대기줄:`, rideObj.length);
}

function ride() {
    if(rideObj.length === 0) {
        console.log("대기 중인 사람이 없습니다.");
        return;
    }
    const person = rideObj.shift();
    console.log(`${person} 탑승`);
}


enter("민서");
enter("지수");
enter("가을");
enter("민주");

ride();
ride();