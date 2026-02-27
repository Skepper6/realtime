"use client";

import React, { useEffect, useState } from "react";
import Careers1 from "@/components/sections/careers/Careers1";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import RoundShape from "../../sections/WhiteShape";
import WhiteShape from "../../sections/WhiteShape";
import PrivacyPolicy from "@/components/sections/privacy-policy/PrivacyPolicy";


const PrivacyPolicyMain = () => {

	

	return (
		<section className="privacy_page" >
			 

    <PrivacyPolicy/>
      <WhiteShape/>
		</section>
	);
};

export default PrivacyPolicyMain;
