import React from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node) => {
          gsap.set(node, { autoAlpha: 0, yPercent: -5 });
          gsap
            .timeline({ paused: true })
            .to(node, { autoAlpha: 1, yPercent: 0, duration: 0.25 })
            .to(node, { duration: 0.45 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, { duration: 0.2 })
            .to(node, { yPercent: -5, autoAlpha: 0, duration: 0.4 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;