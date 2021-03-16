import { connect } from "react-redux";
import { Controls } from "./Controls";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
