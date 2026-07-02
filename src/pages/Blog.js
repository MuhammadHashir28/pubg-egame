import { NavLink } from "react-router-dom";
//import { useForm } from "react-hook-form";
import { useState } from "react";
import useForm from '../hooks/useForm';
import blog2Img from '../images/blog2.jpg';



function Blog() {
 

  return (
    <>

     {/* Breadcrumb Start */}
 <div className="flex flex-col items-center py-28">
      <h2 className="text-6xl font-bold mb-4 secondaryColor uppercase">Blog</h2>
      <div className="flex items-center">
        <span className="text-white text-base ">Home</span>
        <div className="h-2 w-2 rounded-full secondaryBg mx-2"></div>
        <span className="text-white text-base">Blog</span>
      </div>
    </div>
 {/* Breadcrumb End */}


 <section className="feature-bg p-32">
      <div className="linear-gredient-tp-bt rounded-lg">

   
      <img src={blog2Img} alt="Blog image" className="w-full mb-0" />
      <div className="p-12">
      <div class="article-info pt-6 pb-4 d-flex gap-5">
                                <div class="d-flex gap-1 single">
                                    <div class="icon-wrap d-flex align-items-center mr-2">
                                    <i class='fa fa-clock'></i>
                                    </div>
                                    <span>15 Min</span>
                                </div>
                                <div class="d-flex gap-1 single ps-5">
                                    <div class="icon-wrap d-flex align-items-center mr-2">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                    <span>55</span>
                                </div>
                                <div class="d-flex gap-1 single ps-5">
                                    <div class="icon-wrap d-flex align-items-center mr-2">
                                    <i class="fa fa-user" aria-hidden="true"></i>

                                    </div>
                                    <span>By Admin</span>
                                </div>
                            </div>

      <h2 className="text-white font-bold text-3xl pb-8">Mauris quis condimentum tellus, quis ultricies est. Aliquam cursus arcu vitae arcu luctus viverra.</h2>
      <p className="text-white mb-4  text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae massa est. Suspendisse fermentum augue eget massa varius lacinia.
        Curabitur aliquam ullamcorper urna, quis dignissim neque. In eu risus rhoncus, fermentum lectus eu, suscipit urna. Nullam lacinia turpis sit
        amet risus luctus, vitae volutpat mi finibus.
      
      </p>

      <p className="text-white mb-4  text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae massa est. Suspendisse fermentum augue eget massa varius lacinia.
        Curabitur aliquam ullamcorper urna, quis dignissim neque. In eu risus rhoncus, fermentum lectus eu, suscipit urna. Nullam lacinia turpis sit
        amet risus luctus, vitae volutpat mi finibus.
      
      </p>


      <p className="text-white mb-4  text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae massa est. Suspendisse fermentum augue eget massa varius lacinia.
        Curabitur aliquam ullamcorper urna, quis dignissim neque. In eu risus rhoncus, fermentum lectus eu, suscipit urna. Nullam lacinia turpis sit
        amet risus luctus, vitae volutpat mi finibus.
      
      </p>
      </div>

      </div>
    </section>
    </>
  );
}

export default Blog;
