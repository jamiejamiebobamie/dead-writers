import { connect } from "react-redux";
import { Controls } from "./Controls";
import { fetchQuote } from "../../actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { fetchQuote };

export const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
