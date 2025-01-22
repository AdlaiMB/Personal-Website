import { useRef, useState } from "react";
import { motion } from "motion/react";
import "../styles/App.css";
import "../styles/SlideTabs.css";

function Bar() {
  return (
    <div className="fixed">
      <SlideTabs />
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="navigation_bar"
    >
      <Tab id="Home" setPosition={setPosition}>
        Home
      </Tab>
      <Tab id="About" setPosition={setPosition}>
        Education
      </Tab>
      <Tab id="About" setPosition={setPosition}>
        About Me
      </Tab>
      <Tab id="Skills" setPosition={setPosition}>
        Skills
      </Tab>
      <Tab id="Projects" setPosition={setPosition}>
        Projects
      </Tab>
      <Tab id="Future" setPosition={setPosition}>
        Future
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, id }) => {
  const ref = useRef(null);

  return (
    <li className="bold_font">
      <a
        className="tab"
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
          });
        }}
        href={`#${id}`}
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={position} className="cursor_highlight" />;
};

export default Bar;
