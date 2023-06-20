/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import Navbar from "../../components/Navbar/Navbar";

const HomeLook = () => {
    return (
      <div >
         <Navbar/>
        <HomeBanner />
        <CategoryBanner />
        <Benefit />
        <Advertisement />
      </div>
    );
}

export default HomeLook;
