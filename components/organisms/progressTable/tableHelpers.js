import styled from '@emotion/styled';

export const levelFormatter = (level) => {
  switch (level) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    default:
      return null;
  }
};

export const Styles = styled.div`
  .table {
    border-spacing: 0;
    border: 2px solid #333333;
    min-width: 300px !important;

    .thead {
      overflow-y: auto;
      overflow-x: auto;
    }
    .tbody {
    }
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      :nth-of-type(even) {
        background-color: #fafafc;
      }
    }

    .header-row {
      padding: 8px 0;
      border-bottom: 1px solid black;
    }
    .th {
      padding-left: 16px;
    }
    /* .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      position: relative;
      :last-child {
        border-right: 0;
      }
    } */
  }
`;
