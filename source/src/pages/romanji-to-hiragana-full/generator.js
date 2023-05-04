import Maths from '../../utils/Maths'
import { characters } from './characters-database'

const randomCharacter = () => {
    return characters[Maths.randomNumberBetween(0, characters.length - 1)];
}

const generateAnswers = (correctAnswer) => {
    const randoms = [];
    for (let rand = randomCharacter(); randoms.length < 3; rand = randomCharacter()) {
        if (rand === correctAnswer) continue;
        if (randoms.includes(rand)) continue;
        randoms.push(rand)
    }

    return [
        correctAnswer,
        ...randoms
    ].sort(() => .5 - Math.random());
}

export default { randomCharacter, generateAnswers }
