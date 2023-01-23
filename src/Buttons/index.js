import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="buttons">
      <button onClick={toggleHideDone} className="buttons__button">
        {hideDone ? "Show" : "Hide"} completed
      </button>
      <button
        onClick={setAllDone}
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        {" "}
        Finalise all
      </button>
    </div>
  );
};

export default Buttons;
