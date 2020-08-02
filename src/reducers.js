import { combineReducers } from 'redux'

const quiz = (
  state = {
    animals: [
      {
        questionNumber: 1,
        question: 'The heart of a shrimp is located at his:',
        answers: ['Chest', 'Legs', 'Head', 'Stomach'],
        rightAnswer: 'Head',
        hint: 'No hint available for this question',
      },
      {
        questionNumber: 2,
        question: 'A snail can sleep for?',
        answers: ['3 days', '3 weeks', '3 months', '3 years'],
        rightAnswer: '3 years',
        hint: 'Still not longer than Rotem :)',
      },
      {
        questionNumber: 3,
        question:
          'The fingerprints of what animal are almost identical to humans?',
        answers: ['Koala', 'Monkey', 'kangaroo', 'Lizard'],
        rightAnswer: 'Koala',
        hint:
          'Their fingerprints are so indistinguishable from humans that they have been confused at crime scenes',
      },
      {
        questionNumber: 4,
        question: 'How many noses do Slugs have?',
        answers: ['One', 'Two', 'Three', 'Four'],
        rightAnswer: 'Four',
        hint: 'No hint available for this question',
      },
      {
        questionNumber: 5,
        question:
          "Which one of these animals is the only animal that can't jump?",
        answers: ['Ostrich', 'Elephant', 'Rhino', 'Hippopotamus'],
        rightAnswer: 'Elephant',
        hint: 'Jumping is literally defying gravity!',
      },
      {
        questionNumber: 6,
        question: "A rhino's horn is made out of:",
        answers: ['Hair', 'Bacteria', 'Sand', 'Muscle Tissue'],
        rightAnswer: 'Hair',
        hint: 'Giving a hint would not be FAIR',
      },
      {
        questionNumber: 7,
        question: 'How much time does it take a sloth to digest its food?',
        answers: ['2 Minutes', '2 Hours', '2 Days', '2 Weeks'],
        rightAnswer: '2 Weeks',
        hint: 'Sloths are very slow...',
      },
      {
        questionNumber: 8,
        question: "Which animal doesn't have vocal cords?",
        answers: ['Zebra', 'Giraffe', 'Beetle', 'Mantis'],
        rightAnswer: 'Giraffe',
        hint: 'No hint available for this question',
      },
    ],
    drinks: [
      {
        questionNumber: 1,
        question:
          'During which year was cocaine finally removed as an ingredient in Coca Cola?',
        answers: ['1929', '1898', '1917', '1947'],
        rightAnswer: '1929',
        hint:
          'cocaine used to be a recurring ingredient in Coca Cola, as the drug was then legal and used for medicinal purposes.',
      },
      {
        questionNumber: 2,
        question: 'Which cocktail consists of Tia Maria, Vodka and Coke?',
        answers: ['Mimosa', 'Black Russian', 'Sahti', 'Mead'],
        rightAnswer: 'Black Russian',
        hint: 'Think VODKA',
      },
      {
        questionNumber: 3,
        question: 'What beer barrel contains 108 gallons?',
        answers: ['Stout', 'Lager', 'Ale', 'butt'],
        rightAnswer: 'butt',
        hint: "It's nasty",
      },
      {
        questionNumber: 4,
        question: 'Bacardi and Carioca rums come from what country?',
        answers: ['Mexico', 'Puerto-Rico', 'Costa-Rica', 'Italy'],
        rightAnswer: 'Costa-Rica',
        hint: 'Rum is not really high class is it?',
      },
      {
        questionNumber: 5,
        question:
          'What does it mean about the taste if a wine is described as ‘brut’?',
        answers: ['Not Sweet', 'Very Dry', 'Too Sweet', 'Not Dry Enough'],
        rightAnswer: 'Very Dry',
        hint: 'Very confusing is it?',
      },
      {
        questionNumber: 6,
        question: 'Grolsch lager comes from what country?',
        answers: ['Holland', 'Germany', 'France', 'England'],
        rightAnswer: 'Holland',
        hint: 'Never say never',
      },
      {
        questionNumber: 7,
        question: 'The drink Kirsch is flavored with what?',
        answers: ['Mango', 'Peach', 'Tomato', 'Cherries'],
        rightAnswer: 'Cherries',
        hint: 'Really? a tomato in a drink? you can do better than that',
      },
      {
        questionNumber: 8,
        question:
          'Which drink did Bach enjoy so much he wrote a cantata for it?',
        answers: ['Beer', 'Coffee', 'Tea', 'Sprite'],
        rightAnswer: 'Coffee',
        hint: "It's addicting",
      },
    ],
    food: [
      {
        questionNumber: 1,
        question: 'What is the name of the hottest pepper in the world?',
        answers: ['Jalapeno', 'Poblano', 'Carolina Reaper', 'Guajillo Chili'],
        rightAnswer: 'Carolina Reaper',
        hint:
          'It was declared the hottest pepper by Guinness World Records in 2013.',
      },
      {
        questionNumber: 2,
        question: 'Kiwifruit are indigenous to which part of the world?',
        answers: ['China', 'Africa', 'Netherlands', 'Australia'],
        rightAnswer: 'China',
        hint: 'Kiwi was first recorded during the 12th Century Song dynasty.',
      },
      {
        questionNumber: 3,
        question: 'Which liquor is made from the blue agave plant?',
        answers: ['Tequila', 'Vodka', 'Whiskey', 'Brandy'],
        rightAnswer: 'Tequila',
        hint:
          'The blue agave plant is important to the economy of Mexico. It has a major role in making this popular distilled beverage because it is the main ingredient.',
      },
      {
        questionNumber: 4,
        question:
          'The snack commonly referred to as "potato chips" were originally called what?',
        answers: [
          'Herbal Chips',
          'Armanian Chips',
          'Fresh Chips',
          'Saratoga Chips',
        ],
        rightAnswer: 'Saratoga Chips',
        hint: 'Potato Chips originated at New York in the late 19th century.',
      },
      {
        questionNumber: 5,
        question: 'What does the Slavic word "vodka" translate to in English?',
        answers: ['Little Water', 'Small Juice', 'Fresh Water', 'Cold Juice'],
        rightAnswer: 'Little Water',
        hint: 'No hint available for this question',
      },
      {
        questionNumber: 6,
        question: 'What are dried plums called?',
        answers: ['Moores', 'Sorbs', 'Prunes', 'Lunes'],
        rightAnswer: 'Prunes',
        hint: 'No hint available for this question',
      },
      {
        questionNumber: 7,
        question: 'What is the only edible food that is said to never spoils?',
        answers: ['Avocado', 'Honey', 'Candy', 'Coconut'],
        rightAnswer: 'Honey',
        hint:
          'Due to its relatively-low levels of moisture and high levels of acidity, bacteria and microorganisms have a hard time making a permanent home out of it',
      },
      {
        questionNumber: 8,
        question:
          'According to legend, vampires are exceptionally vulnerable to which vegetable?',
        answers: ['Onion', 'Apple', 'Peer', 'Garlic'],
        rightAnswer: 'Garlic',
        hint:
          'in Romania people used to actually place it in the mouths of carcasses of suspected vampires.',
      },
    ],
    computers: [
      {
        questionNumber: 1,
        question:
          'How long did it take to create the language known today as "Javascript"?',
        answers: ['10 days', '10 weeks', '10 months', '3 years'],
        rightAnswer: '10 days',
        hint: 'The language was developed by 1 person.',
      },
      {
        questionNumber: 2,
        question:
          'What year was the language known today as "Javascript" created?',
        answers: ['1934', '1955', '1978', '2000'],
        rightAnswer: '1955',
        hint:
          'The language was developed at a company called "NETSCAPE" which has launched the first ever web browser.',
      },
      {
        questionNumber: 3,
        question:
          'What was the first name that was given to the language known today as "Javascript"?',
        answers: ['Mocha', 'ECMAScript', 'LiveScript', 'JScript'],
        rightAnswer: 'Mocha',
        hint:
          'They are all names that were given to the language during its lifetime, but only one of them was the first.',
      },
      {
        questionNumber: 4,
        question: 'How many percentage of the web is built using Javascript?',
        answers: ['50%', '65%', '80%', '95%'],
        rightAnswer: '95%',
        hint: 'Javascript is the standard programming language for the web',
      },
      {
        questionNumber: 5,
        question: 'What language do computers speak in?',
        answers: ['English', 'Only numbers', "Only 1's and 0's", 'Latin'],
        rightAnswer: "Only 1's and 0's",
        hint:
          "The computer's language is limited by the current technology used to build them.",
      },
      {
        questionNumber: 6,
        question: 'When was the first computer built?',
        answers: ['1801', '1833', '1899', '1913'],
        rightAnswer: '1833',
        hint:
          'Charles Babbage, an english mechanic and mathematician, originated the concept of a programmable computer.',
      },
      {
        questionNumber: 7,
        question: 'How many MAIN parts do computers have?',
        answers: ['5', '7', '9', '11'],
        rightAnswer: '5',
        hint:
          'One of the main parts of a computer is the CPU (Central Processing Unit) that is in charge of all of computations and calculations, and can access all of the other parts of the computer, like the RAM (Random Access Memory).',
      },
      {
        questionNumber: 8,
        question: 'How much money does the average Software Engineer make?',
        answers: [
          '72,000$ Per year',
          '83,000$ Per year',
          '97,000$ Per year',
          '110,000$ Per year',
        ],
        rightAnswer: '110,000$ Per year',
        hint:
          'They make a TON of money. and 1 Dollar is roughly equivalent to 3.5 Shekels.',
      },
    ],
  },
  { type, payload }
) => {
  switch (type) {
    default:
      return state
  }
}

const todosReducer = (
  state = {
    todosApp: {
      todos: [],
      savedTodos: [],
      inputValue: '',
    },
  },
  { type, payload }
) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todosApp: {
          todos: [...state.todosApp.todos, payload],
          inputValue: '',
          savedTodos: [...state.todosApp.savedTodos],
        },
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todosApp: {
          todos: [
            ...state.todosApp.todos.filter(todo => {
              return todo.id !== payload
            }),
          ],
          inputValue: state.todosApp.inputValue,
          savedTodos: [...state.todosApp.savedTodos],
        },
      }
    case 'SAVE_TODO':
      return {
        ...state,
        todosApp: {
          todos: [
            ...state.todosApp.todos.map(todo =>
              state.todosApp.todos[payload] === todo
                ? { ...todo, isSaved: true }
                : todo
            ),
          ],
          inputValue: state.todosApp.inputValue,
          savedTodos: [
            ...state.todosApp.savedTodos,
            state.todosApp.todos[payload],
          ],
        },
      }
    case 'DELETE_SAVED_TODO':
      return {
        ...state,
        todosApp: {
          todos: [...state.todosApp.todos],
          inputValue: state.todosApp.inputValue,
          savedTodos: [
            ...state.todosApp.savedTodos.filter(savedTodo => {
              return savedTodo !== state.todosApp.savedTodos[payload]
            }),
          ],
        },
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todosApp: {
          todos: [
            ...state.todosApp.todos.map(todo => {
              if (todo.id === payload) {
                return { ...todo, isCompleted: !todo.isCompleted }
              } else {
                return todo
              }
            }),
          ],
          inputValue: state.todosApp.inputValue,
          savedTodos: [...state.todosApp.savedTodos],
        },
      }
    case 'ADD_TODO_FROM_SAVED':
      return {
        ...state,
        todosApp: {
          todos: [...state.todosApp.todos, state.todosApp.savedTodos[payload]],
          inputValue: state.todosApp.inputValue,
          savedTodos: [...state.todosApp.savedTodos],
        },
      }
    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        todosApp: {
          todos: [...state.todosApp.todos],
          inputValue: payload,
          savedTodos: [...state.todosApp.todos],
        },
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  quiz,
  todosReducer,
})

export default reducer
