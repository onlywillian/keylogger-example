var map = {}

var logger = []

document.onkeydown = document.onkeyup = e => {
    map[e.key] = e.type == 'keydown';

    if (e.type == 'keydown') {
        if (logger.length >= 10) {
            logger.shift();
        }
        logger.push(e.key);
        console.log(logger);
    }
}