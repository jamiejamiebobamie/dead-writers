import { connect } from "react-redux";
import { ControlButton } from "./ControlButton";

const mapStateToProps = (state) => {};
const mapDispatchToProps = {};

export const ControlButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlButton);
