
import BottomFoter from "../../BottomFooter/bottomFoter";
import Question from "../../Question/Question";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Caousel/Carousel";
import Course from "../../components/Course/Course";
import HandHold from "../../components/HandHold/HandHold";
import IconBox from "../../components/IconBox/IconBox";
import PageHeader from "../../components/Pageheader/PageHeader";
import PhpDev from "../../components/PhpDev/PhpDev";
import Registation from "../../components/Registation/Registation";
import StudentCount from "../../components/Student/StudentCount";

import "./Home.scss";

const Home = () => {
  return (
    <>
       <PageHeader title={"Home"} />
       <Banner />
       <IconBox />
       <PhpDev />
       <HandHold />
       <Carousel />
       <Course />
       <StudentCount />
       <Registation />
       <Question />
       <BottomFoter />

     
   


    </>
  )
}

export default Home;
