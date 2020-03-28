import React from 'react';
import wordGenerator from '../atoms/wordGenerator';

class SpeedTyper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: wordGenerator(3),
      nextwords: [
        wordGenerator(3),
        wordGenerator(3),
        wordGenerator(3),
        wordGenerator(3),
        wordGenerator(3),
        wordGenerator(3),
      ],
      accurateTo: 0,
      oddOrEven: true,
      score: 0,
    }
  }

  componentDidMount() {

    function compareTexts(shorter,longer) {
      let accurateTo = 0;
      for (let i=0; i<shorter.length; i++) {
        if (shorter[i] === longer[i]) {
          accurateTo += 1;
        }
        else { break }
      }
      console.log(accurateTo)
      return accurateTo;
    }

    const updateNextWords = () => {
      this.state.nextwords.push(wordGenerator(3))
      return this.state.nextwords
    }

    const typeCapture = document.getElementsByClassName("type-capture")[0];
  
    typeCapture.addEventListener('input', (obj) => {
      const targetText = this.state.words.join('');
      let typeCaptureState = typeCapture.value
      this.setState({
        accurateTo: compareTexts(typeCaptureState, targetText)
      })

      //Highlight active letter
      const letters = document.getElementsByClassName('active-letter');
      while (letters.length) {
        letters[0].className = 'challenge-letter accurate'
      }
      const active = document.getElementsByClassName('active-row')[0].children[this.state.accurateTo - 1];
      if (active) {
        active.classList.add('active-letter');
      }

      if (compareTexts(typeCaptureState, targetText) === targetText.length) {
        this.setState({
          accurateTo: 0,
          words: this.state.nextwords.shift(),
          nextwords: updateNextWords(),
          score: this.state.score + targetText.length,
        })
        typeCapture.value = '';
        if (this.state.oddOrEven === true) {
          this.setState({
            oddOrEven: false
          })
        } else {
          this.setState({
            oddOrEven: true
          })
        }
      }
    })
  }

  renderWords(arrayOfWords, accurateTo) {
    const combinedWords = arrayOfWords.join('');
    const letterArray = combinedWords.split('').map((val, index) => 
      <span key={index} className={
        `challenge-letter ${accurateTo <= index ? '':'accurate'}`
      }>{val}</span>
    );
    console.log(letterArray)
    return letterArray
  }

  renderNextWords(arrayOfWords) {
    const combinedWords = arrayOfWords.join('');
    const letterArray = combinedWords.split('').map((val, index) => 
      <span key={index} className={`challenge-letter`}>{val}</span>
    );
    return letterArray
  }

  render() {
    return (
      <div className="container">
        <div className="score">{ this.state.score + this.state.accurateTo }</div>
        <div className={`challenge-row active-row ${this.state.oddOrEven ? 'odd':'even'}`}>
          {
            this.renderWords(this.state.words, this.state.accurateTo)
          }
        </div>
        <div className={`challenge-row ${this.state.oddOrEven ? 'even':'odd'}`}>
          { this.renderNextWords(this.state.nextwords[0]) }
        </div>
        <div className={`challenge-row ${this.state.oddOrEven ? 'odd':'even'}`}>
          { this.renderNextWords(this.state.nextwords[1]) }
        </div>
        <div className={`challenge-row ${this.state.oddOrEven ? 'even':'odd'}`}>
          { this.renderNextWords(this.state.nextwords[2]) }
        </div>
        <div className={`challenge-row ${this.state.oddOrEven ? 'odd':'even'}`}>
          { this.renderNextWords(this.state.nextwords[3]) }
        </div>
        <div className={`challenge-row ${this.state.oddOrEven ? 'even':'odd'}`}>
          { this.renderNextWords(this.state.nextwords[4]) }
        </div>
        <input className="type-capture even"></input>
      </div>
    );
  }
}

export default SpeedTyper;