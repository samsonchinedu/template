import React, { useState } from "react";
import { location } from '@/utils/data';
import styles from "./selection.module.scss";
import { FaChevronDown } from "react-icons/fa";

  const SelectLocation = () => {
    const [selectCountry, setSelectCountry] = useState<string>('');
    const [selectState, setSelectState] = useState<string>('');
    const [state, setState] = useState<string[]>([]);
    const [lgas, setLgas] = useState<string[]>([]);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const country = event.target.value;
        console.log(country);
        
        setSelectCountry(country);
        setSelectState('');
        setLgas([]);
        if (country && location[country]) {
          setState(Object.keys(location[country]));
        } else {
          setState([]);
        }
      };

      const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const state = event.target.value;
        setSelectState(state);
        if (state && selectCountry && location[selectCountry][state]) {
          setLgas(location[selectCountry][state]);
        } else {
          setLgas([]);
        }
      };

      return (
        <div className={styles["select-container"]}>
          <select 
            id="country" 
            className={styles["select-container-select"]}
            value={selectCountry} 
            onChange={handleCountryChange}>
            <option value="">Country</option>
            {Object.keys(location).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
            {/* <FaChevronDown /> */}
          </select>
    
          <select
            id="state"
            className={styles["select-container-select"]}
            value={selectState}
            onChange={handleStateChange}
            disabled={!selectCountry}
          >
            <option value="">State</option>
            {state.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
    
          <select 
            id="lga"
            className={styles["select-container-select"]}
            disabled={!selectState}>
            <option value="">Local Govt Area</option>
            {lgas.map((lga) => (
              <option key={lga} value={lga}>{lga}</option>
            ))}
          </select>
        </div>
      );
  }

  export default SelectLocation