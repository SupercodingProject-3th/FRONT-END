import React, { Component } from "react";
import styled from "styled-components";

interface MapGuideState {
  isModalOpen: boolean;
}

export default class MapGuide extends Component<{}, MapGuideState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <MapGuideContainer>
        <button onClick={this.openModal}>지도검색TIP</button>
        {/* <button>맛집제보방법</button> */}

        {this.state.isModalOpen && (
          <Modal>
            <div>
              <p className="search_title">이렇게 검색해보세요!</p>
              <p>가고싶은 도시명 + 분위기 + 맛집</p>
              <p> ex : 광화문 데이트 맛집</p>
              <button onClick={this.closeModal}>닫기</button>
            </div>
          </Modal>
        )}
      </MapGuideContainer>
    );
  }
}

const MapGuideContainer = styled.div`
  button {
    padding: 10px;
    background-color: #fff;
    color: #feaa00;
    font-weight: bold;
    border-style: solid;
    border-color: #feaa00;
    border-radius: 30px;
    margin: 20px;
    margin-bottom: 0;
    width: 300px;
    margin-left: 40px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  div {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height: 308px;
  }

  .search_title {
    background-color: #feaa00;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    border-radius: 30px;
    padding: 10px;
  }
`;
