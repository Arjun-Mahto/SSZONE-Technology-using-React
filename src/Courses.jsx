import React from "react";
import Cards from "./components/Home-page/Cards";
function Courses(){

    return (
        
        <>
             <div className="popular_courses">
       <center><p id="para1">Popular Courses</p></center> 
       <center><p id="para2">Choose our top courses</p></center> 
       <center><p id="para3">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p></center> 

        <ul>
            <li><button>Trending</button></li>
            <li><button>All Categories</button></li>
            <li><button>Design</button></li>
            <li><button>Marketing</button></li>
            <li><button>Programming</button></li>
            <li><button>Web Design</button></li>

        </ul>
    </div>
      
          <Cards/>
          <Cards/>
        </>
        )



}


export default Courses;