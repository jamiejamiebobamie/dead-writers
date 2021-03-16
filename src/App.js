import React from "react";
import { connect } from "react-redux";
import {} from "./actions";

export const App = ({ state }) => {
  const {} = state;

  return (
    <main className="t-center">
      <h1>hi</h1>
    </main>
  );
};

const mapStateToProps = (state) => ({
  state: state.userReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
