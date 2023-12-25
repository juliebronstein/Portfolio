import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoSass,
  } from "react-icons/io";
  import {BiLogoBootstrap} from "react-icons/bi"
  import {
    SiTailwindcss,
    SiStyledcomponents,
    SiMui,
    SiNextdotjs,
  } from "react-icons/si";
  import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";
  import { BsGithub } from "react-icons/bs";
  import { GrReactjs } from "react-icons/gr";
  
  const Sdata = [
    {
      id: 1,
      icon: <IoLogoHtml5 />,
      title: "HTML5",
    },
    {
      id: 2,
      icon: <IoLogoCss3 />,
      title: "CSS3",
    },
    {
      id: 3,
      icon: <IoLogoJavascript />,
      title: "JavaScript",
    },
      {
      id: 4,
      icon: <GrReactjs />,
      title: "React.js",
    },
    {
      id: 5,
      icon: <IoLogoSass />,
      title: "Type Script",
    },
    {
      id: 6,
      icon: <BiLogoBootstrap />,
      title: "Bootstrap",
    },
    {
      id: 7,
      icon: <SiStyledcomponents />,
      title: "Styled Components",
    },
    // {
    //   id: 7,
    //   icon: <SiMui />,
    //   title: "Material UI",
    // },
  
    // {
    //   id: 9,
    //   icon: <SiNextdotjs />,
    //   title: "Next.js",
    // },
    {
      id: 10,
      icon: <TbBrandRedux />,
      title: "Redux Toolkit",
    },
    // {
    //   id: 11,
    //   icon: <TbBrandReactNative />,
    //   title: "React Native",
    // },
    {
      id: 12,
      icon: <BsGithub />,
      title: "GitHub",
    },
  ];
  
  export default Sdata;
  