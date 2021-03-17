import { connect } from "react-redux";
import { BackgroundVideo } from "./BackgroundVideo";

const mapDispatchToProps = {};
const mapStateToProps = (state) => {
  return {
    index: state.videoIndexReducer.index ? state.videoIndexReducer.index : 8,
  };
};

export const BackgroundVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundVideo);
