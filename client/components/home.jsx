import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleCheck, incNumber, decNumber } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './navbar';
import Carousel from './carousel';
import Body from './body';
import Footer from './footer';

export const imageUrls = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
  'http://freevector.co/wp-content/uploads/2014/04/webpack.png',
  'https://raw.github.com/hapijs/hapi/master/images/hapi.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emoji_u26a1.svg/2000px-Emoji_u26a1.svg.png'
];

class Home extends React.Component {
  renderImage(imageUrl, key) {
    return (
        <img key={key} src={imageUrl} width="10%" height="10%"/>
    );
  }

  render() {
    const props = this.props;
    const { checked, value } = props;
    return (
      <div>
        <Navbar />
        <Carousel />
        <Body />
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <RaisedButton label='test'/>
        </MuiThemeProvider>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
