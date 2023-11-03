import React, { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistic/Statisric';
import Notification from './Notification/Notification';
import css from './App.module.css';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   awful: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [awful, setAwful] = useState(0);

  // const onLeaveFeedback = option => {
  //   this.setState(prevState => {
  //     return {
  //       [option]: prevState[option] + 1,
  //     };
  //   });
  // };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'awful':
        setAwful(prevAwful => prevAwful + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    // const { good, neutral, bad, awful } = this.state;
    return good + neutral + bad + awful;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  // const { good, neutral, bad, awful } = this.state;
  // const options = Object.keys(good, neutral, bad, awful);
  const options = ['good', 'neutral', 'bad', 'awful'];

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            awful={awful}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback " />
        )}
      </Section>
    </div>
  );
};

export default App;
