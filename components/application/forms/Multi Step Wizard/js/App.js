"use client";


import React from "react";
import {domAnimation, LazyMotion, m} from "framer-motion";


import MultistepSidebar from "./multistep-sidebar";
import SignUpForm from "./signup-form";
import CompanyInformationForm from "./company-information-form";
import ChooseAddressForm from "./choose-address-form";
import ReviewAndPaymentForm from "./review-and-payment-form";
import MultistepNavigationButtons from "./multistep-navigation-buttons";


const variants = {
  enter: (direction) => ({
    y: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    y: direction < 0 ? 30 : -30,
    opacity: 0,
  }),
};


export default function Component() {
  const [[page, direction], setPage] = React.useState([0, 0]);


  const paginate = React.useCallback((newDirection) => {
    setPage((prev) => {
      const nextPage = prev[0] + newDirection;


      if (nextPage < 0 || nextPage > 3) return prev;


      return [nextPage, newDirection];
    });
  }, []);


  const onChangePage = React.useCallback((newPage) => {
    setPage((prev) => {
      if (newPage < 0 || newPage > 3) return prev;
      const currentPage = prev[0];


      return [newPage, newPage > currentPage ? 1 : -1];
    });
  }, []);


  const onBack = React.useCallback(() => {
    paginate(-1);
  }, [paginate]);


  const onNext = React.useCallback(() => {
    paginate(1);
  }, [paginate]);


  const content = React.useMemo(() => {
    let component = <SignUpForm />;


    switch (page) {
      case 1:
        component = <CompanyInformationForm />;
        break;
      case 2:
        component = <ChooseAddressForm />;
        break;
      case 3:
        component = <ReviewAndPaymentForm />;
        break;
    }


    return (
      <LazyMotion features={domAnimation}>
        <m.div
          key={page}
          animate="center"
          className="col-span-12"
          custom={direction}
          exit="exit"
          initial="exit"
          transition={{
            y: {
              ease: "backOut",
              duration: 0.35,
            },
            opacity: {duration: 0.4},
          }}
          variants={variants}
        >
          {component}
        </m.div>
      </LazyMotion>
    );
  }, [direction, page]);


  return (
    <MultistepSidebar
      currentPage={page}
      onBack={onBack}
      onChangePage={onChangePage}
      onNext={onNext}
    >
      <div className="relative flex h-fit w-full flex-col pt-6 text-center lg:h-full lg:justify-center lg:pt-0">
        {content}
        <MultistepNavigationButtons
          backButtonProps={{isDisabled: page === 0}}
          className="hidden justify-start lg:flex"
          nextButtonProps={{
            children: page === 0 ? "Sign Up for Free" : page === 3 ? "Go to Payment" : "Continue",
          }}
          onBack={onBack}
          onNext={onNext}
        />
      </div>
    </MultistepSidebar>
  );
}

