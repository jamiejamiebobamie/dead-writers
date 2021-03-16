import { connect } from "react-redux";
import { BackgroundVideo } from "./BackgroundVideo";

const mapDispatchToProps = {};
const mapStateToProps = (state) => state;

export const BackgroundVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundVideo);
