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
import Overlay from './overlay';
import styles from '../styles/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: true
    };

    this.onImageLoad = this.onImageLoad.bind(this);
  }

  onImageLoad() {
    this.setState({ showOverlay: false });
  }

  render() {
    const props = this.props;
    const { checked, value } = props;
    return (
      <div className={styles.mainColumn}>
        { this.state.showOverlay ? <Overlay /> : null }
        <Navbar />
        <Carousel onImageLoad={this.onImageLoad} />
        <Body />
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <RaisedButton label='test'/>
        </MuiThemeProvider>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.setState({ showOverlay: false });
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
