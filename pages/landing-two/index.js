import React from 'react'
import LandingTwo from '../../Components/LandingPage/LandingTwo/LandingTwo'
import { Editor, Frame } from "@craftjs/core";
const index = () => {
  return (
        <div className='LandingNine'>

<Editor resolver={{ LandingTwo }}>
          <Frame>
            <LandingTwo
             heroContent="শরীরের ঘামের দুর্গন্ধ সরানো জন্য তাজা সুবাস মিষ্টি সুগন্ধি যা মানুষকে আকর্ষণ করে!"
             heroFontSize={30}
             currentPrice={"বর্তমান মূল্যঃ ১০০০ টাকা"}
             priceFontSize={25}
             previousPrice={"পূর্বের মূল্যঃ ১০৫০ টাকা"}
             previousPriceFontSize={20}

             cardOneTitle={"Executive Night 25ml"}
             cardOneText={"পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য"}
             cardTwoTitle={"Boss Classic 25ml"}
             cardTwoText={"মনের স্থিতি উন্নয়ন করে আপনাকে আরাম এবং নির্ভরশীলতা দেয়।"}
             cardThreeTitle={"Jiangbei 25ml"}
             cardThreeText={"আপনাকে সামর্থ্য দেয় যে আপনি স্বস্তি এবং অভিনব হতে পারেন।"}
             cardFourTitle={"Cologne 25ml"}
             cardFourText={"আপনার মনকে শান্ত করতে পারে এবং চিন্তা কমাতে সাহায্য করতে পারে।"}
             cardTitleFontSize={23}
             cardTextFontSize={17}

             whyBuyOurProduct={"কেন আমাদের কাছ থেকে পারফিউম টি কিনবেন?"}
             whyBuyFontSize={25}

             whyThisProductForYou={"নিচের এই কারণ গুলো যদি আপনার সাথে হয়ে থাক তবে পারফিউম টি আপনার জন্য"}
             whyThisProductFontSize={30}
             reason_1={"ট্রাভেল করায় সৃষ্টি হয় ঘাম।যা আপনার গায়ে সৃষ্টি করে দুর্গন্ধ।"}
             reason_2={"বাসে অনেক মানুষের বাজে গন্ধের সৃষ্টি হয়। আপনি ভুক্তভোগী।"}
             reason_3={"ঘামের জন্য মিটিং-এ আত্মবিশ্বাসের সাথে কথা বলতে পারছেন না ।"}
             reason_4={"চাচ্ছেন এমন পারফিউম ব্যবহার করতে যা দীর্ঘ সময় স্মেল দিবে।"}
             reasonFontSize={20}
             whyOurProductIsGood={"আমাদের পারফিউম কেন ভালো?"}
             whyOurProductIsGoodFontSize={30}
             whyOurProductIsGoodDescription={"FR agrances একটি সুগন্ধি পরিষেবা আমাদের লক্ষ্য হল মানুষের শরীরে দুরগন্ধ ধূর করা এবং ২৪ ঘণ্টা শুগন্ধের মাধ্যমে নিজেদের প্রকাশ করার ক্ষমতা দেওয়া । এটি আমাদের মানুষের আত্মবিশ্বাস বাড়াতেও সাহায্য করে। গ্রাহকরা ভাল গন্ধ পাই তা জেনে অবিশ্বাস্যভাবে আশ্বস্ত হয়ে ১০০% আস্থার সাথে আমাদের থেকে এই পারফিউম ক্রয় করতে পারেন । আমরা সরাসরি গ্রাহকদের হাতে পৌছে দেয়ার চেষ্টা অব্যাহত আছে, আপনি ও নিয়ে দেখতে পারেন।"}
             goodProductFontSize={20}
            
            ></LandingTwo>
          </Frame>
        </Editor>

        </div>
  )
}

export default index