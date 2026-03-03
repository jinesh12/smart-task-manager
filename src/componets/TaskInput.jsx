export function TaskInput({
  inputValue,
  onInputChange,
  onAddTask
}) {
  return (
    <div>
      <label>
        Add new task:
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter task name"
        />
      </label>

      <button onClick={onAddTask}>
        Add
      </button>
    </div>
  );
}