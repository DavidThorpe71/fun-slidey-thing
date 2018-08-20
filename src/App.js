import React, { Component } from 'react';
import './App.css';
import { Parallax } from 'react-spring'
import EachPage from './EachPage';

class App extends Component {

  scroll = (to) => {
    this.refs.parallax.scrollTo(to);
  }

  render() {
    return (
      <div className="App">
        <Parallax className="container" ref="parallax" pages={4} horizontal scrolling={false}>
          <EachPage
            offset={0}
            gradient="pink"
            title="First Page"
            caption="Lovely first page mate"
            handleClick={() => this.scroll(1)}
          />
          <EachPage
            offset={1}
            gradient="yellow"
            title="Second Page"
            caption="Nice second page mate"
            handleClick={() => this.scroll(2)}
          />
          <EachPage
            offset={2}
            gradient="green"
            title="Third Page"
            caption="Lovely penultimate page mate"
            handleClick={() => this.scroll(3)}
          />
          <EachPage
            offset={3}
            gradient="blue"
            title="Last Page"
            caption="Great last page mate"
            handleClick={() => this.scroll(0)}
          />
        </Parallax>

      </div>
    );
  }
}

export default App;
