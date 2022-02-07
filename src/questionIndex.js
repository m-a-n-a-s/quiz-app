import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./style.css";
import GetQuestion from './getquestion';
import QuestionBox from './QuestionBox';
import Result from './ResultBox';


class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0
    };
  }

  // Function to get question from ./question
  getQuestions = () => {
    GetQuestion().then(question => {
      this.setState({ questionBank: question });
    });
  };

  // Set state back to default and call function
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  // Function to compute scores
  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5
        ? this.state.responses + 1
        : 5
    });
  };

  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (<div className="container">
      <div className="title">
        QuizOn
      </div>

      {this.state.questionBank.length > 0 &&
        this.state.responses < 10 &&
        this.state.questionBank.map(({ question, answers,
          correct, questionId }) => <QuestionBox question=
            {question} options={answers} key={questionId}
            selected={answer => this.computeAnswer(answer, correct)} />)}

      {
        this.state.responses === 10
          ? (<Result score={this.state.score}
            playAgain={this.playAgain} />)
          : null
      }

    </div>)
  }
}
// class Quiz extends Component {
//   constructor() {
//     super();
//     this.timerVar = null;
//     this.state = {
//       questionBank: [],
//       score: 0,
//       responses: 0,
//       count: 0,
//       level: "easy",
//       name: "user",
//     };
//   }

//   getQuestions = () => {
//     // fetching question from api
//     let question = GetQuestion();
//     console.log(question);
//     return question;
//   };

//   selectUserName = (name) => {
//     // callback function asking for name
//     this.setState({
//       name: name,
//     });
//   };

//   selectedLevel = (level) => {
//     // callback function for selecting levels
//     this.setState({
//       level: level,
//       questionBank: this.getQuestions(),
//     });
//   };

//   // playAgain = () => {
//   //   // function for playing  again
//   //   this.setState({
//   //     score: 0,
//   //     count: 0,
//   //     level: "",
//   //     responses: 0,
//   //   });
//   // };

//   computeAnswer = (answer, correctAns) => {
//     // function to compute answers
//     if (answer === correctAns) {
//       this.setState({
//         score: this.state.score + 1,
//       });
//     }
//     this.setState({
//       responses: this.state.responses < 10 ? this.state.responses + 1 : 10,
//     });
//   };

//   timer = () => {
//     // timer function: used for count down
//     let temp = this.state.count + 1;
//     if (temp <= 11) {
//       this.setState({
//         count: temp,
//       });
//     }
//   };
//   componentDidMount() {
//     this.getQuestions();
//   }
//   componentDidUpdate() {
//     if (
//       this.state.name !== "" &&
//       this.state.level !== "" &&
//       this.state.count === 0
//     ) {
//       this.timerVar = setInterval(this.timer, 1000);
//     }
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timerVar);
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="title">QuizOn</div>

//         {/* {this.state.name === "" ? (
//           <InputUsername selectUserName={this.selectUserName} />
//         ) : null} */}

//         {
//         this.state.name !== "" &&
//         this.state.level !== "" &&
//         this.state.count <= 10 ? (
//           <div className="levelLable">
//             <b>Name :</b>
//             {this.state.name}
//             &nbsp;&nbsp;&nbsp;
//             {/* <b>Level :</b> */}
//             {/* {this.state.level} */}
//             <div className="timer">{this.state.count}</div>
//             <hr />
//           </div>
//         ) : null}

//         {/* {this.state.name !== "" && this.state.level === "" ? (
//           <LevelSelection selectedLevel={this.selectedLevel} />
//         ) : null} */}

//         {this.state.name !== "" &&
//           this.state.level !== "" &&
//           this.state.count <= 10 &&
//           this.state.questionBank.length > 0 &&
//           this.state.responses < 10 &&
//           this.state.questionBank.map(
//             ({ question, answers, correct, questionId }) => (
//               <QuestionBox
//                 question={question}
//                 options={answers}
//                 key={questionId}
//                 selected={(answer) => this.computeAnswer(answer, correct)}
//               />
//             )
//           )}

//         {(this.state.name !== "" && this.state.responses === 10) ||
//         this.state.count > 10 ? (
//           <Result
//             score={this.state.score}
//             // playAgain={this.playAgain}
//             name={this.state.name}
//           />
//         ) : null}
//       </div>
//     );
//   }
// }
export default Quiz;
// ReactDOM.render(<Quiz/>, document.getElementById("root"));