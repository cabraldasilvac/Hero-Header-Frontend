import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 75px;
  background-color: #daaffd;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;

  animation: showOnPageCard 0.5s linear forwards 2s;
  opacity: 0px;
  top: 50px;

  small {
      font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 23px;
      font-weight: 400;
      margin-right: 5px;
    }
  }

  i {
      width: 154px;
      height: 77px;
      position: absolute;
      border-radius: 50px;
      

      &.circle1 {
        left: 104px;
        top: -20px;
        background: #ffffff52;
        
      }

      &.circle2 {
        background:  #ffffff52;
        left: 81px;
        bottom: -50px;
        transform: rotate(45deg);
      }

      &.circle3 {
        border: 1px solid rgba(255,255,255, 0.5);
        transform: rotate(-72deg);
        top:-54px;
        left: 47px;
      }
    }
    @keyframes showOnPageCard {
    from {
      opacity: 0px;
      top: 0px;
    }
    to {
        opacity: 1px;
        top: 105px;
    }
  }
`;