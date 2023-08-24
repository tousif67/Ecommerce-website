import React from "react";
import MainCarousel from "../../components/HouseCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";


const HomePage =()=>{
    return(
        <div>
                <MainCarousel/>
                <div className="space-y-10 py-20 flex-col justify-center mx--5 lg-px-10">
                    <HomeSectionCarousel data={mens_kurta} sectionName={"MEN'S KURTA"}/>
                    <HomeSectionCarousel data={mens_kurta} sectionName={"MEN'S SHOES"}/>
                    <HomeSectionCarousel data={mens_kurta} sectionName={"MEN'S PANTS"}/>
                    <HomeSectionCarousel data={mens_kurta} sectionName={"WOMEN'S SAREE"}/>
                    <HomeSectionCarousel data={mens_kurta} sectionName={"WOMEN'S DRESS"}/>
                  
                </div>
        </div>
    )
}
export default HomePage;