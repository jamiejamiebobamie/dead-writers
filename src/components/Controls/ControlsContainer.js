import { connect } from "react-redux";
import { Controls } from "./Controls";
import { fetchQuote, tweetQuote, clearQuote } from "../../redux/actions";
import { quoteSelector, indexSelector } from "../../redux/selectors";

const mapStateToProps = (state) =>
  Object.assign({}, quoteSelector(state), indexSelector(state));
const mapDispatchToProps = { fetchQuote, tweetQuote, clearQuote };

export const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
