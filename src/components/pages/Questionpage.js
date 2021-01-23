import React,{useState} from 'react'
import './Questionpage.css'
import './Questionpage.css';
import Score from '../layout/Score'
const Question = ( )=>{
   const questions = [
    {     
        id:123,
        questionText: 'Everything in React is a _',
        answerOptions: [
            { answerText: 'class', isCorrect: false },
            { answerText: 'object', isCorrect: false },
            { answerText: 'component', isCorrect: true },
            { answerText: 'state', isCorrect: false },
        ],
    },
    {   
        id:241,
        questionText: 'In React what is used to pass data to a component from outside?',
        answerOptions: [
            { answerText: 'setState', isCorrect: false},                                 
            { answerText: ' render with arguments',  isCorrect: false },
            { answerText: 'props',isCorrect: true },
            { answerText: 'PropTypes',isCorrect: false },
        ],
    },
    {
        id:341,
        questionText: 'How many elements does a react component return? ',
        answerOptions: [
            { answerText: '1 Element',         isCorrect: false },       
            { answerText: '2 Elements',        isCorrect: false },
            { answerText: 'Multiple Elements', isCorrect: true },
            { answerText: 'None of These',     isCorrect: false },
        ],
    },
    {  
        id:561,
        questionText: 'What is Babel?',
        answerOptions: [
            { answerText: 'transpiler', isCorrect: false },                         
            { answerText: 'An interpreter', isCorrect: false },
            { answerText: 'Compiler', isCorrect: false },
            { answerText: 'Both Compiler and Transpilar', isCorrect: true },
        ],
    },
    {     
        id:781,
        questionText:  'What is ReactJS?',
        answerOptions: [
            { answerText: 'Server side Framework', isCorrect: false },
            { answerText: ' User-interface framework', isCorrect: false },                                      
            { answerText: 'Library for building interaction interfaces', isCorrect: true },
            { answerText: 'None of These', isCorrect: true },
        ],
    },
];
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showscore, setShowscore] = useState(false);

const handleAnswerOption=(iscorrect)=>{
     if(iscorrect){
         setScore(score+1)
     }
         const nextQuestion = currentQuestion+1;
         if(nextQuestion<questions.length)
         setCurrentQuestion(nextQuestion)
     
         else{
             setShowscore(true)
    
        }        
    
    }
   

      if(showscore){
          return  <Score score={score}></Score>
      }
   return (
           <div className="section-question">
                  <div className="question-box">
                       <div className="question-count">
                            <h1>Question {currentQuestion}</h1>
                           
                       </div>    
                       <div className = "question-text">
                       {/*quiz.loading && quiz.questions.length === 0?(<p>No questions here </p>):(<p>{quiz.questions[0].question}</p>) */}
                           {questions[currentQuestion].questionText}
                       </div>
                    </div>    
                        <div className = "answer-box">
                         {questions[currentQuestion].answerOptions.map(answeroption=>{
                            return (
                                <button className="answer-button btn-lg" key={answeroption.id} onClick={() => handleAnswerOption(answeroption.isCorrect)}>{answeroption.answerText}</button>
                              )
                            })}
                       </div>
                       
                      </div>
               );
            }
        
 export default Question