import styled from "@emotion/styled";

import { alpha, color } from "metabase/lib/colors";

export interface ListCellItemProps {
  isClickable: boolean;
}

export const ListCellHeader = styled.div<{ borderBottom?: boolean }>`
  border: none;
  border-top: 1px solid ${color("bg-medium")};

  border-bottom: ${props => (props.borderBottom ? 1 : 0)}px solid
    ${color("bg-medium")};

  li:first-child & {
    border-top: none;
  }
`;

export const ListCellItem = styled.div<ListCellItemProps>`
  border-color: ${props => props.isClickable && alpha("accent2", 0.2)};
`;

export const FilterContainer = styled.div`
  padding: 0.5rem;
`;

export const Content = styled.div<{ isClickable: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: ${props => (props.isClickable ? "pointer" : "default")};
  min-width: 0;

  [data-element-id="list-item"]-content {
    min-width: 0;
    flex-shrink: 1;
  }
`;

export const IconWrapper = styled.span`
  margin-left: auto;
  font-size: 0.875rem;
`;

export const EmptyStateContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;
