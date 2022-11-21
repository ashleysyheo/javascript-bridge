const { PARAMETERS } = require('./utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(bridge) {
    this.init(bridge);
    this.gameCount = 1;
  }

  init(bridge) {
    this.top = [];
    this.bottom = [];
    this.bridge = bridge;
    this.moveCount = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveDirection) {
    if (this.bridge[this.moveCount] === moveDirection) {
      this.checkDirection(moveDirection, PARAMETERS.movable);
    } else {
      this.checkDirection(moveDirection, PARAMETERS.immovable);
    }
  }

  checkDirection(moveDirection, mark) {
    if (moveDirection === PARAMETERS.upControl) {
      this.recordMovement(this.top, this.bottom, mark);
    } else if (moveDirection === PARAMETERS.downControl) {
      this.recordMovement(this.bottom, this.top, mark);
    }
  }

  recordMovement(markList, spaceList, mark) {
    this.recordMark(markList, mark);
    this.recordMark(spaceList, PARAMETERS.space);
  }

  recordMark(row, mark) {
    if (row.length !== 0) {
      row.push(PARAMETERS.separator, mark);
    } else {
      row.push(mark);
    }
  } 

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
