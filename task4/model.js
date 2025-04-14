const model = {
    bunny: {
        name: 'Markus',
        position: { x: randomNumber(0, 8), y: randomNumber(0, 8) },
        eggsFound: 0,
    },
    jumpSpace: Array(9).fill().map(() => Array(9).fill().map(() => ({ bunny: false, egg: false })))
}