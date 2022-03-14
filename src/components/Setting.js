import styled from 'styled-components';
import { useState } from 'react';
const Setting = (props) => { 
  const [isSetting, setIsSetting] = useState(false);
  const [checkedInputs, setCheckedInputs] = useState('S');
  const [currentTitle, setCurrentTitle] = useState(true);
  const [currentSearch, setCurrentSearch] = useState(true);
  const [currentOneMove, setCurrentOneMove] = useState(true);
  const [currentitemNum, setCurrentitemNum] = useState(true);

  const sizeOptions = [
    {label: "XS", value: '15px'},
    {label: "S", value: '20px'},
    {label: "M", value: '25px'}
  ]

  const handlersSetBtn = () => { 
    setIsSetting(!isSetting);
  }

  const handlerTitleCurrent = () => { 
    setCurrentTitle(!currentTitle)
  }

  const handlerSearchCurrent = () => {
    setCurrentSearch(!currentSearch);
  };
  
  const handlerMoveCurrent = () => {
    setCurrentOneMove(!currentOneMove);
  };

  const handlerItemCurrent = () => {
    setCurrentitemNum(!currentitemNum);
  };

  return (
    <SettingContainer>
      <button className="set-btn" onClick={handlersSetBtn}>
        <svg fill="#777777" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
          <path d="M19.9,13.3C20,12.8,20,12.4,20,12s0-0.8-0.1-1.3L21.8,9l-2.3-4l-2.4,0.8c-0.7-0.5-1.4-1-2.2-1.3L14.3,2H9.7L9.2,4.5	C8.3,4.8,7.6,5.3,6.9,5.8L4.5,5L2.2,9l1.9,1.7C4,11.2,4,11.6,4,12c0,0.4,0,0.8,0.1,1.3L2.2,15l2.3,4l2.4-0.8l0,0	c0.7,0.5,1.4,1,2.2,1.3L9.7,22h4.7l0.5-2.5c0.8-0.3,1.6-0.7,2.2-1.3l0,0l2.4,0.8l2.3-4L19.9,13.3L19.9,13.3z M12,16	c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C16,14.2,14.2,16,12,16z" />
        </svg>
      </button>
      {isSetting && (
        <SettingContent>
          <li>
            <span className="set-txt">타이틀</span>
            <button
              onClick={handlerTitleCurrent}
              className={currentTitle ? 'btn-on switch-btn' : 'btn-off switch-btn'}
            ></button>
          </li>
          {currentTitle && (
            <li>
              <input placeholder="available options" className="inp-setting" />
              <input placeholder="selected options" className="inp-setting" />
            </li>
          )}
          <li>
            <span className="set-txt">검색</span>
            <button
              onClick={handlerSearchCurrent}
              className={currentSearch ? 'btn-on switch-btn' : 'btn-off switch-btn'}
            ></button>
          </li>
          <li>
            <span className="set-txt">하나씩만 옮기기</span>
            <button
              onClick={handlerMoveCurrent}
              className={currentOneMove ? 'btn-on switch-btn' : 'btn-off switch-btn'}
            ></button>
          </li>
          <li>
            <span className="set-txt">아이템 갯수 표시</span>
            <button
              onClick={handlerItemCurrent}
              className={currentitemNum ? 'btn-on switch-btn' : 'btn-off switch-btn'}
            ></button>
          </li>
          <li>
            <span className="set-txt item-size">아이템 크기</span>
            {sizeOptions.map((item, index) => (
              <label key={index} className="set-label">
                {item.label}
                <input
                  id={item.label}
                  className="checkbox-size"
                  type="radio"
                  checked={checkedInputs === item.label}
                  onChange={(e) => setCheckedInputs(e.target.name)}
                  name={item.label}
                  value={item.value}
                />
              </label>
            ))}
          </li>
          <li>
            <div>
              <input type="text" maxlength="3" className="inp-setting" />
            </div>
            <div>
              <input type="text" maxlength="3" className="inp-setting" />
            </div>
          </li>
        </SettingContent>
      )}
    </SettingContainer>
  );
}

const SettingContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 350px;
  .set-btn {
    cursor: pointer;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 5px;
    padding: 4px 8px;
  }
`;

const SettingContent = styled.ul`
  position: absolute;
  top: 40px;
  right: 1px;
  width: 220px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  li {
    overflow: hidden;
    padding: 10px;
    border-bottom: 1px solid rgb(204, 204, 204);
    button {}
    .inp-setting {
      padding: 5px;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 5px;
      &:first-child {
        margin-bottom: 5px;
      }
    }
    .set-txt {
      font-size: 18px;
    }
    .set-txt.item-size {
      margin-right: 5px;
    }
    .set-label {
      font-size: 12px;
      cursor: pointer;
      .checkbox-size {
        margin: 0 6px 0 3px;
      }
    }
    .switch-btn {
      float: right;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      cursor: pointer;
    }
    .switch-btn.btn-on {
      background: #01ae01;
    }
    .switch-btn.btn-off {
      background: #f15852;
    }
  }
`;

export default Setting;