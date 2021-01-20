import React, { useContext } from "react";
import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";

// lib
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

export const Previous = forwardRef<ButtonProps, "button">(
  ({ children, ...buttonProps }, ref) => {
    // react hooks
    const { actions, state } = useContext(PaginatorContext);

    // constants
    const { changePage } = actions;
    const { currentPage, isDisabled } = state;
    const isFirst = currentPage === 1;

    // handlers
    const handlePreviousClick = () => {
      if (!isFirst) changePage(currentPage - 1);
    };

    return (
      <Button
        ref={ref}
        aria-label="Previous page"
        isDisabled={isFirst || isDisabled}
        onClick={handlePreviousClick}
        {...(isFirst || isDisabled ? { "aria-disabled": true } : {})}
        {...buttonProps}
      >
        {children}
      </Button>
    );
  }
);
