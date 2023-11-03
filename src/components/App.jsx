import React, { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistic/Statisric";
import Notification from "./Notification/Notification";
import css from './App.module.css'

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    awful: 0,
  }
 
  onLeaveFeedback = option => {
    this.setState((prevState) => {
      return {
        [option]:prevState[option] + 1,
      }
    })
  }

   countTotalFeedback() {
    const { good, neutral, bad, awful } = this.state;
    return good + neutral + bad + awful;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad, awful } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              awful={awful}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback " />
          )}
        </Section>
      </div>
    );
  }
  }



export default App