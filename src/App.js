import "./App.css";
import { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions ";
import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positivePercentage = (this.state.good / total) * 100;
    return Math.round(positivePercentage);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
