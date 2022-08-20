import React, {Component} from 'react';
import LoadingScreen from './src/screens/loading/LoadingScreen';
import RootNavigator from './src/routes/RootNavigator';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({isLoading: false});
    }
  }
  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />;
    }
    return <RootNavigator />;
  }
}

export default App;
