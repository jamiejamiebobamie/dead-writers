import { connect } from "react-redux";
import { ControlButton } from "./ControlButton";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const ControlButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlButton);
