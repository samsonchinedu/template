"use client"

import React, { useState } from 'react'
import styles from "./listProperty.module.scss"
// import Select from "@/component/select/page"
import Navbar from '@/component/navbar/page'
import Header from '@/component/header/page'
import Label from '@/component/label/page'
import Input from '@/component/input/page'
import items from '@/utils/data.json'
import SelectLocation from '@/component/selectLocation/page'
import FileUplaod from '@/component/fileUpload/page'
import Upload from '@/component/fileload/page'



const ListProperty = () => {

 

  return (
    <div className={styles["list-property"]}>
        <Navbar 
            icon="arrow" 
            icons="notification" 
            defaultImage="vector" 
        />
        <div className={styles["list-property-details"]}>
            <Header 
            text="List a Property" 
            small="List properties in a snap. Quick, easy, and effective!"
            />
            <form className={styles["list-property-details-form"]}>
                <div className={styles["list-property-details-form-input"]}>
                    <Label text="Property Name" />
                    <Input
                        type="text"
                        placeholder="Enter name of Property"  
                    />
                </div>
                <div className={styles["list-property-details-form-input"]}>
                    <Label text="Property Description" />
                    <Input
                        type="text"
                        placeholder="Describe the property"  
                    />
                </div>
                <div className={styles["list-property-details-form-input"]}>
                    <Label option="options" text="Cost of Property" />
                    <SelectLocation />
                </div>
                <div className={styles["list-property-details-form-input"]}>
                    <Label text="Address" />
                    <Input
                        type="text"
                        placeholder="Enter Your Address"  
                    />
                </div>
                <div className={styles["list-property-details-form-input"]}>
                    <Label text="Coodinates(Long/Lat)" />
                    <Input
                        type="text"
                        placeholder="Enter the Coodinates"  
                    />
                </div>
                <div className={styles["list-property-details-form-input"]}>
                    <Label text="Cost of Property" />
                    <Input
                        type="text"
                        placeholder="Enter the price of Property"  
                    />
                </div>
                <div className={styles["list-property-details-form-input"]}>
                    <Label text="Installmental Payment Option" />
                    <select 
                        id="installmental"
                        className={styles["list-property-details-form-input-select"]}
                    >
                        <option value="">3 Installment Payment</option>
                        <option value="1 installment payment">1 Installment Payment</option>
                        <option value="2 installment payment">2 Installment Payment</option>
                        <option value="3 installment payment">3 Installment Payment</option>
                        <option value="4 installment payment">4 Installment Payment</option>
                        <option value="5 installment payment">5 Installment Payment</option>
                    </select>
                </div>
                <div className={styles["list-property-details-form-file"]}>
                    <Label text="Upload Featured Property Image" />
                    {/* <Upload /> */}
                    <FileUplaod />
                </div>
                <div className={styles["list-property-details-form-file"]}>
                    <Label text="Upload a Property Layout" />
                    {/* <Upload /> */}
                    <FileUplaod />
                </div>
                <div className={styles["list-property-details-form-file"]}>
                    <Label text="Upload a Property Video" />
                    {/* <Upload /> */}
                    <FileUplaod />
                </div>
                <div className={styles["list-property-details-form-inputs"]}>
                    <Label text="Add YouTube Link to Property Video" />
                    <Input
                        type="text"
                        placeholder=" https://youtu.be/rVlhMGQgDkY"  
                    />
                </div>
                <div className={styles["list-property-details-form-inputs"]}>
                    <Label text="Property Type" />
                    <select 
                        id="type"
                        className={styles["list-property-details-form-input-select"]}
                    >
                        <option value="">Land</option>
                        <option value="land">Land</option>
                        <option value="2 installment payment">Estate</option>
                        <option value="3 installment payment">House</option>
                    </select>
                </div>

                <Header 
                    text="Amenities" 
                    btnText="Add New Amenities" 
                    icon="orangePlus"
                    right="amenities"
                    active="isActive"
                />

                <div className={styles["list-property-details-form-inputd"]}>
                    <Input
                        type="checkbox"
                        checkbox="checkbox"
                        placeholder="Enter the price of Property"  
                    />
                    <Label text="I Confirm that I uploaded valid  Property Details" confirm="confirm" />
                </div>

                <button className={styles["btn-submit"]} type='submit'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ListProperty

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/data');
//     const data = await res.json();
  
//     return {
//       props: {
//         data
//       }
//     };
//   }