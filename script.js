// Questions

const questions = [
    {
        question: "What is the highest mountain in the world?",
        option: [
            'K2',
            'Mount Everest',
            'Kanchenjunga',
            'Lhotse'
        ],
        answer: 1
    },

    {

        question: "What is the term for a professional guide who leads trekkers through difficult terrains and landscapes?",
        option: [
            'Ranger',
            'Navigator',
            'Sherpa',
            'Pathfinder'
        ],
        answer: 3

    },

    {

        question: 'Which type of footwear is commonly recommended for trekking over rugged terrain',
        option: [
            'Hiking boots',
            'Climbing shoes',
            'Trail running shoes',
            'Moccasins'
        ],
        answer: 0

    },

    {

        question: 'What is the term for a shelter built to provide temporary protection from the weather during a trek?',
        option: [
            'Cabin',
            'Lodge',
            'Tent',
            'Bivouac'
        ],
        answer: 4

    },

    {

        question: 'What is the term for the process of getting used to high altitudes before undertaking a trek?',
        option: [
            'Altitude Training',
            'Base camp preparation',
            'Acclimatization',
            'Climbing condition',
        ],
        answer: 3

    }

]

// Selecting elements

const quizQuestions = document.querySelector("#questions");
const userInput = document.querySelectorAll(".answer");
const [option_1, option_2, option_3, option_4] = document.querySelectorAll("#option_1", "#option_2", "#option_3", "#option_4");
const button = document.querySelector("#btn")
const currentQuestion = 0;
let score = 0;


const loadQuiz = () => {

    const { question, option } = questions[currentQuestion];
    quizQuestions.innerText = question;

    option.forEach((value, index) => {
        const element = document.getElementById(`option_${index + 1}`);
        if (element) {
            element.innerText = value;
        }
    })
}

loadQuiz();