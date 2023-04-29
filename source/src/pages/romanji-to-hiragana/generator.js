import Maths from '../../utils/Maths'
import { characters } from './characters-database'

const randomCharacter = () => {
    return characters[Maths.randomNumberBetween(0, characters.length - 1)];
}

const generateAnswers = (correctAnswer) => {
    return [
        correctAnswer,
        randomCharacter(),
        randomCharacter(),
        randomCharacter()
    ].sort(() => .5 - Math.random());
}

export default { randomCharacter, generateAnswers }