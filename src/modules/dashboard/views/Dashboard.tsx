import IndexAdd from "@/modules/app/components/indexAdd/indexAdd";
import Navbar from "@/modules/app/components/navbar/navbar";
import ResultTable from "@/modules/app/components/result/resultTable";
import Searchbar from "@/modules/app/components/searchbar/searchbar";
import React from "react";

export default function Dashboard(){

    return(
        <div>
            <Navbar/>
            <IndexAdd/>
           
        </div>
    )
}