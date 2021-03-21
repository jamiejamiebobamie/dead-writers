import { connect } from "react-redux";
import { Controls } from "./Controls";
import { fetchQuote, tweetQuote, clearQuote } from "../../redux/actions";
import { quoteSelector } from "../../redux/selectors";

const mapStateToProps = (state) => quoteSelector(state);
const mapDispatchToProps = { fetchQuote, tweetQuote, clearQuote };

export const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
