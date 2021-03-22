import { connect } from "react-redux";
import { BackgroundVideo } from "./BackgroundVideo";
import { indexSelector } from "../../redux/selectors";
import { clearQuote, addVideoPlayIndex } from "../../redux/actions";

const mapStateToProps = (state) => indexSelector(state);
const mapDispatchToProps = { addVideoPlayIndex };

export const BackgroundVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundVideo);
