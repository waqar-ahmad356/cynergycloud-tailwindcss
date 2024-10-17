import React from "react";

import basic from "../../assets/basic.png";
import check_circle from "../../assets/Check Circle.png";
import all_data from "../../assets/all_data";
import { useState,useEffect } from 'react';


// Map country codes to currency symbols
const currencySymbolMap = {
  USD: "$",    // United States Dollar
  GBP: "£",    // British Pound Sterling
  EUR: "€",    // Euro
  INR: "₹",    // Indian Rupee
  PKR: "₨",    // Pakistani Rupee
  AUD: "A$",   // Australian Dollar
  CAD: "C$",   // Canadian Dollar
  CNY: "¥",    // Chinese Yuan
  JPY: "¥",    // Japanese Yen
  RUB: "₽",    // Russian Ruble
  BRL: "R$",   // Brazilian Real
  ZAR: "R",    // South African Rand
  MXN: "$",    // Mexican Peso
  SGD: "S$",   // Singapore Dollar
  CHF: "CHF",  // Swiss Franc
  SEK: "kr",   // Swedish Krona
  NOK: "kr",   // Norwegian Krone
  DKK: "kr",   // Danish Krone
  NZD: "NZ$",  // New Zealand Dollar
  KRW: "₩",    // South Korean Won
  THB: "฿",    // Thai Baht
  MYR: "RM",   // Malaysian Ringgit
  IDR: "Rp",   // Indonesian Rupiah
  VND: "₫",    // Vietnamese Dong
  SAR: "﷼",    // Saudi Riyal
  AED: "د.إ",  // United Arab Emirates Dirham
  NGN: "₦",    // Nigerian Naira
  EGP: "£",    // Egyptian Pound
  KES: "KSh",  // Kenyan Shilling
  BDT: "৳",    // Bangladeshi Taka
  TRY: "₺",    // Turkish Lira
  HKD: "HK$",  // Hong Kong Dollar
  ILS: "₪",    // Israeli Shekel
  ARS: "$",    // Argentine Peso
  CLP: "$",    // Chilean Peso
  COP: "$",    // Colombian Peso
  PEN: "S/",   // Peruvian Sol
  PHP: "₱",    // Philippine Peso
  LKR: "Rs",   // Sri Lankan Rupee
  QAR: "﷼",    // Qatari Riyal
  KWD: "KD",   // Kuwaiti Dinar
  OMR: "﷼",    // Omani Rial
  BHD: "BD",   // Bahraini Dinar
  JMD: "J$",   // Jamaican Dollar
  ZWL: "Z$",   // Zimbabwean Dollar
  IRR: "﷼",    // Iranian Rial
  IQD: "د.ع",  // Iraqi Dinar
  JOD: "د.ا",  // Jordanian Dinar
  LBP: "ل.ل",  // Lebanese Pound
  MMK: "K",    // Myanmar Kyat
  ISK: "kr",   // Icelandic Krona
  PLN: "zł",   // Polish Zloty
  HUF: "Ft",   // Hungarian Forint
  CZK: "Kč",   // Czech Koruna
  RON: "lei",  // Romanian Leu
  BGN: "лв",   // Bulgarian Lev
  HRK: "kn",   // Croatian Kuna
  UAH: "₴",    // Ukrainian Hryvnia
  KZT: "₸",    // Kazakhstani Tenge
  UZS: "лв",   // Uzbekistani Som
  GEL: "₾",    // Georgian Lari
  AMD: "֏",    // Armenian Dram
  AZN: "₼",    // Azerbaijani Manat
  BYN: "Br",   // Belarusian Ruble
  TMT: "T",    // Turkmenistani Manat
  KGS: "с",    // Kyrgyzstani Som
  MNT: "₮",    // Mongolian Tugrik
  // Add more currencies as needed
};

const Pricing = () => {
  const [currencies, setCurrencies] = useState([]); // Available currencies
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Default selected currency
  const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate
  const [prices, setPrices] = useState({ basic: 99, pro: 149, enterprise: 199 }); // Prices in USD

  // Fetch available currencies
  const fetchCurrencies = async () => {
    try {
      const api_key="6ec1f09c44cdd1fbb203274c67475489";
      const res = await fetch(`http://api.currencylayer.com/list?access_key=${api_key}`);
      const data = await res.json();
      setCurrencies(data.currencies); // Extract only currency codes (like USD, INR)
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch exchange rate and convert price
  const fetchExchangeRate = async (currency) => {
    try {
      const apikey="Zm84WOoRBmUglB0ucbMeOA1sPZLPbiVw"
      const res = await fetch(`https://api.currencybeacon.com/v1/convert?from=USD&to=${currency}&amount=1&api_key=${apikey}`);
      const data = await res.json();
      const rate = data.response.value;
      setExchangeRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch user's location to determine the currency
  const fetchUserLocation = async () => {
    try {
      const apiKey = "478fe52c3fc9487fb0049aa136d319dc"; // Your API key for ipgeolocation.io
      const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
      const data = await res.json();
      const countryCode = data.country_code2; // Get user's country code (e.g., "US")
      const userCurrency = getCurrencyByCountryCode(countryCode) || countryCode; // Map country code to currency code
      console.log(userCurrency)
      setSelectedCurrency(userCurrency);
    } catch (error) {
      console.log("Error fetching user location", error);
    }
  };

 // Map country code to currency code
const getCurrencyByCountryCode = (countryCode) => {
  const currencyMap = {
    US: "USD",   // United States
    GB: "GBP",   // United Kingdom
    EU: "EUR",   // European Union
    IN: "INR",   // India
    PK: "PKR",   // Pakistan
    AU: "AUD",   // Australia
    CA: "CAD",   // Canada
    CN: "CNY",   // China
    JP: "JPY",   // Japan
    RU: "RUB",   // Russia
    BR: "BRL",   // Brazil
    ZA: "ZAR",   // South Africa
    MX: "MXN",   // Mexico
    SG: "SGD",   // Singapore
    CH: "CHF",   // Switzerland
    SE: "SEK",   // Sweden
    NO: "NOK",   // Norway
    DK: "DKK",   // Denmark
    NZ: "NZD",   // New Zealand
    KR: "KRW",   // South Korea
    TH: "THB",   // Thailand
    MY: "MYR",   // Malaysia
    ID: "IDR",   // Indonesia
    VN: "VND",   // Vietnam
    SA: "SAR",   // Saudi Arabia
    AE: "AED",   // United Arab Emirates
    NG: "NGN",   // Nigeria
    EG: "EGP",   // Egypt
    KE: "KES",   // Kenya
    BD: "BDT",   // Bangladesh
    TR: "TRY",   // Turkey
    HK: "HKD",   // Hong Kong
    IL: "ILS",   // Israel
    AR: "ARS",   // Argentina
    CL: "CLP",   // Chile
    CO: "COP",   // Colombia
    PE: "PEN",   // Peru
    PH: "PHP",   // Philippines
    LK: "LKR",   // Sri Lanka
    QA: "QAR",   // Qatar
    KW: "KWD",   // Kuwait
    OM: "OMR",   // Oman
    BH: "BHD",   // Bahrain
    JM: "JMD",   // Jamaica
    ZW: "ZWL",   // Zimbabwe
    IR: "IRR",   // Iran
    IQ: "IQD",   // Iraq
    JO: "JOD",   // Jordan
    LB: "LBP",   // Lebanon
    MM: "MMK",   // Myanmar
    IS: "ISK",   // Iceland
    PL: "PLN",   // Poland
    HU: "HUF",   // Hungary
    CZ: "CZK",   // Czech Republic
    RO: "RON",   // Romania
    BG: "BGN",   // Bulgaria
    HR: "HRK",   // Croatia
    UA: "UAH",   // Ukraine
    KZ: "KZT",   // Kazakhstan
    UZ: "UZS",   // Uzbekistan
    GE: "GEL",   // Georgia
    AM: "AMD",   // Armenia
    AZ: "AZN",   // Azerbaijan
    BY: "BYN",   // Belarus
    TM: "TMT",   // Turkmenistan
    KG: "KGS",   // Kyrgyzstan
    MN: "MNT",   // Mongolia
    ZW: "ZWL",   // Zimbabwe
    IR: "IRR",   // Iran
    IQ: "IQD",   // Iraq
    JO: "JOD",   // Jordan
    LB: "LBP",   // Lebanon
    MM: "MMK",   // Myanmar
    IS: "ISK",   // Iceland
    PL: "PLN",   // Poland
    HU: "HUF",   // Hungary
    CZ: "CZK",   // Czech Republic
    RO: "RON",   // Romania
    BG: "BGN",   // Bulgaria
    HR: "HRK",   // Croatia
    UA: "UAH",   // Ukraine
    KZ: "KZT",   // Kazakhstan
    UZ: "UZS",   // Uzbekistan
    GE: "GEL",   // Georgia
    AM: "AMD",   // Armenia
    AZ: "AZN",   // Azerbaijan
    BY: "BYN",   // Belarus
    TM: "TMT",   // Turkmenistan
    KG: "KGS",   // Kyrgyzstan
    MN: "MNT",   // Mongolia
    // Add more country-to-currency mappings as needed
  };
  return currencyMap[countryCode];
};


  // Get the symbol for a selected currency
  const getCurrencySymbol = (currencyCode) => {
    return currencySymbolMap[currencyCode] || currencyCode; // Fallback to currency code if symbol not found
  };

  // On component mount, fetch currencies and user location
  useEffect(() => {
    fetchCurrencies();
    fetchUserLocation();
  }, []);

  // Update exchange rate when the selected currency or location changes
  useEffect(() => {
    if (selectedCurrency !== "USD") {
      fetchExchangeRate(selectedCurrency);
    } else {
      setExchangeRate(1); // If USD is selected, no conversion needed
    }
  }, [selectedCurrency]);

  // Format price based on the selected currency and exchange rate
  const formatPrice = (price) => {
    const symbol = getCurrencySymbol(selectedCurrency);
    return symbol + (price * exchangeRate).toFixed(2);  // Combine symbol with the formatted price
  };
  

  return (
    <div className="lg:px-[117px] lg:py-[78px] pt-[20px] pl-[53px] pr-[53px] pb-[48px] bg-[#EEEDF5] flex flex-col gap-[13px] lg:gap-[19px] justify-center items-center " id="pricing">
      <div className="flex flex-col lg:gap-[31px] justify-center items-center">
        <div className="flex flex-col lg:gap-[13px] gap-[8px] justify-center items-center ">
          <h2 className="text-[#0F172A] lg:text-[56px] text-[24px] font-bold text-center">Affordable pricing plans</h2>
          <p className="text-[#6F6C90] lg:text-[21px] text-[12px] font-normal lg:leading-8">Flexible Plans Tailored to Your Goals</p>
        </div>
        <div className="flex flex-row lg:gap-[14px] gap-2 items-center">
          <p className="text-[#170F49] lg:text-[21px] lg:leading-8">How many users you have?</p>
          <span className="lg:w-[119px] lg:h-[61px] text-[#170F49] w-[53px] h-[27px] rounded-[8px] text-[12px] lg:text-[21px] font-semibold lg:leading-6 lg:rounded-[18px] border-[#D9DBE9] flex border-[1.5px] bg-white text-center items-center justify-center">10</span>
          <span className="text-[#170F49] lg:text-[21px] text-[12px] font-bold lg:leading-6">user</span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-[16px] lg:gap-[37px]">
      {/*----------------------Card 1---------------*/}
        <div className="flex flex-col py-[26px] px-[29px] rounded-[16px] gap-2 lg:gap-[21px] lg:w-[450px] w-[280px] lg:rounded-[28px] bg-white border-solid border-[#EFF0F6] border-[2px]  lg:pt-[47px] lg:pb-[56px] lg:px-[50px] ">
          <div className="flex flex-row lg:gap-[12px] gap-[12px]">
            <img src={basic} className="lg:w-[85px] w-[48px] h-[48px] lg:h-[85px]" alt="basic-plan" />
            <div className="lg:mt-2">
              <p className="mb-0 text-[#6F6C90] lg:text-[21px] text-[12px] font-medium lg:leading-6">{all_data.basic_card.subtitle}</p>
              <h2 className="lg:text-[28px] text-[#170F49] text-[16px] font-bold lg:leading-10">{all_data.basic_card.title}</h2>
            </div>
          </div>
          <div className="pricing-description">
            <p className="text-[#6F6C90] lg:text-[21px] text-[12px] font-normal lg:leading-9">{all_data.basic_card.description}</p>
          </div>
          <div className="flex flex-row justify-start items-center lg:gap-[12px]  flex-wrap">
            <h2 className="text-[#0F172A] lg:text-[63px] text-[36px] font-bold leading-[77px]">{formatPrice(prices.basic)}</h2>
            <span className="lg:text-[24px] text-[13px] text-[#6F6C90] font-medium lg:leading-6">/monthly</span>
          </div>
          <div className="flex flex-col lg:gap-[31px] gap-[17px]">
            <h2 className="text-[#170F49] lg:text-[21px] text-[12px] leading-3 lg:leading-6 font-bold">What’s included</h2>
            <div className="flex flex-col lg:gap-[25px] gap-[10px] items-start justify-center">
              <div className="flex flex-row items-start justify-start gap-[9px] lg:gap-[16px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]" alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_1}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal  lg:leading-6">{all_data.basic_card.feature_2}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_3}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.basic_card.feature_4}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-[20px] mt-[10px] w-[207px] h-[51px] rounded-[64px] items-center lg:w-[362px] lg:h-[89px] bg-[#22739C] lg:rounded-[113px]">
            <button className="text-white lg:text-[21px] text-[12px] font-bold">Get started</button>
          </div>
        </div>
        {/*-------------card 2------------*/}
        <div className="flex flex-col relative py-[26px] px-[29px] rounded-[16px] gap-2 lg:gap-[21px] lg:w-[450px] w-[280px] lg:rounded-[28px] bg-[#22739C] border-solid border-[#EFF0F6] border-[2px]  lg:pt-[47px] lg:pb-[56px] lg:px-[50px] ">
          <div className="flex flex-row lg:gap-[12px] gap-[12px]">
            <img src={basic} className="lg:w-[85px] w-[48px] h-[48px] lg:h-[85px]" alt="basic-plan" />
            <div className="lg:mt-2">
              <p className="mb-0 text-[#EFF0F6] lg:text-[21px]  text-[12px] font-medium lg:leading-6">{all_data.pro_card.subtitle}</p>
              <h2 className="lg:text-[28px] text-white text-[16px] font-bold lg:leading-10">{all_data.pro_card.title}</h2>
            </div>
          </div>
          <div className="pricing-description">
            <p className=" text-[#D9DBE9] lg:text-[21px] text-[12px] font-normal lg:leading-9">{all_data.pro_card.description}</p>
          </div>
          <div className="flex flex-row justify-start items-center lg:gap-[12px]  flex-wrap">
            <h2 className="text-white lg:text-[63px] text-[36px] font-bold leading-[77px]">{formatPrice(prices.pro)}</h2>
            <span className="lg:text-[24px] text-[13px] text-[#D9DBE9] font-medium lg:leading-6">/monthly</span>
          </div>
          <div className="flex flex-col lg:gap-[31px] gap-[17px]">
            <h2 className="text-white lg:text-[21px] text-[12px] leading-3 lg:leading-6 font-bold">What’s included</h2>
            <div className="flex flex-col lg:gap-[25px] gap-[10px] items-start justify-center">
              <div className="flex flex-row items-start justify-start gap-[9px] lg:gap-[16px] ">
                <img src={all_data.pro_card.check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]" alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#D9DBE9] font-normal lg:leading-6">{all_data.pro_card.feature_1}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={all_data.pro_card.check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#D9DBE9] font-normal  lg:leading-6">{all_data.pro_card.feature_2}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={all_data.pro_card.check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#D9DBE9] font-normal lg:leading-6">{all_data.pro_card.feature_3}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={all_data.pro_card.check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#D9DBE9] font-normal lg:leading-6">{all_data.pro_card.feature_4}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-[20px] mt-[10px] w-[207px] h-[51px] rounded-[64px] items-center lg:w-[362px] lg:h-[89px] bg-white lg:rounded-[113px]">
            <button className="text-[#22739C] lg:text-[21px] text-[12px] font-bold">Get started</button>
          </div>
          <p className="lg:w-[115px]  bg-bg-white-opacity-20 lg:h-[47px] absolute lg:top-[27px] lg:right-[36px] flex justify-center text-white items-center rounded-[12px]">Popular</p>
        </div>
        
        {/*------------------------card 3 -------------------*/}
        <div className="flex flex-col py-[26px] px-[29px] rounded-[16px] gap-2 lg:gap-[21px] lg:w-[450px] w-[280px] lg:rounded-[28px] bg-white border-solid border-[#EFF0F6] border-[2px]  lg:pt-[47px] lg:pb-[56px] lg:px-[50px] ">
          <div className="flex flex-row lg:gap-[12px] gap-[12px]">
            <img src={basic} className="lg:w-[85px] w-[48px] h-[48px] lg:h-[85px]" alt="basic-plan" />
            <div className="lg:mt-2">
              <p className="mb-0 text-[#6F6C90] lg:text-[21px] text-[12px] font-medium lg:leading-6">{all_data.enterprise_card.subtitle}</p>
              <h2 className="lg:text-[28px] text-[#170F49] text-[16px] font-bold lg:leading-10">{all_data.enterprise_card.title}</h2>
            </div>
          </div>
          <div className="pricing-description">
            <p className="text-[#6F6C90] lg:text-[21px] text-[12px] font-normal lg:leading-9">{all_data.enterprise_card.description}</p>
          </div>
          <div className="flex flex-row justify-start items-center lg:gap-[12px]  flex-wrap">
            <h2 className="text-[#0F172A] lg:text-[63px] text-[36px] font-bold leading-[77px]">{formatPrice(prices.enterprise)}</h2>
            <span className="lg:text-[24px] text-[13px] text-[#6F6C90] font-medium lg:leading-6">/monthly</span>
          </div>
          <div className="flex flex-col lg:gap-[31px] gap-[17px]">
            <h2 className="text-[#170F49] lg:text-[21px] text-[12px] leading-3 lg:leading-6 font-bold">What’s included</h2>
            <div className="flex flex-col lg:gap-[25px] gap-[10px] items-start justify-center">
              <div className="flex flex-row items-start justify-start gap-[9px] lg:gap-[16px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]" alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_1}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal  lg:leading-6">{all_data.enterprise_card.feature_2}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_3}</p>
              </div>
              <div className="flex flex-row items-start justify-start lg:gap-[16px] gap-[9px] ">
                <img src={check_circle} className="w-[18px] lg:w-[31px] lg:h-[31px] h-[18px]"  alt="" />
                <p className="mb-0 lg:text-[21px] text-[12px] text-[#170F49] font-normal lg:leading-6">{all_data.enterprise_card.feature_4}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-[20px] mt-[10px] w-[207px] h-[51px] rounded-[64px] items-center lg:w-[362px] lg:h-[89px] bg-[#22739C] lg:rounded-[113px]">
            <button className="text-white lg:text-[21px] text-[12px] font-bold">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
