## Description

원티드 프리온보딩 **로그프레소**에서 제시한 기업과제 듀얼 셀렉터를 구현하였습니다.

- 하나만 선택 옵션이 꺼져있을 때 ctrl(command)와 shift와 함께 클릭하여 다중 선택 가능합니다.
- 검색창에서 아이템 검색이 가능합니다.
- 가운데 기능 버튼을 이용하여 양쪽 아이템을 이동시킬 수 있습니다. \* 오른쪽의 옵션버튼으로 여러 설정들을 이용할 수 있습니다.

## Usage(자세한 실행 방법)

1. git clone

```
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-3.git
```

2. wanted_pre_onboarding 폴더를 인터프린터나 컴파일러로 열기
3. 필요한 라이브러리 설치

```
npm install
```

4. 실행

```
npm run start
```

기술스택

- react.js 사용
- styled-components
- recoil

# 배포 링크

https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-3/

---

# 구현한 방법과 설명

## <윤구님>

### src/components/ListContainer.js, src/pages/Homepage.js

- ListContainer
  리스트 아이템들이 담길 메인 컴포넌트를 만들었습니다.
  검색 기능을 구현했습니다. 검색 input에 검색어를 입력하는 해당 문자열을 포함하는 아이템만 보여줍니다.
  click handler를 구현했습니다. ctrl, shift, command에 따른 클릭이벤트를 구현하여 다중 선택이 가능하게 하였습니다.

  1. click
     ![click](https://user-images.githubusercontent.com/85268135/158330563-4a9e94e4-04ab-4aee-8cbe-b4b8c7faac7b.gif)
  2. ctrl or command + click
     ![ctrl](https://user-images.githubusercontent.com/85268135/158330567-cf636d58-7de2-4bc3-b0fd-906c7d6270d3.gif)
  3. shift + click
     ![shift](https://user-images.githubusercontent.com/85268135/158330569-63e9dbac-f373-4276-91a1-408589474b60.gif)

- Homepage
  ListContainer와 ItemMoveButton의 위치를 디자인했습니다.

### 개발 중 어려웠던 점 && 해결

- ItemMoveButton을 제작하신 팀원분과 컴포넌트를 합치면서 시행착오가 있었습니다. 팀원분과 서로 코드리뷰를 하며 방법을 모색하여 해결하였습니다.

---

## <성현님>

### src/components/ItemMoveButton/ItemMoveButton.js

## 아이템 이동 버튼 컴포넌트 생성

<img width="452" alt="스크린샷 2022-03-15 오후 5 06 57" src="https://user-images.githubusercontent.com/70502670/158333593-fef59757-9266-47e2-8c38-c07148ab11e8.png">

- 아이템 이동 버튼 컴포넌트를 만듭니다.
- 초기화, 선택/전체 이동 기능이 포함되어 있습니다.
- 버튼 UI 제작을 위해 fortawesome 라이브러리를 사용했습니다.

## recoil 상태 사용

- recoil 상태 라이브러리를 이용하여, 전역 상태를 변경 이용합니다.

### src/components/ListContainer.js

## 다중선택 기능 추가

<img width="448" alt="스크린샷 2022-03-15 오후 5 07 28" src="https://user-images.githubusercontent.com/70502670/158333622-85c00749-9a72-4bbc-b0ba-097a0e7f16aa.png">

- 다중선택이 가능한 경우, shift 누르고 클릭하면 전체 선택, commend/ctrl 누르고 클릭하면 개별 중복 선택이 가능하도록 기능을 추가합니다.

### src/components/ItemMoveButton/CountSelectedItem.js

## 선택된 리스트 아이템 개수 보여주기

<img width="444" alt="스크린샷 2022-03-15 오후 5 07 40" src="https://user-images.githubusercontent.com/70502670/158333648-ca9d0000-690d-4e65-8335-0cc8b134de03.png">

- 현재 선택된 요소의 개수 및 전체 요소 개수를 받아 보여주는 컴포넌트를 생성하였습니다.

### 개발 중 어려웠던 점 && 해결

- 병합하는 과정에서 선택된 요소들의 개수 상태를 함께 사용하는데, 왼쪽/오른쪽 으로 분리해서 관리할 지 미리 논의하지 않아서 코드 수정이 몇가지 있었습니다. 함께 사용하는 상태라면, 설계단계에서 자세한 논의를 하면 좋을 것 같습니다.

---

## <승규님>

### 구현한 내용

- recoil을 이용한 상태관리 변수 생성
- 세션스토리지를 통한 변수관리 hooks 구현

### 어려웠던 점

- 팀원들이 값을 따로 스토리지에 저장하는 로직을 구현하지 않게 세션스토리지에 값이 들어가게 하는 hooks를 구현하였는데 기대한 결과와는 다른 결과가 나와서 당황하였습니다. 알고보니 스토리지에는 값을 집어넣으면 문자열로 들어가기때문에 형변환을 시켜주어서 관리해야되는걸 알았습니다. 해결은 적절한 형변환을 사용하여 해결하였습니다.
- 훅스를 만들어 놓고 나중에 붙이려고 하니 많이 달라진 코드에 당황하였습니다. 조금 더 훅을 빨리 만들어 배포했다면 합치는데 오랜 시간이 걸리지 않았을 것 같습니다.

---

## <정민님>

### hooks/DragAndDrop.js

### Drag and drop 기능 구현

HTML 드래그 앤 드롭 이벤트를 활용하여 기능을 구현하였습니다. <br>

```jsx
// dragAndDrop 초기값
const [dragAndDrop, setDragAndDrop] = useState({
  draggedFrom: null,
  draggedTo: null,
  originalOrder: [],
  updatedOrder: [],
});
```

dragAndDrop state는 드래그로 변경될 내용들을 담아줄 객체를 만들어주어 드래그로 인해 변경된 값을 적용시켜줬습니다. <br>

- draggable: true로 설정하여 드래그를 할 수 있게 해주었습니다. <br>
- dragstart: opacity로 투명도를 주고, 드래그 시작한 인덱스 값을 dragAndDrop.draggedFrom에 담아줍니다. <br>
- dragover: draggedFrom과 draggedTo로 드래그 시작,끝 index 값을 구한 뒤 새로운 배열로 만들어줍니다. <br>
- drop, dragleave: dragAndDrop 상태를 초기화 시켜줍니다. <br>
- dragenter,dragend: className을 주어 css 작업을 하였습니다. <br>

### 개발 중 어려웠던 점 && 해결

- drag 관련 기능을 처음 구현해보았습니다. 어떤 식으로 구현 해야할지 감이 오지 않아 구글링을 통해 HTML 드래그 앤 드롭 이벤트를 알게 되었고, 여러가지 예제들을 보면서 학습하여 해당 과제에 적용하였습니다. <br>
- 드래그 된 요소를 다른 요소에 위치 시켰을 때 밀리는 애니메이션을 주어 UI상 위치가 바뀌는 느낌을 주고 싶었는데
  생각보다 쉽게 되지 않았습니다. <br>
  opacity 와 transform, background 를 대신 사용하여 선택된 드래그 요소를 확인할 수 있게 해주었습니다. <br>

<img width="400px" src="https://user-images.githubusercontent.com/56882147/158308803-1303f7ad-2d42-4a8d-8a4b-438b549fef81.gif"/>

---

## <승연님>

### 구현한 내용

- src/components/Setting.js
- src/components/AlertModal.js

## 설정 메뉴 컴포넌트 생성

- 설정 메뉴 상태 변경으로 클릭시 옵션 값이 보여집니다.
- atom에서 상태를 받아와서 각 버튼의 연결하였습니다.
- 아이템 크기 기본 값 설정과 하나만 체크될 수 있도록 조건을 주었습니다

<br>

<img width="450" alt="gif" src="https://user-images.githubusercontent.com/54584337/158364202-dd59c679-a5af-4b8a-8001-00844857f9e3.gif">

## alert 모달창 컴포넌트 생성

- 리스트 크기 입력창에서 숫자외에 다른 것을 입력하면 모달창이 나오도록 하였습니다.
- 버튼을 누르거나 모달 창외에 화면을 누르면 모달창이 사라집니다.

<br>
<img width="450" alt="gif" src="https://user-images.githubusercontent.com/54584337/158364410-d53da654-1dbd-493c-89f5-0ab8818cb126.gif">

<br>

### 개발 중 어려웠던 점 && 해결

- 메뉴 컴포넌트를 `position: fixed`로 해서 위치를 잡았는데 브라우저 화면이 줄어들면 리스트와 겹치는 문제가 발생했습니다. 그래서 `margin` 값과 `left의 calc()`값을 주어 화면이 줄어들었을때 최대한 겹치지 않도록 하였습니다.
- 아이템 크기를 선택하는 버튼이 초기에 체크가 안된 상태라는 문제가 있었습니다. 체크하는 부분을 `value값과 imagesize`를 둘 다 `String`으로 바꿔서 해결하였습니다.

---

## 수영

### Drag and drop 기능 구현

draggble api를 이용하여 기능 구현 하였고 다른 곳에서 사용할 수 있도록 hooks로 만들어 주었습니다
![DND](https://user-images.githubusercontent.com/68948735/158351871-b1fefcde-1ff6-47bd-9808-e8b84fed0fd7.gif)

### 개발 중 어려웠던 점 && 해결

- 드래그 된 요소를 다른 요소에 위치 시켰을 때 자연스럽게 들어가는 애니메이션을 주어 어떻게 어디로 들어가는지 구현하고 싶었지만 생각대로 되지 않았습니다.
  opacity 와 transform, background 를 대신 사용하여 선택된 드래그 요소를 확인할 수 있게 해주었습니다.
