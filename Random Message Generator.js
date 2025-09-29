function randomMessageGenerator() {
    const openings = ["Today you will", "Soon you might"], events = ["find something lost", "meet someone unexpected"], endings = ["so stay alert!", "and take it as a sign"];
    let randomBit1 = Math.floor(Math.random() * 2);
    let randomBit2 = Math.floor(Math.random() * 2);
    let randomBit3 = Math.floor(Math.random() * 2);
    return openings[randomBit1]+" "+events[randomBit2]+" "+endings[randomBit3];
}
console.log(randomMessageGenerator());
