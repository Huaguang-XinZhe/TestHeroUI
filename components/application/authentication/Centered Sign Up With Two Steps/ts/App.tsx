"use client";


import React from "react";
import {Button, Input, Link, Tooltip} from "@heroui/react";
import {AnimatePresence, domAnimation, LazyMotion, m} from "framer-motion";
import {Icon} from "@iconify/react";


export default function Component() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = React.useState(true);


  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);


  const Title = React.useCallback(
    (props: React.PropsWithChildren<{}>) => (
      <m.h1
        animate={{opacity: 1, x: 0}}
        className="text-xl font-medium"
        exit={{opacity: 0, x: -10}}
        initial={{opacity: 0, x: -10}}
      >
        {props.children}
      </m.h1>
    ),
    [],
  );


  const titleContent = React.useMemo(() => {
    return page === 0 ? "Sign Up" : page === 1 ? "Enter Password" : "Confirm Password";
  }, [page]);


  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };


  const handleEmailSubmit = () => {
    if (!email.length) {
      setIsEmailValid(false);


      return;
    }
    setIsEmailValid(true);
    paginate(1);
  };


  const handlePasswordSubmit = () => {
    if (!password.length) {
      setIsPasswordValid(false);


      return;
    }
    setIsPasswordValid(true);
    paginate(1);
  };


  const handleConfirmPasswordSubmit = () => {
    if (!confirmPassword.length || confirmPassword !== password) {
      setIsConfirmPasswordValid(false);


      return;
    }
    setIsConfirmPasswordValid(true);
    // Submit logic or API call here
    console.log(`Email: ${email}, Password: ${password}`);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (page) {
      case 0:
        handleEmailSubmit();
        break;
      case 1:
        handlePasswordSubmit();
        break;
      case 2:
        handleConfirmPasswordSubmit();
        break;
      default:
        break;
    }
  };


  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-large bg-content1 shadow-small flex w-full max-w-sm flex-col gap-4 overflow-hidden px-8 pt-6 pb-10">
        <LazyMotion features={domAnimation}>
          <m.div className="flex min-h-[40px] items-center gap-2 pb-2">
            <AnimatePresence initial={false} mode="popLayout">
              {page >= 1 && (
                <m.div
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -10}}
                  initial={{opacity: 0, x: -10}}
                >
                  <Tooltip content="Go back" delay={3000}>
                    <Button isIconOnly size="sm" variant="flat" onPress={() => paginate(-1)}>
                      <Icon
                        className="text-default-500"
                        icon="solar:alt-arrow-left-linear"
                        width={16}
                      />
                    </Button>
                  </Tooltip>
                </m.div>
              )}
            </AnimatePresence>
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <Title>{titleContent}</Title>
            </AnimatePresence>
          </m.div>
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <m.form
              key={page}
              animate="center"
              className="flex flex-col gap-3"
              custom={direction}
              exit="exit"
              initial="enter"
              transition={{duration: 0.2}}
              variants={variants}
              onSubmit={handleSubmit}
            >
              {page === 0 && (
                <Input
                  autoFocus
                  isRequired
                  label="Email Address"
                  name="email"
                  type="email"
                  validationState={isEmailValid ? "valid" : "invalid"}
                  value={email}
                  onValueChange={(value) => {
                    setIsEmailValid(true);
                    setEmail(value);
                  }}
                />
              )}
              {page === 1 && (
                <Input
                  autoFocus
                  isRequired
                  endContent={
                    <button type="button" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? (
                        <Icon
                          className="text-default-400 pointer-events-none text-2xl"
                          icon="solar:eye-closed-linear"
                        />
                      ) : (
                        <Icon
                          className="text-default-400 pointer-events-none text-2xl"
                          icon="solar:eye-bold"
                        />
                      )}
                    </button>
                  }
                  label="Password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  validationState={isPasswordValid ? "valid" : "invalid"}
                  value={password}
                  onValueChange={(value) => {
                    setIsPasswordValid(true);
                    setPassword(value);
                  }}
                />
              )}
              {page === 2 && (
                <Input
                  autoFocus
                  isRequired
                  endContent={
                    <button type="button" onClick={toggleConfirmPasswordVisibility}>
                      {isConfirmPasswordVisible ? (
                        <Icon
                          className="text-default-400 pointer-events-none text-2xl"
                          icon="solar:eye-closed-linear"
                        />
                      ) : (
                        <Icon
                          className="text-default-400 pointer-events-none text-2xl"
                          icon="solar:eye-bold"
                        />
                      )}
                    </button>
                  }
                  errorMessage={!isConfirmPasswordValid ? "Passwords do not match" : undefined}
                  label="Confirm Password"
                  name="confirmPassword"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  validationState={isConfirmPasswordValid ? "valid" : "invalid"}
                  value={confirmPassword}
                  onValueChange={(value) => {
                    setIsConfirmPasswordValid(true);
                    setConfirmPassword(value);
                  }}
                />
              )}
              <Button fullWidth color="primary" type="submit">
                {page === 0
                  ? "Continue with Email"
                  : page === 1
                    ? "Enter Password"
                    : "Confirm Password"}
              </Button>
            </m.form>
          </AnimatePresence>
        </LazyMotion>
        <p className="text-small text-center">
          Already have an account?&nbsp;
          <Link href="#" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

