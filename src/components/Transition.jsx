// Imports necessary libraries
import React from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

// Defines the TransitionComponent
const TransitionComponent = ({ children }) => {
  // Gets the current location using useLocation hook
  const location = useLocation();

  // SwitchTransition and a Transition component
  return (
    <SwitchTransition>
      <Transition
        // Current pathname to handle transitions
        key={location.pathname}
        // Timeout for the transition
        timeout={500}
        // Animation when component enters
        onEnter={(node) => {
          gsap.set(node, { autoAlpha: 0, yPercent: -5 });
          gsap
            .timeline({ paused: true })
            .to(node, { autoAlpha: 1, yPercent: 0, duration: 0.25 })
            .to(node, { duration: 0.45 })
            .play();
        }}
        // Animation when component exits
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, { duration: 0.2 })
            .to(node, { yPercent: -5, autoAlpha: 0, duration: 0.4 })
            .play();
        }}
      >
        {/* Renders the child element */}
        {children}
      </Transition>
    </SwitchTransition>
  );
};

// Exports the TransitionComponent
export default TransitionComponent;