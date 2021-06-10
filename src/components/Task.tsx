import React from "react";
import { memo } from "react";

export interface TaskProps {
  task: TaskType;
  onArchiveTask?: Function;
  onPinTask?: Function;
  updatedAt?: Date;
}

export interface TaskType {
  id?: string;
  title?: string;
  state?: string;
  updatedAt?: Date;
}

const Task = memo<TaskProps>(
  ({
    task: { id, title, state },
    onArchiveTask = (_id: string) => {
      return;
    },
    onPinTask = (_id: string) => {
      return;
    },
  }) => {
    return (
      <div className={`list-item ${state}`}>
        <label className="checkbox">
          <input
            type="checkbox"
            defaultChecked={state === "TASK_ARCHIVED"}
            disabled={true}
            name="checked"
          />
          <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
        </label>
        <div className="title">
          <input
            type="text"
            value={title}
            readOnly={true}
            placeholder="Input title"
          />
        </div>

        <div className="actions" onClick={(event) => event.stopPropagation()}>
          {state !== "TASK_ARCHIVED" && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a onClick={() => onPinTask(id)}>
              <span className={`icon-star`} />
            </a>
          )}
        </div>
      </div>
    );
  }
);

export default Task;
