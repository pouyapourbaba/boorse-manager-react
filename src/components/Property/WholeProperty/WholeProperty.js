import React, {Component} from 'react';
import classes from '../WholeProperty/wholeProperty.module.css';
import CheckboxComponent from './CheckBoxComponent/CheckboxComponent';
import BoardResult from './ResultBoard/ResultBoard';


const WholeProperty = (props) => {
  return (
    <div className={classes.oneBox}>
      <div className={classes.rightBox}>
        <div className={classes.inline}>
          <div className={classes.paddingLeft}>سرمایه ی اولیه</div>
          <input
            type="dropdown"
            className={`${classes.inputStyle} ${classes.ml5}`}
            placeholder={props.initValue}
            //value={props.initValue}
            onChange={props.change}
          ></input>
          <div className={classes.iconBox}>
            <span
              className={`${classes.green} ${classes.pl5}`}
              onClick={props.submitWholeInput}
            >
              <i className="fas fa-check"></i>
            </span>
            <span className={classes.grey} onClick={props.clearWholeInput}>
              <i className="fas fa-eraser"></i>
            </span>
          </div>
        </div>
        <div className={classes.inline}>
          <div className={classes.paddingLeft}>میزان ریسک پذیری</div>

          <form className={classes.formStyle}>
            {props.difficulty.map((item) => {
              return (
                <CheckboxComponent
                  key={item.id}
                  difficulty={item}
                  selectedCheckbox={props.selectHandler}
                />
              );
            })}
          </form>
        </div>
      </div>
      {props.showResultBoard && (
        <BoardResult
          initValue={props.initValue}
          devideBy={props.selectedDifficulty.devisionNumber}
        />
      )}
    </div>
  );
}
    


export default WholeProperty;